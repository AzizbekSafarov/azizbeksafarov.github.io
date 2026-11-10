"""Keep the `?v=` cache keys in the HTML starters equal to the content they point at.

A stale key lets a browser or host keep serving an old script next to new markup. The key is the
first ten hex digits of the SHA-256 of the LF-normalised file, the same rule the generators used.
Short hand-written versions such as `?v=6` are left alone.
"""
import re
from hashlib import sha256
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SLUGS = ('samar', 'forma', 'orbita', 'nashr', 'hisob', 'ziyo', 'meros', 'si')
REFERENCE = re.compile(r'(?P<name>[\w./-]+\.(?:css|js|svg))\?v=(?P<key>[0-9a-f]{8,})')


def _key(path):
    return sha256(path.read_bytes().replace(b'\r\n', b'\n')).hexdigest()[:10]


def _scan(folder, write):
    """Leaf files first: a script that imports a module must be rewritten before the page that loads it."""
    stale = []
    ordered = sorted(folder.glob('*.js'), key=lambda p: p.name != 'app.js', reverse=True)
    ordered = [p for p in ordered if '.test.' not in p.name and p.name != 'app.js'] + [folder / 'app.js', folder / 'index.html']
    for path in ordered:
        if not path.is_file():
            continue
        text = path.read_text(encoding='utf-8')

        def replace(match):
            target = (path.parent / match['name']).resolve()
            if not target.is_file() or folder.resolve() not in target.parents:
                return match[0]
            key = _key(target)
            if key != match['key']:
                stale.append(f'{folder.name}/{path.name} -> {match["name"]}')
            return f'{match["name"]}?v={key}'

        updated = REFERENCE.sub(replace, text)
        if write and updated != text:
            path.write_text(updated, encoding='utf-8', newline='\n')
    return stale


def refresh():
    return [item for slug in SLUGS for item in _scan(ROOT / f'{slug}-site', True)]


def stale():
    return [item for slug in SLUGS for item in _scan(ROOT / f'{slug}-site', False)]


if __name__ == '__main__':
    changed = refresh()
    print(f'Refreshed {len(changed)} cache keys.' if changed else 'Cache keys already current.')

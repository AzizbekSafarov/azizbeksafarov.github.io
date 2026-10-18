"""Scan public text and nested downloads without printing candidate secret values."""
from io import BytesIO
from pathlib import Path
import json
import re
import subprocess
import zipfile

SITE = Path(__file__).resolve().parent.parent
PATTERNS = {
    'provider credential': r'(?:gsk_[A-Za-z0-9]{25,}|AQ\.[A-Za-z0-9_-]{30,}|AIza[A-Za-z0-9_-]{25,})',
    'bot credential': r'\b\d{6,12}:[A-Za-z0-9_-]{30,}',
    'private key': r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
    # Exclude decimal fractions in the vendored Material color matrices.
    'card-number candidate': r'(?<![\w.])\d{16}(?!\w)',
}
TEXT = {'.md', '.json', '.html', '.js', '.mjs', '.jsx', '.css', '.txt', '.py', '.yml', '.yaml', '.env', '.example'}


def verify():
    names = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=SITE).decode().split('\0')
    findings, counts = [], {'text_entries': 0, 'archives': 0}

    def scan(name, data, depth=0):
        if name.endswith('.zip') and depth < 2:
            with zipfile.ZipFile(BytesIO(data)) as archive:
                assert archive.testzip() is None, f'Corrupt archive: {name}'
                counts['archives'] += 1
                for entry in archive.namelist():
                    scan(name+'!'+entry, archive.read(entry), depth+1)
            return
        if Path(name).suffix not in TEXT:
            return
        counts['text_entries'] += 1
        value = data.decode('utf-8', errors='replace')
        for kind, pattern in PATTERNS.items():
            if re.search(pattern, value):
                findings.append({'file': name, 'kind': kind})

    for name in sorted(set(filter(None, names))):
        path = SITE/name
        if path.is_file():
            if path.name == '.env' or path.name.startswith('.env.') and path.name != '.env.example':
                findings.append({'file': name, 'kind': 'real environment file'})
            scan(name, path.read_bytes())
    result = {**counts, 'findings': findings, 'scope': 'Recognizable secret patterns in current public files and nested ZIPs; not a security certification.'}
    print(json.dumps(result, ensure_ascii=False, indent=2))
    assert not findings, 'Review candidate files privately; never print secret values.'
    return result


if __name__ == '__main__':
    verify()

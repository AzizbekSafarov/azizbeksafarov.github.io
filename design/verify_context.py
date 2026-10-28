"""Check portable context links and reading ranges, including actual ZIP contents.

Offline structural checks only: no claim that an AI read the documents or that
external providers are currently available.
"""
from hashlib import sha256
from pathlib import Path, PurePosixPath
from urllib.parse import unquote, urlsplit
import json
import posixpath
import re
import zipfile

SITE = Path(__file__).resolve().parent.parent
RESEARCH = SITE.parent / 'internet-kontekst'
HOST = 'azizbeksafarov.github.io'


def links(text):
    # Source transcripts and example snippets inside fences are not authored links.
    fence = None
    for line in text.splitlines():
        mark = re.match(r'^\s*(`{3,}|~{3,})', line)
        if mark:
            if fence is None:
                fence = mark[1]
            elif mark[1][0] == fence[0] and len(mark[1]) >= len(fence):
                fence = None
            continue
        if fence is None:
            yield from re.findall(r'(?<!!)\[[^\]]*\]\(([^\s)]+)\)', line)


def published_target(url):
    parts = urlsplit(url)
    if parts.netloc and parts.netloc.lower() != HOST:
        return None
    if parts.scheme and not parts.netloc:
        return None
    if not parts.path:
        return None
    path = unquote(parts.path)
    if not (parts.netloc or path.startswith('/')):
        return None
    if path.startswith('/ustoz/'):
        return RESEARCH / path[len('/ustoz/'):]
    return SITE / path.lstrip('/')


def exists(target):
    if target.is_dir():
        target = target / 'index.html'
    return target.is_file()


def verify():
    boundary = json.loads((SITE/'design/handoff/task-boundary.json').read_text(encoding='utf-8'))
    assert boundary['current_ticket'] is None and boundary['authoritative_ticket_supplied'] is False
    assert boundary['current_stage'] is None and boundary['current_build_duration_minutes'] is None
    assert boundary['source_example']['pdf_page'] == 11
    assert not (RESEARCH/'transcripts/initial-brief-20261018.md').exists(), 'Retired instruction copy must not reappear'
    if RESEARCH.is_dir():
        workflow = (RESEARCH/'02-WORKFLOW.md').read_text(encoding='utf-8')
        assert '10–13-oktabr mashq jadvali' not in workflow
        assert '120 daqiqalik mashq rejimi' not in workflow
        assert not re.search(r'^\d+ daqiqa qoldi\.', workflow, re.M), 'Fixed old countdown prompt in reusable workflow'
    full_regulations = (SITE/'design/handoff/regulations.md').read_text(encoding='utf-8')
    assert 'MANBA IZOHI — JORIY BILET EMAS.' in full_regulations
    assert 'Bilet 001' in full_regulations, 'Do not delete original source text to pass a cleanup scan'
    count = 0
    for root in (SITE, RESEARCH):
        if not root.is_dir():
            continue
        for source in root.rglob('*.md'):
            if any(part in {'.git', 'node_modules', '__pycache__', 'files'} for part in source.relative_to(root).parts):
                continue
            for url in links(source.read_text(encoding='utf-8-sig')):
                parts = urlsplit(url)
                if parts.scheme or parts.netloc or parts.path.startswith('/'):
                    target = published_target(url)
                elif parts.path:
                    target = source.parent / unquote(parts.path)
                else:
                    continue
                if target is not None:
                    assert exists(target), f'{source.relative_to(root)}: missing Markdown target {url}'
                    count += 1

    raw = (SITE/'tayyorgarlik/full-context.md').read_bytes()
    plan = json.loads((SITE/'tayyorgarlik/reading-plan.json').read_text(encoding='utf-8'))
    assert sha256(raw).hexdigest() == plan['full_context_sha256']
    assert len(raw) == plan['full_context_bytes']
    lines = raw.decode('utf-8').splitlines(keepends=True)
    for entry in plan['documents']:
        section = ''.join(lines[entry['start_line']-1:entry['end_line']]).encode('utf-8')
        assert len(section) == entry['bytes'], f'Wrong reading range size: {entry["package_path"]}'
        assert sha256(section).hexdigest() == entry['sha256'], f'Wrong reading range hash: {entry["package_path"]}'
        source = published_target(entry['source_url']).read_bytes().replace(b'\r\n', b'\n')
        assert section == source, f'Reading range differs from actual source: {entry["package_path"]}'

    catalog = json.loads((SITE/'design/catalog.json').read_text(encoding='utf-8'))['templates']
    for template in catalog:
        with zipfile.ZipFile(SITE/'design'/template['slug']/'source.zip') as archive:
            names = set(archive.namelist())
            for name in names:
                if not name.endswith('.md'):
                    continue
                for url in links(archive.read(name).decode('utf-8-sig')):
                    parts = urlsplit(url)
                    if parts.scheme or parts.netloc or parts.path.startswith('/'):
                        target = published_target(url)
                        if target is not None:
                            assert exists(target), f'{template["slug"]}!{name}: missing published link {url}'
                            count += 1
                    elif parts.path:
                        target = posixpath.normpath(posixpath.join(str(PurePosixPath(name).parent), unquote(parts.path)))
                        assert target in names or target.rstrip('/')+'/index.html' in names, f'{template["slug"]}!{name}: missing package link {url}'
                        count += 1
            package_plan = json.loads(archive.read('READING-PLAN.json'))
            assert [entry['path'] for entry in package_plan['documents'][:2]] == ['CURRENT-TASK.md', 'HANDOFF.md']
            assert json.loads(archive.read('TASK-BOUNDARY.json')) == boundary
            assert 'TASK-BOUNDARY.json' in {entry['path'] for entry in package_plan['documents']}
            for entry in package_plan['documents']:
                data = archive.read(entry['path'])
                assert len(data) == entry['bytes'] and sha256(data).hexdigest() == entry['sha256']
            assert '- Biletning aynan matni: hali berilmagan.' in archive.read('CURRENT-TASK.md').decode('utf-8')
            assert '- Bajarilgan talablar: hali kiritilmagan.' in archive.read('HANDOFF.md').decode('utf-8')
            assert 'JORIY BILET BU PAKETDA YO‘Q.' in archive.read('AI-BRIEF.md').decode('utf-8')
            assert 'TASK-BOUNDARY.json' in archive.read('START-HERE.md').decode('utf-8')
            assert 'No actual ticket is supplied' in archive.read('AGENTS.md').decode('utf-8')
            for name in ('FULL-COMPETITION-CONTEXT.md', 'REGULATIONS.md'):
                value = archive.read(name).decode('utf-8')
                assert 'MANBA IZOHI — JORIY BILET EMAS.' in value
                assert '## Fayl: transcripts/initial-brief-20261018.md' not in value
            assert archive.read('REGULATIONS.md') == (SITE/'design/handoff/regulations.md').read_bytes()

    with zipfile.ZipFile(SITE/'design/kit.zip') as library:
        assert json.loads(library.read('TASK-BOUNDARY.json')) == boundary
        assert 'TASK-BOUNDARY.json' in {entry['path'] for entry in json.loads(library.read('READING-PLAN.json'))['documents']}
        assert 'REGULATIONS.md' in library.namelist() and 'CONTEXT-STATUS.md' in library.namelist()
        assert library.read('REGULATIONS.md') == library.read('competition/REGULATIONS.md')
        assert library.read('CONTEXT-STATUS.md') == library.read('competition/CONTEXT-STATUS.md')
        assert 'Umumiy kit ildizida preview server yo‘q' in library.read('index.html').decode('utf-8')

    evidence = json.loads((SITE/'api/verification.json').read_text(encoding='utf-8'))
    assert evidence['tested_on'] == '2026-10-18', 'Document review must not silently redate old API probes'
    assert evidence['live_connectivity_retested'] is False
    print(f'PASS: {count} context links, exact reading slices, {len(catalog)} ZIP reading maps and unfilled ticket templates. No live-provider assertion.')


if __name__ == '__main__':
    verify()

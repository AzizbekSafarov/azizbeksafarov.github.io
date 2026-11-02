"""Verify links, archive integrity and portable runtime assets without a browser."""
from pathlib import Path, PurePosixPath
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from hashlib import sha256
from io import BytesIO
import json
import re
import entry_text
import zipfile

ROOT=Path(__file__).resolve().parent
SITE_ROOT=ROOT.parent

class References(HTMLParser):
    def __init__(self):super().__init__();self.refs=[]
    def handle_starttag(self,tag,attrs):
        for key,value in attrs:
            if key in ('href','src') and value:self.refs.append((tag,key,value))

def check_links(path):
    parser=References();parser.feed(path.read_text(encoding='utf-8-sig'))
    for tag,key,value in parser.refs:
        parts=urlsplit(value)
        if parts.scheme or parts.netloc or not parts.path:continue
        if parts.path.startswith('/ustoz/'):continue # Separate, independently deployed research repo.
        target=(SITE_ROOT/unquote(parts.path).lstrip('/')) if parts.path.startswith('/') else path.parent/unquote(parts.path)
        if target.is_dir():target=target/'index.html'
        assert target.is_file(),f'{path.relative_to(SITE_ROOT)}: broken {value}'

def check_runtime(z,root):
    names=set(z.namelist())
    for name in names:
        if not name.startswith(root+'/') or not name.endswith(('.html','.css')):continue
        data=z.read(name).decode('utf-8-sig');refs=[]
        if name.endswith('.html'):
            parser=References();parser.feed(data)
            refs=[value for tag,key,value in parser.refs if key=='src' or (tag=='link' and key=='href')]
        else:
            refs=re.findall(r'url\([\s\'\"]*([^\s\'\")]+)',data)
        for value in refs:
            parts=urlsplit(value)
            if parts.scheme or parts.netloc or not parts.path:continue
            import posixpath
            target=posixpath.normpath(posixpath.join(posixpath.dirname(name),unquote(parts.path)))
            assert target in names,f'{name}: missing runtime resource {value}'

def check_design_complete(z,manifest,brief,slug):
    """A text-only reader must still get the whole design: every resource the
    source pages use is either in the readable export or in the asset table."""
    import re,posixpath
    names=set(z.namelist())
    readable={'site/'+e['path'] for e in manifest['readable_source_files']}
    listed={'site/'+m for m in re.findall(r'^\| `([^`]+)` \|',brief,re.M)}
    used=set()
    for name in names:
        if not name.startswith('site/') or name.startswith('site/dist/') or not name.endswith(('.html','.css')):continue
        data=z.read(name).decode('utf-8-sig')
        if name.endswith('.html'):
            parser=References();parser.feed(data)
            refs=[value for tag,key,value in parser.refs if key=='src' or (tag=='link' and key=='href')]
        else:
            refs=re.findall(r'url\([\s\'\"]*([^\s\'\")]+)',data)+re.findall(r'@import\s+[\'\"]([^\'\"]+)',data)
        for value in refs:
            parts=urlsplit(value)
            if parts.scheme or parts.netloc or not parts.path:continue
            base='site' if parts.path.startswith('/') else posixpath.dirname(name)
            target=posixpath.normpath(posixpath.join(base,unquote(parts.path).lstrip('/')))
            if target in names:used.add(target)
    for target in used:
        assert target in readable or target in listed,f'{slug}: {target} is used by the design but neither readable nor listed as an asset'
    for rel in listed:
        assert rel in names,f'{slug}: listed asset missing from ZIP {rel}'
    for url in re.findall(r'\[yuklash\]\((https://azizbeksafarov\.github\.io/[^)]+)\)',brief):
        assert (SITE_ROOT/url.split('.io/',1)[1]).is_file(),f'{slug}: asset link has no published file {url}'

def check_text_rebuild(z,folder,slug):
    """Rebuild site/ from source.md plus its asset links alone; it must match the ZIP."""
    import re
    md=(folder/'source.md').read_text(encoding='utf-8')
    files={m[1]:m[3].encode() for m in re.finditer(r'^## site/(\S+)\n\n(`{3,})[a-z]*\n(.*?)\n\2\n',md,re.S|re.M)}
    for rel,url in re.findall(r'^\| `([^`]+)` \| [^|]+ \| \[yuklash\]\((https://azizbeksafarov\.github\.io/[^)]+)\) \|',md,re.M):
        files[rel]=(SITE_ROOT/url.split('.io/',1)[1]).read_bytes()
    assert files,f'{slug}: source.md has no files'
    for rel,data in files.items():
        assert data.replace(b'\r\n',b'\n').rstrip()==z.read('site/'+rel).replace(b'\r\n',b'\n').rstrip(),f'{slug}: text rebuild differs for {rel}'

def check_zaxira(z):
    # Every package must carry the current weak-AI kit unchanged, with its runtime resources.
    from build_zaxira import KIT, portable
    names=set(z.namelist())
    expected={'ZAXIRA/'+n:portable(KIT/n) for n in ('ZAXIRA.md','CODEX.md','PROMPTLAR.md','JONLI-OZGARISH.md','HIMOYA.md')}
    expected.update({'ZAXIRA/skelet/'+p.relative_to(KIT/'skelet').as_posix():portable(p) for p in (KIT/'skelet').rglob('*') if p.is_file()})
    assert {n for n in names if n.startswith('ZAXIRA/')}==set(expected),'Stale or missing ZAXIRA files'
    for name,data in expected.items():assert z.read(name)==data,f'Stale {name}'
    check_runtime(z,'ZAXIRA/skelet')

def check_package(z):
    paths=z.namelist()
    assert len(paths)==len({p.casefold() for p in paths}),'Duplicate/case-colliding archive paths'
    package=json.loads(z.read('PACKAGE-MANIFEST.json').decode('utf-8'))
    assert package['schema_version']==1 and package['self_excluded']=='PACKAGE-MANIFEST.json'
    assert set(paths)=={x['path'] for x in package['files']}|{'PACKAGE-MANIFEST.json'}
    for entry in package['files']:
        data=z.read(entry['path'])
        assert len(data)==entry['bytes'] and sha256(data).hexdigest()==entry['sha256']
        if Path(entry['path']).suffix in {'.md','.json','.html','.txt','.js','.jsx','.mjs','.css','.py'}:
            data.decode('utf-8-sig') # Strictly reject damaged text; binary fonts/images are separate.

def verify():
    from build_handoff import CONTEXT_FILES, portable_bytes
    from verify_clean import verify as verify_current_only
    verify_current_only()
    catalog=json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))['templates']
    archived=[]
    policy=json.loads((ROOT/'curation.json').read_text(encoding='utf-8'))
    assert [t['id'] for t in catalog]==policy['featured']
    assert not (ROOT/'archive').exists()
    for slug in ('kasblab','orbit','pulse','qadam','lola','spark','city','pulseboard','open-city'):assert not (ROOT/slug).exists(),slug
    expected=len(json.loads((ROOT/'templates.json').read_text(encoding='utf-8')))
    assert len(catalog)+len(archived)==expected and len({t['slug'] for t in catalog+archived})==expected
    for template in catalog+archived:
        folder=ROOT/template['slug'];manifest=json.loads((folder/'manifest.json').read_text(encoding='utf-8'));archive=(folder/'source.zip').read_bytes()
        brief=(folder/'ai.md').read_text(encoding='utf-8')
        assert entry_text.ZIP_ENTRY_UZ in brief and entry_text.FACTS_UZ in brief, f'{template["slug"]}: brief lost the shared entry text'
        assert sha256(archive).hexdigest()==manifest['archive_sha256']
        assert len(archive)==manifest['archive_bytes']
        assert 0<len((folder/'ai.md').read_bytes())<24000,'Starter brief should link to shared context rather than embed the whole research archive'
        with zipfile.ZipFile(BytesIO(archive)) as z:
            assert z.testzip() is None
            check_package(z)
            readme=z.read('README.md').decode('utf-8')
            assert 'node verify-package.mjs' in readme and 'node serve.mjs' in readme
            assert '9 HTML namuna' not in readme and 'shared.js' not in readme
            assert 'localStorage ZIP bilan ko‘chmaydi' in readme
            for match in re.findall(r'`(site/[^`\s]+)`',readme):
                assert match in z.namelist() or any(n.startswith(match.rstrip('/')+'/') for n in z.namelist()), (template['slug'],match)
            assert 'START-HERE.md' in z.namelist() and 'verify-package.mjs' in z.namelist()
            for entry in manifest['files']:
                name=entry['path']
                assert not PurePosixPath(name).is_absolute() and '..' not in PurePosixPath(name).parts
                assert 'node_modules/' not in name and '.git/' not in name and not name.endswith('.env')
                data=z.read(name)
                assert len(data)==entry['bytes'] and sha256(data).hexdigest()==entry['sha256']
            assert set(z.namelist())=={x['path'] for x in manifest['files']}
            for name in ('AGENTS.md','CLAUDE.md','GEMINI.md','CURRENT-TASK.md','HANDOFF.md','AI-BRIEF.md','CHECKLIST.md','COMPETITION.md','REGULATIONS.md','README.md','serve.mjs','kit.json'):assert name in z.namelist()
            assert z.read('AI-BRIEF.md')==(folder/'ai.md').read_bytes()
            assert z.read('LIBRARY-AUDIT.md')==(ROOT/'AUDIT-20261018.md').read_bytes()
            assert z.read('REGULATIONS.md')==(ROOT/'handoff/regulations.md').read_bytes()
            assert z.read('CONTEXT-STATUS.md')==(ROOT/'handoff/context-status.md').read_bytes()
            for name, source in CONTEXT_FILES.items():
                assert z.read(name)==portable_bytes(source,(SITE_ROOT/source).read_bytes()),f'{template["slug"]}: stale context {name}'
            # A self-consistent old manifest must not hide stale downloadable runtime code.
            base=ROOT/('material-expressive' if template['slug']=='bloom' else template['slug']+'-site')
            for entry in manifest['files']:
                if entry['path'].startswith('site/'):
                    name=entry['path'][5:]
                    assert z.read(entry['path'])==portable_bytes(name,(base/name).read_bytes()),f'{template["slug"]}: stale runtime {name}'
            for entry in manifest['readable_source_files']:
                actual=(folder/'files'/(entry['path']+'.txt')).read_bytes()
                assert actual==z.read('site/'+entry['path']) and sha256(actual).hexdigest()==entry['sha256']
            kit=json.loads(z.read('kit.json'));assert kit['serve_root']+'/'+kit['entry'] in z.namelist()
            check_runtime(z,kit['serve_root'])
            check_zaxira(z)
            check_design_complete(z,manifest,brief,template['slug'])
            check_text_rebuild(z,folder,template['slug'])
            # Guidance a new AI reads first must not send it to library generators that a competition copy lacks.
            for doc in ('AGENTS.md','AI-BRIEF.md','START-HERE.md','README.md','site/README.md','site/AGENTS.md'):
                if doc in z.namelist():
                    text=z.read(doc).decode('utf-8')
                    for name in ('identities_v4.py','diversity_v3.py','build_collection.py','build_refined.py','build_handoff.py','identity-styles/'):
                        assert name not in text,f"{template['slug']}!{doc}: names absent generator {name}"
            for ref in set(re.findall(r'`([A-Za-z0-9_./-]+\.(?:md|json|mjs|js))`',z.read('AGENTS.md').decode())):
                if '*' in ref or ref.startswith(('site/','src/')) and '/' in ref and not ref.endswith('.md'):continue
                assert ref in z.namelist() or ref.rstrip('/')+'/' in {n[:len(ref)+1] for n in z.namelist()},f"{template['slug']}: AGENTS.md names missing file {ref}"
            assert 'ZAXIRA/ZAXIRA.md' in z.read('START-HERE.md').decode() and 'ZAXIRA/CODEX.md' in z.read('AGENTS.md').decode()
            assert z.read('CLAUDE.md')==z.read('GEMINI.md')==entry_text.CLAUDE.encode(),'Tool entry files must defer to AGENTS.md'
        for name in ('index.html','source.html'):check_links(folder/name)
        check_links(SITE_ROOT/'dezayn'/template['slug']/'index.html')
    check_links(ROOT/'start/index.html');check_links(ROOT/'index.html')
    check_links(SITE_ROOT/'index.html');check_links(ROOT/'standart/index.html')
    with zipfile.ZipFile(ROOT/'kit.zip') as z:
        assert z.testzip() is None
        check_package(z)
        assert 'competition/FULL-CONTEXT.md' in z.namelist()
        check_zaxira(z)
        assert z.read('competition/REGULATIONS.md')==(ROOT/'handoff/regulations.md').read_bytes()
        assert z.read('LIBRARY-AUDIT.md')==(ROOT/'AUDIT-20261018.md').read_bytes()
        for name, source in CONTEXT_FILES.items():
            assert z.read(name)==portable_bytes(source,(SITE_ROOT/source).read_bytes()),f'kit: stale context {name}'
        for template in catalog:assert z.read(template['slug']+'/source.zip')==(ROOT/template['slug']/'source.zip').read_bytes()
        for template in archived:assert template['slug']+'/source.zip' not in z.namelist()
    for path in ('index.html','design/standart/index.html'):
        # /ustoz/ is a separate Pages repository, not a missing local route.
        html=(SITE_ROOT/path).read_text(encoding='utf-8')
        for template in archived:assert f'href="/design/{template["file"]}"' not in html
    from verify_context import verify as verify_context_links
    verify_context_links()
    print(f'PASS: {len(catalog)} active briefs, SHA-256 manifests, portable assets; curated kit excludes retired templates and includes complete competition text.')

if __name__=='__main__':verify()

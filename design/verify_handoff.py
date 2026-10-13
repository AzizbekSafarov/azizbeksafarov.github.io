"""Verify links, archive integrity and portable runtime assets without a browser."""
from pathlib import Path, PurePosixPath
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from hashlib import sha256
from io import BytesIO
import json
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
            import re
            refs=re.findall(r'url\([\s\'\"]*([^\s\'\")]+)',data)
        for value in refs:
            parts=urlsplit(value)
            if parts.scheme or parts.netloc or not parts.path:continue
            import posixpath
            target=posixpath.normpath(posixpath.join(posixpath.dirname(name),unquote(parts.path)))
            assert target in names,f'{name}: missing runtime resource {value}'

def verify():
    catalog=json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))['templates']
    assert len(catalog)==10 and len({t['slug'] for t in catalog})==10
    for template in catalog:
        folder=ROOT/template['slug'];manifest=json.loads((folder/'manifest.json').read_text(encoding='utf-8'));archive=(folder/'source.zip').read_bytes()
        assert sha256(archive).hexdigest()==manifest['archive_sha256']
        assert len(archive)==manifest['archive_bytes']
        assert len((folder/'ai.md').read_bytes())<12000,'Starter brief should stay focused'
        with zipfile.ZipFile(BytesIO(archive)) as z:
            assert z.testzip() is None
            for entry in manifest['files']:
                name=entry['path']
                assert not PurePosixPath(name).is_absolute() and '..' not in PurePosixPath(name).parts
                assert 'node_modules/' not in name and '.git/' not in name and not name.endswith('.env')
                data=z.read(name)
                assert len(data)==entry['bytes'] and sha256(data).hexdigest()==entry['sha256']
            assert set(z.namelist())=={x['path'] for x in manifest['files']}
            for name in ('AGENTS.md','CLAUDE.md','GEMINI.md','CURRENT-TASK.md','HANDOFF.md','AI-BRIEF.md','CHECKLIST.md','COMPETITION.md','README.md','serve.mjs','kit.json'):assert name in z.namelist()
            assert z.read('AI-BRIEF.md')==(folder/'ai.md').read_bytes()
            for entry in manifest['readable_source_files']:
                actual=(folder/'files'/(entry['path']+'.txt')).read_bytes()
                assert actual==z.read('site/'+entry['path']) and sha256(actual).hexdigest()==entry['sha256']
            kit=json.loads(z.read('kit.json'));assert kit['serve_root']+'/'+kit['entry'] in z.namelist()
            check_runtime(z,kit['serve_root'])
        for name in ('index.html','source.html'):check_links(folder/name)
        check_links(SITE_ROOT/'dezayn'/template['slug']/'index.html')
    check_links(ROOT/'start/index.html');check_links(ROOT/'index.html')
    with zipfile.ZipFile(ROOT/'kit.zip') as z:
        assert z.testzip() is None
        assert 'competition/FULL-CONTEXT.md' in z.namelist()
        for template in catalog:assert z.read(template['slug']+'/source.zip')==(ROOT/template['slug']/'source.zip').read_bytes()
    print('PASS: 10 focused AI briefs, links, SHA-256 manifests, archives, portable runtime resources and complete offline text context.')

if __name__=='__main__':verify()

"""Reject retired starters and stale build chunks in the active tree and ZIPs."""
from pathlib import Path
import json,re,zipfile

ROOT=Path(__file__).resolve().parent
SITE=ROOT.parent
RETIRED={'01-kasblab.html','03-pulse.html','05-qadam.html','06-lola.html','07-spark.html','08-city.html','09-pulseboard.html','archive','kasblab','orbit','pulse','qadam','lola','spark','city','pulseboard','open-city'}

def verify():
    catalog=json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))['templates']
    slugs={t['slug'] for t in catalog}
    assert len(slugs)==len(catalog)==9
    for name in RETIRED:assert not (ROOT/name).exists(),f'Retired starter: {name}'
    for name in ('design/hq_v2.py','assets/hq/directory.css','assets/hq/fonts/mono.ttf'):
        assert not (SITE/name).exists(),f'Legacy HQ source: {name}'
    expected={t['slug']+'-site' for t in catalog if t['slug']!='bloom'}
    assert {p.name for p in ROOT.glob('*-site')}==expected
    allowed_folders=slugs|expected|{'material-expressive','handoff','identity-styles','previews','qa','standart','start','type','__pycache__'}
    assert {p.name for p in ROOT.iterdir() if p.is_dir()}<=allowed_folders,'Unexpected template folder'
    assert {p.name for p in ROOT.glob('*.html')}=={'index.html','02-samar.html','04-forma.html'},'Unexpected flat template'
    for name,target in [('02-samar.html','samar-site/'),('04-forma.html','forma-site/')]:
        redirect=(ROOT/name).read_text(encoding='utf-8')
        assert len(redirect.encode())<600 and 'url='+target in redirect and '<style' not in redirect and '<script' not in redirect
    build=ROOT/'material-expressive/dist'
    documents=[p for p in build.rglob('*') if p.is_file() and p.suffix in ('.html','.js','.css')]
    references='\n'.join(p.read_text(encoding='utf-8') for p in documents)
    assets=list((build/'assets').iterdir())
    for asset in assets:
        assert asset.name in references,f'Unreferenced build artifact: {asset.name}'
    for item in catalog:
        manifest=json.loads((ROOT/item['slug']/'manifest.json').read_text(encoding='utf-8'))
        expected_exports={entry['path']+'.txt' for entry in manifest['readable_source_files']}
        actual_exports={p.relative_to(ROOT/item['slug']/'files').as_posix() for p in (ROOT/item['slug']/'files').rglob('*') if p.is_file()}
        assert actual_exports==expected_exports,f'Stale readable source exports: {item["slug"]}'
        with zipfile.ZipFile(ROOT/item['slug']/'source.zip') as z:
            paths=z.namelist()
            for path in paths:
                assert not any(part in RETIRED or part in {'archive','__pycache__','node_modules'} for part in Path(path).parts),path
                assert not re.search(r'/(?:build|server)-(?:output|error|warnings)\.log$',path),path
            if item['slug']=='bloom':
                assert {Path(p).name for p in paths if p.startswith('site/dist/assets/')}=={p.name for p in assets}
                assert not any(p.startswith('site/public/fonts/') and p.endswith(('.css','.woff2','.ttf')) for p in paths)
    with zipfile.ZipFile(ROOT/'kit.zip') as z:
        starters={p.split('/')[0] for p in z.namelist() if p.endswith('/source.zip')}
        assert starters==slugs,starters
    print(f'PASS: {len(slugs)} current starters only; {len(assets)} referenced Bloom assets; no retired code in active packages.')

if __name__=='__main__':verify()

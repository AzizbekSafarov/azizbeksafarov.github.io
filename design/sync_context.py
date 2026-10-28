"""Synchronize portable context from the canonical research repo; detect drift."""
from pathlib import Path
from hashlib import sha256
import json

ROOT=Path(__file__).resolve().parent
SOURCE=ROOT.parent.parent/'internet-kontekst'
DEST=ROOT/'handoff'
MAPPING={'00-START-HERE.md':'competition.md','ai.md':'competition-full.md',
         'nizom.md':'regulations.md','CONTEXT-STATUS.md':'context-status.md',
         '06-SCORE-WORKPLAN.md':'score-workplan.md',
         '08-CURRENT.md':'current-competition.md','09-CURRENT-FACTS.json':'current-competition-facts.json'}
BASE='https://azizbeksafarov.github.io/ustoz/'

def fingerprint(data):return sha256(data).hexdigest()

def verify():
    origin=json.loads((DEST/'context-origin.json').read_text(encoding='utf-8'))
    assert {r['source'] for r in origin['files']}==set(MAPPING)
    for row in origin['files']:
        assert row['target']==MAPPING[row['source']]
        assert fingerprint((DEST/row['target']).read_bytes())==row['sha256'], 'Context copy drift: '+row['target']
        source=SOURCE/row['source']
        if source.is_file():assert fingerprint(source.read_bytes())==row['sha256'], 'Rebuild against canonical context: '+row['source']

def sync():
    if not SOURCE.is_dir():
        verify();return
    manifest=json.loads((SOURCE/'MANIFEST.json').read_text(encoding='utf-8'))
    published={r['path']:r for r in manifest['files']}
    records=[]
    for source,target in MAPPING.items():
        data=(SOURCE/source).read_bytes();digest=fingerprint(data)
        assert digest==published[source]['sha256'], 'Rebuild research context first: '+source
        (DEST/target).write_bytes(data)
        records.append({'source':source,'source_url':BASE+source,'target':target,'sha256':digest})
    origin={'schema_version':1,'research_as_of':'2026-10-28','historical_research_as_of':'2026-10-09','package_edited_at':'2026-10-28',
            'source_repository':'https://github.com/AzizbekSafarov/ustoz','files':records}
    (DEST/'context-origin.json').write_text(json.dumps(origin,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
    verify()

if __name__=='__main__':sync();print(f'PASS: {len(MAPPING)} context copies match their canonical source hashes.')

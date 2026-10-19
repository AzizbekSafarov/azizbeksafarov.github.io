"""Python 3.10+. Download and verify one starter; never run its code or overwrite a folder."""
import argparse
import hashlib
import io
import json
from pathlib import Path, PurePosixPath
import re
import stat
import tempfile
import zipfile
from urllib.request import urlopen, Request

SITE='https://azizbeksafarov.github.io'
RAW='https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main'
MAX_DOWNLOAD=32*1024*1024
MAX_UNPACKED=96*1024*1024

def fetch(url, limit=MAX_DOWNLOAD):
    with urlopen(Request(url,headers={'User-Agent':'Ustoz-starter-fetch/1','Cache-Control':'no-cache'}),timeout=45) as response:
        data=response.read(limit+1)
    if len(data)>limit:raise ValueError('Download exceeds size limit')
    return data

def validate_path(name):
    p=PurePosixPath(name)
    reserved={'CON','PRN','AUX','NUL',*(f'COM{i}' for i in range(1,10)),*(f'LPT{i}' for i in range(1,10))}
    if not name or p.is_absolute() or '\\' in name or ':' in name or any(x in ('','..','.') or x.endswith((' ','.')) or x.split('.')[0].upper() in reserved for x in name.split('/')):
        raise ValueError('Unsafe archive path')
    return p

def validate_archive(payload,manifest):
    if len(payload)!=manifest['archive_bytes'] or hashlib.sha256(payload).hexdigest()!=manifest['archive_sha256']:
        raise ValueError('ZIP does not match manifest; obtain both from the same publication')
    with zipfile.ZipFile(io.BytesIO(payload)) as z:
        infos=z.infolist();names=[i.filename for i in infos]
        if len(names)>6000 or sum(i.file_size for i in infos)>MAX_UNPACKED:raise ValueError('Archive exceeds unpacking limits')
        if len(names)!=len(set(n.casefold() for n in names)):raise ValueError('Duplicate archive path')
        for i in infos:
            validate_path(i.filename)
            mode=i.external_attr>>16
            if i.is_dir() or stat.S_ISLNK(mode) or i.flag_bits&1:raise ValueError('Unsupported archive entry')
        if z.testzip() is not None:raise ValueError('ZIP CRC failure')
        inner=json.loads(z.read('PACKAGE-MANIFEST.json'))
        if inner['schema_version']!=1 or inner['self_excluded']!='PACKAGE-MANIFEST.json':raise ValueError('Unsupported internal manifest')
        expected={x['path']:x for x in inner['files']}
        outer={x['path']:x for x in manifest['files']}
        if len(expected)!=len(inner['files']) or len(outer)!=len(manifest['files']):raise ValueError('Duplicate manifest path')
        if set(names)!=set(expected)|{'PACKAGE-MANIFEST.json'} or set(names)!=set(outer):raise ValueError('Missing or extra package files')
        result={}
        for name in names:
            data=z.read(name)
            for entry in [outer[name]]+([expected[name]] if name in expected else []):
                if len(data)!=entry['bytes'] or hashlib.sha256(data).hexdigest()!=entry['sha256']:raise ValueError('File integrity mismatch: '+name)
            result[name]=data
        if json.loads(result['kit.json'])['slug']!=manifest['slug']:raise ValueError('Design identity mismatch')
        return result

def install(slug,destination,fetcher=fetch):
    target=Path(destination).absolute()
    if target.exists():raise ValueError('Destination already exists; choose a new folder')
    if not target.parent.is_dir():raise ValueError('Destination parent must already exist')
    if not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',slug):raise ValueError('Invalid design slug')
    failures=[]
    for base in (SITE,RAW):
        try:
            catalog=json.loads(fetcher(base+'/design/catalog.json'))
            if slug not in {t['slug'] for t in catalog['templates']}:raise ValueError('Design is not in the active catalog')
            manifest=json.loads(fetcher(base+'/design/'+slug+'/manifest.json'))
            if manifest['slug']!=slug:raise ValueError('Manifest identity mismatch')
            payload=fetcher(base+'/design/'+slug+'/source.zip')
            files=validate_archive(payload,manifest)
            break
        except Exception as error:
            failures.append(type(error).__name__+': '+str(error))
    else:raise ValueError('Pages/raw download failed: '+'; '.join(failures))
    # Build in a new sibling, then rename. Windows refuses an existing destination.
    with tempfile.TemporaryDirectory(prefix='.starter-',dir=target.parent) as temp:
        staged=Path(temp)/'project';staged.mkdir()
        for name,data in files.items():
            output=staged.joinpath(*validate_path(name).parts)
            output.parent.mkdir(parents=True,exist_ok=True);output.write_bytes(data)
        if target.exists():raise ValueError('Destination appeared during download; not overwritten')
        staged.rename(target)
    return {'slug':slug,'folder':str(target),'files':len(files),'archive_sha256':manifest['archive_sha256'],'source':base,'next':'Read START-HERE.md, then node verify-package.mjs and node serve.mjs. No code was run.'}

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('slug');parser.add_argument('destination');args=parser.parse_args()
    try:print(json.dumps(install(args.slug,args.destination),ensure_ascii=False,indent=2))
    except Exception as error:parser.exit(1,'Starter not installed: '+str(error)+'\n')

if __name__=='__main__':main()

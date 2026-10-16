"""Build-time font acquisition from Google Fonts; runtime stays fully local."""
from pathlib import Path
from urllib.request import Request, urlopen
from concurrent.futures import ThreadPoolExecutor
import json, subprocess

ROOT=Path(__file__).resolve().parent
FAMILIES={
    'ziyo':('breeserif','nunitosans'),
    'orbita':('chakrapetch',),
    'forma':('manrope',),
    'samar':('lora','sourcesans3'),
    'meros':('alfaslabone','archivo','literata'),
    'nashr':('ptserif','archivo'),
    'hisob':('publicsans','ibmplexsanscondensed'),
}

def get(url):
    return urlopen(Request(url,headers={'User-Agent':'Ustoz-Design-Library'}),timeout=50).read()

def fetch(item):
    slug,family=item
    folder=ROOT/(slug+'-site')/'fonts'
    listing=json.loads(subprocess.check_output(['gh','api','repos/google/fonts/contents/ofl/'+family]))
    candidates=[x for x in listing if x['name'].endswith('.ttf') and 'Italic' not in x['name']]
    font=next((x for x in candidates if '[' in x['name']),None) or next((x for x in candidates if 'Regular' in x['name']),candidates[0])
    path=folder/(family+'.ttf')
    if not path.exists():path.write_bytes(get(font['download_url']))
    license=next(x for x in listing if x['name']=='OFL.txt')
    (folder/(family+'-OFL.txt')).write_bytes(get(license['download_url']))
    return slug,family,font['name'],path.stat().st_size

if __name__=='__main__':
    with ThreadPoolExecutor(max_workers=4) as pool:
        for row in pool.map(fetch,[(s,f) for s,fs in FAMILIES.items() for f in fs]):print(*row)

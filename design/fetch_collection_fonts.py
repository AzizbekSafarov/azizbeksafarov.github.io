"""Build-time only: licensed fonts from the official Google Fonts repository."""
from pathlib import Path
from urllib.request import Request,urlopen
import json,concurrent.futures
ROOT=Path(__file__).resolve().parent
FONTS={'space':'spacegrotesk','news':'newsreader','mono':'ibmplexmono','sans':'dmsans','display':'barlowcondensed'}
def get(url):
    return urlopen(Request(url,headers={'User-Agent':'Ustoz-design-library'}),timeout=45).read()
def fetch(item):
    name,family=item;folder=ROOT/'type';folder.mkdir(exist_ok=True)
    listing=json.loads(get('https://api.github.com/repos/google/fonts/contents/ofl/'+family))
    candidates=[f for f in listing if f['name'].endswith('.ttf') and 'Italic' not in f['name']]
    selected=next((f for f in candidates if '[' in f['name']),None) or next((f for f in candidates if 'Regular' in f['name']),candidates[0])
    (folder/(name+'.ttf')).write_bytes(get(selected['download_url']))
    ofl=next(f for f in listing if f['name']=='OFL.txt')
    (folder/(name+'-OFL.txt')).write_bytes(get(ofl['download_url']))
    return name,selected['name']
if __name__=='__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:print(list(pool.map(fetch,FONTS.items())))

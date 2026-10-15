"""Refresh local, OFL-licensed Instrument fonts from Google Fonts."""
from pathlib import Path
from urllib.request import Request, urlopen
import re

root=Path(__file__).parent/'fonts'
root.mkdir(exist_ok=True)
request=Request('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap',headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'})
css=urlopen(request,timeout=30).read().decode()
for i,url in enumerate(dict.fromkeys(re.findall(r'url\((https://[^)]+)\)',css))):
    assert url.startswith('https://fonts.gstatic.com/')
    name=f'instrument-{i}.woff2'
    (root/name).write_bytes(urlopen(url,timeout=30).read())
    css=css.replace(url,'./'+name)
(root/'fonts.css').write_text(css,encoding='utf-8')
for name in ['instrumentsans','instrumentserif']:
    (root/(name+'-OFL.txt')).write_bytes(urlopen(f'https://raw.githubusercontent.com/google/fonts/main/ofl/{name}/OFL.txt',timeout=30).read())
print('Saved local Instrument Sans / Serif and OFL licenses.')

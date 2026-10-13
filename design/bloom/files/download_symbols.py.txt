"""Refresh the licensed Google Material Symbols subset used by Bloom."""
from pathlib import Path
from urllib.request import Request, urlopen
import re

names = 'add,arrow_back,arrow_forward,arrow_outward,bookmark,check,check_circle,chevron_right,close,cloud,code,dark_mode,expand_more,folder_open,grid_view,help,home,light_mode,list,more_horiz,palette,school,search,star,storage,tune'
url = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=' + names + '&display=block'
css = urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}), timeout=30).read().decode()
font_url = re.search(r'src: url\(([^)]+)\)', css).group(1)
assert font_url.startswith('https://fonts.gstatic.com/')
font = urlopen(font_url, timeout=30).read()
root = Path(__file__).parent / 'src/fonts'
(root/'material-symbols.woff2').write_bytes(font)
(root/'material-symbols.css').write_text(css.replace(font_url, './material-symbols.woff2'), encoding='utf-8')
print('Updated Material Symbols subset:', len(font), 'bytes')

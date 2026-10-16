"""Seven independent sector identities. Shared CSS is mechanics, not art direction.

Canonical CSS: identity-styles/*.css. Apply last, after the HTML generators.
Fonts are build-time assets from fetch_identity_fonts.py; no runtime CDN.
"""
from pathlib import Path
from hashlib import sha256
import json,re

ROOT=Path(__file__).resolve().parent
IDENTITIES={
 'ziyo':dict(fonts=['bree-serif','nunito-sans','ibm-plex-mono'],color='#772c3c',background='#ffedd6',summary='Rangli ta’lim ustaxonasi: yumshoq Bree Serif, bosqichli dars yo‘li, ishlaydigan ko‘rgazmali misol va olcha rangli mashq daftari.',look='Ta’lim ustaxonasi. Bree Serif sarlavha + Nunito Sans matn + IBM Plex Mono kod. Shaftoli qog‘oz, oq doska, olcha mashq maydoni. Dastur yuqorida, dars va interaktiv misol chapda, test o‘ngda. Yumshoq asimmetrik burchaklar; texnik terminal yoki gazeta bilan bir xil qobiq qilma.'),
 'orbita':dict(fonts=['chakra-petch','ibm-plex-mono'],color='#b1f56a',background='#071215',summary='Qorong‘i texnik observatoriya: Chakra Petch, monospace yozuv, orbital asbob oynasi va vertikal missiya registri.',look='Kosmik observatoriya: Chakra Petch texnik display, IBM Plex Mono barcha xizmat/o‘qish matni. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.'),
 'forma':dict(fonts=['manrope'],color='#29261f',background='#faf9f5',summary='Zamonaviy obyekt studiyasi: kuchli Manrope, qora savdo tugmalari, yirik narxlar va balandligi turlicha fotografik shelf.',look='Zamonaviy obyekt studiyasi. Manrope 500 asosiy matn, 650 xizmat, 750–800 sarlavha/narx. Oqartirilgan maydon, grafit, material fotosuratlari. Qattiq to‘rtburchak qora savdo tugmalari; aniq rangli savat holati. Ingichka serif, mikro matn, ghost savdo tugmalari va yumaloq sayohat kartalari yo‘q. Asimmetrik fotografik shelf saqlansin; mobil uch buyum ham o‘qiladigan kenglikda. Narx/materiallar namuna, savat lokal.'),
 'samar':dict(fonts=['lora', 'source-sans-3'],color='#173952',background='#f1f4f3',summary='Sayohat atlasi: dadil Lora sarlavhasi, yumaloq manzil kartalari, to‘liq rangli reja tugmalari va buklama xarita.',look='Sayohat atlasi. Lora 700 faqat katta sarlavha/atlas ovozi; Source Sans 3 500–700 manzil nomi, xizmat va boshqaruv. Moviy, qum, osmon. Yumaloq oq manzil kartalari, to‘liq moviy pill shaklidagi reja tugmalari, yumshoq soyalar. Mayda rangsiz outline/ghost tugma yoki moda showroomi emas. Buklama xarita markazda, chapda manzillar, o‘ngda reja; mobil xarita → manzillar → reja. Chizma shartli; haqiqiy navigatsiya/bron emas.'),
 'meros':dict(fonts=['alfa-slab-one', 'archivo', 'literata'],color='#e5f344',background='#1d2ed8',summary='Ko‘rgazma plakati: og‘ir Alfa Slab One, dadil Archivo navigatsiyasi, yirik raqamli indeks va ultramarin/limon bloklari.',look='Kuratorlik ko‘rgazmasi. Alfa Slab One katta afisha; Archivo 650–800 barcha xizmat, indeks va tugma; Literata faqat uzun asar sharhi. Ultramarin, limon, oq. Indeks — yirik raqam + to‘liq bosiladigan qalin blok; nozik serif satr va mayda chiziqli havola emas. O‘tkir burchakli plakat tili, asimmetrik foto va navbat almashadigan asar/sharh. Sayohat pill kartalari yoki showroom savdo tizimini ko‘chirma.'),
 'nashr':dict(fonts=['newsreader','pt-serif','archivo'],color='#a3271e',background='#eeebde',summary='Bosma gazeta: Newsreader masthead, PT Serif maqola, Archivo xizmat yozuvi, oq-qora suratlar va zich tahririy ustunlar.',look='Bosma tahririyat: Newsreader masthead va sarlavha; PT Serif o‘qish; Archivo ixcham navigatsiya. Sarg‘aygan gazeta qog‘ozi, qora siyoh, kichik qizil tahririy belgi, double-rule, oq-qora fotografiya va zich ustunlar. Chetdan chetga marketing hero yoki ilova dashboardi emas. Original maqolalar namuna.'),
 'hisob':dict(fonts=['public-sans','ibm-plex-sans-condensed'],color='#a66c21',background='#edf0f2',summary='Ma’lumotlar ish stoli: Public Sans xizmat interfeysi, ixcham Plex raqamlari, birlashgan ko‘rsatkich bandi va aniq jadval.',look='Tahlil ish stoli: Public Sans UI + IBM Plex Sans Condensed tabular raqamlar. Sovuq kulrang, oq ish sirtlari, grafit navigatsiya va amber analitika. Ko‘rsatkichlar bitta ajratilgan bandda; chart va table aniq xizmat iyerarxiyasida. Display-hero yo‘q. CSV aynan filtrlangan qatorlarni oladi, barcha sonlar namuna.'),
}
FONTS={
 'ziyo':[('Study Display','breeserif','400'),('Study Sans','nunitosans','200 900'),('Study Mono','mono','400')],
 'orbita':[('Flight Display','chakrapetch','400'),('Flight Mono','mono','400')],
 'forma':[('Object Text','manrope','200 800')],
 'samar':[('Atlas Display','lora','400 700'),('Atlas Text','sourcesans3','200 900')],
 'meros':[('Gallery Display','alfaslabone','400'),('Gallery UI','archivo','100 900'),('Gallery Text','literata','200 900')],
 'nashr':[('Paper Display','news','100 900'),('Paper Text','ptserif','400'),('Paper UI','archivo','100 900')],
 'hisob':[('Ledger UI','publicsans','100 900'),('Ledger Figures','ibmplexsanscondensed','400')],
}
MARKS={
 'ziyo':'<rect width="40" height="40" rx="12" fill="#772c3c"/><path d="M8 10Q14 8 20 12Q26 8 32 10V29Q26 27 20 31Q14 27 8 29ZM20 12V31" fill="#ffca7c" stroke="#fff3d9" stroke-width="1.5"/>',
 'orbita':'<rect width="40" height="40" fill="#071215"/><circle cx="20" cy="20" r="8" fill="#b1f56a"/><ellipse cx="20" cy="20" rx="18" ry="9" transform="rotate(-35 20 20)" fill="none" stroke="#b1f56a" stroke-width="2"/>',
 'forma':'<rect width="40" height="40" fill="#faf9f5"/><path d="M12 35H27M17 35V12Q17 4 27 7M11 17H27" fill="none" stroke="#29261f" stroke-width="2"/>',
 'samar':'<rect width="40" height="40" rx="20" fill="#e9e3d0"/><path d="M20 5L29 30L20 26L11 30Z" fill="#173952"/><path d="M20 5V26L11 30Z" fill="#5794aa"/>',
 'meros':'<rect width="40" height="40" fill="#1d2ed8"/><path d="M5 31V9H12L20 20L28 9H35V31H27V22L20 30L13 22V31Z" fill="#e5f344"/>',
 'nashr':'<rect width="40" height="40" fill="#eeebde"/><path d="M8 31V9L31 31V9M5 9H14M27 9H35M5 31H12M27 31H35" fill="none" stroke="#20201c" stroke-width="2.5"/>',
 'hisob':'<rect width="40" height="40" rx="4" fill="#252d35"/><path d="M8 31V22H14V31ZM17 31V15H23V31ZM26 31V7H32V31Z" fill="#ffbd59"/>',
}
VISUAL='''<div class="visual-caption">G‘oyani sahifada sinab ko‘ring</div><div class="learning-visual" id="learning-visual"><div class="demo-webpage" id="demo-webpage"><span id="demo-label">HTML · SAHIFA TUZILISHI</span><h3 id="demo-title">Mening birinchi loyiham</h3><button type="button" id="demo-action">Sinab ko‘rish</button><output id="demo-result" aria-live="polite">Tugma amalni boshlab beradi.</output></div></div>'''
VISUAL_JS='''const $=s=>document.querySelector(s);
let mode='structure',clicks=0,painted=false;
const states={structure:['HTML · SAHIFA TUZILISHI','Mening birinchi loyiham','Teglar mazmunga vazifa beradi.'],style:['CSS · VIZUAL IYERARXIYA','Muhim fikr ko‘zga tashlanadi.','O‘lcham va rang diqqatni boshqaradi.'],interaction:['JAVASCRIPT · AMAL VA NATIJA','Bosishdan keyin nima bo‘ladi?','Tugmani bosing va natijani kuzating.']};
export function showLesson(p){mode=p.id;clicks=0;const s=states[mode];$('#demo-webpage').dataset.mode=mode;$('#demo-label').textContent=s[0];$('#demo-title').textContent=s[1];$('#demo-result').textContent=s[2];$('#demo-action').textContent=mode==='interaction'?'Hisobni oshirish +':'Sinab ko‘rish';if(painted&&!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#demo-webpage').animate([{opacity:0,transform:'translateY(8px) rotate(-1deg)'},{opacity:1,transform:'none'}],{duration:350,easing:'ease-out'});painted=true;}
$('#demo-action').addEventListener('click',()=>{clicks++;$('#demo-result').textContent=mode==='interaction'?'Natija: '+clicks+' marta bosildi.':mode==='style'?'Tugmaning kontrasti va o‘lchami amalni ajratib turibdi.':'HTML button elementi sichqoncha va klaviaturada ishlaydi.';if(!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#demo-result').animate([{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:220});});
'''

def write(p,s):p.write_text(s,encoding='utf-8',newline='\n')
def hash(s):return sha256(s.encode()).hexdigest()[:10]

def apply(slugs=None):
    slugs=slugs or tuple(IDENTITIES)
    for slug in slugs:
        d=IDENTITIES[slug];folder=ROOT/(slug+'-site');p=folder/'index.html';html=p.read_text(encoding='utf-8')
        if slug in ('ziyo','forma','samar') and 'name="composition"' not in html:
            from diversity_v3 import apply as v3
            v3((slug,));html=p.read_text(encoding='utf-8')
        if slug=='ziyo':
            if 'id="learning-visual"' not in html:html=html.replace('<div class="code-heading">',VISUAL+'<div class="code-heading">')
            write(folder/'identity.js',VISUAL_JS)
            app=(folder/'app.js').read_text(encoding='utf-8')
            app=re.sub(r"import \{showLesson\} from './identity.js[^']*';\n?",'',app)
            app="import {showLesson} from './identity.js?v="+hash(VISUAL_JS)+"';\n"+app
            if "showLesson(p);$('#question')" not in app:app=app.replace("$('#lesson-code').textContent=p.example;","$('#lesson-code').textContent=p.example;showLesson(p);")
            write(folder/'app.js',app)
        if slug=='orbita':
            html=html.replace('Bizdan<br>uzoqroqda.','ORBITAL<br>ATLAS').replace('Yaqin orbitadan Quyosh tizimi chegaralarigacha. Uch missiya, uch xil savol. Kashfiyotni tanlang.','Missiyani tanlang. Maqsad, masofa va tekshiriladigan manba — bitta kuzatuv oynasida.')
        if slug=='forma':
            html=re.sub(r'<h1>Yashash uchun buyumlar\. <span>01—03</span></h1>','<h1>Tanlangan<br>buyumlar.<span>01—03 / OBYEKTLAR</span></h1>',html)
        if slug=='meros':
            html=html.replace('SHAHAR<br><span>XOTIRASI','Shahar<br><span>xotirasi')
            html=re.sub(r'(<a href="#work-[^"]+">)(0[123]) / ([^<]+) <span>↙</span></a>',r'\1<span class="index-number">\2</span><span class="index-title">\3</span><span class="index-arrow" aria-hidden="true">↙</span></a>',html)
        if slug=='samar':
            html=re.sub(r'(<button class="text-link") style="[^"]*"',r'\1',html)
        if slug=='hisob':html=html.replace('Natijalar bir qarashda.','Hududlar hisoboti')
        if slug=='nashr':
            app=(folder/'app.js').read_text(encoding='utf-8')
            app=app.replace('<button class="story-read" data-read="${p.id}"><h2>${p.name}</h2></button>','<h2><button class="story-read" data-read="${p.id}">${p.name}</button></h2>')
            write(folder/'app.js',app)
        if slug=='hisob':
            app=(folder/'app.js').read_text(encoding='utf-8')
            if 'responsivePlotWidth' not in app:
                app=app.replace('const points=r.series.map((v,i)=>[45+i*830/6,205-v/maximum*180]);', "const responsivePlotWidth=Math.max(260,Math.round($('#chart').clientWidth));$('#chart').setAttribute('viewBox',`0 0 ${responsivePlotWidth} 245`);$('#chart').querySelector('g[stroke] path').setAttribute('d',[25,85,145,205].map(y=>`M45 ${y}H${responsivePlotWidth-10}`).join(''));const points=r.series.map((v,i)=>[45+i*(responsivePlotWidth-55)/6,205-v/maximum*180]);")
                app=app.replace("' L875,205Z'", "` L${responsivePlotWidth-10},205Z`")
                app+="\nlet chartObservedWidth=0;new ResizeObserver(entries=>{const width=Math.round(entries[0].contentRect.width);if(width!==chartObservedWidth){chartObservedWidth=width;render();}}).observe(document.querySelector('.chart'));\n"
            write(folder/'app.js',app)
        base=(ROOT/'identity-styles/base.css').read_text(encoding='utf-8')
        fontcss=''.join(f"@font-face{{font-family:'{family}';src:url('fonts/{file}.ttf') format('truetype');font-weight:{weight};font-display:swap}}\n" for family,file,weight in FONTS[slug])
        style=fontcss+base;layout=(ROOT/'identity-styles'/(slug+'.css')).read_text(encoding='utf-8')
        write(folder/'style.css',style);write(folder/'layout.css',layout)
        html=re.sub(r'<link rel="(?:preload|stylesheet)"[^>]*>','',html)
        links=''.join(f'<link rel="preload" href="fonts/{file}.ttf" as="font" type="font/ttf" crossorigin>' for _,file,_ in FONTS[slug][:2])
        links+=f'<link rel="stylesheet" href="style.css?v={hash(style)}"><link rel="stylesheet" href="layout.css?v={hash(layout)}">'
        html=html.replace('</head>',links+'</head>')
        html=re.sub(r'(<meta name="description" content=")[^"]+',lambda m:m[1]+d['summary'],html)
        html=re.sub(r'(<meta name="theme-color" content=")[^"]+',lambda m:m[1]+d['background'],html)
        html=re.sub(r'app.js\?v=[a-f0-9]+','app.js?v='+hash((folder/'app.js').read_text(encoding='utf-8')),html)
        html=re.sub(r'<meta name="identity"[^>]*>','',html).replace('</head>','<meta name="identity" content="sector-v4"></head>')
        icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">'+MARKS[slug]+'</svg>'
        html=re.sub(r'href="mark.svg[^\"]*"', 'href="mark.svg?v='+hash(icon)+'"',html)
        write(p,html)
        write(folder/'mark.svg',icon)
        # Keep only licensed font files actually referenced by the final build.
        fontdir=(folder/'fonts').resolve();assert fontdir.is_relative_to(ROOT.resolve())
        keep={file+ext for _,file,_ in FONTS[slug] for ext in ('.ttf','-OFL.txt')}
        for f in fontdir.iterdir():
            if f.is_file() and f.suffix in ('.ttf','.txt') and f.name not in keep:f.unlink()
        for _,file,_ in FONTS[slug]:
            assert (fontdir/(file+'.ttf')).is_file(),file
            assert (fontdir/(file+'-OFL.txt')).is_file(),file+' license'
        write(folder/'package.json',json.dumps({'private':True,'type':'module','scripts':{'test':'node --test *.test.mjs'}})+'\n')
        write(folder/'README.md',f"# {slug.title()} — independent sector identity\n\n{d['look']}\n\nStandalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test *.test.mjs`.\n\nindex.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. "+('identity.js: interactive lesson illustration. ' if slug=='ziyo' else '')+"Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.\n\nOriginal library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.\n")
        credits=(folder/'CREDITS.md').read_text(encoding='utf-8')
        credits=re.sub(r'Visual contract: [^\n]*', 'Visual contract: '+d['look'],credits)
        credits=re.sub(r'\n## Sector identity fonts[\s\S]*$','',credits)
        credits+='\n## Sector identity fonts\n\n'+', '.join(d['fonts'])+'. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.\n'
        write(folder/'CREDITS.md',credits)
    for filename,key in [('templates.json',None),('catalog.json','templates')]:
        p=ROOT/filename;data=json.loads(p.read_text(encoding='utf-8'));rows=data[key] if key else data
        for row in rows:
            slug=row.get('slug') or row['file'].split('-site/')[0]
            if slug in slugs:
                for k in ('fonts','color','background','summary'):row[k]=IDENTITIES[slug][k]
        write(p,json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    print('Built independent sector identities: '+', '.join(slugs))

if __name__=='__main__':apply()

"""Weak-AI backup kit: live-edit map, offline zaxira.zip, package files and the /zaxira/ page.

Hand-written sources: zaxira/ZAXIRA.md, zaxira/PROMPTLAR.md, zaxira/skelet/*.
Generated here: zaxira/JONLI-OZGARISH.md, zaxira/skelet/serve.mjs + kit.json, zaxira/zaxira.zip, zaxira/index.html.
"""
from pathlib import Path
from collections import Counter
from html import escape
import io,json,re,zipfile

ROOT=Path(__file__).resolve().parent
SITE=ROOT.parent
KIT=SITE/'zaxira'
DATE=(2026,10,30,0,0,0)
STARTERS=[('forma','Forma'),('samar','Samar'),('orbita','Orbita'),('nashr','Nashr'),('hisob','Hisob'),('ziyo','Ziyo'),('meros','Meros'),('si','Yuksal · SI')]
SKIP={'.DS_Store'}

def text(path):
    return path.read_text(encoding='utf-8')

def colours(paths):
    found=Counter()
    for path in paths:
        if path.exists():
            for c in re.findall(r'#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b',text(path)):
                c=c.lower()
                found['#'+''.join(x*2 for x in c[1:]) if len(c)==4 else c]+=1
    for neutral in ('#ffffff','#000000'):found.pop(neutral,None) # replacing these would break text/background
    return found.most_common(4)

def heading(slug):
    html=text(ROOT/f'{slug}-site/index.html')
    match=re.search(r'<h1[^>]*>(.*?)</h1>',html,re.S)
    words=re.sub(r'<[^>]+>',' ',match.group(1)).split() if match else []
    return ' '.join(words)[:60]

def live_edit_map():
    rows=[]
    for slug,name in STARTERS:
        site=ROOT/f'{slug}-site'
        css=[site/'style.css',site/'layout.css']
        tokens=[]
        for path in css:
            if path.exists():
                for block in re.findall(r':root\s*\{([^}]*)\}',text(path)):
                    tokens+=[t.strip() for t in block.split(';') if t.strip().startswith('--') and '#' in t][:4]
        title=heading(slug)
        where=f'`site/index.html` → “{title}”' if title else 'JavaScript chizadi: `site/model.js` yoki `site/identity.js` dan matnni qidiring'
        top=', '.join(f'`{c}` ×{n}' for c,n in colours(css))
        rows.append(f'| {name} | {where} | {", ".join("`"+t+"`" for t in tokens[:3]) or "—"} | {top} |')
    rows.append('| Bloom (React) | `site/src/main.jsx` → `<h1>` | `site/src/style.css`: `--md-sys-color-primary` | npm kerak: o‘zgarish `npm run dev` ochiq bo‘lgandagina ko‘rinadi |')
    return '\n'.join(rows)

HEADER='''# Jonli o‘zgarish — himoyada 1 daqiqada, AI’siz

Imzolangan nizomga ko‘ra ekspert himoyada matn, rang, element yoki kontentni real vaqtda o‘zgartirishni so‘rashi mumkin. Ishtirokchi buni o‘z qurilmasida bajara olmasa, ish baholanmaydi. Shuning uchun quyidagilarni AI’siz bajarishni oldindan mashq qiling.

## Dizayn starterida yoki boshqa loyihada — umumiy usul

1. VS Code’da loyiha papkasini oching (File → Open Folder).
2. **Ekranda ko‘ringan matnni** butun papkadan qidiring: **Ctrl+Shift+F** → matnning bir qismini yozing → natijani bosing.
3. O‘zgartiring → **Ctrl+S**.
4. Brauzerda **Ctrl+Shift+R** (keshsiz yangilash). `node serve.mjs` keshni o‘chiradi; fayl to‘g‘ridan-to‘g‘ri ochilgan bo‘lsa Ctrl+Shift+R shart.
5. Ishlamasa **Ctrl+Z** → Ctrl+S → yana yangilang.

Rang: CSS faylda rang kodini qidiring (**Ctrl+H** — topish va almashtirish) yoki `:root` ichidagi o‘zgaruvchini o‘zgartiring. Rang kodini tanlash: VS Code’da rang kvadratchasini bosing yoki `#d32f2f` (qizil), `#2e7d32` (yashil), `#1d4ed8` (ko‘k), `#6a1b9a` (binafsha) dan foydalaning.

Element: mavjud o‘xshash blokni (karta, tugma, bo‘lim) nusxalang, yoniga qo‘ying va matnini o‘zgartiring. Yangi kod yozishdan ko‘ra nusxalash xavfsizroq.

## Zaxira skeletda — kodsiz, `tahrir.html` paneli bilan

Himoyadan oldin: `tahrir.html` ni oching va bir marta **Ctrl+S** bosib papkadagi `malumot.js` ni tanlang. Shundan keyin har saqlash so‘ramasdan yoziladi. Saytni yonidagi tabda oching.

| Ekspert so‘rovi | Panelda | Keyin |
|---|---|---|
| “Sarlavhani o‘zgartiring” | 3. Bosh sahifa → Katta sarlavha (sayt nomi — 1. Asosiy) | Ctrl+S → saytda Ctrl+Shift+R |
| “Rangni qizil qiling” | 1. Asosiy → rang kvadratchasi yoki Rang kodi `#c62828` | Ctrl+S → Ctrl+Shift+R |
| “Yana bitta element qo‘shing” | 4. Ro‘yxat → pastdagi **+ Qo‘shish** → nomi, sana… | Ctrl+S → Ctrl+Shift+R |
| “Yangi blok/kartochka qo‘shing” | 3. Bosh sahifa → Afzalliklar → **+ Qo‘shish** | Ctrl+S → Ctrl+Shift+R |
| “Formaga maydon qo‘shing” | 5. Ariza formasi → **+ Qo‘shish** → nomi, turi, Majburiy | Ctrl+S → Ctrl+Shift+R |
| “Tugma yoki menyu matnini o‘zgartiring” | 3. Bosh sahifa (tugmalar), 2. Sahifalar (menyu), 5. (yuborish tugmasi) | Ctrl+S → Ctrl+Shift+R |
| “Bu bo‘limni olib tashlang” | 2. Sahifalar → belgini olib tashlang | Ctrl+S → Ctrl+Shift+R |

O‘ng tomondagi oldindan ko‘rish natijani saqlashdan oldin ham ko‘rsatadi. Sayt hamma o‘zgarishni `malumot.js` dan oladi — boshqa faylga tegish shart emas.

Panelsiz (faqat zarurat bo‘lsa): `malumot.js` ni Bloknot yoki VS Code’da ochib, faqat qo‘shtirnoq `"..."` ichidagi matnni o‘zgartiring.

## Dizayn starterlarida qayerni o‘zgartirish kerak

Jadval amaldagi kod asosida avtomatik yaratilgan. Rang ustunida CSS fayllarda eng ko‘p uchragan rang kodlari va soni berilgan: ularni **Ctrl+H** bilan almashtirish butun saytning shu rangini o‘zgartiradi. Asosiy matn fayllari ko‘pincha bir qatorga siqilgan — Ctrl+F bilan qidiring.

| Dizayn | Asosiy sarlavha | `:root` rang o‘zgaruvchilari | Eng ko‘p rang kodlari (style.css + layout.css) |
|---|---|---|---|
'''

FOOTER='''

Ko‘p dizaynda kartalar ham `site/index.html` da, ham `site/model.js` dagi ro‘yxatda bor. Yangi karta qo‘shilsa, ikkala joyda ham bir xil `id` bilan qo‘shing. Faqat matn yoki rang so‘ralsa, model va kodni o‘zgartirmang.

## Mashq (tanlovdan oldin)

Taymer qo‘ying va 2 daqiqada bajaring: sarlavha matni → asosiy rang → yangi element → Ctrl+Shift+R bilan ko‘rsatish. Ikki marta muvaffaqiyatli bajarilmaguncha takrorlang.

Kod yozmasangiz: tanlov uchun skelet + `tahrir.html` eng xavfsiz yo‘l — jonli o‘zgarishning hammasi panelda. Dizayn starterini tanlasangiz, yuqoridagi umumiy usulni (Ctrl+Shift+F → o‘zgartirish → Ctrl+S → Ctrl+Shift+R) oldindan kamida ikki marta mashq qiling.
'''

def write_if_changed(path,data):
    data=data if isinstance(data,bytes) else data.encode('utf-8')
    if not path.exists() or path.read_bytes()!=data:
        path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data)

def prepare():
    """Generate derived files; return the portable file map used by every package."""
    write_if_changed(KIT/'JONLI-OZGARISH.md',HEADER+live_edit_map()+FOOTER)
    write_if_changed(KIT/'skelet/serve.mjs',(ROOT/'handoff/serve.mjs').read_bytes())
    write_if_changed(KIT/'skelet/kit.json',json.dumps({'schema_version':1,'name':'Zaxira skelet','serve_root':'.','entry':'index.html'},ensure_ascii=False,indent=2)+'\n')
    files={}
    for name in ('ZAXIRA.md','PROMPTLAR.md','JONLI-OZGARISH.md'):
        files[name]=(KIT/name).read_bytes().replace(b'\r\n',b'\n')
    for path in sorted((KIT/'skelet').rglob('*')):
        if path.is_file() and path.name not in SKIP:
            files['skelet/'+path.relative_to(KIT/'skelet').as_posix()]=path.read_bytes().replace(b'\r\n',b'\n')
    buffer=io.BytesIO()
    with zipfile.ZipFile(buffer,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
        for name,data in sorted(files.items()):
            info=zipfile.ZipInfo('zaxira/'+name,date_time=DATE);info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16
            z.writestr(info,data)
    write_if_changed(KIT/'zaxira.zip',buffer.getvalue())
    return files

def page():
    from workspace_hq import frame
    size=(KIT/'zaxira.zip').stat().st_size/1024
    content=f'''<div class="wrap"><section class="page-hero"><p class="eyebrow">KUCHLI AI BO‘LMASA HAM</p><h1>Zaxira rejasi.<br>Qo‘lda ham ishlaydi.</h1><p class="lead">Tanlov kuni AI limitli, sekin yoki umuman ishlamasligi mumkin. Bu to‘plam build talab qilmaydigan sayt skeleti, kichik AI uchun qisqa so‘rovlar va himoyadagi jonli o‘zgarish qo‘llanmasini beradi.</p><div class="hero-actions"><a class="button dark" href="/zaxira/zaxira.zip" download>Zaxira paketini olish ↓ <small>{size:.0f} KB</small></a><a class="button" href="/zaxira/skelet/">Skeletni ochish ↗</a><a class="button" href="/zaxira/skelet/tahrir.html">Kodsiz tahrirlash ↗</a><a class="button" href="/zaxira/skelet/?tekshir">Tekshiruv paneli bilan ↗</a></div></section>
<article class="prose">
<h2>Nima uchun kerak</h2>
<p>Imzolangan nizomga ko‘ra ekspert himoyada <strong>matn, rang, element yoki kontentni</strong> jonli o‘zgartirishni so‘rashi mumkin. Bajarilmasa ish baholanmaydi. Teng ballda avval sifat va funksionallik, keyin zamonaviy texnologiyalar mezoni hal qiladi. Shuning uchun ishlaydigan oddiy sayt va uni qo‘lda boshqara olish chiroyli, lekin tugallanmagan saytdan qimmatroq.</p>
<h2>Paket ichida</h2>
<ul>
<li><a href="/zaxira/ZAXIRA.md">ZAXIRA.md</a> — qoidalardan 8 ta asosiy fakt, qaysi yo‘lni tanlash, vaqt rejasi, qadamma-qadam ish, 21 ko‘rsatkich bo‘yicha sinov ro‘yxati, himoya ssenariysi va favqulodda holatlar.</li>
<li><a href="/zaxira/PROMPTLAR.md">PROMPTLAR.md</a> — kichik AI uchun bitta faylga mo‘ljallangan tayyor so‘rovlar: biletdan ma’lumot, forma, matn, rang, xato, qo‘shimcha funksiya, README va himoya matni.</li>
<li><a href="/zaxira/JONLI-OZGARISH.md">JONLI-OZGARISH.md</a> — skelet va har bir dizayn uchun sarlavha va rang qayerda turgani. Kod asosida avtomatik yaratiladi.</li>
<li><a href="/zaxira/skelet/tahrir.html">skelet/tahrir.html</a> — <strong>kodsiz tahrirlash paneli</strong>: matn, rang, ro‘yxat (Word/Excel jadvalidan nusxalab qo‘yish mumkin), forma maydonlari va sahifalarni katakchalarda o‘zgartirasiz, natijani darhol ko‘rasiz, Ctrl+S bilan faylga saqlaysiz. Kod yozish kerak emas.</li>
<li><a href="/zaxira/skelet/">skelet/</a> — 6 sahifali sayt: ro‘yxat, qidiruv/filtr, tafsilot, tekshiriladigan ariza formasi, saqlangan arizalar, CSV, bo‘sh/xato holatlari. Barcha mazmun bitta <code>malumot.js</code> faylida. Fayl ikki marta bosilganda ham ochiladi; internet, npm va build kerak emas.</li>
</ul>
<h2>Skeletning kafolatlangan qismi</h2>
<ul>
<li>Maydon tekshiruvi: majburiy, uzunlik, telefon (+998), email, son oralig‘i, o‘tgan sana, ro‘yxatdan tanlash, rozilik.</li>
<li>Bog‘liq amallar: ro‘yxatdan tanlash → ariza → arizalarim; joy to‘lsa yopiladi, takror ariza rad etiladi.</li>
<li>Brauzer xotirasi buzilgan yoki yopiq bo‘lsa ham sayt ishlaydi.</li>
<li><code>?tekshir</code> paneli: gorizontal surish (390/768/1366), nomsiz maydon va tugma, yuklanmagan rasm, konsol xatosi, qolib ketgan namuna matn.</li>
<li><code>node --test mantiq.test.mjs</code> — mantiq testlari.</li>
</ul>
<p>Skelet — ochiq shablon. U tayyor tanlov ishi emas: biletga moslashtirish, manbani README’da qayd etish va himoyada nimani o‘zgartirganingizni tushuntirish sizning ishingiz.</p>
</article></div>'''
    write_if_changed(KIT/'index.html',frame('Zaxira rejasi — Azizbek Safarov',content,'zaxira'))

if __name__=='__main__':
    prepare();page()

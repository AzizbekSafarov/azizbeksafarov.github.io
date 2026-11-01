"""Build the current public HQ directly; no intermediate legacy layout."""
from pathlib import Path
from html import escape
import json,shutil
from workspace_hq import frame,build_library
from starter_page import page
from context_reading import markdown as reading_markdown
ROOT=Path(__file__).resolve().parent
SITE=ROOT.parent
URL='https://azizbeksafarov.github.io'

def write(path,text):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(text,encoding='utf-8',newline='\n')

def build(catalog=None):
    if catalog is None:
        catalog=json.loads((ROOT/'catalog.json').read_text(encoding='utf-8'))['templates']
    policy=json.loads((ROOT/'curation.json').read_text(encoding='utf-8'))
    byid={t['id']:t for t in catalog}
    catalog=[byid[i] for i in policy['featured']]
    fonts=SITE/'assets/hq/fonts'
    fonts.mkdir(exist_ok=True)
    for suffix in ('.ttf','-OFL.txt'):
        shutil.copyfile(ROOT/'type'/('sans'+suffix),fonts/('sans'+suffix))
    options=''.join(f'<option value="{t["slug"]}">{escape(t["name"])}</option>' for t in catalog)
    write(ROOT/'start/index.html',frame('AIga topshiriq — Azizbek Safarov',page(options),'start'))
    standard='''<div class="wrap"><section class="page-hero"><p class="eyebrow">DIZAYN VA QABUL MEZONLARI</p><h1>Ko‘rinish.<br>Mazmun. Amal.</h1></section><article class="prose"><h2>Bir xil ko‘rinishdan qochish</h2><p>Har bir dizaynning mazmun markazi, grid tuzilishi, shrift rollari va amal tili alohida. Faqat rangni almashtirish yangi dizayn hisoblanmaydi. Hamma sahifaga katta serif hero, uch karta va bir xil FAQ qo‘shilmaydi.</p><h2>Amal va tekshiruv</h2><p>Bo‘sh holat, bajariladigan amal va haqiqiy natija tekshiriladi. Desktop va telefonda sahifa ko‘riladi. Demo ma’lumot belgilangan. Ishlamaydigan checkout yoki soxta yuborish yo‘q. Oldingi QA bugungi tahrirga kafolat emas.</p><h2>O‘qilgan manbalar</h2><p><a href="https://www.nngroup.com/articles/good-visual-design/">Kelley Gordon / NNGroup: grid, typographic system, strategic color, useful imagery</a></p><p><a href="https://claude.com/marketplace/plugins/frontend-design">Anthropic: maqsad va aniq estetik yo‘nalish, takroriy AI qoliplaridan qochish</a></p><p><a href="https://www.anthropic.com/engineering/harness-design-long-running-apps">Anthropic: generator va mustaqil evaluator bilan sifatni tekshirish</a></p><p><a href="https://www.muuto.com/">Muuto: mahsulot va fotografiya</a> · <a href="https://www.nasa.gov/">NASA: tahririy iyerarxiya</a> · <a href="https://m3.material.io/">Material Design 3</a></p><p>Bu mustaqil ishlar; ushbu tashkilotlar bizning dizaynlarni yaratgan yoki tasdiqlagan deb da’vo qilinmaydi. SI.gov muallifini tasdiqlovchi ishonchli kredit topilmadi.</p><a class="button" href="/design/DESIGN-STANDARD.md" download data-download>Standartni Markdown formatida yuklash ↓</a></article></div>'''
    write(ROOT/'standart/index.html',frame('Sifat mezonlari — Azizbek Safarov',standard,'quality'))
    write(SITE/'404.html',frame('Sahifa topilmadi','<section class="wrap page-hero"><p class="eyebrow">404 / SAHIFA TOPILMADI</p><h1>Yangi manzilni tanlang.</h1><p class="lead">Kutubxonadan faol dizayn yoki AI yo‘riqnomasini toping.</p><a class="button" href="/design/">Dizaynlarni ochish ↗</a></section>','none'))
    import entry_text
    designs='\n'.join(f'- [{t["name"]}]({URL}/design/{t["slug"]}/ai.md): {t["summary"]}' for t in catalog)
    brief=f"""# Azizbek — tanlov tayyorgarligi: AI uchun kirish

{entry_text.REVIEWED}. Bu Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi uchun ochiq ish maydonining kirish nuqtasi. Foydalanuvchi — Azizbek Safarov. U kod yozmaydi: bilet va qarorlarni beradi, natijani tekshiradi; kodni AI yozadi va sinaydi. U bilan o‘zbekcha, sodda tilda gaplash.

## O‘qish tartibi

{{READING_ORDER}}

## Tanlov

{entry_text.FACTS_UZ}

## Dizaynlar

Bittasini tanlang; har birining ai.md faylida vizual kontrakt, fayl xaritasi, ishga tushirish va saqlanadigan oqimlar bor.

{designs}

## Ish usuli

- Tanlangan dizaynning uslubini (shriftlar, rang rollari, kompozitsiya, amal tili) saqla; mazmun, navigatsiya va funksiyalarni biletga moslashtir.
- Talab → foydalanuvchi amali → kod joyi → qabul sinovi jadvali bilan ishla. Asosiy oqimni oxirigacha, noto‘g‘ri kiritishni, 390/768/1366 px kengliklarni, klaviaturani va reloaddan keyingi saqlashni tekshir. Xatoni takrorla, sababini tuzat, qayta sina.
- Natija, o‘zgargan fayllar va ochiq muammolarni loyihadagi HANDOFF.md ga yoz; tekshirilgan va tekshirilmaganni ajratib ayt.
- {entry_text.BACKEND_UZ}
- Maxfiy kalitlar bu ochiq hujjatlarda yo‘q va kodga yozilmaydi.

## Boshqa manbalar

- [Bilet yozish va AIga tayyor matn]({URL}/design/start/) · [Jonli katalog]({URL}/design/) · [Barcha kod + tanlov matnlari ZIP]({URL}/design/kit.zip) · [Machine-readable katalog]({URL}/design/catalog.json)
- [Tanlov tadqiqoti]({URL}/ustoz/ai.md) · [Nizomlar: 39 sahifa]({URL}/ustoz/nizom.md) · [Mezonlardan ish rejasiga]({URL}/ustoz/06-SCORE-WORKPLAN.md) · [Kontekst maqomi: tarixiy va joriy]({URL}/ustoz/CONTEXT-STATUS.md)
- [To‘liq o‘qish: tayyorgarlik]({URL}/tayyorgarlik/ai.md), [yig‘ma matn]({URL}/tayyorgarlik/full-context.md), [bo‘limli xarita]({URL}/tayyorgarlik/reading-plan.json)
- [Sahifalar va mahsulot oqimi]({URL}/arxitektura/#sahifalar) · [Professional sifat mezonlari]({URL}/arxitektura/#sifat) · [API va sanali sinovlar]({URL}/api/ai.md)
- [Sifat standarti]({URL}/design/DESIGN-STANDARD.md) · [Tekshirib yuklash yordamchisi]({URL}/design/get_starter.py) — manifest va ZIP hashlarini solishtiradi.
- Pages ochilmasa: https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/ai.md

## Codex va AI’siz zaxira

[CODEX.md]({URL}/zaxira/CODEX.md) — foydalanuvchi Codex bilan tanlangan starterda ishlaydigan so‘rovlar ketma-ketligi: sozlash, reja → qurish → sinov → ko‘rinish → hujjatlar, vaqt va limit. [ZAXIRA.md]({URL}/zaxira/ZAXIRA.md), [build’siz skelet]({URL}/zaxira/skelet/) va kodsiz panel — AI ishlamay qolganda foydalanuvchining o‘zi uchun; [JONLI-OZGARISH.md]({URL}/zaxira/JONLI-OZGARISH.md) — himoyada matn, rang yoki elementni AI’siz o‘zgartirish. AI loyihani skeletdan emas, tanlangan starterdan quradi.
"""
    brief=brief.replace('{READING_ORDER}', reading_markdown().rstrip())
    write(SITE/'ai.md',brief)
    build_library(catalog)
    from build_architecture import build as build_architecture
    build_architecture()
    from build_workflow import build as build_workflow
    build_workflow()
    from build_preparation import build as build_preparation, build_page
    build_preparation()
    build_page()
    from build_zaxira import prepare as prepare_zaxira, page as zaxira_page
    prepare_zaxira()
    zaxira_page()
    llms_path=SITE/'llms.txt'
    llms=llms_path.read_text(encoding='utf-8').split('\n## System architecture')[0].rstrip()
    write(llms_path,llms+'\n\n## System architecture\n\n- [Practical competition rules review, 2026-10-28](https://azizbeksafarov.github.io/design/handoff/current-competition.md)\n- [AI workflow and possible failure scenarios](https://azizbeksafarov.github.io/ish-tartibi/ai.md)\n- [Dated public status snapshot](https://azizbeksafarov.github.io/ish-tartibi/status.json)\n- [Server plan (Render + Supabase), used only when a ticket needs a server, login or database](https://azizbeksafarov.github.io/arxitektura/ai.md)\n- [API integration and dated probe evidence](https://azizbeksafarov.github.io/api/ai.md)\n- [Credential-free probe data](https://azizbeksafarov.github.io/api/verification.json)\n- [Codex prompt sequence for the user on the selected starter](https://azizbeksafarov.github.io/zaxira/CODEX.md)\n- [User’s AI-free fallback: build-free skeleton and no-code editor](https://azizbeksafarov.github.io/zaxira/ZAXIRA.md)\n\nPlanned infrastructure is explicitly distinguished from deployed services. Never treat these public documents as a source of credentials.\n')

if __name__=='__main__':build()

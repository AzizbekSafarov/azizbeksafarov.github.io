# Tanlov uchun AI paketlari

Boshlash markazi: https://azizbeksafarov.github.io/design/start/

Esda qoladigan tanlangan dizayn sahifasi: `/design/bloom/`, `/design/si/`, `/design/qadam/`, `/design/kasblab/`, `/design/samar/`, `/design/orbit/`, `/design/forma/`, `/design/pulse/`, `/design/lola/`, `/design/spark/`, `/design/city/`. `/dezayn/<shu-nom>/` ham asosiy sahifaga yo‘naltiradi. Bloom qisqa `/bloom/` orqali ham ochiladi.

Har route statik HTML’da to‘liq boshlang‘ich yo‘riqnomani beradi: yangi AIga JavaScript kerak emas. `ai.md` — ixcham kontekst; `source.md`/`source.html` — minified bo‘lmagan tahrirlanadigan kod; `source.zip` — to‘liq source, build, local font va agent fayllari; `manifest.json` — SHA-256 va haqiqiy fayl tarkibi. `catalog.json` barcha route’larni beradi.

Ba’zi AI veb-o‘qish vositalari Pages sahifasini ocholmasligi sinovda aniqlandi. Shu sabab tayyor prompt, qisqa brief va manifestda `raw.githubusercontent.com` zaxira manbalari ham bor. AI uchun alohida source fayllari shu to‘g‘ridan-to‘g‘ri matn manbasiga bog‘langan. ZIP va qo‘lda nusxalash yo‘li ham mavjud.

## Foydalanish

1. Tanlangan dizaynning URLini AIga bering. Bilet va haqiqiy qolgan vaqtni yozing.
2. AI tanlangan brief va kerakli sourceni o‘qiydi. ZIP yuklab, `CURRENT-TASK.md` ga biletni kiritadi.
3. `node serve.mjs` tayyor namunaning local previewini npm o‘rnatmasdan ochadi. Python usuli paket README’sida. Bloom’ning source tahriri uchun o‘rnatilgan/cache’dagi npm paketlari yoki internet kerak.
4. AI visual contractni saqlab funksiyalarni moslashtiradi; xatoni takrorlaydi, tuzatadi va qayta tekshiradi. `CHECKLIST.md` bilan haqiqiy test natijasini yozadi.
5. Sessiya almashganda `CURRENT-TASK.md` va `HANDOFF.md` yangi AIga beriladi.

Paket xatosizlik yoki istalgan AI avtomatik ish boshlashini kafolatlamaydi. O‘qish va tahrirlash vositasi bo‘lmagan AIga matn/fayl bevosita beriladi. Tanlovdagi bilet va reglament ustuvor. Katta tadqiqot faqat zarur bo‘lganda ochiladi; qisqa brief 12 KB’dan kam.

`kit.zip` (~4.5 MB) barcha 11 starter ZIP, har birining AI matni/manifesti, qisqa tanlov konteksti va oldin yig‘ilgan to‘liq local+web tadqiqot matnini saqlaydi. Asl PDFlar qisqa kontekstdagi `/ustoz/sources/` havolalarida; ulkan imzoli skan kitga takror kiritilmagan.

## Yangilash

Original manbalarni tahrirlang. Bloom uchun avval `npm run test` va `npm run build`; HTML kutubxona generatorlari ishlatilsa, ularni avval bajaring. Keyin repository root’dan:

```text
python design/build_handoff.py
python design/verify_handoff.py
node --check design/handoff/prompt.js
node --check design/handoff/serve.mjs
```

Generator asl dizayn/runtime kodini o‘zgartirmaydi. U brief, HTML entry, code export, ZIP, manifest, katalog, qisqa alias va galereyadagi AI havolalarini yangilaydi. `design/templates.json` asosiy mavjud variantlar katalogi. Yangi variant uchun shu katalogga yozuv va `build_handoff.py` dagi SLUGS/LOOKS/FLOWS xaritasiga tegishli ma’lumot qo‘shiladi. Generator snapshot sanasi ham yangilanadi.

`design/handoff/competition-full.md` — 2026-10-09 tadqiqotining saqlangan matni, live dashboardning bugungi holati emas. Yangilangan tadqiqot kerak bo‘lsa, tasdiqlangan nusxa bilan almashtiriladi. Build internetdan ma’lumot yoki kod yuklamaydi.

Yuksal · SI: SI.gov vizual uslubidagi 11-variant. Jonli namuna `/design/si-site/`, AI entry `/design/si/`. Source `si-site/` ichida; oddiy ES modules va local fonts, npm kerak emas.

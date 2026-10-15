# Tanlov uchun AI paketlari

Boshlash markazi: https://azizbeksafarov.github.io/design/start/

Faol tanlov: `/design/bloom/` va `/design/si/`. `/dezayn/<nom>/` ham shu kontekstga yo‘naltiradi. Bloom qisqa `/bloom/` orqali ochiladi. Oldingi 01–09 variantlar tarixiy arxiv; ular faol katalog, kit va galereyadan chiqarilgan. Sabablar: `/design/archive/` va `curation.json`.

Har route statik HTML’da to‘liq boshlang‘ich yo‘riqnomani beradi: yangi AIga JavaScript kerak emas. `ai.md` — ixcham kontekst; `source.md`/`source.html` — minified bo‘lmagan tahrirlanadigan kod; `source.zip` — to‘liq source, build, local font va agent fayllari; `manifest.json` — SHA-256 va haqiqiy fayl tarkibi. `catalog.json` barcha route’larni beradi.

Ba’zi AI veb-o‘qish vositalari Pages sahifasini ocholmasligi sinovda aniqlandi. Shu sabab tayyor prompt, qisqa brief va manifestda `raw.githubusercontent.com` zaxira manbalari ham bor. AI uchun alohida source fayllari shu to‘g‘ridan-to‘g‘ri matn manbasiga bog‘langan. ZIP va qo‘lda nusxalash yo‘li ham mavjud.

## Foydalanish

1. Tanlangan dizaynning URLini AIga bering. Bilet va haqiqiy qolgan vaqtni yozing.
2. AI tanlangan brief va kerakli sourceni o‘qiydi. ZIP yuklab, `CURRENT-TASK.md` ga biletni kiritadi.
3. `node serve.mjs` tayyor namunaning local previewini npm o‘rnatmasdan ochadi. Python usuli paket README’sida. Bloom’ning source tahriri uchun o‘rnatilgan/cache’dagi npm paketlari yoki internet kerak.
4. AI visual contractni saqlab funksiyalarni moslashtiradi; xatoni takrorlaydi, tuzatadi va qayta tekshiradi. `CHECKLIST.md` bilan haqiqiy test natijasini yozadi.
5. Sessiya almashganda `CURRENT-TASK.md` va `HANDOFF.md` yangi AIga beriladi.

Paket xatosizlik yoki istalgan AI avtomatik ish boshlashini kafolatlamaydi. O‘qish va tahrirlash vositasi bo‘lmagan AIga matn/fayl bevosita beriladi. Tanlovdagi bilet va reglament ustuvor. Katta tadqiqot faqat zarur bo‘lganda ochiladi; qisqa brief 12 KB’dan kam.

`kit.zip` faqat 2 tanlangan starter ZIP, ularning AI matni/manifesti, qisqa tanlov konteksti va yig‘ilgan to‘liq local+web tadqiqot matnini saqlaydi. Asl PDFlar `/ustoz/sources/` havolalarida. Har bir starter ichida `DESIGN-STANDARD.md` ham bor. Tarixiy paketlar alohida saqlanadi.

## Yangilash

Original manbalarni tahrirlang. Bloom uchun avval `npm run test` va `npm run build`; HTML kutubxona generatorlari ishlatilsa, ularni avval bajaring. Keyin repository root’dan:

```text
python design/build_handoff.py
python design/verify_handoff.py
node --check design/handoff/prompt.js
node --check design/handoff/serve.mjs
```

Generator faol Bloom/Yuksal runtime kodini o‘zgartirmaydi. U brief, code export, ZIP, manifest, alias, markaziy sahifalar va galereyani yangilaydi. Arxivdagi 01–09 eski demo manzillariga arxiv izohini yaratadi; asl HTML `archive/legacy/`dan o‘qiladi. `templates.json` tarixiy metadata, `curation.json` esa faol/arxiv tanlovining manbasi. Yangi variant uchun shu katalogga yozuv va `build_handoff.py` dagi SLUGS/LOOKS/FLOWS xaritasiga tegishli ma’lumot qo‘shiladi. Generator snapshot sanasi ham yangilanadi.

`design/handoff/competition-full.md` — 2026-10-09 tadqiqotining saqlangan matni, live dashboardning bugungi holati emas. Yangilangan tadqiqot kerak bo‘lsa, tasdiqlangan nusxa bilan almashtiriladi. Build internetdan ma’lumot yoki kod yuklamaydi.

Yuksal · SI: SI.gov vizual uslubidagi 11-variant. Jonli namuna `/design/si-site/`, AI entry `/design/si/`. Source `si-site/` ichida; oddiy ES modules va local fonts, npm kerak emas.

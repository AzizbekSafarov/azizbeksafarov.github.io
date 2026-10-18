# Azizbek Safarov — ochiq ish maydoni

https://azizbeksafarov.github.io/

To‘qqiz faol dizayn: Bloom, Yuksal, Orbita, Nashr, Hisob, Ziyo, Meros, Samar va Forma. Bosh sahifa — yirik haqiqiy ko‘rinishlar, vazifaga mos tavsiflar, qidirish/filtr va tanlangan dizayn uchun alohida tafsilot. Tanlash holati URLda saqlanadi; tanlangan namuna havolasini nusxalash mumkin.

Barcha ekranlarda avval namunalar, tanlangach tafsilot ochiladi. URLdagi `design`, `q`, `type`, `view` parametrlari tanlov, qidiruv, filtr va ro‘yxat holatini tiklaydi. “AI bilan boshlash” tanlangan dizaynni formaga uzatadi; bilet va vaqt kiritilmaguncha topshiriq nusxalanmaydi. Maydonlar serverga yuborilmaydi.

Topshiriq qoralamasi brauzer xotirasida saqlanadi. JSON orqali boshqa kompyuterda tiklash, import/tozalashni qaytarish va CURRENT-TASK.md yuklash bor. Ikki tab bir-birining matnini ogohlantirishsiz almashtirmaydi. Bu avtomatik taymer yoki AI integratsiyasi emas. Model `assets/hq/starter-model.mjs`, controller `starter.mjs`, uslub `starter.css`, markup `design/starter_page.py` ichida.

- `/` va `/design/` — dizayn kutubxonasi.
- `/ai/` — brauzerda o‘qiladigan AI konteksti; `/ai.md` — asl matn.
- `/design/start/` — bilet/vaqt/dizayndan aniq AI topshirig‘i.
- `/design/kit.zip` — to‘qqiz kod paketi va tanlov konteksti.
- `/design/standart/` — sifat mezonlari.
- `/ustoz/` — alohida research Pages repozitoriysi.

HQ: `design/workspace_hq.py`, `assets/hq/workspace.css`, `exhibition.css`, `workspace.js`, `library-model.mjs`. `design/hq_v2.py` yordamchi sahifa mazmunini va markaziy kontekstni hosil qiladi; yakuniy HTMLni workspace generatori yozadi. Barcha shriftlar lokal. Generator CSS/JS va import qilingan model URLlarini content hash bilan yangilaydi.

Bosh sahifaning shakl tizimi `assets/hq/geometry.css`da, faqat `body[data-page="library"]`ga qo‘llanadi: ochiq qidiruv chizig‘i, tagchiziqli tablar, yon belgili namuna qatorlari, alohida asosiy/ikkinchi amal shakllari va asimmetrik namuna foni. Rasmlar maska bilan kesilmaydi. Ranglar va shrift oilasi workspace.cssdan olinadi.

Kutubxonaning grafit rang mavzusi `assets/hq/aurora.css`da: foydalanuvchi bergan AI tugmasi rasmini rang namunasi qilib, asosiy amalda iliq pushti/sariq va sovuq ko‘k/binafsha chegara, yumshoq nur hamda och matn ishlatilgan. Shu fayl kutubxona uchun workspace.css ranglarini almashtiradi; shakllar geometry.cssda qoladi. Demo saytlarning ranglari alohida saqlanadi.

```text
python design/build_hq.py
node design/qa/run.mjs
python design/build_handoff.py
python design/verify_handoff.py
python -m http.server 8770 --bind 127.0.0.1
```

Faqat HQ o‘zgarsa build_hq yetadi. Source yoki DESIGN-STANDARD o‘zgarsa build_handoff barcha manifest/ZIPni yangilaydi. Bloomning o‘z AGENTS.md qoidalariga rioya qiling; minified distni patch qilmang. Yuksalning oq foni va brend faviconi saqlanadi.

GitHub Pages main/rootdan nashr qiladi. Pushdan keyin deployment, ochiq HTML va muhim UI amallari tekshirilsin. Eski QA keyingi tahrirlar uchun dalil emas. HQ tekshiruvlari: `design/QA-HQ-FLOWS.json`, `design/QA-HQ-WORKSPACE.json`, `design/HQ-QA.md`.

Asosiy tugmadagi rang va nur birgalikda 6 soniyada to‘liq aylanadi. Buning uchun aurora.cssdagi `--aurora-angle` ro‘yxatdan o‘tgan CSS xususiyati ishlatiladi. Tugma matni va shakli aylanmaydi. `prefers-reduced-motion` yoqilganida rangli chegara harakatsiz qoladi.

Yakuniy 2026-10-18 upgrade dalili: `design/QA-UPGRADE.md`, `design/QA-UPGRADE-BROWSER.json`. 613 avtomatik test, ZIPlardan 488 test (shu to‘plamning bir qismi), 60 jonli responsive holat. `python design/verify_site.py` 33 sahifadagi lokal resurslar va anchorlarni ham tekshiradi.

# Azizbek Safarov — ochiq ish maydoni

https://azizbeksafarov.github.io/

To‘qqiz faol dizayn: Bloom, Yuksal, Orbita, Nashr, Hisob, Ziyo, Meros, Samar va Forma. Bosh sahifa — yon navigatsiya, qidirish/filtr, namunalar ro‘yxati va tanlangan dizayn uchun preview + aniq amallar. Tanlash holati URLda saqlanadi.

Telefonda avval namunalar ro‘yxati, tanlangach alohida tafsilot ochiladi. URLdagi `design`, `q`, `type`, `view` parametrlari tanlov, qidiruv, filtr va ro‘yxat holatini tiklaydi. “AI bilan boshlash” tanlangan dizaynni formaga uzatadi; bilet va vaqt kiritilmaguncha topshiriq nusxalanmaydi. Maydonlar serverga yuborilmaydi.

- `/` va `/design/` — dizayn kutubxonasi.
- `/ai/` — brauzerda o‘qiladigan AI konteksti; `/ai.md` — asl matn.
- `/design/start/` — bilet/vaqt/dizayndan aniq AI topshirig‘i.
- `/design/kit.zip` — to‘qqiz kod paketi va tanlov konteksti.
- `/design/standart/` — sifat mezonlari.
- `/ustoz/` — alohida research Pages repozitoriysi.

HQ: `design/workspace_hq.py`, `assets/hq/workspace.css`, `workspace.js`, `library-model.mjs`. `design/hq_v2.py` yordamchi sahifa mazmunini va markaziy kontekstni hosil qiladi; yakuniy HTMLni workspace generatori yozadi. Barcha shriftlar lokal.

```text
python design/build_hq.py
node --test assets/hq/library-model.test.mjs
python design/build_handoff.py
python design/verify_handoff.py
python -m http.server 8770 --bind 127.0.0.1
```

Faqat HQ o‘zgarsa build_hq yetadi. Source yoki DESIGN-STANDARD o‘zgarsa build_handoff barcha manifest/ZIPni yangilaydi. Bloomning o‘z AGENTS.md qoidalariga rioya qiling; minified distni patch qilmang. Yuksalning oq foni va brend faviconi saqlanadi.

GitHub Pages main/rootdan nashr qiladi. Pushdan keyin deployment, ochiq HTML va muhim UI amallari tekshirilsin. Eski QA keyingi tahrirlar uchun dalil emas. HQ tekshiruvlari: `design/QA-HQ-FLOWS.json`, `design/QA-HQ-WORKSPACE.json`, `design/HQ-QA.md`.

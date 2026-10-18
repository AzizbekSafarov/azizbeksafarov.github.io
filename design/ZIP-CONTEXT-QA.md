# ZIP va kontekst to‘liqligi — 2026-10-18

Savol: boshlashni osonlashtirishda muhim ma’lumot yo‘qolganmi?

## Tekshiruv xulosasi

Asl tadqiqot va nizom matnlari qisqartirilmagan: 192 196 bayt / 3 002 qatorli `internet-kontekst/ai.md` va 117 450 bayt / 1 855 qatorli `nizom.md` nusxalari kanonik SHA-256 bilan mos. Bu matnlarning asl PDFga nisbatan mustaqil yangi OCR ekspertizasi emas; mavjud kanonik matnning to‘liq saqlanganini tekshirishdir.

Oldin to‘liq tadqiqot umumiy kit.zip’da bor, alohida source.zip’da esa qisqa kontekst va to‘liq nizomlar bor edi. To‘liq tadqiqotga havola mavjud bo‘lsa-da, internet bo‘lmagan yoki faqat bitta ZIPni o‘qigan AI uchun kirish kamchiligi qolgan. Bundan tashqari, mezonlardan ish va taqdimot daliliga o‘tish rejasi havola sifatida qolib, boshlashda o‘tkazib yuborilishi mumkin edi. Ikkalasi tuzatildi.

## Endi har bir source.zip ichida

| Mazmun | Fayl |
| --- | --- |
| Aynan qaysi dizayn va o‘qish tartibi | START-HERE.md, AGENTS.md, AI-BRIEF.md |
| Hozirgi bilet va davom ettirish | CURRENT-TASK.md, HANDOFF.md va to‘liq shablonlar |
| Barcha yig‘ilgan tanlov matni | FULL-COMPETITION-CONTEXT.md |
| Uch hujjatning to‘liq 39 sahifasi | REGULATIONS.md |
| Mezon → amal → test → taqdimot dalili | SCORING-WORKPLAN.md |
| Manba maqomi, tasdiqlangan/draft/tarixiy farqi | CONTEXT-STATUS.md, COMPETITION.md |
| Amaldagi server/backend rejasi | ARCHITECTURE.md, PROJECT-STATUS.json |
| AI/Telegram, kvota va sanali sinovlar | API-GUIDE.md, API-EVIDENCE.json |
| Ehtimoliy muammolar, ko‘rsatma va tavsiyalar | WORKFLOW.md |
| Haqiqiy tanlangan kod, shrift va boshqa runtime resurslari | site/ |
| Original paket fayllarining hajmi va SHA-256 | PACKAGE-MANIFEST.json |
| Oflayn butunlik tekshiruvi | verify-package.mjs |

Nizom va kichik mezonlar manba maqomi bilan saqlanadi: 21 kichik ko‘rsatkich loyiha tahriridan. Joriy bilet va amaldagi reglament ustuvor. Asl PDFlar manba havolalarida; ular har bir source ZIP ichidagi alohida PDF fayllar deb ko‘rsatilmaydi. Maxfiy credential va shaxsiy moliyaviy ma’lumot bu ochiq paketlarga kirmaydi.

## Amalda tekshirildi

- To‘qqiz source ZIP va umumiy kit.zip: CRC, takror/case-collision yo‘llari, qat’iy UTF-8 matn o‘qilishi, manifestdagi hajm/SHA-256 — PASS.
- Har biri toza papkaga ochilib `node verify-package.mjs` — PASS. Har birida bir fayl ataylab o‘zgartirilganda tekshiruvchi rad etdi; original qayta tiklandi.
- Har bir ZIPdagi 192 196 baytli to‘liq tadqiqot va alohida baholash ish rejasi kanonik matn bilan aynan mos.
- To‘qqiz ochilgan starter: jami 488 kod testi PASS va har bir `node serve.mjs` preview’i HTTP 200. Bu shu kompyuterdagi toza papka sinovi; yangi jismoniy PC yoki barcha AI xizmatlarida import sinovi emas.
- [Mashina o‘qiydigan natijalar](https://azizbeksafarov.github.io/design/qa/zip-context-20261018.json).

Hash boshlang‘ich fayl o‘zgarganini aniqlaydi; imzolangan kelib chiqish kafolati emas. AI/user kodni tahrirlagach original hashdan farq bo‘lishi tabiiy. Tahrirdan oldin tekshirish va undan keyin loyiha testlarini bajarish kerak.

## AI uchun qoida

Boshlash matni to‘liq manbani almashtirmaydi. Tanlov ishida qisqa kontekst va mezon/dalil rejasini o‘qi. To‘liq o‘qish so‘ralganda katta faylni bo‘limlar bo‘yicha to‘liq o‘qi; o‘qilmagan qismini ochiq ayt. Asl mazmunni token tejash uchun avtomatik kesma. Agar vosita ZIPni ocholmasa, ochilgan START-HERE.md va kerakli fayllar yoki saytdagi o‘qiladigan manba ishlatiladi.

Testmaxing/benchmaxing maqsad qilinmaydi. Bu yerda keltirilgan tekshiruvlar aynan matn saqlanishi, fayl butunligi va ishga tushirishdagi o‘zgarishga tegishli. Sonlar mahsulotga sifat reytingi bermaydi; 488 paket testi repodagi to‘plamning bir qismi. Bajarilmagan provider/load/new-PC sinovlari o‘tkazilgan deb ko‘rsatilmaydi.

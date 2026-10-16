# Kengaytirilgan QA — 2026-10-16

35 ta avvalgi testdan 544 ta avtomatik testga kengaytirildi. Oxirgi ishga tushirish: **544 passed, 0 failed**. Barcha dizaynlarning tasdiqlangan vizual uslubi saqlandi.

## Qayta ishga tushirish

To‘liq repoda, ildiz papkadan:

```sh
node design/qa/run.mjs
python design/build_handoff.py
python design/verify_handoff.py
```

HTML starter ZIP ichida: `node --test site/*.test.mjs`. Bloom ZIP ichida: `cd site`, `npm ci`, `npm run test`, `npm run build`. Har bir paket kombinatsiya testlarini ham olib yuradi. Markaziy `design/qa/app-fixture.mjs` haqiqiy app.js event handlerlarini soddalashtirilgan DOM/storage bilan tekshiradi; bu brauzer yoki vizual test emas.

## Kombinatsiyalar

- Bloom: 3 bo‘lim × 4 kategoriya × 4 qidiruv × 2 saralash = 96; kutilgan IDlar alohida katalog jadvali bilan tekshiriladi. 8 task maskasi; 80/200 belgi va 200 loyiha chegaralari; buzilgan persisted state.
- Hisob: 2 davr × 7 qidiruv × 2 saralash × 2 yo‘nalish = 56. CSV bo‘sh holati, qo‘shtirnoq/newline escaping, dataset o‘zgarmasligi va o‘zbekcha apostroflar.
- Samar: 16 xil tartiblangan manzil tanlovi × 5 boshlash vaqti = 80; tun yarmidan o‘tish, noto‘g‘ri vaqt, eksport va sanitizatsiya.
- Forma: mahsulot/miqdor chegaralari va bitta test ichida **1000 ketma-ket amal**; mustaqil hisob bilan jami, 0–20 chegara, immutability va JSON round trip. 1000 amal alohida 1000 test deb sanalmaydi.
- Yuksal: rejaning barcha 16 to‘plami; tanlash/olish, eksport va mavjud motion testlari.
- Bosh sahifa: haqiqiy katalog ustida 40 URL holati, 9 dizayn havolasi va noma’lum/xavfli sluglar.
- Sektorlar: noto‘g‘ri JSON qiymatlari, takror/noma’lum IDlar, tanlov tartibi, manbalar, mahalliy rasmlar va dars javoblari. Event regressiyalar: Ziyo, Orbita, Meros va storage cheklovlari.

## Aniqlangan va tuzatilgan sabablar

| Dizayn | Xato | Tuzatish va dalil |
| --- | --- | --- |
| Ziyo | To‘g‘ri javobdan so‘ng noto‘g‘ri javob yuborilsa, Keyingi tugmasi ochiq qolgan. | Har yuborishda ruxsat qayta hisoblanadi. Haqiqiy brauzerda takrorlandi; event regressiya qo‘shildi. |
| Hisob | `farg'ona`, `fargʻona`, `fargʼona`, `fargona` yozuvlari `Farg‘ona`ni topmagan. | Query va hudud nomi bir xil normalizatsiyadan o‘tadi. Model hamda brauzerda tekshirildi. |
| Orbita | Pause → tab yashirin → qaytish → resume ketma-ketligi inline pause holatini qoldirgan. | Yagona motion holati body pause va document.hidden’dan hisoblanadi. Visibility ketma-ketligi event fixture’da; oddiy pause/resume haqiqiy brauzerda tekshirildi. |
| Bloom | Storage’dagi bo‘sh yoki 200 belgidan uzun task nomlari qabul qilingan. | Validator task matnini ham tekshiradi. Yangi test oldin yiqildi, tuzatishdan keyin o‘tdi; production build yangilandi. |
| Meros | Ikkinchi eksponat yolg‘iz filtrlanganda uning raqami 01, yonidagi belgisi esa 02 bo‘lgan. | Raqam to‘liq katalogdagi doimiy o‘ringa bog‘landi. Brauzer va event fixture’da tekshirildi. |

## ZIP paketlarini alohida tekshirish

9 ta yangi source.zip alohida papkalarga ochilib, ichidagi testlar ishga tushirildi: Forma 49, Samar 93, Orbita 17, Nashr 17, Meros 17, Ziyo 54, Hisob 75, Yuksal 25, Bloom 123 — barchasi o‘tdi. Bu jami 470 test to‘liq repodagi 544 testning bir qismi; qo‘shimcha 470 alohida test emas. [Natijalar JSONi](https://azizbeksafarov.github.io/design/qa/portable-results.json).

## Haqiqiy brauzer tekshiruvi

[O‘lchovlar va oxirgi 23 ssenariy JSONi](https://azizbeksafarov.github.io/design/QA-EXPANDED-BROWSER.json).

- 10 sahifa × 7 kenglik: **70 holat**, yakuniy build bilan qayta tekshirildi. 1440, 1024, 768, 600, 390, 360, 320 px. Gorizontal document overflow 0; ko‘rinadigan rasmlar yuklangan; takror ID yo‘q; har sahifada bitta main.
- Hisob’da 32 davr/qidiruv/saralash/yo‘nalish kombinatsiyasi; CSV yuklash. Ziyo’da to‘g‘ri → noto‘g‘ri, uch modul, demo tugmasi va reload progress.
- Forma’da 4 kategoriya, 20 chegara, kamaytirish, oxirgi buyumni olish, bo‘sh savat, Escape/fokus va ikki tabda savat yangilanishi.
- Nashr’da 16 kategoriya/saqlangan kombinatsiyasi. Meros’da kategoriya va saqlangan filtri, o‘zgarmas eksponat raqami, indeksdan to‘g‘ri eksponatga o‘tish.
- Bloom’da 24 bo‘lim/kategoriya/ko‘rinish kombinatsiyasi, bo‘sh qidiruv natijasi, noto‘g‘ri forma, 80/200 belgili yangi loyiha va 320 px overflow. Yozish xato xabarini tozalaydi. Oxirgi qaydda 8 palitra/rejim kombinatsiyasi, uch checkbox → bajarilgan bo‘lim → reload ham tekshirildi.
- Oxirgi qaydda Orbita uch missiya/reload/pause/resume, Samar 23:59 va manzil tartibi/reload/bo‘sh reja, Yuksal 4 filtr, pause va mobil menyu Escape/fokus ham bor.

Avtomatik testlar barcha brauzerlar yoki barcha qurilmalarning kafolati emas. Ushbu tekshiruv bitta Chromium asosidagi brauzerda bajarildi. Storage xatolari va visibility ketma-ketliklarining ayrimlari unit fixture’da sinalgan; ularni haqiqiy OS/brauzer tajribasi deb hisoblamang. Kenglik tekshiruvi to‘liq accessibility yoki kontrast auditi o‘rnini bosmaydi.

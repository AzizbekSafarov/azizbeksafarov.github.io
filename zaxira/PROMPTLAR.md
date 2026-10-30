# Kichik AI uchun tayyor so‘rovlar

Kuchsiz yoki limitli AI katta loyihani bir yo‘la o‘zgartirishda adashadi, lekin **bitta kichik faylni aniq qoida bilan** yaxshi to‘ldiradi. Shuning uchun:

- har safar faqat **bitta fayl** bering va o‘sha faylni **to‘liq** qaytarishni so‘rang;
- javobni faylga qo‘yishdan oldin Ctrl+A bilan eski matnni tanlab almashtiring, saqlang, brauzerda **Ctrl+Shift+R** bosing;
- buzilsa — Ctrl+Z; ikki urinishdan keyin ham bo‘lmasa, o‘sha qismni qo‘lda yozing;
- AI javobini tekshirmasdan qabul qilmang: `index.html?tekshir` va qo‘lda sinov.

Kvadrat qavsdagi joylarni almashtiring. Har so‘rov alohida, yangi chatda ham ishlaydi.

---

## P0 — Har chat boshida (qisqa qoida)

```text
Sen kichik statik veb loyihada yordamchisan. Loyiha build'siz: index.html, uslub.css, malumot.js, ilova.js, mantiq.js.
Qoidalar: faqat men bergan faylni o'zgartir; faylni boshidan oxirigacha to'liq qaytar; yangi kutubxona, framework yoki npm qo'shma;
tuzilishni, o'zgaruvchi nomlarini va funksiya nomlarini saqlab qol; tushuntirishni 3 qatordan oshirma. O'zbek tilida yoz.
```

## P1 — Biletdan `malumot.js` yaratish (eng muhim)

```text
Quyida tanlov bileti va malumot.js fayli. malumot.js ni biletga moslab to'liq qaytar.
- window.SAYT, window.ELEMENTLAR, window.FORMA tuzilishi va kalit nomlari o'zgarmasin.
- Biletdagi jadvalni ELEMENTLAR ga aynan ko'chir: nom, sana (YYYY-MM-DD), vaqt, joy, narx. O'ylab topma.
- id: lotin harf/raqam, takrorlanmasin. Sig'im biletda yo'q bo'lsa joylar: 0.
- FORMA.maydonlar: biletdagi majburiy maydonlar majburiy: true. Turlar faqat: matn, matnmaydon, telefon, email, son, sana, tanlash, belgi.
- "element" nomli tanlash maydoni qolsin (ro'yxatdan tanlash uchun).
- Sahifalardan biletga keraksizini o'chir. namuna: false qil.
- Matnlar qisqa, aniq, o'zbekcha; foydalanuvchiga keyingi qadamni aytsin.

BILET:
[biletni to'liq qo'ying]

MALUMOT.JS:
[faylni to'liq qo'ying]
```

## P2 — Faqat forma maydonlarini o‘zgartirish

```text
Faqat window.FORMA qismini qaytar (boshqa qismlarni yozma).
Kerakli maydonlar: [masalan: ism (majburiy), telefon (majburiy), email (ixtiyoriy), ishtirokchilar soni 1-5 (son, majburiy), sana (kelajak, majburiy)].
Turlar: matn, matnmaydon, telefon, email, son (min/max), sana (otmishEmas: true), tanlash, belgi.
Har maydonga tushunarli yorliq va kerak bo'lsa maslahat yoz.

HOZIRGI FORMA:
[window.FORMA = {...} qismini qo'ying]
```

## P3 — Matnlarni yaxshilash (mazmun 2.1–2.3)

```text
Quyidagi SAYT obyektidagi matnlarni bilet mavzusiga moslab yaxshila: qisqa, aniq, foydalanuvchi nima qila olishini va keyingi qadamni aytsin.
Kalit nomlari va tuzilish o'zgarmasin. Bilet ma'lumotini (sana, narx, manzil) o'zgartirma. Faqat window.SAYT = {...} ni qaytar.

MAVZU: [bilet mavzusi, foydalanuvchi]
SAYT:
[window.SAYT = {...} qismini qo'ying]
```

## P4 — Rang va ko‘rinish

```text
uslub.css faylining faqat :root { ... } blokini qaytar. Mavzu: [mavzu]. Asosiy rang: [rang yoki "mos tanla"].
Matn va fon kontrasti kamida 4.5:1 bo'lsin. Boshqa qoidalarni yozma.

:ROOT:
[:root { ... } blokini qo'ying]
```

## P5 — Xatoni tuzatish

```text
Brauzer konsolida xato: [qizil qatordagi xabarni aynan qo'ying, fayl va qator raqami bilan].
Quyida o'sha fayl. Xatoning sababini 1 jumlada ayt va faylni tuzatib to'liq qaytar. Boshqa narsani o'zgartirma.

FAYL ([fayl nomi]):
[faylni to'liq qo'ying]
```

Konsol xatosi bo‘lmasa, xatoni aniq tasvirlang: “[qaysi tugmani bosdim] → [kutgandim] → [aslida bo‘ldi]”.

## P6 — Bitta qo‘shimcha funksiya (kreativlik 6.1–6.2)

```text
ilova.js ga quyidagi funksiyani qo'sh: [masalan: ro'yxatni sana yoki narx bo'yicha saralash tanlovi / tanlangan element uchun jami narx = narx × soni].
Mavjud funksiyalarni o'chirma. Matnni faqat textContent bilan qo'y (innerHTML ishlatma). Kerak bo'lsa index.html ga qo'shiladigan aniq qatorni alohida ber.
Funksiya bo'sh va noto'g'ri qiymatda buzilmasin.

ILOVA.JS:
[faylni to'liq qo'ying]
```

## P7 — README va sinov hisoboti

```text
Quyidagi README shablonini to'ldir. Faqat men bergan faktlarni yoz; sinab ko'rilmagan narsani "o'tdi" dema.
Bilet talablari: [T1..Tn]. Bajardim: [ro'yxat]. Sinov natijalari: [?tekshir natijasi va qo'lda sinovlar]. Topilgan xato va tuzatish: [...].
Vositalar: [...]. Cheklovlar: [...].

README:
[README.md ni qo'ying]
```

## P8 — Himoya matni

```text
5 daqiqalik taqdimot matnini yoz (o'zbekcha, oddiy gaplar): kim uchun, qaysi muammo, asosiy yechim, nega shu vosita, nima o'zgartirdim, qanday sinadim, cheklov.
Faqat quyidagi faktlardan foydalan, o'ylab topma:
[README.md mazmunini qo'ying]
```

---

## AI’siz ishlash

Kod bilmasangiz, AI’dan `malumot.js` so‘ramang — `skelet/tahrir.html` panelida o‘zingiz to‘ldiring: matn, rang, ro‘yxat (jadvalni nusxalab qo‘yish mumkin), forma maydonlari, sahifalar. Panel faylni har doim to‘g‘ri yozadi.

AI P1 bo‘yicha `malumot.js` bersa: faylni papkaga qo‘ying, `tahrir.html` ni oching. Panel ochilib, qizil xato ko‘rsatmasa, AI javobi to‘g‘ri. Panel “malumot.js o‘qilmadi” desa, AI faylni buzgan: toza nusxani qaytaring.

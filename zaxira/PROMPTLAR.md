# Kichik AI uchun tayyor so‘rovlar

Bu so‘rovlar faqat foydalanuvchi AI’siz zaxira skeletini tanlab, keyin kichik tahrirga AI yordamini so‘rasa ishlatiladi. Asosiy yo‘l — tanlangan starter va CODEX.md. Natija model va vazifaga bog‘liq; kichik fayl ham tekshiriladi. Shuning uchun:

- har safar odatda **bitta fayl** bering va uni **to‘liq** qaytarishni so‘rang; P2–P4 kabi aniq blok so‘ralgan bo‘lsa faqat o‘sha blokni almashtiring;
- javobni faylga qo‘yishdan oldin Ctrl+A bilan eski matnni tanlab almashtiring, saqlang, brauzerda **Ctrl+Shift+R** bosing;
- buzilsa — Ctrl+Z; ikki urinishdan keyin ham bo‘lmasa, o‘sha qismni qo‘lda yozing;
- AI javobini tekshirmasdan qabul qilmang: `index.html?tekshir` va qo‘lda sinov.

Kvadrat qavsdagi joylarni almashtiring. Har so‘rov alohida, yangi chatda ham ishlaydi.

---

## P0 — Har chat boshida (qisqa qoida)

```text
Sen kichik statik veb loyihada yordamchisan. Loyiha build'siz: index.html, uslub.css, malumot.js, ilova.js, mantiq.js.
Qoidalar: so'ralgan scope'da ishlagin; to'liq fayl so'ralsagina uni boshidan oxirigacha qaytar, aniq blok so'ralsa faqat shu blokni qaytar; yangi kutubxona, framework yoki npm qo'shma;
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
- Faqat biletga keraksiz sahifalarni o'chir. namuna: false faqat vaqtinchalik mazmun to'liq almashtirilganida; sintetik dataset bo'lsa foydalanuvchiga bu haqda rost izoh qoldir.
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
Avval panel va mavjud kodda shu imkoniyat borligini tekshir: saralash va jami narx allaqachon tayyor. Haqiqatan yetishmasa so'ralgan funksiyani ilova.js ga qo'sh: [aniq imkoniyat].
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

Kod bilmasangiz, AI’dan `malumot.js` so‘ramang — `skelet/tahrir.html` panelida o‘zingiz to‘ldiring: matn, rang, ro‘yxat (jadvalni nusxalab qo‘yish mumkin), forma maydonlari, sahifalar. Panel sintaksisni yaratadi; saqlash natijasi va mazmunni tekshiring.

AI P1 bo‘yicha `malumot.js` bersa: faylni papkaga qo‘ying, `tahrir.html` ni oching. Panel ochilishi sintaksis va ayrim tuzilish tekshiruvlari o‘tganini bildiradi. Bu mazmun, sana/narx, biletga moslik yoki foydalanuvchi oqimi to‘g‘riligini isbotlamaydi; ularni bilet va haqiqiy amal bilan tekshiring. Panel “malumot.js o‘qilmadi” desa, avval fayl yo‘li va konsolni tekshiring; sababni avtomatik AI xatosi deb olmang. Joriy faylni saqlab qo‘yib, o‘zingizning oldingi ishlaydigan nusxangizdan tiklang.

# Shablonlarni moslashtirish

## 01 · KasbLab

- Uslub: och, ishonchli ta’lim mahsuloti.
- Asosiy rang: `#275bea`; fon: `#fcfbf7`; matn: `#152338`.
- Shrift: tizim sans-serif; katta va qalin bosh sarlavha.
- Tuzilma: menyu → ikki ustunli bosh blok → natijalar → kurs kartalari → murojaat bloki.
- Ishlaydigan elementlar: mobil menyu, kursga ariza oynasi, majburiy maydonlar va demo natija.
- Moslashtirish: kurslarni xizmat yoki yo‘nalishlarga, o‘quv interfeysini haqiqiy mahsulot ko‘rinishiga almashtiring.

## 02 · Samar

- Uslub: iliq, madaniy va tahririy turizm sahifasi.
- Asosiy rang: `#2c5c46`; fon: `#f6f2e9`; matn: `#25372e`.
- Shrift: sarlavhalar Georgia serif; asosiy matn tizim sans-serif.
- Tuzilma: menyu → me’moriy bosh blok → tarixiy ko‘rsatkichlar → sayohat kartalari → taassurot va ariza.
- Ishlaydigan elementlar: mobil menyu, tanlangan sayohat nomi bilan bron arizasi.
- Moslashtirish: shahar, tarixiy manzil, marshrut va narxlarni haqiqiy topshiriq ma’lumotlariga almashtiring.

## 03 · Orbit

- Uslub: qorong‘i fon, yirik tipografika, texnologik agentlik.
- Asosiy rang: `#c0f26c`; fon: `#101411`; matn: `#eef2e9`.
- Shrift: tizim sans-serif; katta sarlavha; kichik texnik yozuvlar.
- Tuzilma: menyu → bayonot → geometrik illyustratsiya → xizmatlar → filtrli portfolio → murojaat.
- Ishlaydigan elementlar: mobil menyu, portfolio kategoriyasi filtri, loyiha arizasi.
- Moslashtirish: portfolio va xizmatlarni tanlov biletiga mos haqiqiy mazmun bilan to‘ldiring.

## 04 · Forma

- Uslub: sokin va tartibli premium savdo katalogi.
- Asosiy rang: `#254f70`; fon: `#ffffff`; matn: `#27323b`.
- Shrift: bosh sarlavha va logotip Georgia; mahsulotlar tizim sans-serif.
- Tuzilma: e’lon tasmasi → menyu → kolleksiya → xizmat afzalliklari → filtrli katalog → brend hikoyasi.
- Ishlaydigan elementlar: mobil menyu, kategoriya filtri, savatga qo‘shish, savatdan o‘chirish, jami hisob.
- Moslashtirish: mahsulotlar, narxlar, tavsiflar va illyustratsiyalarni biletga moslashtiring.
- Chegara: savat miqdorlari shu brauzerda saqlanadi; checkout va to‘lov yo‘q.

## 05 · Pulseboard

- Uslub: och rangli boshqaruv paneli.
- Asosiy rang: `#4a61d8`; fon: `#f5f7fb`; matn: `#27334b`.
- Tuzilma: yon menyu → ko‘rsatkichlar → grafik va reyting → qidiruvli jadval.
- Ishlaydigan elementlar: 7/30 kunlik demo ko‘rsatkichlar va grafik, jadval qidiruvi, topilmagan holat, filtrlangan yozuvlarni CSV qilib yuklash.
- Moslashtirish: metrikalar, kategoriyalar, grafik va jadval ustunlarini haqiqiy sohaga moslashtiring.
- Mobil: yon menyu yuqoriga o‘tadi; jadval ichida gorizontal aylantirish ishlaydi.

## 06 · Qadam / Material 3 Expressive

- Ilhom: Google Material 3 Expressive, https://m3.material.io/ va https://design.google/library/expressive-material-design-google-research
- Shrift: mahalliy Google Sans Flex (400–700), rasmiy Google Fonts nusxasi; OFL litsenziyasi `assets/fonts/OFL.txt` ichida.
- Ranglar: primary `#0b57d0`, hero `#dfeaff`, sirt `#f5f7fc`, kurslar uchun tonal ko‘k/yashil/shaftoli.
- Tuzilma: navigatsiya raili, qidiruv, shaxsiy salomlashuv, davom ettirish kartasi, progress, filtrli kurslar.
- Tugmalar: katta pill, ikonka, hover holat qatlami, bosilish holati, fokus va haqiqiy natija.
- Funksiyalar: birga ishlaydigan kategoriya/qidiruv/saqlangan kurs filtrlari; bookmark; demo dars oynasi va takrorlanmaydigan bajarilgan dars; yorug‘/qorong‘i rejim.
- Saqlangan kurslar, 3 ta demo dars progressi va tema shu brauzerda saqlanadi. Progressni qayta boshlash tugmasi bor. Bu Google mahsuloti emas, mustaqil dizayn namunasidir.

## 07 · Lola

- Shrift juftligi: Fraunces serif + DM Sans.
- Ranglar: terrakota `#c44828`, krem `#fff8f2`, och yashil va shaftoli.
- Uslub: ijodiy mahorat darsi, gulli kompozitsiya, yumaloq kartalar va bosilishi seziladigan CTA.
- Funksiyalar: darsga demo ariza, mobil menyu.

## 08 · Spark

- Shrift juftligi: Space Grotesk + DM Sans.
- Ranglar: laym `#d9ef3f`, moviy `#b6d6ff`, pushti `#f5afd1`, qora matn.
- Uslub: katta geometrik tipografika, jasur rangli poster, portfolio va hamkorlik.
- Funksiyalar: 3 aksent rangni tugma bilan almashtirish, portfolio filtri, demo loyiha arizasi, mobil menyu.

## 09 · Open City

- Shrift juftligi: JetBrains Mono + DM Sans.
- Ranglar: to‘q sariq `#c84c20`, och sirt `#f9faf7`, yashil xarita `#dcebe7`.
- Uslub: tartibli xizmat katalogi, monospace sarlavhalar, chizma xarita, aniq CTA.
- Funksiyalar: xizmat filtri, demo murojaat, mobil menyu.

## Umumiy fayllar

- `shared.css`: umumiy elementlar, moslashuv, fokus, modal, filtrlar.
- `shared.js`: demo funksiyalar. Tashqi xizmatga murojaat qilmaydi.
- `templates.json`: variantlar tavsifi.
- `previews/`: brauzerda olingan sahifa ko‘rinishlari.
- `build_templates.py`: qayta yaratish manbasi.
- `extra_templates.py`: 06–09 variantlar manbasi.
- `extra.js`: kurs qidiruvi/saqlash, dars progressi, qorong‘i rejim va rang almashtirish.
- `assets/fonts`: mahalliy WOFF2 shriftlari, CSS va OFL litsenziyalari. Font manbalari Google Fonts hamda Google’ning rasmiy font repozitoriylaridir.

Namunalardagi narxlar, statistika, fikrlar va mijozlar haqiqiy natija yoki rasmiy dalil emas. Tanlovdagi yakuniy mazmun topshiriqqa mos yoziladi. Internetga joylash Azizbek variantni tanlagandan keyin bajariladi.

## Tekshiruv

2026-10-10: besh variantning mobil kengligi; KasbLab formasining demo natijasi; Samar sayohat nomi bilan ochilgan forma; Orbit portfolio filtri; Forma katalog filtri, savat jami va o‘chirish; Pulseboard davri, grafik, jadval qidiruvi va CSV yuklash brauzerda tekshirildi.

2026-10-10 qo‘shimcha: 06–09 desktop/mobil kengliklari va mahalliy shriftlar yuklanishi; Material kursni saqlash, saqlanganlar filtri, dars bajarish/progress va tema; Lola ariza oynasi; Spark rang almashtirish; Open City xizmat filtri brauzerda tekshirildi.

2026-10-10 to‘liq audit: barcha 9 variant 320, 390, 768, 1024 va 1440 px da tekshirildi. Mobil menyu, dialog fokusi, kontrast, tugmalar, savat miqdori/saqlanishi, kurs progressi va dashboard mosligi tuzatildi. Batafsil natijalar: `QA-REPORT.md`. JS manbalari: `src/shared.js`, `src/extra.js`.

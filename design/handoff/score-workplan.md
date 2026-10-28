# Mezonlar bo‘yicha professional ish va dalil rejasi

2026-10-28 tekshiruvi: 6 mezon/100 ball amaliyotiga yangi rasmiy xabar bor; aniq kichik mezonlar loyihasining tasdig‘i topilmadi. Asl PDFlar o‘zgarmagan. [Joriy holat](08-CURRENT.md).

> MAQOM: 2026-10-09 holatidagi tarixiy tadqiqot/tayyorgarlik qaydi. 13-oktabrga oid reja joriy sana, bosqich yoki natija deb olinmaydi. Hozirgi vazifa va reglament ustuvor. [Kontekst maqomi](https://azizbeksafarov.github.io/ustoz/CONTEXT-STATUS.md).

Asosiy 6 mezon mahalliy qarordan. Quyidagi 21 kichik ko‘rsatkich tasdiqqa taqdim etilgan loyiha hujjatidan; tayyorgarlik uchun qo‘llanadi. Yakuniy bilet va reglament ustuvor. Ballni ekspert beradi, reja esa tekshiriladigan dalil tayyorlaydi.

| Kod | Ko‘rsatkich | Maksimal ball | Tayyorlaydigan ish va dalil |
|---|---|---:|---|
| 1.1 | Asosiy funksiyalar | 10 | Biletdagi har amal boshidan natijagacha sinovdan o‘tadi; tugma faqat ko‘rinish uchun qolmaydi. |
| 1.2 | Barqarorlik va xato holatlari | 8 | Bo‘sh/noto‘g‘ri qiymat, topilmagan natija, tegishli cheklovlar; tushunarli xabar, loyiha buzilmasligi. |
| 1.3 | Ekranga moslashish | 6 | 390, 768, 1366 px; kesilmagan kontent, ochiq asosiy amallar va keraksiz gorizontal surish yo‘qligi. |
| 1.4 | Tezlik va texnik ishlash | 6 | Resurslar/havolalar ochilishi, asosiy ishlashga xalal beradigan xatolar tuzatilishi. |
| 2.1 | Topshiriqqa moslik | 5 | Biletning foydalanuvchisi va muammosi yozilib, sayt oqimi shunga moslanadi. |
| 2.2 | Mazmun aniqligi | 5 | Mavzuga mos va tushunarli matn; bo‘sh yoki vaqtinchalik yozuv qolmasligi. |
| 2.3 | Amaliy foyda | 5 | Foydalanuvchi kerakli ma’lumotni oladi va keyingi harakatni biladi. |
| 2.4 | Ma’lumot izchilligi | 5 | Nom, sana, qiymat va natija ekranlar bo‘ylab mos; test ma’lumoti haqiqiy deb ko‘rsatilmaydi. |
| 3.1 | Tuzilish va navigatsiya | 4 | Menyu va tugmalar tushunarli; foydalanuvchi qayerda va keyingi qadam nima ekanini biladi. |
| 3.2 | O‘qilish va qulaylik | 3 | Kontrast, maydon nomlari, klaviaturada asosiy amallar va ko‘rinadigan fokus. |
| 3.3 | Yaxlit ko‘rinish | 3 | Yagona rang, shrift, masofa va tugma uslubi; bezak asosiy vazifaga xalal bermasligi. |
| 4.1 | Muammo va yechim | 3 | Foydalanuvchi, muammo va natijani qisqa, o‘z loyihasiga asoslanib tushuntirish. |
| 4.2 | Amaliy namoyish | 4 | To‘liq foydalanuvchi oqimi, texnologiya sababi va kiritilgan o‘zgarishlar. |
| 4.3 | Savollarga javob | 3 | Cheklov, ishlash usuli va tuzatish yo‘lini bilish; bajarilmagan funksiyani ishlaydi deb aytmaslik. |
| 5.1 | Vosita tanlash | 6 | Eng sodda mos vosita; tanlovni loyiha va sozlamalar orqali asoslash. |
| 5.2 | Moslashtirish va boshqarish | 6 | AI/no-code/shablon natijasini biletga mazmunli moslashtirish va tahrirlay olish. |
| 5.3 | Sinash va yaxshilash | 4 | Sinov natijalari, topilgan xato va tuzatish dalili. |
| 5.4 | Loyiha va topshirish | 4 | Tahrirlanadigan fayllar, run yo‘riqnomasi, vosita/manbalar, ochiq maxfiy kalitsiz nusxa. |
| 6.1 | O‘ziga xos yondashuv | 4 | Vazifaga mos mustaqil qaror; tayyor namunani o‘zgartirmay topshirmaslik. |
| 6.2 | Foydali ijodiy yechim | 3 | Vazifani yengillashtiradigan bitta ishlaydigan qo‘shimcha yoki ma’lumot taqdimoti. |
| 6.3 | Mazmun va uslub uyg‘unligi | 3 | Nom, matn, ko‘rinish va amallar bitta maqsadga xizmat qiladi. |

Jami: **100 ball**. Funksiya 30 + mazmun 20 + texnologiya 20 = **70 ball**; ish avval shu dalillarni mustahkamlaydi.

## Biletni amalga aylantirish

Har talab uchun jadval: **bilet talabi → foydalanuvchi amali → amalga oshirilgan joy → qabul sinovi → natija/ochiq xato**. Sinov o‘tkazilmagan bo‘lsa, bajarilgan deb yozilmaydi. Backend yoki saqlash biletda kerak bo‘lsa quriladi; faqat tasdiq ekrani kerak bo‘lsa ortiqcha tizim vaqtni egallamaydi.

Kurslar portali misolida: topish → tanlash → forma → natija. To‘g‘ri qiymat, bo‘sh forma, noto‘g‘ri format va topilmagan qidiruv tekshiriladi. Saqlash talab qilinganida qayta ochish/yangilashdan keyingi holat ham sinovdan o‘tadi. Bu mashq misoli, haqiqiy bilet bashorati emas.

## Rol va vaqt

AI asosiy kod yozish va tekshiruvni olib boradi. Ishtirokchi talabga moslikni, foydalanuvchi tajribasini va himoyani boshqaradi, kichik tahrirlarni bilib oladi. Bitta asosiy yozuvchi; bitta fayl ikki vosita tomonidan bir paytda o‘zgartirilmaydi.

120 daqiqalik mashq: 0–10 reja, 10–25 asos/navigatsiya, 25–65 majburiy oqim, 65–90 mazmun/UI/mobil, 90–110 sinov va tuzatish, 110–120 topshirish. Bu tasdiqlangan hududiy limit emas. Haqiqiy vaqtga moslanadi.

## Himoya va topshirish

5 daqiqa muammo/yechim; 5 daqiqa to‘liq oqim, xato va mobil namoyish; 5 daqiqa savol-javob. Ishtirokchi AI hissasi, o‘z tahriri, saqlash va cheklovlarni tushuntiradi. Matn/rang/elementni qo‘lda o‘zgartirish mashqi ham o‘tiladi, chunki manbalarda himoyadagi tahrir talabi farq qiladi.

Topshirish yo‘riqnomasi bo‘yicha ishlaydigan link yoki lokal run, manba nusxasi, qisqa tavsif, real test qaydi va manbalar. 3–5 tasvir va 1–2 daqiqalik video loyiha hujjatidagi tavsiya, tasdiqlangan majburiy talab deb ko‘rsatilmaydi.

## Loyihadagi baholash shkalasi

| Ko‘rsatkich maksimumi | Bajarilmagan | Juda sust | Qisman | Asosan | To‘liq |
|---:|---:|---:|---:|---:|---:|
| 10 | 0 | 3 | 5 | 8 | 10 |
| 8 | 0 | 2 | 4 | 6 | 8 |
| 6 | 0 | 2 | 3 | 5 | 6 |
| 5 | 0 | 1 | 3 | 4 | 5 |
| 4 | 0 | 1 | 2 | 3 | 4 |
| 3 | 0 | 1 | 2 | 2 | 3 |

Oraliq ball dalil bilan asoslanishi taklif etilgan. Bir xato ikki marta hisoblanmaydi; yangi talab qo‘shilmaydi; vosita brendi, pulli tarif, kod/prompt/effekt soni avtomatik bonus emas. Qo‘shimcha funksiya majburiy vazifadagi kamchilikni qoplamaydi. Bu qo‘llash qoidalari ham loyiha hujjatidan.

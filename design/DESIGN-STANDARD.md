# Dizayn sifati bo‘yicha ish standarti

2026-10-15. Bu mustaqil dizayn qarorlari uchun qo‘llanma; rasmiy tanlov mezoni yoki avtomatik sifat sertifikati emas.

## AI qilgani emas, qarorning sifati muhim

AI yozgan sahifa ham puxta bo‘lishi mumkin. Qo‘lda yozilgan sahifa ham qolipga tushishi mumkin. Mualliflikni rang yoki shrift orqali ishonchli aniqlab bo‘lmaydi. Biz saytning vazifasi, haqiqiy mazmuni, kompozitsiyasi va ishlashini baholaymiz.

Anthropic AI interfeyslari statistik jihatdan xavfsiz, takroriy tanlovlarga yaqinlashishini tushuntiradi. Faqat bir shrift yoki rangni taqiqlash boshqa qolip tug‘dirishi mumkin. Yechim — vazifaga xos vizual yo‘nalish va izchil amalga oshirish. [Anthropic: Improving frontend design through Skills](https://claude.com/resources/articles/improving-frontend-design-through-skills).

## Biz tekshiradigan olti jihat

- Maqsad: birinchi ekranda sayt kim uchun va qaysi asosiy amalni bajarish uchun ekani tushuniladimi?
- Kompozitsiya: sarlavha, izoh va asosiy amalning darajasi aniqmi; bo‘sh joylar guruhlarni ko‘rsatadimi; tekislash izchilmi?
- Mazmun: surat, chizma, grafik va raqamlar ma’no tashiydimi? Namunaviy statistika haqiqiy dalildek ko‘rsatilmaganmi?
- Tizim: shrift rollari, rang kontrasti, tugma va oddiy panelning farqi, hover/focus/pressed holatlari izchilmi?
- Funksiya: asosiy ish oxirigacha bajariladimi; bo‘sh, xato, muvaffaqiyat va saqlanish holatlari hisobga olinganmi?
- Muhandislik: telefon va planshetda o‘qish qulaymi, sahifa kengayib ketmaydimi; klaviatura, fokus, reduced-motion va lokal resurslar ishlaydimi?

Tipografiya, cheklangan rang rollari, iyerarxiya va gridning izchilligi vizual sifatga xizmat qiladi. Bular bitta tayyor estetika emas, turli uslublarda ishlaydigan asoslar. [Nielsen Norman Group: Why Does a Design Look Good?](https://www.nngroup.com/articles/why-does-design-look-good/).

## Qolipning belgilari va tuzatish yo‘li

- Har xil mavzuda bir xil hero, bir xil uch karta va bir xil bezak: bloklarni foydalanuvchining haqiqiy savollari bo‘yicha qayta tuz.
- Katta da’volar, to‘qima mijozlar, reytinglar va raqamlar: dalil qo‘sh yoki olib tashla. Demo ma’lumotni ochiq belgila.
- Mahsulot yoki ish o‘rnida oddiy shakl/yozuv: haqiqiy natijani ko‘rsatadigan vizual va yetarli tafsilot bilan almashtir.
- Rangli panellar tugmaga o‘xshaydi: passiv sirtni sokin qil, asosiy amalni alohida rang/chegara/label bilan ajrat.
- Animatsiya hamma narsada ishlaydi: harakatga vazifa ber. Yuksal’da shakl almashishi hikoya qiladi; Bloom’da ripple va holat almashishi amalni tasdiqlaydi. Boshqarish va reduced-motion yo‘li bo‘lsin.
- Faqat desktop screenshot chiroyli: kamida 390, 768 va 1280 px ko‘rinishlarni tekshir; 320 px chegarasini ham sinab ko‘r. Gorizontal overflow sababini tuzat; yashirish bilan berkitma.

## Bizning vizual yo‘nalishlarimiz

Bosh qarorgoh: oq asos, to‘q yashil matn va amal rangi, Instrument Sans + Instrument Serif, ochiq tahririy grid. Suratlar — haqiqiy demo ko‘rinishlari. Uydirma faoliyat raqamlari va dekorativ metrikalar yo‘q. Portalning asosiy vazifasi — kerakli ishga tez kirish.

Yuksal: SI.gov’dan o‘rganilgan tahririy masshtab va interaktiv zarrachalar mexanikasi. Mustaqil Yuksal brendi, oq fon, O‘zbekiston palitrasi; davlat portali sifatida ko‘rsatilmaydi. SI.gov’ni kim yaratgani haqida tasdiqlanmagan da’vo qilmaymiz. [SI.gov original sayt](https://www.si.gov/).

Bloom: Google Material Design 3, rasmiy Material Web komponentlari va dinamik rang rollari. Ko‘rinishdan tashqari holatlar va amallar bir tizimda ishlashi kerak. [Material Design 3](https://m3.material.io/).

## Qabul qilish tartibi

- Talabni foydalanuvchi amaliga aylantir, keyin tekshiruv bilan bog‘la.
- Yangi koddan keyin haqiqiy brauzerda desktop, planshet va telefon ko‘rinishini ko‘r.
- Asosiy havola, nusxalash, ZIP olish, bo‘sh forma va to‘g‘ri kiritish oqimlarini sinab ko‘r.
- Konsol va yuklanmagan resurslarni tekshir. Kod paketining manifesti, hash va ichki fayl yo‘llari tekshirilsin.
- Tekshiruvni boshqa ko‘z bilan tanqid qildir. Qolgan cheklovni aniq ayt; “mukammal” yoki “enterprise-ready” deb dalilsiz e’lon qilma.

O‘qish kontrasti, klaviatura, fokus va harakatni boshqarish uchun WCAG 2.2 AA maqsad qilib olinadi; bu to‘liq muvofiqlik auditi o‘tkazildi degani emas. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Tezlik uchun asosiy maqsadlar: LCP 2.5 soniyagacha, INP 200 ms gacha, CLS 0.1 gacha — haqiqiy tashriflarning 75-persentilida. Bu sayt uchun ushbu qiymatlar o‘lchangan deb da’vo qilinmaydi. [Google web.dev: Web Vitals](https://web.dev/articles/vitals).

## Kuratsiya qarori

Faol: Bloom va Yuksal. 01–09: tarixiy arxiv. Har bir sabab [curation.json](https://azizbeksafarov.github.io/design/curation.json) va [arxiv qaydi](https://azizbeksafarov.github.io/design/archive/)da. Shunchaki bir rangni almashtirish ularni yangi tavsiya darajasiga chiqarmaydi; haqiqiy mazmun, mos vizual va to‘liq foydalanuvchi oqimi kerak.

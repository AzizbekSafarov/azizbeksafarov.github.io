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

Bosh qarorgoh: DM Sans + IBM Plex Mono, oq/kobalt, uch yo‘lli ishga kirish paneli, qidiriladigan 9 dizaynli kutubxona. Serif tahririy demo uslubidan alohida. Preview — haqiqiy brauzer screenshot; son — haqiqiy katalog miqdori.

Kelley Gordon grid, izchil shrift rollari, maqsadli rang va mazmun tashuvchi tasvirlarni bir tizimda ko‘rishni tavsiya qiladi. Bitta rasm yoki shrift har joyga takrorlansa, turli vazifalar ham bir qolipga o‘xshab qoladi. [NNGroup: Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/).

Anthropic’ning frontend design yo‘riqnomasi koddan oldin maqsad, auditoriya va aniq estetik yo‘nalishni belgilaydi; generic tizim shriftlari, purple-gradient va bir xil komponentlar bilan cheklanmaslikni tavsiya qiladi. Bu biror shriftni universal taqiqlash emas. [Official frontend design plugin](https://claude.com/marketplace/plugins/frontend-design).

Mustaqil screenshot tanqidi yaratuvchining o‘z taxminini tekshiradi. Natijani faqat kod yoki nazorat ro‘yxatidan baholamaymiz. [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps).

- Orbita: Space Grotesk + IBM Plex Mono, qora ilmiy atlas, orbital sahna, missiya registri va shaxsiy kuzatuv. NASA sahifalari mazmun manbasi, rasmiy affiliasiya emas.
- Nashr: Newsreader + DM Sans, gazeta mastheadi, bosh maqola sarlavhasi suratdan oldin, ko‘p ustunli tahririyat. Sayohat suratlari o‘rniga o‘qish/hunar fotosuratlari.
- Hisob: DM Sans + mono qiymatlar, zich sidebar, magnitude shkalali grafik, davr va saralash. Sonlar aniq demo.
- Ziyo: sariq/ko‘k dars muqovasi, qatlam diagrammasi va dars muhiti. Progress faqat tekshirilgan to‘g‘ri javob bilan oshadi.
- Meros: Barlow Condensed afisha + Newsreader sharh, olxo‘ri/pushti, ekspozitsiya indeksi va katta me’moriy lavha. Sayr rejalashtirgichi emas, mustaqil fotografik ko‘rgazma.

Yuksal: SI.gov’dan o‘rganilgan tahririy masshtab va interaktiv zarrachalar mexanikasi. Mustaqil Yuksal brendi, oq fon, O‘zbekiston palitrasi; davlat portali sifatida ko‘rsatilmaydi. SI.gov’ni kim yaratgani haqida tasdiqlanmagan da’vo qilmaymiz. [SI.gov original sayt](https://www.si.gov/).

Bloom: Google Material Design 3, rasmiy Material Web komponentlari va dinamik rang rollari. Ko‘rinishdan tashqari holatlar va amallar bir tizimda ishlashi kerak. [Material Design 3](https://m3.material.io/).

Samar: Barlow Condensed shahar mastheadi, DM Sans, oq/moviy, panorama va gorizontal manzil qatorlari. Haqiqiy Samarqand manzillari, rasmiy manba va kun rejasi. Vaqtlar taklif; bron yoki tarif uydirilmaydi.

Forma: DM Sans geometrik katalog, oq/qora va terrakota, katta vertikal mahsulot tasviri. Muuto’da mahsulotning kompozitsiyadagi yetakchiligi o‘rganildi, brend yoki kod ko‘chirilmadi. Suratga mos to‘qima stul nomi, tafsilot, kategoriya va miqdordan hisoblanadigan savat. Narx/xususiyatlar namuna; haqiqiy matn eksporti bor.

## Qabul qilish tartibi

- Talabni foydalanuvchi amaliga aylantir, keyin tekshiruv bilan bog‘la.
- Yangi koddan keyin haqiqiy brauzerda desktop, planshet va telefon ko‘rinishini ko‘r.
- Asosiy havola, nusxalash, ZIP olish, bo‘sh forma va to‘g‘ri kiritish oqimlarini sinab ko‘r.
- Konsol va yuklanmagan resurslarni tekshir. Kod paketining manifesti, hash va ichki fayl yo‘llari tekshirilsin.
- Tekshiruvni boshqa ko‘z bilan tanqid qildir. Qolgan cheklovni aniq ayt; “mukammal” yoki “enterprise-ready” deb dalilsiz e’lon qilma.

O‘qish kontrasti, klaviatura, fokus va harakatni boshqarish uchun WCAG 2.2 AA maqsad qilib olinadi; bu to‘liq muvofiqlik auditi o‘tkazildi degani emas. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Tezlik uchun asosiy maqsadlar: LCP 2.5 soniyagacha, INP 200 ms gacha, CLS 0.1 gacha — haqiqiy tashriflarning 75-persentilida. Bu sayt uchun ushbu qiymatlar o‘lchangan deb da’vo qilinmaydi. [Google web.dev: Web Vitals](https://web.dev/articles/vitals).

## Kuratsiya qarori

Faol: Orbita, Nashr, Hisob, Ziyo, Meros, Samar, Forma, Bloom, Yuksal. Yetti eski variant olib tashlangan holatda qoladi. Har bir starter mustaqil original implementatsiya; professional studiya tomonidan yaratilgan yoki tasdiqlangan deb da’vo qilinmaydi. SI.gov muallifini tasdiqlovchi ishonchli kredit topilmadi. Har biri biletga moslashtirilganda yana tekshiriladi.

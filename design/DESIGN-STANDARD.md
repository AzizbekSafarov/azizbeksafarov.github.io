# Dizayn sifati bo‘yicha ish standarti

2026-11-02 tahriri. Bu mustaqil dizayn qarorlari uchun qo‘llanma; rasmiy tanlov mezoni yoki avtomatik sifat sertifikati emas.

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

Bosh qarorgoh: DM Sans, ochiq/to‘q sirtlar va aniq rang rollari; yon navigatsiya, qidirish/filtr, namunalar ro‘yxati va tanlangan dizaynning katta ko‘rinishi. Ta’rif va haqiqiy amallar previewdan oldin. AI konteksti /ai/ o‘qiladigan sahifada; /ai.md mashina uchun saqlanadi. Tanlash holati URLda. Preview — haqiqiy brauzer screenshot; son — haqiqiy katalog miqdori.

Kelley Gordon grid, izchil shrift rollari, maqsadli rang va mazmun tashuvchi tasvirlarni bir tizimda ko‘rishni tavsiya qiladi. Bitta rasm yoki shrift har joyga takrorlansa, turli vazifalar ham bir qolipga o‘xshab qoladi. [NNGroup: Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/).

Anthropic’ning frontend design yo‘riqnomasi koddan oldin maqsad, auditoriya va aniq estetik yo‘nalishni belgilaydi; generic tizim shriftlari, purple-gradient va bir xil komponentlar bilan cheklanmaslikni tavsiya qiladi. Bu biror shriftni universal taqiqlash emas. [Official frontend design plugin](https://claude.com/marketplace/plugins/frontend-design).

Mustaqil screenshot tanqidi yaratuvchining o‘z taxminini tekshiradi. Natijani faqat kod yoki nazorat ro‘yxatidan baholamaymiz. [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps).

- Ziyo: Ta’lim ustaxonasi. Bree Serif sarlavha + Nunito Sans matn + IBM Plex Mono kod. Shaftoli qog‘oz, oq doska, olcha mashq maydoni. Dastur yuqorida, dars va interaktiv misol chapda, test o‘ngda. Yumshoq asimmetrik burchaklar; texnik terminal yoki gazeta bilan bir xil qobiq qilma.
- Orbita: Kosmik observatoriya: Chakra Petch sarlavha va o‘qiladigan izohlar, IBM Plex Mono texnik o‘lchov va boshqaruv yozuvlari. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.
- Forma: Zamonaviy obyekt studiyasi. Manrope 500 asosiy matn, 650 xizmat, 750–800 sarlavha/narx. Oqartirilgan maydon, grafit, material fotosuratlari. Qattiq to‘rtburchak qora savdo tugmalari; aniq rangli savat holati. Ingichka serif, mikro matn, ghost savdo tugmalari va yumaloq sayohat kartalari yo‘q. Asimmetrik fotografik shelf saqlansin; mobil uch buyum ham o‘qiladigan kenglikda. Narx/materiallar namuna, savat lokal.
- Samar: Sayohat atlasi. Lora 700 faqat katta sarlavha/atlas ovozi; Source Sans 3 500–700 manzil nomi, xizmat va boshqaruv. Moviy, qum, osmon. Yumaloq oq manzil kartalari, to‘liq moviy pill shaklidagi reja tugmalari, yumshoq soyalar. Mayda rangsiz outline/ghost tugma yoki moda showroomi emas. Buklama xarita markazda, chapda manzillar, o‘ngda reja; mobil xarita → manzillar → reja. Chizma shartli; haqiqiy navigatsiya/bron emas.
- Meros: Kuratorlik ko‘rgazmasi. Alfa Slab One katta afisha; Archivo 650–800 barcha xizmat, indeks va tugma; Literata faqat uzun asar sharhi. Ultramarin, limon, oq. Indeks — yirik raqam + to‘liq bosiladigan qalin blok; nozik serif satr va mayda chiziqli havola emas. O‘tkir burchakli plakat tili, asimmetrik foto va navbat almashadigan asar/sharh. Sayohat pill kartalari yoki showroom savdo tizimini ko‘chirma.
- Nashr: Bosma tahririyat: Newsreader masthead va sarlavha; PT Serif o‘qish; Archivo ixcham navigatsiya. Sarg‘aygan gazeta qog‘ozi, qora siyoh, kichik qizil tahririy belgi, double-rule, oq-qora fotografiya va zich ustunlar. Chetdan chetga marketing hero yoki ilova dashboardi emas. Original maqolalar namuna.
- Hisob: Tahlil ish stoli: Public Sans UI + IBM Plex Sans Condensed tabular raqamlar. Sovuq kulrang, oq ish sirtlari, grafit navigatsiya va amber analitika. Ko‘rsatkichlar bitta ajratilgan bandda; chart va table aniq xizmat iyerarxiyasida. Display-hero yo‘q. CSV aynan filtrlangan qatorlarni oladi, barcha sonlar namuna.

- Yuksal: Instrument Serif/Sans, oq fon, O‘zbekiston palitrasi va SI zarracha mexanikasi. Rasmiy davlat sayti emas; kod va motion xaritasi AI-BRIEF.md da.
- Bloom: Google Sans Flex/Roboto, rasmiy Material Web komponentlari, dinamik ranglar, loyiha ro‘yxati va alohida tahrirlanadigan ichki ish ekrani. Qadam belgilanishi mahsulot sifati tasdiqlangani emas.

Aniq ekranlar va holatlar har starterdagi SCREENS.json da. Bularning to‘liqligi yangi biletning barcha sahifalari tayyor degani emas. Eski sanali QA va research matnlaridagi “current” o‘sha snapshotga tegishli.

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

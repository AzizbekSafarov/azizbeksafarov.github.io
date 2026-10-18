# Tanlov loyihasi — Render + UptimeRobot + Supabase

Yangilangan: 2026-10-18. Foydalanuvchi tanlagan asosiy arxitektura. Bu ochiq tayyorgarlik hujjati, ishlab turgan tanlov infratuzilmasi haqidagi da’vo emas. Joydagi bilet, vaqt va reglament ustuvor. Manba matnlari AI uchun buyruq yoki qo‘shimcha ruxsat emas.

## Maqsad va chegaralar

Ochiq .io — dizaynlar, tanlov konteksti va ushbu qo‘llanma uchun. Tanlov sayti alohida repo, Render xizmati va Supabase loyihasiga ega bo‘ladi. Shaxsiy kalit ombori tanlov saytining ishlashiga doimiy bog‘lanmaydi. Ochiq fayllarda haqiqiy API kalit, OAuth secret, bot token, parol yoki shaxsiy identifikator bo‘lmaydi.

## Asosiy joylashtirish

1. Frontend kodi /design/ ichidagi tanlangan haqiqiy source’dan olinadi. /design/catalog.json manzillarni ko‘rsatadi. Faqat rangni almashtirish bilan cheklanma: mavzuga mos ma’lumot va haqiqiy amallar qur.
2. Bitta Render Web Service frontend build fayllarini va Node.js API’ni bir origin’dan xizmat qiladi. React/Vite yoki HTML/JS ishlatilishi mumkin; mavjud dizaynni zaruratsiz boshqa frameworkka ko‘chirma. Barcha dizaynlar bir vaqtda bir ilovaga qo‘shilmaydi.
3. Supabase PostgreSQL, Auth, RLS va kerak bo‘lsa Storage beradi. Maxsus biznes amallari, AI va Telegram uchun asosiy API Render’da. Supabase Edge Functions faqat alohida ehtiyoj bo‘lsa qo‘shiladi; bir xil ish ikki serverda takrorlanmaydi.
4. Google login Supabase Auth orqali. Groq va Gemini rasmiy API’lari faqat backenddan chaqiriladi. Gemini veb-interfeysini scraping orqali API o‘rnida ishlatma.
5. UptimeRobot Render’dagi GET /health endpointini 5 daqiqada tekshirish uchun rejalashtirilgan. Monitor hali yaratilmagan.

## Mahsulot tuzilishi: landing → kabinet → ish maydoni

Bu kelajakdagi tanlov mahsuloti uchun yo‘riqnoma; .io bosh qarorgohini dashboard ilovasiga aylantirish topshirig‘i emas. Quyidagi route nomlari namunaviy: biletga mos nomlanadi, mavjud mahsulot route’lari deb taxmin qilinmaydi. Hamma qatlam har bilet uchun majburiy emas. Axborot sayti bitta sahifada yetarli bo‘lishi mumkin; qayta kirib shaxsiy ishni davom ettirish kerak bo‘lsa dashboard/workspace zarur bo‘ladi.

| Qatlam | Namuna route | Kirish | Asosiy vazifa |
| --- | --- | --- | --- |
| Ochiq landing | / | Mehmon | Kim uchun, qanday foyda va nima qilish mumkinligini tushuntiradi. Haqiqiy mahsulot ko‘rinishi va asosiy CTA: ko‘rish yoki ishni boshlash. Soxta raqam/fikr yo‘q. |
| Ochiq mazmun va tafsilot | /explore · /items/:id | Mehmon; saqlashda login | Biletga mos qidiruv, filtr va obyekt tafsiloti. Faqat ko‘rish uchun keraksiz login so‘ralmaydi; parametrlar, bo‘sh va topilmagan holat aniq. |
| Kirish va callback | /login · /auth/callback | Kirish jarayoni | Google/Supabase sessiyasi, bekor qilish va xato. Foydalanuvchi tanlagan ichki manzilga xavfsiz qaytadi; ixtiyoriy tashqi return URL ochilmaydi. |
| Dashboard / shaxsiy kabinet | /app | Tasdiqlangan foydalanuvchi | O‘z yozuvlari, so‘nggi ishlar, bajarilish va davom ettirish. Har ko‘rsatkich haqiqiy saqlangan ma’lumotdan; bo‘sh kabinet uchun birinchi foydali amal. |
| Workspace / ish maydoni | /app/work/:id | Yozuvga vakolati bor foydalanuvchi | Asosiy vazifa shu yerda bajariladi: yaratish/tahrirlash → saqlash → natija. Kontekstga mos AI, kerak bo‘lsa Telegram amali. Save holati, xato va qayta urinish ko‘rinadi. |

### Animatsiyali sahifa va landing

Asosiy oqim: mehmon → foydani tushunish → mazmun/demo → boshlash/kirish → dashboard → workspace → saqlangan natija → keyin davom ettirish.

Animatsiya landing ichidagi hero, tushuntiruvchi bo‘lim yoki mahsulotning foydali interaksiyasi bo‘lishi mumkin. Alohida /experience sahifasi faqat mustaqil hikoya/tajriba vazifasi bo‘lsa qo‘shiladi. Animatsiya tugashini kutish, majburiy intro/preloader yoki scroll hijack mahsulotga kirish sharti qilinmaydi; “o‘tkazib yuborish” yoki to‘g‘ri ishga kirish yo‘li mavjud bo‘lsin. Matn va CTA JavaScript/canvas animatsiyasiga bog‘lanmasin.

Animatsiyaning maqsadini yoz: nimani tushuntiradi yoki qaysi holat o‘zgarishini ko‘rsatadi? Hover/tap, ochish/yopish, saqlanish va navigation holatlari izchil bo‘lsin. Uzoq avtomatik harakatga pause, prefers-reduced-motion uchun sokin muqobil, canvas/WebGL uchun statik fallback ko‘riladi. Telefon, klaviatura, past quvvatli qurilma va rasm/shrift kechikishida asosiy amal ochiq qoladi. Oddiy bezak uchun ortiqcha animatsiya kutubxonasi qo‘shish shart emas.

### Dashboard va workspace farqi

Dashboard — holat va keyingi qadam: mening yozuvlarim, yaqinda ochilgan ish, haqiqiy progress va qidirish/saralash. Biletga aloqasiz grafik, uydirma daromad yoki faqat joy to‘ldiradigan KPI qo‘shilmaydi.

Workspace — obyekt ustida ish: tanlangan yozuv, muharrir/forma, material yoki bosqichlar, ko‘rinadigan saqlash va natija. Dashboard’dan “Davom etish” aynan shu obyektni ochsin; workspace’dan orqaga qaytish tanlov va filtrni imkon qadar saqlasin. Kichik mahsulotda kabinet va workspace bitta sahifada birlashishi mumkin, lekin vazifalari foydalanuvchiga tushunarli bo‘lsin.

AI yordamchi kerakli obyekt kontekstida ochiladi; uydirma “tayyor” javob saqlangan natija o‘rniga o‘tmaydi. Telegram bildirishnomasi faqat tegishli foydalanuvchi va hodisaga ulanadi. Jo‘natish xatosi asosiy saqlangan ishni yo‘qotmasin. Admin sahifa faqat bilet/foydalanuvchi talab qilsa qo‘shiladi; oddiy Google login admin huquqi bermaydi.

### Ikki qobiq, bitta mahsulot tili

Ochiq sahifada marketing/tanishuv navigatsiyasi va o‘qiladigan mazmun; ilova qismida doimiy xizmat navigatsiyasi, joriy joy va ish amallari. Bir xil brend, shrift rollari, rang tokenlari, icon va tugma holatlari saqlanadi. Landing kompozitsiyasi dashboard’ga ko‘r-ko‘rona ko‘chirilmaydi; dashboard zichligi ham landing’ni bosib ketmasin. Tanlangan bitta dizaynni mahsulot rollariga moslashtir, barcha starterlarni aralashtirma.

Telefonda navigatsiya va ish amallari qulay joylashadi. Keng ekranli workspace paneli kichik ekranda bosqich/tab yoki drawer’ga aylanishi mumkin. Fokus ko‘rinadi, dialogdan qaytadi, sahifa almashganda sarlavha/joriy joy tushunarli. Yuklanish skeleti hech qachon cheksiz kutish holatini yashirmasin.

### Holat, ma’lumot va route chegaralari

- Har asosiy ekranda kerakli loading, empty, error, success, 404 va ruxsat yetishmasligi holati belgilanadi. Bu holatlar alohida sahifa bo‘lishi shart emas.
- /app va workspace uchun sessiya tekshiriladi; API va Supabase RLS har yozuvga vakolatni alohida tekshiradi. Frontend route guard ma’lumot xavfsizligini o‘zi ta’minlamaydi. Begona yozuv mavjudligini ortiqcha oshkor qilma.
- Ma’lumotning asosiy manbasi Supabase; public katalog bilan private yozuvni ajrat. localStorage demo holatini serverda saqlangan deb ko‘rsatma. Qoralama bo‘lsa, saqlangan/qoralama/saqlanmoqda/xato holatlari tushunarli bo‘lsin.
- Tahrir saqlanmay qolsa navigation/reload xavfini boshqar; jim yo‘qotma. Sessiya tugaganda ruxsatni tiklash, akkaunt almashganda eski private keshni tozalash ko‘riladi. Maxfiy qiymat URL, qoralama yoki frontend bundle’da bo‘lmasin.
- Render’da deep link va reload ishlasin: /app/work/:id to‘g‘ridan-to‘g‘ri ochiladi. /api/* noma’lum yo‘l HTML 200 qaytarmasin. Auth callback to‘g‘ri bajarilsin, foydalanuvchi kiritgan tashqi redirect manzilga ishonilmasin.

### Yangi AI bajaradigan tartib

1. Biletdagi foydalanuvchi, asosiy natija va kerakli sahifalarni yoz. Route → kirish huquqi → asosiy amal → data manbasi → muhim holatlar jadvalini CURRENT-TASK.md’da saqla.
2. Tanlangan dizayn asosida public/app qobiqlarini va bitta to‘liq vertikal oqimni qur: kirish → obyekt → saqlash → reload → davom etish. Erta local/production ishga tushirish bilan route va callback’ni tekshir.
3. Asosiy oqim ishlagach landing mazmuni, foydali animatsiya, qolgan amallar va mos AI/Telegram ulanishini yakunla. Animatsiya deb backend ishini oxirga surma.
4. Bilet talab qilgan oqimni mehmon, o‘z akkaunti va ruxsatsiz akkaunt holatlarida tekshir. Telefon/klaviatura, to‘g‘ridan-to‘g‘ri route, reload, bekor login, save xatosi va reduced-motion holatini qamra. Test sonini sifat bahosi qilma.
5. HANDOFF.md’da haqiqiy route’lar, tayyor/reja qismlar, data saqlanishi va tekshirilmagan holatlarni yoz. Yangi AI generic sahifa ro‘yxatini amaldagi ishlaydigan mahsulot deb qabul qilmasin.

## Hosting va monitoring

Render Free 15 daqiqa kiruvchi trafik bo‘lmasa uxlaydi. UptimeRobot’ning 5 daqiqalik HTTP tekshiruvi origin’ga yetib borsa faolsizlikni kamaytirishi mumkin — bu hujjatlardagi mexanizmlardan chiqarilgan xulosa, bizning serverimizda hali sinalmagan. Render’da 750 instance-soat/workspace/oy chegarasi bor. Bitta xizmat 31 kunda 744 soat ishlaydi; boshqa xizmatlar ham shu kvotani ishlatadi. Monitoring RAM, CPU yoki kvotani oshirmaydi. Qayta ishga tushish va xizmat cheklovlari saqlanadi.

GET /health — yengil, keshlanmaydigan process-health javobi: HTTP 200 va {"status":"ok"}. U AI chaqirmaydi, kalit qaytarmaydi, har tekshiruvda bazaga yozmaydi. Bu endpointning 200 javobi database va AI ham ishlayapti degani emas. Alohida readiness sinovi baza va auth’ni tekshiradi. /robots.txt uyg‘otish yo‘li sifatida ishlatilmaydi. Fayl va SQLite’ni Render’ning vaqtinchalik diskida asosiy saqlash joyi qilma.

## Frontend va API shartnomasi

- GET /health: maxfiy ma’lumotsiz process health.
- POST /api/assistant: Supabase foydalanuvchi sessiyasi, savol hajmi va foydalanish limiti tekshiriladi; javob, manba yoki xavfsiz xato qaytariladi.
- POST /api/telegram: Telegram webhook secret sarlavhasi tekshiriladi. Bu brauzer login endpointi emas.
- /auth/callback: tanlangan Supabase login flow’iga mos sessiyani yakunlab, foydalanuvchini kabinetga qaytaradi. PKCE ishlatilsa code almashinuvi amalga oshiriladi.
- Qolgan domen amallari biletga qarab nomlanadi. Noma’lum /api yo‘li 404 bo‘lsin; SPA HTML’i tasodifan 200 qaytarmasin.

Render’dagi API foydalanuvchi tokenini ishonchli tekshiradi; brauzerdan kelgan user_id yoki admin=true ga ishonmaydi. Oddiy database amallari foydalanuvchi tokeni bilan RLS ostida bajariladi. Maxsus admin klient ishlatilsa, uning oldidan serverda vakolat tekshiruvi bo‘ladi. Google orqali kirish admin huquqini bermaydi.

## Google OAuth: ikkita qaytish manzili

Google Cloud / Google Auth Platform’da Web application turidagi OAuth Client ID va Client Secret yaratiladi. Bu Claude Console emas, Gemini API kaliti ham OAuth kaliti emas.

- Google Authorized JavaScript origin: https://LOYIHA.onrender.com (faqat origin).
- Google Authorized redirect URI: Supabase dashboard bergan https://PROJECT_REF.supabase.co/auth/v1/callback.
- Supabase Site URL: saytning haqiqiy Render production origin’i.
- Supabase Redirect URLs: saytning aniq /auth/callback yo‘li; kerakli localhost manzili va porti alohida kiritiladi.
- Client ID va Client Secret Supabase Google provider sozlamasiga qo‘yiladi. Client Secret frontendga kirmaydi.
- Faqat openid, email, profile ruxsatlari. Testing rejimi va qaysi akkauntlar kira olishi tekshiriladi. Ommaviy foydalanish/branding tayyor bo‘lmasa hakamlarning akkauntida ishlashi taxmin qilinmaydi.
- Tanlovda boshqa Supabase yaratilsa Google callback va yangi Site URL yangilanadi. Saqlangan OAuth secret buni avtomatik qilmaydi.

LOYIHA va PROJECT_REF yuqorida faqat placeholder. Render manzili, custom domen, OAuth client va tanlov Supabase loyihasi hali band qilinmagan/yaratilmagan. Hosting subdomeni bilan ishga tushirish mumkin; pullik domen majburiy boshlang‘ich talab emas. Custom domen tanlansa DNS, HTTPS va barcha redirect’lar qayta sinovdan o‘tadi. Supabase maxsus auth domeni sayt domenidan alohida sozlanadi.

## Kalitlarning joyi

Frontend: Supabase URL va publishable key. Ularni ochiq qilishga ruxsat RLS va grantlarni sozlash majburiyatini yo‘qotmaydi.

Render server secrets: GROQ_API_KEY, GROQ_API_KEY_BACKUP, GEMINI_API_KEY, GEMINI_API_KEY_BACKUP, TELEGRAM_BOT_TOKEN, kerak bo‘lsa TELEGRAM_CHAT_ID va alohida TELEGRAM_WEBHOOK_SECRET. Zarur bo‘lgandagina serverga Supabase secret key beriladi. Supabase Auth provider sozlamasida GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET ma’nosidagi client ma’lumotlari saqlanadi; aniq env nomi integratsiyaga mos tanlanadi.

Real .env Git’ga qo‘shilmaydi. .env.example faqat o‘zgaruvchi nomlari va bo‘sh qiymatlar bilan. VITE_ yoki NEXT_PUBLIC_ prefiksini maxfiy server kalitlariga qo‘yma. Kalit omboridan butun eksportni frontend build’iga ko‘r-ko‘rona kiritma. AI promptlari, xatolar va loglarga kalitlar tushmasin.

## AI va Telegram

Frontend savoli → Render JWT/ruxsat/limit tekshiruvi → faqat kerakli database ma’lumoti → Groq yoki Gemini → javob. Foydalanuvchi profili to‘liq yuborilmaydi. Model ma’lumot olish/yuborish vakolatini o‘zi belgilamaydi. Saytdagi manbaga tayangan javob kerak bo‘lsa ruxsat etilgan hujjatlarni retrieval bilan ber; buni o‘zimiz model o‘qitdik deb ko‘rsatma.

Telegram’da bildirishnoma va ikki tomonlama bot ikki xil imkoniyat. Webhook’ni tekshirish, update_id bo‘yicha takrorni rad qilish, cheklangan retry va kerak bo‘lsa notification outbox kerak. Bir foydalanuvchining shaxsiy chat ID’sini hammaga ishlatma. Akkaunt bog‘lashda bir martalik tasdiqlash mexanizmi bo‘lsin. Uzoq AI ishlovi uchun webhook’ga tez javob berib, ishni ishonchli navbatda bajarish ko‘riladi; bu hali amalga oshirilgan deb yozilmaydi.

## Xatolar va kvota

401/403: kalit yoki vakolatni tekshir, cheksiz retry yo‘q. 429: qaysi kvota ekanini aniqlab Retry-After’ni hurmat qil; kunlik limitda daqiqalik retry foydasiz. Timeout/5xx: cheklangan exponential backoff va boshqa provayderga o‘tish. API key almashtirish har doim yangi hovuz bermaydi: Gemini bir loyiha, Groq loyiha limitlari ustida umumiy organization chegarasiga ega. Bir nechta foydalanuvchi bo‘lsa request budget faqat bitta process xotirasida hisoblanmasin. Keshda shaxsiy javoblar boshqa foydalanuvchiga chiqmasin.

## Baza va testlar

Biletga mos jadvallar + migratsiyalar + demo seed. Zarur bo‘lsa profiles, vazifaga oid records, notification_jobs va foydalanish hisoblagichlari. Admin rolini foydalanuvchi o‘zgartira oladigan metadata’dan olma. RLS A foydalanuvchining B yozuvini o‘qish/yozishini rad etsin. Fayl turlari/hajmi va storage policies tekshirilsin. Dastlab haqiqiy ism/telefon o‘rniga sintetik seed ishlat.

Qabul mezonlari: production Google login/logout/reload; CRUD saqlanishi; boshqa akkauntdan ruxsatsiz o‘qish rad etilishi; mobil va klaviatura; bo‘sh/xato/yuklanish holatlari; 401/429/timeout; Telegram dublikatlari; to‘g‘ridan-to‘g‘ri /auth/callback reload; build va loglarda maxfiy qiymatlar yo‘qligi. Monitoring ishlasa ham haqiqiy biznes oqimini alohida tekshir.

Supabase Free kam faollik sabab pauzalanishi mumkin. Render monitori Supabase’ni avtomatik kafolatlamaydi. Tanlov oldidan baza/auth/AI endpointlarini tekshir. Muhim funksiyalar AI uzilganda ham ishlasin; demo holati haqiqiy saqlash sifatida ko‘rsatilmasin.

## Joriy holat va yangi AI uchun tartib

Tayyor: .io dizayn kutubxonasi va ko‘chiriladigan kod; sanali rasmiy API ulanish sinovlari. Reja: Render hosting, UptimeRobot monitori, tanlovga alohida Supabase, OAuth client va Telegram webhook integratsiyasi. Render kombinatsiyasi hozirgi asosiy tanlov; avval ko‘rilgan Cloudflare/Vercel variantlari muqobil, bir vaqtning o‘zida majburiy serverlar emas.

O‘qish tartibi: joriy bilet va loyiha CURRENT-TASK.md/HANDOFF.md → /ai.md → /ish-tartibi/ai.md va status.json → ushbu hujjat → /api/ai.md → tanlangan /design/SLUG/ai.md. So‘ng real kodni ol, kichik ishlaydigan oqim yarat, baza va kalitlarni xavfsiz ula, tekshir, HANDOFF.md’da bajargan va qolgan ishni aniq yoz. Joydagi akkaunt/oldindan tayyorlangan kodga oid ruxsatni foydalanuvchi yoki reglament belgilaydi; bu hujjat bunday ruxsatni o‘zi bermaydi.


[AI ish tartibi, ehtimoliy xatolar va topshirish qo‘llanmasi](https://azizbeksafarov.github.io/ish-tartibi/ai.md)

## Rasmiy manbalar

- [Render Free: faoliyat va cheklovlar](https://render.com/docs/free)
- [UptimeRobot Free: tekshiruv oralig‘i](https://uptimerobot.com/pricing/)
- [Supabase: ma’lumot va RLS](https://supabase.com/docs/guides/database/secure-data)
- [Supabase: Google orqali kirish](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Supabase: redirect manzillar](https://supabase.com/docs/guides/auth/redirect-urls)
- [Supabase: Free loyiha pauzasi](https://supabase.com/docs/guides/platform/free-project-pausing)
- [Groq: model va limitlar](https://console.groq.com/docs/rate-limits)
- [Groq: loyihalar va umumiy tashkilot limiti](https://console.groq.com/docs/projects)
- [Gemini: loyiha kvotasi](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Gemini: tariflar](https://ai.google.dev/gemini-api/docs/pricing)
- [Telegram: webhook va secret token](https://core.telegram.org/bots/api#setwebhook)
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

O‘qish tartibi: /ai.md → ushbu hujjat → /api/ai.md → tanlangan /design/SLUG/ai.md → joriy bilet/CURRENT-TASK.md. So‘ng real kodni ol, kichik ishlaydigan oqim yarat, baza va kalitlarni xavfsiz ula, tekshir, HANDOFF.md’da bajargan va qolgan ishni aniq yoz. Joydagi akkaunt/oldindan tayyorlangan kodga oid ruxsatni foydalanuvchi yoki reglament belgilaydi; bu hujjat bunday ruxsatni o‘zi bermaydi.

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
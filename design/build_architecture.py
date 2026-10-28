"""Publish the approved architecture and credential-free API evidence."""
from pathlib import Path
from html import escape
import json
from workspace_hq import frame
from context_reading import markdown as reading_markdown
from product_quality import markdown as quality_markdown, html as quality_html

SITE = Path(__file__).resolve().parent.parent
DATE = '2026-10-18'
BASE = 'https://azizbeksafarov.github.io'

SOURCES = [
 ('Render Free: faoliyat va cheklovlar', 'https://render.com/docs/free'),
 ('UptimeRobot Free: tekshiruv oralig‘i', 'https://uptimerobot.com/pricing/'),
 ('Supabase: ma’lumot va RLS', 'https://supabase.com/docs/guides/database/secure-data'),
 ('Supabase: Google orqali kirish', 'https://supabase.com/docs/guides/auth/social-login/auth-google'),
 ('Supabase: redirect manzillar', 'https://supabase.com/docs/guides/auth/redirect-urls'),
 ('Supabase: Free loyiha pauzasi', 'https://supabase.com/docs/guides/platform/free-project-pausing'),
 ('Groq: model va limitlar', 'https://console.groq.com/docs/rate-limits'),
 ('Groq: loyihalar va umumiy tashkilot limiti', 'https://console.groq.com/docs/projects'),
 ('Gemini: loyiha kvotasi', 'https://ai.google.dev/gemini-api/docs/rate-limits'),
 ('Gemini: tariflar', 'https://ai.google.dev/gemini-api/docs/pricing'),
 ('Telegram: webhook va secret token', 'https://core.telegram.org/bots/api#setwebhook'),
]

PAGE_LAYERS = [
 ('Ochiq landing', '/', 'Mehmon', 'Kim uchun, qanday foyda va nima qilish mumkinligini tushuntiradi. Haqiqiy mahsulot ko‘rinishi va asosiy CTA: ko‘rish yoki ishni boshlash. Soxta raqam/fikr yo‘q.'),
 ('Ochiq mazmun va tafsilot', '/explore · /items/:id', 'Mehmon; saqlashda login', 'Biletga mos qidiruv, filtr va obyekt tafsiloti. Faqat ko‘rish uchun keraksiz login so‘ralmaydi; parametrlar, bo‘sh va topilmagan holat aniq.'),
 ('Kirish va callback', '/login · /auth/callback', 'Kirish jarayoni', 'Google/Supabase sessiyasi, bekor qilish va xato. Foydalanuvchi tanlagan ichki manzilga xavfsiz qaytadi; ixtiyoriy tashqi return URL ochilmaydi.'),
 ('Dashboard / shaxsiy kabinet', '/app', 'Tasdiqlangan foydalanuvchi', 'O‘z yozuvlari, so‘nggi ishlar, bajarilish va davom ettirish. Har ko‘rsatkich haqiqiy saqlangan ma’lumotdan; bo‘sh kabinet uchun birinchi foydali amal.'),
 ('Workspace / ish maydoni', '/app/work/:id', 'Yozuvga vakolati bor foydalanuvchi', 'Asosiy vazifa shu yerda bajariladi: yaratish/tahrirlash → saqlash → natija. Kontekstga mos AI, kerak bo‘lsa Telegram amali. Save holati, xato va qayta urinish ko‘rinadi.'),
]

PRODUCT_MD = '''## Mahsulot tuzilishi: landing → kabinet → ish maydoni

Bu kelajakdagi tanlov mahsuloti uchun yo‘riqnoma; .io bosh qarorgohini dashboard ilovasiga aylantirish topshirig‘i emas. Quyidagi route nomlari namunaviy: biletga mos nomlanadi, mavjud mahsulot route’lari deb taxmin qilinmaydi. Hamma qatlam har bilet uchun majburiy emas. Axborot sayti bitta sahifada yetarli bo‘lishi mumkin; qayta kirib shaxsiy ishni davom ettirish kerak bo‘lsa dashboard/workspace zarur bo‘ladi.

{PAGE_TABLE}

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

'''
_page_rows = '\n'.join('| '+' | '.join(row)+' |' for row in PAGE_LAYERS)
PRODUCT_MD = PRODUCT_MD.replace('{PAGE_TABLE}', '| Qatlam | Namuna route | Kirish | Asosiy vazifa |\n| --- | --- | --- | --- |\n'+_page_rows)

ARCH_MD = '''# Tanlov loyihasi — Render + UptimeRobot + Supabase

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

O‘qish tartibi:

{READING_ORDER}

So‘ng real kodni ol, kichik ishlaydigan oqim yarat, baza va kalitlarni xavfsiz ula, tekshir, HANDOFF.md’da bajargan va qolgan ishni aniq yoz. Joydagi akkaunt/oldindan tayyorlangan kodga oid ruxsatni foydalanuvchi yoki reglament belgilaydi; bu hujjat bunday ruxsatni o‘zi bermaydi.
'''

ARCH_MD += '\n\n## 2026-10-28 qayta tekshiruv chegarasi\n\nTanlov manbalari CURRENT-COMPETITION.md’da yangilangan. Tashkilotchi portalining Firebase’i ushbu mahsulotning Supabase’i emas. Render Free 15 daqiqa/750 soat va Supabase 1 hafta faolsizlik pauzasi rasmiy sahifalarda qayta ko‘rildi. Gemini project-level quota qoidasi ham qayta ko‘rildi. UptimeRobot pricing va Groq rate-limits bu fetch’da HTTP xato qaytardi; oldingi raqamlar yangi tekshirildi deyilmaydi. 18-oktabr API ulanish dalillari qayta bajarilmagan. Bilet va haqiqiy project/account holati ustuvor.\n'
ARCH_MD = ARCH_MD.replace('{READING_ORDER}', reading_markdown().rstrip())
ARCH_MD = ARCH_MD.replace('## Hosting va monitoring', PRODUCT_MD + quality_markdown() + '## Hosting va monitoring', 1)

API_MD = '''# AI API va Telegram — sinovlar va ishlatish qoidalari

Yangilangan: 2026-10-18. Bu ochiq, kalitlarsiz hujjat. Kalit qiymatlari, akkaunt identifikatorlari va billing ma’lumotlari bu yerda yo‘q.

## Haqiqatan tekshirilgan

2026-10-18 kuni rasmiy endpointlarga sintetik “Connectivity test. Reply with only OK.” so‘rovi yuborildi. Natijalar vaqtga bog‘liq snapshot; hozirgi uptime yoki kelajakdagi ishlash kafolati emas. Har qatorda bittadan o‘lchov, streaming ishlatilmadi. Response modellari bo‘yicha umumiy sifat reytingi chiqarmang.

| Xizmat | Kalit roli | Model / amal | HTTP | Natija | To‘liq so‘rov vaqti |
| --- | --- | --- | --- | --- | --- |
| Groq | Asosiy | openai/gpt-oss-120b | 200 | OK | 406 ms |
| Groq | Zaxira | openai/gpt-oss-120b | 200 | OK | 447 ms |
| Gemini | Asosiy | gemini-3.8-flash | 200 | OK | 10183 ms |
| Gemini | Zaxira | gemini-3.8-flash | 200 | OK | 3608 ms |
| Telegram | Bot | getMe | 200 | Token botga tegishli | 3881 ms |
| Telegram | Bot | getChat | 200 | Berilgan shaxsiy chat topildi | 355 ms |

Qo‘shimcha dastlabki sinovlar: Groq openai/gpt-oss-20b va Gemini gemini-3.5-flash-lite ham HTTP 200, OK. Telegram getWebhookInfo muvaffaqiyatli; sinov paytida webhook o‘rnatilmagan. Xabar yuborish va ikki tomonlama AI-bot oqimi hali sinovdan o‘tmagan. Real so‘rovlar faqat ulanishni tasdiqlaydi; tutor sifati, uzun kontekst va yuklama alohida tekshiriladi.

## Tier va xizmat nomlarini ajratish

Free tier — provayderning bepul rejasi. Billing tier — akkaunt/loyihaning to‘lov va kvota darajasi. Serving tier — so‘rovning xizmat ko‘rsatish turi. Gemini javobidagi serviceTier=standard pullik billing yoqilganini isbotlamaydi. Modelga muvaffaqiyatli so‘rov ham akkaunt Free ekanini yoki cheksiz kvotani isbotlamaydi. Biz billing dashboard’da tasdiqlamaganmiz.

Groq 120B sinov javob sarlavhalarida 1000 request/day va 8000 token/min limit ko‘rsatdi. Rasmiy Free jadvalida GPT-OSS 120B uchun 30 RPM, 1000 RPD, 8000 TPM, 200000 TPD ko‘rsatilgan (2026-10-18 tekshiruvi). Aniq organization limitlari dashboard’dan olinadi. Bir organization’dagi projectlar uning umumiy chegarasini oshirmaydi.

Gemini limitlari model va loyiha tier’iga bog‘liq. Bir Google Cloud project’dagi ikkita kalit bir xil model kvotasini bo‘lishadi. Ikki saqlangan kalitning bir loyihaga tegishliligi bizning qisqa sinovlarda aniqlanmagan. Qo‘shimcha kvota deb hisoblamang. Groq va Gemini turli provayderlar; ular orasidagi fallback alohida xizmatni tanlaydi.

## Backend integratsiyasi

Asosiy arxitektura /arxitektura/ai.md’da. Render Node API’da server secrets’dan kalit o‘qi; frontendga yuborma. GROQ_API_KEY / GROQ_API_KEY_BACKUP va GEMINI_API_KEY / GEMINI_API_KEY_BACKUP nomlari backend uchun kelishilgan konvensiya, SDK zaxira kalitni o‘zi avtomatik almashtiradi degani emas. Model nomi alohida konfiguratsiya bo‘lsin: GROQ_MODEL=openai/gpt-oss-120b va GEMINI_MODEL=gemini-3.8-flash hozir sinalgan nomlar; amaliy vazifada qayta bahola.

Groq OpenAI-compatible endpoint: POST https://api.groq.com/openai/v1/chat/completions, Authorization Bearer serverda. Gemini rasmiy API endpointi yoki SDK, API kaliti serverda x-goog-api-key sarlavhasida. Kalitni URL query’sida saqlama/loglama. Gemini 3.8 Flash uchun minimal thinking qo‘llanmaydi; oldingi qisqa sinov low bilan bajarilgan. Bu parametrni boshqa modellarga avtomatik ko‘chirma.

Supabase Google OAuth Client ID/Secret — AI kalitlaridan boshqa sozlama; Google Cloud’da yaratiladi. Telegram tokeni — bot vakolati, chat ID esa xabar manzili. Bot tokenini frontenddan chaqirma. Webhook uchun alohida secret, update_id deduplikatsiyasi va kerakli chat ruxsatlari tekshiriladi.

## Xatolar

- 401: noto‘g‘ri yoki bekor qilingan credential; qayta-qayta urinish o‘rniga sozlamani tekshir.
- 403: model, loyiha yoki foydalanuvchi ruxsati yetishmaydi.
- 429: RPM/TPM/RPD kabi limitlar yoki provayder cheklovini ajrat; Retry-After’ni hurmat qil. Bir loyihadagi kalitni aylantirish kvotani tiklamaydi.
- Timeout/5xx: cheklangan retry/backoff, so‘ng mos boshqa provayder. Har foydalanuvchi savoliga cheksiz yoki parallel takroriy chaqiruv yuborma.
- Ikkala AI ham ishlamasa aniq xabar ko‘rsat; asosiy saqlash, qidirish va kabinet ishlashda davom etsin.

## Keyingi sinov

Bir xil o‘zbekcha topshiriqlar, fakt aniqligi, JSON strukturasi, manbaga tayangan javob, noto‘g‘ri ma’lumotdan himoya, bir nechta foydalanuvchi va kvota holatini sinash. Oldingi bir so‘zli OK vaqtlaridan sifat yoki barqarorlik xulosasi chiqarmaslik. Natijani yangi sana, model, anonim kalit roli va test usuli bilan yozish; maxfiy response/request yoki tokenlarni chiqarmaslik.
'''

def write(name, text):
    path = SITE / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding='utf-8', newline='\n')

def build():
    refs = '<ol class="source-list">' + ''.join(f'<li><a href="{url}">{escape(title)} <span aria-hidden="true">↗</span></a></li>' for title, url in SOURCES) + '</ol>'
    write('arxitektura/ai.md', ARCH_MD + '\n\n[AI ish tartibi, ehtimoliy xatolar va topshirish qo‘llanmasi](https://azizbeksafarov.github.io/ish-tartibi/ai.md)\n' + '\n## Rasmiy manbalar\n\n' + '\n'.join(f'- [{title}]({url})' for title, url in SOURCES))
    write('api/ai.md', API_MD + '\n\n[AI ish tartibi va diagnostika](https://azizbeksafarov.github.io/ish-tartibi/ai.md)\n' + '\n## Rasmiy manbalar\n\n' + '\n'.join(f'- [{title}]({url})' for title, url in SOURCES[6:]))
    nodes = [
        ('frontend', '01', 'Interfeys', 'Tanlangan dizayn', 'HTML / React / Vite'),
        ('render', '02', 'Server', 'Render', 'Frontend + Node.js API'),
        ('supabase', '03', 'Backend', 'Supabase', 'Auth · PostgreSQL · RLS'),
        ('integrations', '04', 'Integratsiyalar', 'AI + Telegram', 'Groq · Gemini · Bot API'),
    ]
    node_html = ''.join(f'<button class="system-node node-{key}" type="button" data-component="{key}" aria-pressed="{str(key=="render").lower()}"><span class="node-meta"><span>{num} / {label}</span><span aria-hidden="true">↗</span></span><strong>{title}</strong><small>{sub}</small></button>' for key, num, label, title, sub in nodes)
    page_rows = ''.join('<tr><th scope="row">'+escape(row[0])+'</th>'+''.join('<td>'+escape(value)+'</td>' for value in row[1:])+'</tr>' for row in PAGE_LAYERS)
    product_html = f'''<section class="product-section" id="sahifalar" aria-labelledby="product-heading"><p class="eyebrow">MAHSULOT VA SAHIFALAR XARITASI</p><h2 id="product-heading">Tanishtirishdan — haqiqiy ishga.</h2><p class="section-intro">Tanlov mahsuloti uchun reja. Route’lar namunaviy, barcha qatlam har bilet uchun majburiy emas. .io — tayyorgarlik markazi; bu xarita kelajakdagi alohida saytga tegishli.</p><ol class="product-journey" aria-label="Foydalanuvchi yo‘li"><li><strong>Landing</strong><span>Foyda + aniq boshlash</span></li><li><strong>Kirish</strong><span>Sessiya + qaytish</span></li><li><strong>Dashboard</strong><span>Holat + davom etish</span></li><li><strong>Workspace</strong><span>Amal + saqlangan natija</span></li></ol><div class="table-scroll" role="region" aria-label="Sahifalar va kirish huquqlari" tabindex="0"><table><caption>Namunaviy sayt xaritasi · biletga moslashtiriladi</caption><thead><tr><th scope="col">Qatlam</th><th scope="col">Namuna route</th><th scope="col">Kirish</th><th scope="col">Asosiy vazifa</th></tr></thead><tbody>{page_rows}</tbody></table></div><div class="product-guidance"><article><h3>Animatsiya maqsadga xizmat qiladi.</h3><p>Landing ichidagi hero yoki tushuntiruvchi sahnaga mos. Alohida animatsiyali sahifa faqat mustaqil vazifasi bo‘lsa. Majburiy intro kutish yo‘q; boshlash tugmasi ochiq. Pause, reduced-motion va statik fallback ko‘riladi.</p></article><article><h3>Kabinet holatni, workspace ishni ko‘rsatadi.</h3><p>Dashboard o‘z ma’lumoti va keyingi qadamni beradi. Workspace’da yaratish/tahrirlash, saqlash va natija bajariladi. Biletga aloqasiz KPI yoki grafik bilan to‘ldirilmaydi.</p></article><article><h3>Bir brend, vazifaga mos ikki qobiq.</h3><p>Ochiq sahifada tanishtiruvchi navigatsiya; ilovada xizmat navigatsiyasi. Rang va shrift rollari izchil, kompozitsiya vazifaga mos. Telefon va klaviaturada asosiy amallar ochiq.</p></article><article><h3>Ko‘rinish bilan birga haqiqiy holat.</h3><p>Loading, empty, error, save va ruxsat holatlari. API/RLS yozuv egasini tekshiradi. Deep link/reload ishlaydi; saqlanmagan tahrir jim yo‘qolmaydi. AI/Telegram xatosi asosiy ishni buzmasin.</p></article></div><p class="evidence-note">Qurish tartibi: route va huquqlar xaritasi → bitta ishlaydigan oqim → landing/animatsiya va qolgan imkoniyatlar → haqiqiy tekshiruv. AIga beriladigan to‘liq ko‘rsatma ARCHITECTURE.md sifatida har bir source ZIP’da ham bor.</p><a class="plain-link" href="/arxitektura/ai.md">Barcha sahifa, holat va qurish ko‘rsatmalari ↗</a></section>'''
    content = f'''<div class="blueprint-page">
      <header class="blueprint-hero"><div><p class="eyebrow">TANLOV LOYIHASI / ARXITEKTURA 01</p><h1>Bir sayt.<br><span>Birga ishlaydigan tizim.</span></h1><p class="blueprint-lead">Render’da interfeys va API. Supabase’da ma’lumot va kirish. AI hamda Telegram — vazifaga xizmat qiladigan integratsiyalar.</p></div><div class="revision-stamp"><span>ASOSIY TANLOV</span><strong>Render<br>+ UptimeRobot</strong><small>Reja · {DATE}<br>Infratuzilma hali ulanmagan</small></div></header>
      <div class="blueprint-actions"><a class="button dark" href="#xarita">Tizimni ko‘rish <span aria-hidden="true">↓</span></a><a href="/arxitektura/ai.md" class="plain-link">AI uchun to‘liq qo‘llanma ↗</a><a href="/api/" class="plain-link">API sinov natijalari →</a></div>
      <section class="system-board" id="xarita" aria-labelledby="system-heading"><div class="section-heading"><div><p class="eyebrow">01 / TIZIM XARITASI</p><h2 id="system-heading">Har qismning o‘z vazifasi.</h2></div><span class="status-tag planned">Rejalashtirilgan arxitektura</span></div><p class="section-intro">Qismni tanlang — uning vazifasi, chegarasi va keyingi ishini ko‘ring.</p><div class="monitor-rail"><span class="monitor-icon" aria-hidden="true">◉</span><div><strong>UptimeRobot</strong><span>5 daqiqada GET /health → Render</span></div><a href="#monitoring">Uyg‘oq saqlash qanday ishlaydi? ↓</a></div><div class="system-nodes">{node_html}</div><div class="component-detail" aria-live="polite" aria-atomic="true"><span class="detail-marker" aria-hidden="true">↳</span><div><p id="component-label" class="eyebrow">02 / SERVER</p><h3 id="component-title">Bitta Render Web Service</h3><p id="component-text">Frontend build va Node.js API bir origin’da. AI va Telegram so‘rovlari shu serverdan chiqadi; haqiqiy ma’lumotlar Supabase’da saqlanadi.</p><p id="component-next" class="detail-next">Keyingi ish: xizmat yaratish, build/start buyruqlari va server secrets’ni ulash.</p></div></div></section>
      <section class="flow-section" aria-labelledby="flow-heading"><div class="section-heading"><div><p class="eyebrow">02 / SO‘ROVNING YO‘LI</p><h2 id="flow-heading">Bir amal ichida nima bo‘ladi?</h2></div><span class="diagram-note">Izohli namoyish · jonli API emas</span></div><div class="scenario-switch" role="group" aria-label="So‘rov oqimi"><button type="button" data-scenario="assistant" aria-pressed="true">AI savoli</button><button type="button" data-scenario="login" aria-pressed="false">Google orqali kirish</button><button type="button" data-scenario="telegram" aria-pressed="false">Telegram xabari</button><button type="button" data-scenario="monitor" aria-pressed="false">Holat tekshiruvi</button></div><ol class="flow-steps" id="flow-steps"><li><span>01</span><div><strong>Foydalanuvchi savoli</strong><p>Interfeys savolni Render API’ga yuboradi.</p></div></li><li><span>02</span><div><strong>Ruxsat va limit</strong><p>Supabase sessiyasi, so‘rov hajmi va foydalanish budjeti tekshiriladi.</p></div></li><li><span>03</span><div><strong>Groq yoki Gemini</strong><p>Faqat zarur kontekst bilan rasmiy API chaqiriladi.</p></div></li><li><span>04</span><div><strong>Foydali javob</strong><p>Natija yoki tushunarli xato interfeysga qaytadi.</p></div></li></ol><p id="flow-status" class="flow-caption" role="status">AI kaliti faqat serverda. Model foydalanuvchi vakolatini belgilamaydi.</p><noscript><p class="section-intro">Barcha oqimlar va sozlash qadamlari <a href="/arxitektura/ai.md">to‘liq matnli qo‘llanmada</a> ham mavjud.</p></noscript></section>
      <section class="monitor-section" id="monitoring" aria-labelledby="monitor-heading"><div><p class="eyebrow">03 / BEPUL XIZMATLAR BIRGALIKDA</p><h2 id="monitor-heading">15 daqiqa sukut.<br>5 daqiqada tekshiruv.</h2><p>Render Free kiruvchi trafik bo‘lmasa 15 daqiqada uxlaydi. UptimeRobot Free esa HTTP manzilni 5 daqiqada tekshira oladi. So‘rov origin’ga yetib borsa, bu faolsizlikdan uxlashni kamaytirishi mumkin.</p><p class="diagram-note">Bu hujjatlardan chiqarilgan xulosa. Bizning Render xizmatimizda hali amalda sinalmagan; doimiy ishlash kafolati emas.</p><p class="inline-sources"><a href="https://render.com/docs/free">Render hujjati ↗</a><a href="https://uptimerobot.com/pricing/">UptimeRobot tarifi ↗</a></p></div><div class="monitor-spec"><div><span>MONITOR MANZILI</span><code>GET /health</code></div><div><span>JAVOB</span><code>200 · {{"status":"ok"}}</code></div><div><span>ENDPOINT ICHI</span><p>AI chaqiruvi yo‘q. Kalit yoki shaxsiy ma’lumot yo‘q. Har ping’da bazaga yozish yo‘q.</p></div><div><span>CHEGARA</span><p>750 instance-soat / workspace / oy. Bir xizmat 31 kunda 744 soat; boshqa xizmatlar ham umumiy kvotani sarflaydi. Render qayta ishga tushishi mumkin.</p></div></div></section>
      <section class="oauth-section" id="google-auth" aria-labelledby="oauth-heading"><div class="section-heading"><div><p class="eyebrow">04 / GOOGLE AUTH</p><h2 id="oauth-heading">Kirish bor. Chalkash callback yo‘q.</h2></div><span class="status-tag planned">Sozlash rejalashtirilgan</span></div><p class="section-intro">OAuth Client ID va Client Secret Google Cloud’da yaratiladi, Supabase Google provider’iga ulanadi. Gemini API kaliti bu vazifani bajarmaydi.</p><div class="oauth-pair"><div><span class="spec-label">GOOGLE → SUPABASE</span><h3>Google Authorized redirect URI</h3><code>https://PROJECT_REF.supabase.co/auth/v1/callback</code><p>Google javobni Supabase’ga qaytaradi.</p></div><div><span class="spec-label">SUPABASE → SAYT</span><h3>Supabase Redirect URL</h3><code>https://LOYIHA.onrender.com/auth/callback</code><p>Supabase sessiyadan keyin saytga qaytaradi.</p></div></div><p class="section-intro">Bular namuna manzillar. Domen hali band qilinmagan. Yangi Supabase loyihasi, localhost porti yoki domen o‘zgarsa sozlamalar qayta tekshiriladi. Faqat openid, email va profile ruxsatlari so‘raladi. Testing rejimidagi kirish va production login alohida sinaladi.</p><a class="plain-link" href="https://supabase.com/docs/guides/auth/social-login/auth-google">Google login’ni sozlash qo‘llanmasi ↗</a></section>
      <section class="readiness-section" id="holat" aria-labelledby="readiness-heading"><div class="section-heading"><div><p class="eyebrow">05 / HAQIQIY HOLAT</p><h2 id="readiness-heading">Nima tayyor, nima keyin?</h2></div></div><ul class="readiness-list"><li><span class="status-tag verified">Tayyor</span><div><strong>Dizaynlar va ularning kodi</strong><p>9 ta uslub, source ZIP va AI yo‘riqnomalari.</p></div><a href="/design/">Tanlash →</a></li><li><span class="status-tag verified">Sinalgan</span><div><strong>Rasmiy API kalitlarining ulanishi</strong><p>Groq 120B, Gemini 3.8 Flash va Telegram. Sanali natijalar; integratsiya tayyor degani emas.</p></div><a href="/api/">Natijalar →</a></li><li><span class="status-tag planned">Reja</span><div><strong>Render + UptimeRobot</strong><p>Xizmat, barqaror manzil, /health va haqiqiy monitor hali yaratilmagan.</p></div><span aria-hidden="true">—</span></li><li><span class="status-tag planned">Reja</span><div><strong>Tanlov Supabase’i + Google OAuth</strong><p>Alohida loyiha, migratsiyalar, RLS, client va callback sozlamalari kerak.</p></div><span aria-hidden="true">—</span></li><li><span class="status-tag planned">Reja</span><div><strong>Sayt → AI → Telegram to‘liq oqimi</strong><p>Webhook, kvota boshqaruvi, haqiqiy CRUD va nosozlik sinovlari biletga mos quriladi.</p></div><span aria-hidden="true">—</span></li></ul><details class="architecture-notes"><summary>Server yoki API ishlamay qolsa nima qilamiz?</summary><p>401/403’da sozlama va ruxsatni tekshiramiz. 429’da tegishli limit va Retry-After’ni hisobga olamiz. Timeout/5xx’da cheklangan retry va mos boshqa provayder. AI uzilganda asosiy biznes amallari ishlashda davom etishi kerak.</p><p>UptimeRobot bazaning ishlashini kafolatlamaydi. Supabase Free pauzasi, Render resurslari va AI kvotalari mustaqil tekshiriladi. “Bepul” xizmatlar birlashishi pullik SLA yoki cheksiz quvvat bermaydi.</p></details></section>
      <section class="handoff-section"><div><p class="eyebrow">06 / YANGI AI BILAN DAVOM ETISH</p><h2>Havolani bering.<br>Kontekst joyida.</h2><p>To‘liq arxitektura, xavfsizlik chegaralari, OAuth va test tartibi bitta matnli qo‘llanmada.</p></div><div class="context-copy"><label for="quick-prompt">AIga yuboriladigan matn</label><textarea id="quick-prompt" readonly rows="5">{BASE}/arxitektura/ai.md
Shu arxitekturani va /api/ai.md qo‘llanmasini o‘qi. Asosiy stack: Render + UptimeRobot + Supabase + Google Auth + Telegram + AI. Hali ulanmagan xizmatlarni tayyor deb ko‘rsatma. Biletimni va tanlangan dizaynimni keyin beraman.</textarea><div class="copy-line"><button class="button dark" type="button" data-copy="quick" data-status="quick-status">Matnni nusxalash ↗</button><a href="/arxitektura/ai.md" download data-download>Markdown ↓</a></div><p id="quick-status" role="status"></p></div></section>
      <section class="sources-section" id="manbalar"><p class="eyebrow">MANBA VA YANGILANISH</p><h2>Qoidalar taxmin bilan yozilmagan.</h2><p class="section-intro">Asosiy arxitektura manbalari {DATE} holatida. 2026-10-28 qayta ko‘rilgan bandlar joriy tanlov yangilanishida alohida belgilangan; barcha tarif/model yana tasdiqlandi degani emas. Xizmatlar va tariflar o‘zgarsa bu reja ham qayta tekshiriladi.</p>{refs}</section>
    </div>'''
    content=content.replace('<section class="system-board"', '<p class="workflow-crosslink"><a href="/ish-tartibi/">AI adashmasligi uchun: o‘qish tartibi, ehtimoliy xatolar va 3 qatlamli sinov →</a></p><section class="system-board"',1)
    content=content.replace('<section class="flow-section"', product_html+quality_html()+'<section class="flow-section"',1)
    content=content.replace('<a href="/api/" class="plain-link">API sinov natijalari →</a>', '<a href="#sahifalar" class="plain-link">Landing → workspace xaritasi ↓</a><a href="/api/" class="plain-link">API sinov natijalari →</a>',1)
    write('arxitektura/index.html', frame('Loyiha arxitekturasi — Render + UptimeRobot', content, 'architecture'))
    tests = [
      ('Groq', 'Asosiy', 'openai/gpt-oss-120b', 'OK', 406),
      ('Groq', 'Zaxira', 'openai/gpt-oss-120b', 'OK', 447),
      ('Gemini', 'Asosiy', 'gemini-3.8-flash', 'OK', 10183),
      ('Gemini', 'Zaxira', 'gemini-3.8-flash', 'OK', 3608),
      ('Telegram', 'Bot', 'getMe', 'Bot tasdiqlandi', 3881),
      ('Telegram', 'Bot', 'getChat', 'Chat topildi', 355),
    ]
    rows = ''.join(f'<tr><th scope="row">{provider}</th><td>{role}</td><td><code>{model}</code></td><td><span class="test-result">200 · {result}</span></td><td class="numeric">{ms / 1000:.2f} s</td></tr>' for provider, role, model, result, ms in tests)
    api = f'''<div class="blueprint-page api-page"><header class="blueprint-hero"><div><p class="eyebrow">INTEGRATSIYALAR / SANALI DALIL</p><h1>API ishladi.<br><span>Nimani isbotladi?</span></h1><p class="blueprint-lead">Rasmiy endpointlardan haqiqiy javoblar. Tarif, kvota va integratsiya holati alohida tushuntirilgan.</p></div><div class="revision-stamp"><span>SINOV SANASI</span><strong>18 oktabr<br>2026</strong><small>Qisqa ulanish sinovi<br>Jonli uptime hisoblagichi emas</small></div></header><div class="blueprint-actions"><a class="button dark" href="/arxitektura/">Arxitekturaga qaytish ←</a><a class="plain-link" href="/api/ai.md">AI uchun texnik matn ↗</a></div><section class="api-evidence" aria-labelledby="tests-heading"><div class="section-heading"><div><p class="eyebrow">01 / AMALIY NATIJALAR</p><h2 id="tests-heading">Javob olingan modellar va amallar.</h2></div><span class="status-tag verified">6 ta qayd</span></div><p class="section-intro">AI’ga sintetik “faqat OK deb javob ber” savoli yuborilgan. Telegram amallari faqat o‘qish uchun: xabar yuborilmagan. Har vaqt — bittadan to‘liq so‘rov o‘lchovi.</p><div class="table-scroll" tabindex="0" role="region" aria-label="API sinov natijalari jadvali"><table><caption>{DATE} · HTTP ulanish natijalari</caption><thead><tr><th scope="col">Xizmat</th><th scope="col">Kalit roli</th><th scope="col">Model / amal</th><th scope="col">Natija</th><th scope="col">Vaqt</th></tr></thead><tbody>{rows}</tbody></table></div><p class="evidence-note">Bu tezlik reytingi emas. Bir so‘zli javob tutor sifati yoki katta yuklamadagi barqarorlikni isbotlamaydi. Telegram webhook’i sinov paytida o‘rnatilmagan; to‘liq AI-bot integratsiyasi hali qurilmagan.</p></section><section class="tier-section"><p class="eyebrow">02 / TARIFNI TO‘G‘RI TUSHUNISH</p><h2>Free tier ≠ cheksiz foydalanish.</h2><dl class="tier-definitions"><div><dt>Free tier</dt><dd>Provayderning bepul rejasi. Model va xizmat bo‘yicha o‘z limitlari bor.</dd></div><div><dt>Billing tier</dt><dd>Akkaunt yoki loyiha darajasi. Bizning billing dashboard holatimiz hali tasdiqlanmagan.</dd></div><div><dt>Serving tier</dt><dd>So‘rovning xizmat ko‘rsatish turi. Gemini’dagi <code>standard</code> qiymati pullik billing dalili emas.</dd></div></dl></section><section class="quota-section"><p class="eyebrow">03 / KVOTA HOVUZI</p><h2>Ikki kalit har doim ikki limit emas.</h2><div class="quota-pair"><article><span class="spec-label">GROQ</span><h3>Organization — umumiy chegara.</h3><p>Project limitlari uni oshirmaydi. 120B sinov sarlavhalari: <strong>1 000 so‘rov/kun</strong> va <strong>8 000 token/minut</strong>. Rasmiy Free jadvalida yana 30 RPM va 200 000 TPD ko‘rsatilgan; aniq limit dashboard’da.</p><a class="plain-link" href="https://console.groq.com/docs/rate-limits">Rasmiy limitlar ↗</a></article><article><span class="spec-label">GEMINI</span><h3>Project — model kvotasi.</h3><p>Bir loyihadagi kalitlar tegishli model limitini bo‘lishadi. Bizdagi ikki kalit alohida loyiha kvotasiga egaligi tasdiqlanmagan. Limitni kalitlar soniga ko‘paytirmang.</p><a class="plain-link" href="https://ai.google.dev/gemini-api/docs/rate-limits">Rasmiy limitlar ↗</a></article></div></section><section class="api-rules"><p class="eyebrow">04 / SAYTGA ULASH</p><h2>Kalit serverda. Foydali natija saytda.</h2><ul class="rules-list"><li><strong>Render API</strong><span>Kalitni server secrets’dan oladi; sessiya, vakolat, savol hajmi va budjetni tekshiradi.</span></li><li><strong>401 / 403</strong><span>Sozlama yoki ruxsat xatosi. Cheksiz retry qilinmaydi.</span></li><li><strong>429</strong><span>Qaysi limit va kutish muddati aniqlanadi. Bir project ichida kalit aylantirish kvotani tiklamaydi.</span></li><li><strong>Timeout / 5xx</strong><span>Cheklangan retry, so‘ng mos boshqa provayder. Asosiy sayt AI’siz ham ishini davom ettiradi.</span></li><li><strong>Keyingi sifat sinovi</strong><span>Bir xil o‘zbekcha topshiriqlar, fakt aniqligi, JSON, uzun kontekst va ko‘p foydalanuvchi holatlari.</span></li></ul></section><section class="sources-section"><p class="eyebrow">MANBALAR</p><h2>Haqiqiy natija va rasmiy qoida.</h2>{refs}<p class="section-intro">Ochiq sahifada haqiqiy kalitlar, bot tokeni, shaxsiy ID yoki billing ma’lumotlari yo‘q.</p><a class="plain-link" href="/api/verification.json">Kalitlarsiz sinov ma’lumotlari · JSON ↗</a></section></div>'''
    write('api/index.html', frame('API va sinovlar — Ustoz AI tayyorgarlik', api, 'api'))
    write('api/verification.json', json.dumps({'tested_on': DATE, 'scope': 'Single connectivity probes; not live uptime or quality benchmarks', 'billing_tier_verified': False, 'tests': [{'provider': p, 'key_role': r, 'model_or_method': m, 'http_status': 200, 'result': result, 'latency_ms': ms} for p, r, m, result, ms in tests]}, ensure_ascii=False, indent=2) + '\n')

if __name__ == '__main__':
    build()

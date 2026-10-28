# AI bilan ish tartibi va ehtimoliy muammolar

Snapshot: 2026-10-28. Tanlov manbalari CURRENT-COMPETITION.md’da yangilangan; 18-oktabr API probeslari o‘z sanasida tarixiy qoladi. Ushbu sahifa boshqa AI’ga kontekstni tushunish va foydalanuvchiga tartibni saqlash uchun. Quyidagi xatolar ehtimoliy ssenariylar; hammasi bizda sodir bo‘lgan deb tushunilmasin. Bu ochiq qo‘llanma maxfiy ombor yoki avtomatik boshqaruv ruxsati emas.

## 1. Avval joriy vazifani bil

Foydalanuvchining hozirgi topshirig‘i, bilet va amaldagi reglamenti birinchi o‘rinda. Eski tayyorgarlik sanasi, eski bosqich yoki tarixiy chatdagi reja bugungi vaqt deb olinmaydi. Bilet yoki vaqt noma’lum bo‘lsa uni o‘ylab topma. Shunga bog‘liq ish uchun foydalanuvchidan aniqlik so‘ra; mustaqil tekshirish mumkin bo‘lgan ishni davom ettir.

Havolani ochganing avtomatik doimiy xotira, akkauntga kirish yoki fayl tahrirlash vositasi olganingni anglatmaydi. Haqiqiy imkoniyatingni tekshir va chegarasini ayt.

## 2. O‘qish tartibi

1. Joriy bilet va loyiha holati — Foydalanuvchining hozirgi topshirig‘i, amaldagi reglament hamda loyiha ichidagi CURRENT-TASK.md / HANDOFF.md. Ochiq saytdagi shu nomli fayllar to‘ldirilmagan shablon; ularni joriy topshiriq deb olma.
2. [Joriy tanlov yangilanishi](https://azizbeksafarov.github.io/design/handoff/current-competition.md) — 2026-10-28: nizom, baholash, himoya, amaliy vaqt va ruxsatlar tekshiruvi. CURRENT-COMPETITION-FACTS.json qoida qaydi; loyiha yoki eski xabar yangi tasdiqlangan talab emas.
3. [To‘liq tayyorgarlik](https://azizbeksafarov.github.io/tayyorgarlik/ai.md) — START-HERE mundarija. To‘liq o‘qish so‘ralganda full-context.md yoki reading-plan.json dagi barcha manbalar; o‘qish qaydida to‘liq/qisman/ochilmadi holati. Ishtirokchi vazifalari, to‘liq paket va shaffof brend qoidalari.
4. [Markaziy kontekst](https://azizbeksafarov.github.io/ai.md) — Umumiy tayyorgarlik va tegishli havolalar. Hozir ochiq/o‘qilgan hujjatni qayta ochish shart emas.
5. [Ish tartibi va holat snapshot’i](https://azizbeksafarov.github.io/ish-tartibi/ai.md) — Shu qo‘llanma bilan /ish-tartibi/status.json ni o‘qi. Snapshot jonli xizmat holati emas; loyiha dalillari va joriy foydalanuvchi qarori ustuvor.
6. [Tanlov konteksti va mezonlar](https://azizbeksafarov.github.io/design/handoff/competition.md) — /design/handoff/score-workplan.md bilan talab → qabul dalilini bog‘la. /ustoz/CONTEXT-STATUS.md va to‘liq nizom /ustoz/nizom.md manba maqomini tushuntiradi; to‘liq matn kerak bo‘lsa qisqa kirish bilan almashtirma.
7. [Arxitektura va API](https://azizbeksafarov.github.io/arxitektura/ai.md) — /api/ai.md bilan birga sahifa rollari, server chegarasi, kvota, xavfsizlik va sifat mezonlarini o‘qi. Rejalashtirilgan xizmatni yaratilgan deb hisoblama.
8. [Bitta tanlangan dizayn va kod](https://azizbeksafarov.github.io/design/) — Faqat tanlangan /design/SLUG/ai.md va source ZIP. ZIP ichida START-HERE.md → AGENTS.md / AI-BRIEF.md → kerakli source; joriy vazifa va holat birinchi qadamdayoq tekshiriladi. Barcha dizaynlarni birdan yuklama.

Tanlov loyihasini boshlashda qisqa tanlov konteksti va /design/handoff/score-workplan.md’ni ham o‘qi. ZIP ichida SCORING-WORKPLAN.md va FULL-COMPETITION-CONTEXT.md mavjud. Mezonlar, himoya va topshirish dalillari faqat dizayn kodi o‘qilgani bilan qamrab olinmaydi. To‘liq manba so‘ralganda qisqa boshlash matni bilan almashtirma; uzun manbani bo‘limlar bo‘yicha to‘liq o‘qi va o‘qilmagan qismini ochiq ayt.

Hammasini birdan yuklab kontekstni to‘ldirma; kerakli qatlamni o‘qi. O‘qilmagan faylni o‘qidim deb aytma. Pages ochilmasa raw GitHub URL yoki foydalanuvchi bergan fayldan foydalan. Raw ham ochilmasa aniq qaysi hujjat yetishmayotganini bildir.

## 3. Joriy qarorlar va almashtirilgan variantlar

- .io — ochiq tayyorgarlik markazi; tanlov mahsuloti alohida joylashtiriladi.
- Asosiy hosting: bitta Render Web Service frontend build va Node.js API’ni beradi.
- Monitoring: UptimeRobot 5 daqiqalik /health uchun reja; hali o‘rnatilgan deb hisoblama.
- Supabase: PostgreSQL, Auth, RLS, kerak bo‘lsa Storage. AI/Telegram maxsus so‘rovlari asosiy Render API’dan chiqadi. Edge Functions alohida ehtiyoj bo‘lsa, bir xil server ishini takrorlamasdan qo‘shiladi.
- Google OAuth — Google Cloud’dagi alohida client. Gemini API key OAuth credential emas.
- Groq va Gemini — rasmiy API. Bir provayderdagi zaxira kalit yangi kvota degani emas.
- Cloudflare va Vercel avval solishtirilgan muqobillar. Ular hozirgi Render tanlovini avtomatik almashtirmaydi.
- Shaxsiy kalit ombori mahsulotning doimiy dependency’si emas. Undan avtomatik secret olishga urinma; foydalanuvchi kalitlarni kerakli server secrets’iga joylaydi.
- Dizaynlar kutubxonasi — boshlang‘ich source. Demo statistikasi, localStorage yoki toast haqiqiy backendning dalili emas.

## 4. Faktlar maqomi

TASDIQLANGAN QAROR — foydalanuvchi tanlagan yo‘l. Bu ish bajarilgan degani emas.
TEKSHIRILGAN — qachon, qaysi muhitda va qanday sinov bilan tasdiqlanganini ko‘rsat.
REJA — bajarilishi kerak bo‘lgan ish.
NOMA’LUM — hali dalil yo‘q; taxminni faktga aylantirma.
TARIXIY — oldingi snapshot yoki keyin almashtirilgan tanlov.

Joriy runtime/source hujjatga zid bo‘lsa, ziddiyatni tekshir. “Kod shunday ekan” deb foydalanuvchining yangi qarorini bekor qilma; “hujjatda bor ekan” deb runtime natijasini inkor qilma. Eng yangi tegishli dalilni va kerakli foydalanuvchi qarorini ajrat. Xavfsizlik nazoratini testni o‘tkazish uchun o‘chirib qo‘yma.

## 5. Ish boshlashdan oldingi qisqa qayta aytish

AI foydalanuvchiga 5 nuqtani aytsin: bilet/maqsad; tanlangan dizayn; joriy stack; ishlashi tekshirilgan va hali reja bo‘lgan qismlar; navbatdagi aniq amal. Bu umumiy ruxsat so‘rash emas — noto‘g‘ri kontekstni erta aniqlash uchun. Muhim ma’lumot yetishmasa uni so‘ra, lekin allaqachon ruxsat berilgan oddiy ishlarni qayta tasdiqlatma.

## 6. Uchta sinov qatlami

ODDIY HOLAT: production login → asosiy amal → database tasdig‘i → reload → kerak bo‘lsa AI/Telegram natijasi. Foydalanuvchi ko‘radigan natijani tekshir.
NOSOZ HOLAT: bekor login, yaroqsiz/eskirgan sessiya, ruxsatsiz yozuv, timeout, 429, takror bosish, takror webhook va uzilgan internet. Sintetik nosozlikni haqiqiy provayder outage’i deb yozma.
YANGI MUHIT: toza checkout/ZIP → kerakli runtime → install/build → secrets → migratsiya → deploy → callback → asosiy oqim. Testni aslida shu eski muhitda bajargan bo‘lsang “yangi PC’da sinaldi” demagin.

Hozir bu uch qatlamli tanlov mahsuloti sinovi hali to‘liq bajarilmagan. Oldingi API OK javobi faqat kalit/model ulanishini tasdiqlaydi.

## 7. Diagnostika usuli

Kuzatilgan belgi → takrorlash qadami → taxmin → tekshiruv → dalil → eng kichik tuzatish → regressiya sinovi. HTTP 200’ni hamma narsa ishladi deb qabul qilma. UptimeRobot process’ni ko‘rishi mumkin; login, database va AI alohida tekshiriladi. So‘rovni takrorlash ma’lumotni ikki marta yozishi mumkinligini hisobga ol.

Quyidagi katalog ehtimoliy muammolarni ko‘rsatadi. Biror bandning mavjudligi aynan shu nosozlik joriy saytda borligini bildirmaydi.

## Halol ish va halol hisobot

Foydalanuvchining talabi: testmaxing yoki benchmaxing qilma. Test soni, ball, tezlik yoki ko‘rinish uchun natijani sun’iy bezama. Tekshiruv xatoni topish va foydalanuvchining haqiqiy oqimini tasdiqlash uchun bajariladi. Yangi o‘zgarish yoki ochiq xavf bo‘lmasa bir xil tekshiruvni son uchun takrorlama.

- Parametrli/kombinatsiya testlari umumiy test sonining ichida ekanini ayt; bir to‘plamni qayta ishga tushirib yangi mustaqil dalil deb qo‘shma. ZIP’dagi 488 test to‘liq repodagi to‘plamning bir qismi, qo‘shimcha 488 emas. Test sonidan mahsulot sifati yoki xatosizlik darajasi chiqarilmaydi.
- Asosiy oqim, muhit, kutilgan va haqiqiy natijani yoz. FAIL va NOT RUN’ni yashirma. Test o‘tishi uchun talabni pasaytirma yoki noto‘g‘ri natijani kutilgan deb almashtirma. Ataylab buzilgan fayl rad etilishi kabi salbiy sinovning maqsadini ochiq tushuntir.
- Bir so‘zli API javobi faqat ulanishni ko‘rsatadi; model sifati, tizimning to‘liq ishlashi yoki production barqarorligini isbotlamaydi. Fixture testi brauzer sinovi emas; toza papka yangi jismoniy PC emas; manba hashi mosligi yangi OCR ekspertizasi emas.
- O‘qilmagan manbani o‘qilgan, rejalashtirilgan xizmatni ishga tushgan, demo ma’lumotni haqiqiy foydalanuvchi natijasi deb ko‘rsatma. Soxta statistika, mijoz fikri, ekspert tasdig‘i yoki “100% xavfsiz/xatosiz” kafolati bo‘lmasin.
- AI hissasi va tashqi model provayderini to‘g‘ri ayt. API yordamchini o‘zimiz o‘qitgan yoki shaxsiy ma’lumot umuman tashqariga chiqmaydigan model deb taqdim etma. Manba/litsenziya va xizmat cheklovlarini saqla; tashkilotchining amaldagi akkaunt, kod va AI qoidalariga rioya qil.

Sifat haqidagi xulosani haqiqiy foydalanuvchi natijasi va dalil bilan chegarala. Yetarli asos bo‘lmasa “hali bilmaymiz” yoki “tekshirilmagan” deb yoz.


## Holat, xavf, ko‘rsatma va tavsiyani ajrat

- ANIQLANGAN MUAMMO: takrorlangan nosozlik; sana, muhit va dalil talab qilinadi. Tuzatilganda qayta sinov dalili yoziladi.
- EHTIMOLIY XAVF: yuz berishi mumkin bo‘lgan ssenariy; quyidagi katalog shu turga kiradi. Bu sodir bo‘lgan voqea emas.
- KO‘RSATMA: ishni tartibli bajarish qadami; foydalanuvchi topshirig‘i va amaldagi reglament doirasida qo‘llanadi.
- TAVSIYA: sharoitga qarab foydali tanlov; barchasi majburiy funksiya emas.

Ushbu snapshot’da tanlov mahsulotiga oid dalilli ochiq bug qaydi kiritilmagan: mahsulot hali birgalikda qurilib sinalmagan. Bu “xatolar yo‘q” yoki “auditdan o‘tgan” degani emas. Oldingi dizayn/vault muammolarini dalilsiz joriy mahsulot xatosi deb ko‘chirma. Yangi aniqlangan muammo loyiha HANDOFF.md’ida qayd etiladi.

## Ishni bajarish ko‘rsatmalari va tavsiyalar

### Ko‘rsatma: Professional sifatni dalil bilan qabul qil

Arxitektura qo‘llanmasidagi sifat bo‘limini biletga mos qo‘lla: izchil UI, accessibility, server ruxsati, ma’lumot/tiklash, API, nosozlik, tezlik, kuzatuv va xavfsiz nashr. Har muhim bandda dalil yoki ochiq holat bo‘lsin. Test soni, chiroyli ekran yoki hujjatning o‘zi enterprise darajasiga tenglikni isbotlamaydi.

### Ko‘rsatma: Landing, kabinet va ish maydonini xaritala

Arxitektura qo‘llanmasidagi sahifa qatlamlarini biletga mosla: landing/tushuntirish → kerakli login → dashboard holati → workspace amali va saqlangan natija. Route, kirish huquqi, ma’lumot manbasi va muhim holatlarni yoz. Animatsiya vazifaga xizmat qilsin; barcha qatlamni har biletga majburan qo‘shma.

### Ko‘rsatma: Mezon va to‘liq manbani o‘tkazib yuborma

Tanlov ishida qisqa kontekst va SCORING-WORKPLAN.md’ni o‘qi; talab → qabul sinovi → himoya dalilini yoz. 21 kichik mezon loyiha tahriridan. FULL-COMPETITION-CONTEXT.md va to‘liq REGULATIONS.md har bir source ZIP’da bor; boshlash matni ularning o‘rniga o‘tmaydi. To‘liq o‘qish so‘ralsa o‘qilmagan qismini yashirma.

### Ko‘rsatma: Avval biletni ishga aylantir

Asosiy foydalanuvchi, bitta to‘liq oqim va qabul mezonini yoz. AI, Telegram yoki login biletga foyda bermasa, ularni borligi uchungina majburan qo‘shma.

### Tavsiya: Erta ishlaydigan deploy qil

Avval kichik oqimni haqiqiy muhitga chiqarib, callback va bazaga yozishni tekshir. Barcha dizayn ishlari tugaguncha deploy’ni oxirga qoldirmaslik integratsiya muammolarini erta ko‘rsatadi.

### Ko‘rsatma: Xatoni dalil bilan qayd et

Aniqlangan xatoda sana, muhit, takrorlash qadami, kutilgan va haqiqiy natija bo‘lsin. Sabab aniqlanmasa “taxmin” deb yoz. Tuzatilgan holatga qayta sinov dalilini qo‘sh.

### Tavsiya: Vazifaga mos ustuvorlik qo‘y

Avval ma’lumot yo‘qolishi/ruxsat muammosi va asosiy oqimni to‘xtatgan xato; keyin muhim UX; keyin bezak. Vaqtni taxminiy musobaqa davomiyligidan emas, foydalanuvchi bergan qolgan vaqtdan rejalashtir.

### Tavsiya: AI bo‘lmasa ham asosiy ish davom etsin

Bilet ruxsat bersa, AI yordamini qo‘shimcha qil: foydalanuvchi asosiy yozuv yoki formani qo‘lda tugata olsin. Haqiqiy integratsiya o‘rniga yashirin soxta javob qo‘yma.

### Ko‘rsatma: Tanlov oldidan qisqa repetitsiya qil

Yangi sessiyadan hujjatni topish, kerakli login, loyiha install/build, asosiy amal va taqdimotni tekshir. Mahalliy URL yangi PC’da ochilmaydi; ochiq manzil va source paketni tekshir.

### Ko‘rsatma: Holatni keyingi AIga topshir

Ish tugaganda CURRENT-TASK.md va HANDOFF.md’ni yangila. Bajarilmagan testni NOT RUN yoz. Xato qaydiga maxfiy so‘rov body’si, token yoki shaxsiy ma’lumotni ko‘chirma.

### Tavsiya: Ro‘yxatni vazifa bilan birga yangila

Bu barcha kelajakdagi xatolarning kafolatli ro‘yxati emas. Bilet, xizmat yoki dalil o‘zgarsa tegishli holatni qo‘sh. Mos kelmaydigan tavsiyani majburiy talabga aylantirma.

## Ehtimoliy muammolar katalogi

### 1. Google login’dan keyin kabinet ochilmaydi

- Belgi: Kirish oynasi ishlaydi, lekin saytga qaytganda sessiya yo‘q yoki yuklanish tugamaydi.
- Tekshirish: Qaytilgan URL, Google redirect URI, Supabase Site URL/allowlist, localhost porti va ishlatilgan auth flow’ni tekshir. ?code= kelishi sessiya allaqachon yaratilgan degani emas.
- Ehtimoliy yechim: Google → Supabase callback va Supabase → sayt callback’ini to‘g‘ri ajrat. PKCE tanlangan bo‘lsa code almashinuvi va xato holatini yakunla; boshqa flow uchun unga mos SDK yo‘lini ishlat.
- Tasdiqlash: Production’da kirish → kabinet → reload → chiqish → qayta kirish. Bekor qilingan login ham tushunarli holatga qaytsin.

### 2. Foydalanuvchi boshqaning ma’lumotini ko‘ra oladi

- Belgi: Brauzerda user_id yoki yozuv ID’si o‘zgartirilganda begona yozuv ochiladi.
- Tekshirish: Server tokenni haqiqatan tekshiryaptimi? RLS/grantlar bormi? Admin klient yoki service role foydalanuvchi so‘rovida ruxsatsiz ishlatilmaganmi?
- Ehtimoliy yechim: Foydalanuvchini tekshirilgan sessiyadan ol. Oddiy amallarni RLS ostida bajar; yuqori huquqli amal uchun serverda alohida vakolat tekshir. CORS’ni autentifikatsiya deb hisoblama.
- Tasdiqlash: A va B akkauntlar bilan o‘qish, qo‘shish, yangilash va o‘chirishni sina. A foydalanuvchi B yozuviga kira olmasin; qonuniy amal ishlasin.

### 3. Bir amal ikki marta bajariladi

- Belgi: Ikki bosish, timeout’dan keyingi retry yoki webhook takrori ikkita buyurtma/yozuv yaratadi.
- Tekshirish: So‘rov aslida bazada bajarildimi? Har urinish bir xil amal identifikatoriga egami? Telegram update_id qayta kelganmi?
- Ehtimoliy yechim: Yozish amallariga idempotency identifikatori, database unique constraint va zarur transaction qo‘sh. Telegram update_id’ni doimiy saqla. Faqat tugmani o‘chirish yetarli emas.
- Tasdiqlash: Bir xil so‘rovni takror yubor; bitta yozuv va bir xil natija bo‘lsin. Javob yo‘qolgandagi retry ham yangi amal yaratmasin.

### 4. AI 429 qaytaradi yoki javob bermaydi

- Belgi: Sayt ishlaydi, AI yordamchi esa limit/xato yoki cheksiz kutish holatida qoladi.
- Tekshirish: HTTP status, xavfsiz error code, model, Retry-After va tegishli RPM/TPM/RPD’ni ko‘r. 401/403’ni kvota deb atama; ikki kalit alohida kvota degan taxmin qilma.
- Ehtimoliy yechim: So‘rov hajmi va bir vaqtdagi ishlarni chekla. Vaqtinchalik xatoga chegaralangan backoff; kunlik limitga foydali kutish xabari yoki mos boshqa provayder. Oddiy sayt amallari davom etsin.
- Tasdiqlash: Sintetik 401, 403, 429, timeout va 5xx bilan UI/API holatini tekshir. Haqiqiy kvotani ataylab tugatib sinama; haqiqiy va sun’iy sinovni alohida yoz.

### 5. Bot javob bermaydi yoki noto‘g‘ri chatga yozadi

- Belgi: getMe ishlaydi, ammo sayt-bot oqimida xabar kelmaydi yoki takror keladi.
- Tekshirish: Webhook URL, secret header, oxirgi xato, update_id, chat ruxsati va akkaunt bog‘lashni tekshir. Token ishlagani webhook ishlaganini isbotlamaydi.
- Ehtimoliy yechim: Faqat tasdiqlangan webhook’ni qabul qil. Kerak bo‘lsa bir martalik akkaunt bog‘lash va ishonchli navbat/outbox qo‘sh. Shaxsiy chat ID’ni barcha foydalanuvchiga qo‘llama.
- Tasdiqlash: Ruxsat etilgan chatdan to‘liq oqim, takror update, begona chat va noto‘g‘ri secret sinovi. Real xabar yuborish foydalanuvchi ruxsati doirasida bo‘lsin.

### 6. Local’da ishlaydi, internetda ishlamaydi

- Belgi: Build chiqadi, lekin URL, callback, API yoki fayllar production’da 404/500 beradi.
- Tekshirish: Runtime/Node versiyasi, build/start, PORT binding, env qayerga qo‘yilgani, yo‘l registri, loglar va deployment commit’ini tekshir.
- Ehtimoliy yechim: Render frontend build va API routing’ini mosla. Noma’lum /api yo‘li HTML 200 bermasin. Domen o‘zgarsa OAuth va ruxsatlarni yangila; fayllarni vaqtinchalik diskda doimiy saqlama.
- Tasdiqlash: Production URL’dan kirish, to‘g‘ridan-to‘g‘ri ichki sahifani ochish, reload va backend yozuvi. Faqat build success bilan tugatma.

### 7. Monitor yashil, lekin mahsulot ishlamaydi

- Belgi: /health 200, ammo database, Google login yoki AI oqimi ishlamaydi.
- Tekshirish: Monitor nimani tekshiryapti: faqat processmi yoki haqiqiy foydalanuvchi oqimimi? Javob keshdan kelmaganmi? Supabase holati qanday?
- Ehtimoliy yechim: Process health bilan readiness va biznes oqimi sinovini ajrat. Monitoring server kvotalarini oshirmaydi. AI’ni har health ping’da chaqirma.
- Tasdiqlash: /health, ruxsatli database sinovi va kam xarajatli to‘liq oqimni alohida qayd et. Sun’iy dependency xatosida monitorning chegarasi ko‘rinsin.

### 8. Yangi kompyuterda loyiha ishga tushmaydi

- Belgi: Eski kompyuterda bor paket, fayl, login yoki muhit yangi joyda yo‘q.
- Tekshirish: Lockfile, runtime versiyasi, fayl yo‘llari, build buyruqlari, kerakli akkauntga kirish va joriy reglamentni tekshir. Eski local URL internet manzili emas.
- Ehtimoliy yechim: Toza papkadan aniq yo‘riqnoma bilan o‘rnat. .env.example’da faqat nomlar; secrets’ni foydalanuvchi ruxsat bergan serverga joyla. Migratsiyalar va sintetik seed’ni saqla.
- Tasdiqlash: Fresh checkout/ZIP → install → env → migration → test → deploy. Kerakli qo‘lda bajariladigan qadamlar HANDOFF.md’da yozilsin.

### 9. Saqlangan deb ko‘rsatiladi, reload’da yo‘qoladi

- Belgi: Toast muvaffaqiyat deydi, lekin ma’lumot bazada yo‘q yoki faqat localStorage’da qolgan.
- Tekshirish: Haqiqiy API javobi, database yozuvi, optimistic UI rollback’i va demo/localStorage adapterini tekshir.
- Ehtimoliy yechim: Server muvaffaqiyatini tasdiqla; xatoda UI’ni qaytar. Demo adapterdan production’ga o‘tishni aniq qil. RLS xatosini “bo‘sh ma’lumot” deb yashirma.
- Tasdiqlash: Amal → database tasdig‘i → reload → yangi sessiya. Internet uzilganda yolg‘on muvaffaqiyat bo‘lmasin.

### 10. Yangi AI eski qaror bo‘yicha ishlaydi

- Belgi: Cloudflare’ni majburiy host qiladi, barcha dizaynlarni aralashtiradi yoki hali ulanmagan xizmatni tayyor deb aytadi.
- Tekshirish: Joriy foydalanuvchi ko‘rsatmasi, /ai.md, /ish-tartibi/status.json va loyiha ichidagi CURRENT-TASK.md/HANDOFF.md sanalarini solishtir.
- Ehtimoliy yechim: Qarama-qarshilikni ochiq yoz. Tarixiy variantni joriy qaror deb ishlatma. Faol tanlov Render + UptimeRobot + Supabase; joriy foydalanuvchi uni o‘zgartirsa qarorni yangila.
- Tasdiqlash: Ish boshlashdan oldin AI tanlangan dizayn, bilet, stack, real tayyor qismlar va navbatdagi amalni o‘zbekcha qisqa qayta aytsin.

### 11. Server yoki baza vaqtincha ochilmaydi

- Belgi: Sayt uyg‘onishni kutadi, API timeout beradi yoki baza paused holatda turadi.
- Tekshirish: Render va Supabase holatini alohida ko‘r. Cold start, deploy, pause, provayder nosozligi va tugagan kvotani bir sabab deb qabul qilma.
- Ehtimoliy yechim: Holatga mos kutish xabari va chegaralangan retry ber. Tanlovdan oldin ikkala xizmat va asosiy oqimni tekshir. Monitor cheklovlarni bekor qilmaydi; demo zaxira bo‘lsa uni aniq demo deb belgilash kerak.
- Tasdiqlash: Cold start va dependency ishlamaganda foydalanuvchi xabari sinovdan o‘tsin. UptimeRobot yashilligi uzluksiz xizmat kafolati deb yozilmasin.

### 12. Kalit noto‘g‘ri joyga qo‘yiladi yoki oshkor bo‘ladi

- Belgi: Server env yetishmaydi; yoki maxfiy qiymat frontend bundle, log, URL, ZIP yoxud Git tarixida ko‘rinadi.
- Tekshirish: Env nomi, production/preview muhiti va runtime/build vaqtini tekshir. Public publishable kalit bilan server secret’ini farqla; faqat .env fayliga qarash bilan cheklanma.
- Ehtimoliy yechim: Maxfiy AI/bot/admin kalitini server muhitida saqla. Qiymatni log qilma. Oshkor bo‘lgan secret’ni provayderda bekor qilish va almashtirish kerak; fayldan o‘chirishning o‘zi yetmaydi.
- Tasdiqlash: Build, yuboriladigan ZIP va commit diff’da secret yo‘qligini tekshir; mavjud secret’larni test hisobotiga ko‘chirma. Env yo‘qligida tushunarli server xatosi qaytsin.

### 13. Fayl yo‘qoladi yoki begona fayl ochiladi

- Belgi: Rasm redeploy’dan keyin yo‘q; shaxsiy fayl URL’ini boshqa foydalanuvchi ham ocha oladi.
- Tekshirish: Render vaqtinchalik diski, Supabase bucket public/private holati, storage siyosati, fayl hajmi va turi cheklovini tekshir.
- Ehtimoliy yechim: Doimiy faylni Storage’da saqla. Xususiy kontentga ruxsatli yo‘l yoki muddati cheklangan signed URL ishlat; upload nomi, hajmi va turini server tomonda tekshir.
- Tasdiqlash: Upload → qayta deploy/reload → ruxsatli o‘qish. Begona akkaunt, muddati tugagan havola va rad etilishi kerak bo‘lgan fayl bilan ham tekshir.

### 14. Kod va database sxemasi mos kelmaydi

- Belgi: Ustun/topshiriq jadvali topilmaydi, migration ma’lumotni buzadi yoki seed bir necha marta yoziladi.
- Tekshirish: Deploy commit, migration tartibi, schema va env qaysi database’ga qarayotganini tekshir. Demo bazasi bilan haqiqiy bazani aralashtirma.
- Ehtimoliy yechim: Versiyalangan migration va takror bajarishga mos seed saqla. Ma’lumotli bazada xavfli o‘zgarishdan oldin backup va qaytish yo‘lini tayyorla; mavjud jadvalni shunchaki reset qilma.
- Tasdiqlash: Bo‘sh test bazasida o‘rnatish va oldingi test sxemasidan yangilashni sina; yozuvlar saqlanganini tekshir. Production ma’lumotini sinov uchun o‘chirma.

### 15. Sessiya tugaydi yoki logout’dan keyin ma’lumot qoladi

- Belgi: Uzoq ishlagach 401 keladi; boshqa akkaunt kirganda eski foydalanuvchining UI/keshi ko‘rinadi.
- Tekshirish: Token muddati, refresh ishlashi, logout, query cache va himoyalangan route’larni tekshir. Backend har so‘rovda ruxsatni tekshiradimi?
- Ehtimoliy yechim: Auth SDK sessiya oqimini to‘g‘ri ulab, kirish zarurligini aniq ko‘rsat. Chiqishda foydalanuvchiga bog‘liq klient keshini tozala. Qoralama qolsa maxfiy ma’lumot saqlanmasin.
- Tasdiqlash: Sessiya tugashi, logout → Back/reload va A → B akkaunt almashish holatlarini tekshir. Eski sahifa yangi foydalanuvchiga eski ma’lumotni ko‘rsatmasin.

### 16. AI javobi noto‘g‘ri yoki xavfli amalni taklif qiladi

- Belgi: AI uydirma fakt beradi, kutilgan JSON’ni buzadi yoki foydalanuvchi matnidagi buyruq bilan vakolatidan chiqishga urinadi.
- Tekshirish: Kontekst manbasi, javob sxemasi, foydalanuvchi matni va tool amallari orasidagi ruxsat chegarasini tekshir. Model natijasini ishonchli buyruq deb olma.
- Ehtimoliy yechim: Javobni tekshir; HTML’ni xavfsiz render qil. AIga server secret yoki ortiqcha shaxsiy ma’lumot bermang. Yozish/o‘chirish kabi tool amali serverda ruxsat va kirish parametrlarini tekshirsin.
- Tasdiqlash: Noto‘g‘ri JSON, manbasiz javob, zararli HTML va “oldingi qoidani unut” kabi sintetik matnni sina. AI xatosi to‘g‘ridan-to‘g‘ri database amali bo‘lib ketmasin.

### 17. Bir nechta so‘rov limit yoki xarajatni oshiradi

- Belgi: Bitta foydalanuvchida ishlaydi, parallel so‘rovlarda sekinlashadi yoki provayder kvotasi tez tugaydi.
- Tekshirish: Har amal nechta API chaqiruvi qilishi, retry soni, concurrency, database ulanishlari va amaldagi xizmat limitlarini tekshir.
- Ehtimoliy yechim: Hajm, vaqt va parallel ishlar uchun chegaralar qo‘y. Auth va foydalanish nazoratini serverda bajar. Foydalanuvchi ma’lumotlari aralashmaydigan joydagina kesh ishlat; xarajatli ishni cheksiz qayta yuborma.
- Tasdiqlash: Kichik, chegaralangan parallel sinovda UI va backendni tekshir. Real kvotani tugatadigan load test yoki pullik tarifga o‘tish alohida ruxsatsiz bajarilmasin.

### 18. Telefon yoki klaviaturada asosiy amal bajarilmaydi

- Belgi: Menyu/modal yopilmaydi, fokus yo‘qoladi, forma belgisi tushunarsiz yoki tugma kichik ekranda kesiladi.
- Tekshirish: Haqiqiy viewport, Tab/Enter/Escape, label, kontrast, reduced motion va loading/empty/error holatlarini tekshir.
- Ehtimoliy yechim: Semantik input/button, ko‘rinadigan fokus va foydali xato matni qo‘sh. Biletga mos tanlangan dizayn tilini saqla; barcha sahifani bir xil shaklga aylantirma.
- Tasdiqlash: Asosiy oqimni sichqonchasiz ham tugat. Mobil o‘lchamda va uzun o‘zbekcha matn bilan tekshir; rasm ochilmasa mazmun yo‘qolmasin.

### 19. Yangi deploy bor, foydalanuvchi eski versiyani ko‘radi

- Belgi: Local tuzatish production’da ko‘rinmaydi yoki HTML yangi, JavaScript eski bo‘lib qoladi.
- Tekshirish: Git commit, deploy natijasi, to‘g‘ri domen, asset yo‘li, brauzer/CDN/service worker keshini tekshir.
- Ehtimoliy yechim: Asset versiyalash va kesh siyosatini mosla. Yangilanishda private ma’lumotni cache qilma. Rollback kodni qaytarishi database migration’ini avtomatik qaytarishini anglatmaydi.
- Tasdiqlash: Production’da toza sessiya va avvalgi ochiq sessiyani solishtir; versiya dalili va asosiy oqimni tekshir. Faqat hard refresh bilan foydalanuvchi muammosini yopilgan deb aytma.

## 8. Har ish bo‘lagidan keyin

CURRENT-TASK.md’da joriy vazifa va scope’ni saqla. HANDOFF.md’da o‘zgargan fayllar, haqiqiy test natijasi, ochiq muammo va keyingi aniq qadamni yoz. Muhim qaror uchun sabab va sanani qayd et. Soxta “hammasi tayyor” yozma; PASS / FAIL / NOT RUN holatlarini ishlat.

Ochiq .io snapshot’ini har bir tanlovdagi private loyiha holati bilan avtomatik almashtirma. Ommaviy nashr foydalanuvchi ko‘rsatmasi bilan va secret tekshiruvidan keyin bo‘ladi. Qoralamalarga haqiqiy token, parol, cookie, karta ma’lumoti yoki shaxsiy foydalanuvchi yozuvlari kirmaydi.

## 9. Ishni tugatish dalili

Asosiy foydalanuvchi oqimi haqiqiy muhitda ishlaydi; ma’lumot saqlanishi tasdiqlangan; ruxsat chegaralari sinalgan; muhim xato/bo‘sh/yuklanish holatlari mavjud; mobil va klaviatura ishlaydi; deploy URL va commit tekshirilgan; bajarilmagan testlar aniq aytilgan. Shundan keyin ish tugallangan deb ayt.

## Bog‘liq hujjatlar

- [Arxitektura](https://azizbeksafarov.github.io/arxitektura/ai.md)
- [API dalillari](https://azizbeksafarov.github.io/api/ai.md)
- [Joriy vazifa shabloni](https://azizbeksafarov.github.io/ish-tartibi/CURRENT-TASK.md)
- [Topshirish shabloni](https://azizbeksafarov.github.io/ish-tartibi/HANDOFF.md)
- [Kontekst maqomi](https://azizbeksafarov.github.io/ustoz/CONTEXT-STATUS.md)
- [Supabase Google OAuth](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Supabase ma’lumot xavfsizligi](https://supabase.com/docs/guides/database/secure-data)
- [Render cheklovlari](https://render.com/docs/free)
- [Telegram webhook](https://core.telegram.org/bots/api#setwebhook)
- [Supabase Storage ruxsatlari](https://supabase.com/docs/guides/storage/security/access-control)
- [Supabase production tekshiruvi](https://supabase.com/docs/guides/deployment/going-into-prod)

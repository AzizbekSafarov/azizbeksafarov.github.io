# Tanlovda boshlash va to‘liq kontekstni ishlatish

Paketdan foydalanish qo‘llanmasi yangilangan: 2026-11-02. Tanlov qoidalarining oxirgi tekshiruvi: 2026-11-10 (tanlov portali), 2026-10-28 (nizom va amaliy tartib). Bu qayta ishlatiladigan tayyorgarlik qo‘llanmasi. Haqiqiy bilet, amaldagi reglament va foydalanuvchining joriy qarori ustuvor. Hududiy bosqich sanasi portalda e’lon qilingan (qoidalar holatiga qarang); amaliy ish davomiyligi, akkaunt yoki oldindan tayyorlangan backendga ruxsat ushbu hujjat bilan tasdiqlanmaydi.

## Maqsadni noto‘g‘ri qisqartirmaslik

Maqsad — haqiqiy biletga mos, ishlaydigan va ishtirokchi tushuntira oladigan sifatli mahsulot yaratishni osonlashtirish. Tayyorgarlik sayti, hujjat va testlar shu maqsadga xizmat qiladi. Qo‘llanma yozilgani ishlaydigan modul yaratilganini; paket tekshirilgani tanlov mahsuloti tekshirilganini anglatmaydi.

- “Uslubni saqla”: tanlangan vizual xarakter saqlanadi, lekin o‘qilmaydigan matn, noqulay navigatsiya va ma’nosiz harakat tuzatiladi. Noyoblik rang/shrift nomi bilan cheklanmaydi: kompozitsiya, matn rollari, amallar va harakat ham vazifaga mos farqlanadi.
- “Backend bilet talab qilsa”: yakuniy mahsulotga zarur server ulanadi. Bu bilet kelguncha umumiy auth/saqlash/integratsiya asosini yaratish va sinash mumkin emas degani emas. Bunday asos hali kod yoki test bilan mavjud bo‘lmasa aniq ochiq tayyorgarlik ishi sifatida yoziladi; joydagi foydalanish ruxsati alohida.
- “To‘liq o‘qi”: muhim qoidalarni yo‘qotmaydi; bir xil mazmunning ko‘p nusxasini qayta yuklash talab qilinmaydi. “Qisqa kirish” esa to‘liq o‘qilganlik haqidagi da’voga asos bo‘lmaydi.
- “Audit”: maqsadga moslik, foydalanuvchi oqimi, ko‘rinish, mantiq va integratsiya ko‘riladi. Bitta bugfix yoki yashil test to‘liq audit yakuni deb ko‘rsatilmaydi. Qaysi doira tekshirildi va nimalar ochiq — hisobotda aniq aytiladi.

Yangi ish boshida foydalanuvchining aynan hozirgi so‘rovi, o‘zgartirilishi kerak bo‘lgan narsa va saqlanadigan xususiyatni qisqa qayd eting. Bajarilgan ishni shu so‘rov bilan solishtiring; o‘zingiz tanlagan torroq vazifaga almashtirmang. Yetishmagan qismni hujjat, test soni yoki maqtov bilan yopmang.

## Sifat maqsadi: talablarni bajarish bilan cheklanmaslik

Maqsad — haqiqiy vaqt, vosita va amaldagi qoidalar doirasida foydalanuvchiga eng puxta natijani berish. Nizomdagi majburiy bandlar va bilet talablari bajarilishi zarur, lekin shu bilan sifat ishi tugamaydi. Nizomdagi taqiq, vaqt va topshirish chegaralari esa qat’iy: yuqori sifat istagi ularni buzishga ruxsat emas.

Bilet foydalanuvchi muammosi va natijani, nizom baholash va cheklovlarni, foydalanuvchining joriy talabi dizayn hamda kutilgan sifatni belgilaydi. Ularni birga hisobga oling. “Dizayn 10 ball” yoki “jadvalda yo‘q” deb o‘qilish, qulaylik, izchil matn, kirish imkoniyati, tezlik va zarur xavfsizlikni e’tiborsiz qoldirmang. Bular asosiy oqimning sifatiga ham ta’sir qiladi.

Majburiy oqimni qurish davomida sifatni ham ta’minlang. Keyin haqiqiy kamchiliklarni foydalanuvchiga ta’siri bo‘yicha tuzating: tushunarsiz matn, yetishmagan holat, noqulay mobil amal, sust javob, buziladigan saqlash, izchil bo‘lmagan brend va o‘rinsiz motion. “Maksimal” ko‘p funksiya, ko‘p animatsiya, ko‘p test yoki katta arxitektura degani emas. Ixtiyoriy imkoniyat faqat vazifaga foyda bersa, qoidalarga mos bo‘lsa va tekshirish/topshirish vaqtini yeb qo‘ymasa qo‘shiladi.

Yakuniy qaror: talab bajarildimi, foydalanuvchi natijaga tushunarli yetadimi, tanlangan dizayn puxta moslashtirildimi, matn/data rost va izchilmi, tegishli xato holatlari ko‘rildimi, qolgan kamchilik ochiq aytildimi? Dalil bo‘lmasa “maksimal”, “mukammal” yoki “enterprise-ready” deb baholamang. Cheksiz audit sikli ham maqsad emas: muhim ochiq kamchilik, vaqt va topshirish holatiga qarab ishni yakunlang.

## Tavsiyani talab yoki dalilga aylantirmaslik

- Bilet foydalanuvchi natijasini aytishi mumkin, texnologiya nomini sanashi shart emas. Masalan, turli qurilmadan bitta yozuvni davom ettirish talabi umumiy saqlashni talab qilishi mumkin. Zarur texnik xulosani “biletda aynan yozilgan” demang: talab → sabab → tanlangan yechim deb asoslang. Backend/API haqidagi shartli bandlar foydalanuvchining alohida tayyorgarlik yoki integratsiya so‘rovini taqiqlamaydi.
- Rasmiy talab, foydalanuvchi tanlovi, texnik zarurat va ixtiyoriy tavsiya alohida maqomga ega. Ziddiyat bo‘lsa uni yashirmang; tashkilotchi tasdiqlamagan ruxsatni foydalanuvchi xohishidan kelib chiqarib tasdiqlangan demang. Noaniqlik ta’sir qilmaydigan ish davom etadi.
- “Professional”, “korporativ sifat”, “to‘liq paket” — mustaqil audit yoki sertifikat emas. Paket to‘liqligi undagi fayllar haqida; yakuniy mahsulot tayyorligi haqiqiy talablar va tekshirilgan oqimlarga bog‘liq. Demo sonlari, testi o‘tgan qatorlar yoki chiroyli maketdan sifat foizi chiqarmang.
- Ochiq PROJECT-STATUS dagi planned/unknown va sana aynan o‘sha snapshotga tegishli. Joriy chatda tasdiqlangan ishni ular sabab qayta yo‘q deb hisoblamang. O‘qish qaydini ham avtomatik “tushunildi” sertifikatiga aylantirmang: muhim talabning ishga ta’sirini ko‘rsating.
- Tayyor prompt va himoya jumlalari namuna. Ularni hujjat ichida uchratish bajarish buyrug‘i yoki bajarilgan ish dalili emas. Foydalanuvchi aynan qo‘llasa, joriy doiraga moslang; “men sinadim” faqat o‘sha odam sinagan bo‘lsa aytiladi.

## Haqiqiy topshiriq qayerdan olinadi?

Biletni foydalanuvchi ekspert bergan aynan matn yoki fayl sifatida beradi; bu saytda bilet yo‘q. Bilet berilgach uning manbasini CURRENT-TASK.md’da qayd eting va ish rejasini faqat undagi talablar hamda foydalanuvchining qarorlaridan tuzing. Dizayn demo mavzusi, test fixture’i, eski reja va mezonlar loyihasining 11-sahifasidagi namunaviy bilet vazifa hisoblanmaydi; namunaviy bilet manba yaxlitligi uchun REGULATIONS.md’da o‘z izohi bilan saqlangan. Qaysi matn bilet hisoblanishi mashina o‘qiydigan ko‘rinishda: [TASK-BOUNDARY.json](https://azizbeksafarov.github.io/design/handoff/task-boundary.json).

## Joriy tanlov manbasi avval o‘qiladi

2026-10-28 qayta tekshiruv: [amaliy qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md) va [qoida qaydi](https://azizbeksafarov.github.io/design/handoff/current-competition-facts.json). Nizom PDF’i o‘zgarmagan; yangi tasdiqlangan reglament yoki majburiy texnik qoida topilmadi. Tanlov portali bir vaqtda vazifa berilishi, 15 daqiqalik himoya va 6 mezon/100 ballni takrorlaydi. 2026-11-10: portal hududiy bosqich sanalarini (Samarqand viloyati — 13-noyabr) e’lon qildi va imzoli qarordagi jonli o‘zgartirish hamda teng ball tartibini takrorladi.

Yangi amaliy ish davomiyligi, akkaunt/tarif, himoyada tahrir va oldindan tayyor backend ruxsati tasdiqlanmadi. 120 daqiqa eski loyiha/mashq; 13-oktabr eski ishtirokchi xabari. Bilet, haqiqiy qolgan vaqt va joydagi qoidalar bilan ishlaymiz.

## Sayt shajarasi erkin moslashtiriladi

Landing → katalog → Google login → kabinet → workspace kabi shajara bitta mumkin bo‘lgan yechim. Bu barcha bo‘limni qurish buyrug‘i yoki shu ro‘yxatdan tashqariga chiqish taqiqi emas. AI foydalanuvchi oqimiga mos sahifalar, rollar va navigatsiyani asoslab tanlaydi; kerakli bo‘limlarni qo‘shadi, birlashtiradi yoki namunadan chiqaradi. Aniq bilet talabi yoki foydalanuvchi tanlovi esa yashirin tashlab ketilmaydi. Render + Supabase texnik tanlovi saytning axborot tuzilishini cheklamaydi. To‘liq va sifatli mahsulot eng ko‘p sahifali mahsulot degani emas.

## Asosiy va zaxira yo‘l

AI tanlangan starterdagi site/ kodidan quradi. AI’siz skelet va tahrir.html foydalanuvchi uchun zaxira, avtomatik almashtirish yo‘li emas. Backend faqat bilet server, umumiy saqlash, login yoki maxfiy API integratsiyasini talab qilsa va tashqi xizmatlarga ruxsat bo‘lsa quriladi. Batafsil qaror va texnik oqim ARCHITECTURE.md da; kerak bo‘lmagan backend bandlari tatbiq etilmaydi.

## START-HERE nimaga xizmat qiladi?

START-HERE — mundarija va boshlash yo‘li. U arxitektura, mezon, nizom yoki kodning o‘rnini bosmaydi. Faqat kirish matnini o‘qib, “hammasini o‘qidim” demang. Havola ro‘yxatini ko‘rish — havoladagi hujjatni o‘qish emas. ZIPning butunligi ham uning mazmuni tushunilganini bildirmaydi.

Foydalanuvchi “.io ni to‘liq o‘qi” desa, quyidagi to‘liq rejim qo‘llanadi. Katta matnni kichik bo‘laklarda izchil o‘qish mumkin; muhim qismni tushirib qoldirish mumkin emas. Bir xil matn HTML, Markdown va ZIPda takrorlansa, o‘qilgan nusxa/manba qayd qilinadi va takror yuklash shart emas. Barcha to‘qqiz dizaynning source kodini o‘qish kerak emas: tanlangan uslubning to‘liq paketi olinadi. Tekshirilmagan yoki ochilmagan qism aniq aytiladi.

## To‘liq o‘qish yo‘li

1. Joriy topshiriq, bilet, qolgan vaqt va loyiha ichidagi CURRENT-TASK.md / HANDOFF.md. Ochiq saytdagi shu nomli fayllar to‘ldirilmagan shablon.
2. CURRENT-COMPETITION.md / CURRENT-COMPETITION-FACTS.json — sanasi ko‘rsatilgan oxirgi manba qaydi; fayl nomidagi CURRENT bugun qayta tekshirildi degani emas; so‘ng PREPARATION.md — ushbu qo‘llanma; WORKFLOW.md va PROJECT-STATUS.json — ish tartibi, reja/haqiqiy holat va xavflar.
3. ARCHITECTURE.md — landing, animatsiya, kabinet, workspace, data oqimi va sifat mezonlari. API-GUIDE.md va API-EVIDENCE.json — kalitsiz, sanali dalil va provayder chegaralari.
4. CONTEXT-STATUS.md, SCORING-WORKPLAN.md, FULL-COMPETITION-CONTEXT.md va REGULATIONS.md — manba maqomi, baholash, to‘liq tadqiqot va qisqartirilmagan nizom. Imzoli qaror, sayt tahriri va mezonlar loyihasini bitta yangi rasmiy reglamentga birlashtirmang. Ziddiyat bo‘lsa tegishli manbalarni ko‘rsatib, aynan joriy bosqich talabi aniqlanmaguncha taxminni fakt qilmang.
5. Tanlangan dizaynning AI-BRIEF.md, AGENTS.md, README.md, DESIGN-STANDARD.md, CHECKLIST.md va haqiqiy site/ kodi. Header/footer, font, ikonka, rasm, mobile navigation va motion ham dizaynning qismi.

Online to‘liq matn: https://azizbeksafarov.github.io/tayyorgarlik/full-context.md . Uning bo‘limlari va manba hash/line diapazonlari https://azizbeksafarov.github.io/tayyorgarlik/reading-plan.json da. Bu umumiy kontekst; tanlangan dizayn kodi alohida source.zip ichida. Paket ichidagi READING-PLAN.json aynan o‘sha paketga tegishli fayllarni ko‘rsatadi. Full-context.md’ni o‘qigan agent undagi aynan bir xil manbalarni ikkinchi marta o‘qishi shart emas.

READ-RECEIPT.md — loyiha ichida to‘ldiriladigan o‘qish qaydi. Unda fayl/bo‘lim, o‘qilgan oraliq, holat (to‘liq / qisman / ochilmadi) va ishga ta’siri yoziladi. Avtomatik downloader bu qaydni “o‘qilgan” deb to‘ldirmaydi. Birinchi ish rejasida muhim qoidalar qisqa qayta aytiladi; foydalanuvchi har bandga qayta ruxsat berishi talab etilmaydi.

## Ishtirokchi nimalarni beradi?

- Biletning aynan matni, baholash talabi, amaliy ishning haqiqiy qolgan vaqti. Taxminiy mavzuni rasmiy bilet deb bermang.
- Tanlangan bitta dizayn nomi yoki aniq havola; nimasi saqlanishi kerakligi. Masalan: kompozitsiya, shrift rollari, zarracha animatsiyasi yoki katalog uslubi. Landing va dashboard bir mahsulot brendi bo‘lsin, lekin vazifasiga mos joylashsin.
- Joydagi ruxsatlar: internet, shaxsiy akkaunt, API, tayyor kod, tashqi hosting/backend va manba topshirish tartibi. Tasdiqlanmaganiga “noma’lum” yoziladi.
- Akkaunt login/2FA va xizmat tasdiqlari kerak bo‘lsa o‘z vaqtida bajarish. Haqiqiy kalitlar ochiq topshiriq, Git yoki chat hisobotiga yozilmaydi; mos server secrets’iga joylanadi.
- Talabga moslikni ko‘rib borish, foydalanuvchi sifatida asosiy oqimni bajarish va himoyada o‘z qarorini tushuntirish. Matn, rang, katalog elementi va forma talabini topib tahrirlashni mashq qilish.

AI vazifasi: manbani olish, biletni amallarga ajratish, to‘liq kodni moslashtirish, xavfsiz integratsiyalar, foydali tekshiruv, xatoni tuzatish, ishga tushirish va aniq HANDOFF. AI akkauntga ruxsati yoki vositasi yo‘q bo‘lsa buni aytadi; o‘qilgan hujjat unga avtomatik ruxsat bermaydi.

## Dizaynni to‘liq olish — qayta chizib taxmin qilmaslik

Avval tanlangan `/design/SLUG/manifest.json` ni oling. SLUG faol katalogdagi nom: bloom, si, ziyo, samar, forma, meros, orbita, hisob yoki nashr. Manifestdagi archive_url va archive_sha256 joriy ZIPga tegishli. Boshqa uslubdan fayl nomini ko‘chirmang; masalan, har dizaynda layout.css yoki identity.js bo‘lishi shart emas.

Tavsiya etilgan yo‘l: source.zip’ni to‘liq oling, arxiv hashi/hajmini tekshiring, yangi bo‘sh papkaga oching, `node verify-package.mjs` bilan ichki manifestni tekshiring. So‘ng `node serve.mjs` bilan asl nusxani ko‘ring. Python preview muqobili paket README’sida. Tekshirilmagan buzilgan yuklamani qo‘lda “to‘ldirib” ishlatmang: manifest/ZIPni bir snapshotdan qayta oling yoki GitHub raw fallback’dan foydalaning. SHA-256 buzilish/versiya farqini aniqlaydi; bu mustaqil raqamli imzo emas.

Paketni tekshirish tahrir va `npm install`dan oldin bajariladi: qo‘shimcha eski fayl ham aralashgan papka hisoblanadi. Tekshiruvdan o‘tkazish uchun mavjud ishni o‘chirmang; asl ZIPni yangi bo‘sh papkada tekshiring. Ish boshlangach CURRENT-TASK.md, HANDOFF.md va source o‘zgarishi tabiiy. READING-PLAN.json hashlarining eski bo‘lishi yangi vazifani bekor qilmaydi; ularni ommaviy bo‘sh shablon bilan ustidan yozmang. Mahalliy preview server backend emas va haqiqiy secret saqlash joyi emas.

Python 3.10+ mavjud bo‘lsa, ochiq `https://azizbeksafarov.github.io/design/get_starter.py` faylini yuklab, manbasini ko‘rib, quyidagicha ishlating:

```text
python get_starter.py bloom ./bloom-project
```

Bu yordamchi faqat faol katalogdagi dizaynni oladi, ZIP hajmi va hashini, ichki fayllar ro‘yxati va hashlarini tekshiradi. Mavjud destination papkasini ustidan yozmaydi; tekshirish muvaffaqiyatsiz bo‘lsa loyiha papkasini yaratmaydi. Paket kodi, npm install yoki tashqi xizmatni avtomatik ishga tushirmaydi. Faqat yuklab olish/o‘chirilmagan nusxa olishni osonlashtiradi. Python yo‘q bo‘lsa qo‘lda ZIP yo‘li mavjud.

Faqat HTML ko‘chirish font, JS, CSS, rasm, ikonka, motion va data modulini yo‘qotishi mumkin. Faqat dastlabki N belgini o‘qish faylni to‘liq o‘qish emas. Source matni qulaylik uchun; tahrirlanadigan to‘liq loyiha ZIPda. Minified dist’ni manba o‘rniga tahrirlamang. Bloom source build uchun npm va lockfile kerak; tayyor dist preview bu talablarsiz ko‘rinishi mumkin. Qolgan starterlarning haqiqiy run talabi README’da.

## Moslashtirishdan oldin saqlanadigan dizayn shartlari

Asl preview’ni desktop va mobil ko‘ring; tanlangan uslubning kompozitsiyasi, shrift vazifalari, asosiy/ikkilamchi tugma, card/panel va animatsiya maqsadini yozib oling. Keyin mahsulot mazmunini almashtiring. Barcha dizaynni bir xil serif hero, uch karta yoki bir xil dashboardga aylantirmang. Ishlayotgan motion’ni vaqtinchalik statik surat bilan almashtirish foydalanuvchi qarori bo‘lsin, yashirin qisqartirish emas.

Amal paneldan farq qilsin: bosiladigan elementda hover, focus, pressed/disabled va tushunarli label. Rang holatni bildiradigan yagona belgi bo‘lmasin. Asosiy matn/forma yorlig‘ini mayda bezak yozuviga aylantirmang; shrift kichraytirib overflow’ni yashirmang. Uzun o‘zbekcha matn, katta browser zoom, klaviatura va touch bilan asosiy vazifani bajaring. Formalarda qoralama, xato, saqlanmoqda va saqlandi holatlari real natijaga mos bo‘lsin.

Dialog yopilganda fokus ochgan amalingizga qaytsin. Skip link joriy sahifa main’iga olib borsin, route’ni almashtirmasin. Auth talab qilgan save/ariza/AI amali login’dan keyin aynan davom etsin; qaytish yo‘li faqat ruxsatli ichki manzil bo‘lsin. Logout yoki user almashganda eski ma’lumot, qoralama va kechikkan response yangi userga ko‘chmasin. Ariza bazaga saqlangan bo‘lsa Telegram xatosi saqlashni “bajarilmadi” deb ko‘rsatmasin.

Demo statistika, narx yoki saqlash haqiqiy servis deb ko‘rsatilmaydi. Foydalanuvchi UI’siga “Supabase’da saqlanadi”, “JWT tekshirildi”, “API model” kabi ichki texnologiyani sifat nishoni sifatida qo‘ymang. Zarur bo‘lsa “Saqlandi”, “Yuborilmadi, qayta urinib ko‘ring” va “AI vaqtincha ishlamayapti” kabi foydali matn ishlating. Texnik stack README, diagnostika va taqdimotda tushuntiriladi.

## Logo, favicon va OAuth brendi

Tanlovdagi loyiha nomi biletga bog‘liq. Kutubxona logosi yakuniy yangi mahsulot brendi emas. Tanlangan paketdagi BRAND-ASSETS.json haqiqiy mavjud ikonka/rasm manbalarini ko‘rsatadi; ularni taxminiy nom bilan izlamang. Logo va favicon bir belgidan olinishi mumkin, ammo favicon’dagi ataylab qo‘yilgan fonli badge shaffof header logosi degani emas.

Yakuniy brend uchun bitta original SVG yoki alpha-kanalli PNG master saqlang. Header/footer, favicon, ilova belgisi va OAuth’da ayni versiya ishlasin. SVG — vektor master; PNG — provayder talab qilgan raster eksport. OAuth provayderi qabul qiladigan o‘lcham/formati amaldagi upload formasidan tekshiriladi. Domen yoki tasdiqlash holati logo tayyorligidan alohida qayd qilinadi; Google nom/logosi tasdiqlanganini oldindan va’da qilmang.

“Shaffof” degani faqat CSS border-radius emas: oq to‘rtburchak piksel foni faylga pishirilmagan bo‘lishi kerak. Natijani oq, to‘q va checkerboard fonlarda ko‘ring; oq halo, kesilgan chet, noto‘g‘ri padding qolmasin. PNG master burchaklarida alpha tekshiriladi; SVG’da sahnani to‘liq qoplaydigan background shape borligi ko‘riladi. Kichik 16/32 px favicon’da ham belgi tanilsin. Maqsad — rasm atrofi burchaksiz ko‘rinishi; bu barcha sayt kartalarini yumaloqlash talabi emas.

Rasm yaratish/tahrirlash vositasi bilan mos shaffof eksport tayyorlang; tekshirish uchun fonlarni almashtirish mumkin. Qabul qilinmagan logo variantlarini final assetsga aralashtirmang. `brand/README.md`da master fayl, eksportlar va qayerlarda ishlatilgani yoziladi. Yangi brend tayyor bo‘lmasa “tayyor” deb belgilash o‘rniga ochiq vazifa bo‘lsin.

## Tanlovdan oldin tayyorlash mumkin bo‘lganlar

- Bitta asosiy va bitta vazifaga mos zaxira dizaynni tushunish. Barcha starterlarni bir mahsulotga aralashtirmaslik.
- Source+font+asset+lockfile nusxasi va tahrirlanmagan ZIP; qaysi runtime o‘rnatilishi aniq. Internet va paket o‘rnatish chegarasi oldindan tekshiriladi.
- Akkaunt/2FA kirish yo‘li, maxfiy ombor, env nomlari, migration va deploy tartibi. Oldindan hosting/backendga ruxsat bo‘lsa sozlash, aks holda yaratish yo‘riqnomasi.
- Qayta ishlatiladigan server asosini alohida yaratish mumkin: auth, RLS, validation, AI adapter, Telegram navbati, log/timeout. Hozirgi dizayn ZIP’lari bunday tayyor production backend bilan jihozlangan degan da’vo yo‘q. Arxitektura hujjati kod yoki deploy emas.
- AI va Telegramni sun’iy ma’lumot bilan bitta haqiqiy oqimda tekshirish. Kalitning mavjudligi integratsiya yoki mustaqil kvotani isbotlamaydi.
- Bitta toza muhit repetitsiyasi va tanlangan dizaynni oddiy vazifaga moslash. Tashqi API ishlamasa ochiq katalog/asosiy saqlash qanday davom etishi aniq bo‘lsin.
- Himoya: muammo → foydalanuvchi → to‘liq oqim → texnologiya sababi → cheklov. Ko‘rgazmali muvaffaqiyat bilan birga tegishli bitta xato holatini tushuntirish.

Haqiqiy biletdan oldin o‘ylab topilmaydiganlar: yakuniy domen/nom, ma’lumot modeli, barcha rollar, integratsiya zarurati, amaliy vaqt, rasmiy ball yoki g‘alaba kafolati. Umumiy asos bu qarorlarni o‘rniga qabul qilmaydi.

## Bilet kelgandagi ish tartibi

1. Talab → foydalanuvchi amali → ekran/data → qabul dalili jadvali. Majburiy oqim, o‘qilish va qulaylikni birga qurib, ixtiyoriy bezakdan ajrating.
2. Ishga tushadigan asl paketni saqlang, bitta ishlaydigan vertikal oqimni yarating. Baza/login kerak bo‘lsa uni dizaynning oxiriga qoldirmang.
3. Tanlangan dizaynni yangi mazmun, sahifa rollari va zarur integratsiyalarga moslashtiring. Landing, kabinet va workspace uchun bir xil brend, vazifaga mos tuzilma.
4. O‘zgarish va muhim xavfga mos tekshiruv: oddiy oqim; tegishli xato; boshqa user/ruxsat; reload; telefon/klaviatura; toza run. Bir xil testni son uchun qayta bajarmang.
5. Ishlaydigan manzil/local run, source, run yo‘riqnomasi va HANDOFF. Backend kerak bo‘lsa env.example va migration ham. Tekshirilmagan servis, ma’lum xato va qolgan ish aniq yoziladi.

## Keyingi chatga aytiladigan topshiriq

https://azizbeksafarov.github.io/ai.md

“.io dagi tanlov kontekstini to‘liq o‘qi: tayyorgarlik/full-context.md yoki reading-plan.json ko‘rsatgan aynan shu manbalar. START-HERE bilan cheklanma; to‘liq o‘qilgan va ochilmagan qismlarni ayt. Hamma dizayn kodini emas, men tanlagan dizaynning to‘liq source paketini ol. ZIP va manifestni tekshir, asl preview’ni ko‘r; yo‘q fayl manzilini taxmin qilma. Tanlangan uslub, shrift rollari va ishlaydigan animatsiyani saqlab, quyidagi biletga moslashtir. Shaffof logo va barcha brend qo‘llanishlarini izchil qil. Menga foydalanuvchi uchun tushunarli interfeys kerak. Bilet, vaqt va tasdiqlangan joydagi qoidalar ustuvor. Avval tushungan maqsad, o‘qilgan manbalar, tayyor/reja holati va birinchi ishlaydigan oqimni qisqa ayt, keyin ishni bajar.”

Dizayn: [aniq nom/havola]. Bilet: [aynan matn]. Qolgan vaqt: [haqiqiy vaqt]. Joydagi tasdiqlangan cheklovlar: [ro‘yxat yoki noma’lum].

## Halol yakun

“Mukammal”, “100% xavfsiz”, “barcha xato yo‘q” yoki test soniga asoslangan sifat balli berilmaydi. Qaysi source versiyasi, muhit va foydalanuvchi oqimi tekshirilgani yoziladi. Ochiq tayyorgarlik materiallari mustaqil mashq javobi yoki joriy rasmiy biletga aylantirilmaydi. Bilet fayllari loyihaning o‘zida yuritiladi.

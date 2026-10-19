# Tanlovda boshlash va to‘liq kontekstni ishlatish

Yangilangan: 2026-10-19. Bu qayta ishlatiladigan tayyorgarlik qo‘llanmasi. Haqiqiy bilet, amaldagi reglament va foydalanuvchining joriy qarori ustuvor. Tanlovning yangi sanasi, davomiyligi, akkaunt yoki oldindan tayyorlangan backendga ruxsat ushbu hujjat bilan tasdiqlanmaydi.

## START-HERE nimaga xizmat qiladi?

START-HERE — mundarija va boshlash yo‘li. U arxitektura, mezon, nizom yoki kodning o‘rnini bosmaydi. Faqat kirish matnini o‘qib, “hammasini o‘qidim” demang. Havola ro‘yxatini ko‘rish — havoladagi hujjatni o‘qish emas. ZIPning butunligi ham uning mazmuni tushunilganini bildirmaydi.

Foydalanuvchi “.io ni to‘liq o‘qi” desa, quyidagi to‘liq rejim qo‘llanadi. Katta matnni kichik bo‘laklarda izchil o‘qish mumkin; muhim qismni tushirib qoldirish mumkin emas. Bir xil matn HTML, Markdown va ZIPda takrorlansa, o‘qilgan nusxa/manba qayd qilinadi va takror yuklash shart emas. Barcha to‘qqiz dizaynning source kodini o‘qish kerak emas: tanlangan uslubning to‘liq paketi olinadi. Tekshirilmagan yoki ochilmagan qism aniq aytiladi.

## To‘liq o‘qish yo‘li

1. Joriy topshiriq, bilet, qolgan vaqt va loyiha ichidagi CURRENT-TASK.md / HANDOFF.md. Ochiq saytdagi shu nomli fayllar to‘ldirilmagan shablon.
2. PREPARATION.md — ushbu qo‘llanma; WORKFLOW.md va PROJECT-STATUS.json — ish tartibi, reja/haqiqiy holat va xavflar.
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

1. Talab → foydalanuvchi amali → ekran/data → qabul dalili jadvali. Majburiy oqim bilan bezakni ustuvorlikka ajrating.
2. Ishga tushadigan asl paketni saqlang, bitta ishlaydigan vertikal oqimni yarating. Baza/login kerak bo‘lsa uni dizaynning oxiriga qoldirmang.
3. Tanlangan dizaynni yangi mazmun, sahifa rollari va zarur integratsiyalarga moslashtiring. Landing, kabinet va workspace uchun bir xil brend, vazifaga mos tuzilma.
4. O‘zgarish va muhim xavfga mos tekshiruv: oddiy oqim; tegishli xato; boshqa user/ruxsat; reload; telefon/klaviatura; toza run. Bir xil testni son uchun qayta bajarmang.
5. Ishlaydigan manzil/local run, source, env.example, migration, run yo‘riqnomasi va HANDOFF. Tekshirilmagan servis, ma’lum xato va qolgan ish aniq yoziladi.

## Keyingi chatga aytiladigan topshiriq

https://azizbeksafarov.github.io/ai.md

“.io dagi tanlov kontekstini to‘liq o‘qi: tayyorgarlik/full-context.md yoki reading-plan.json ko‘rsatgan aynan shu manbalar. START-HERE bilan cheklanma; to‘liq o‘qilgan va ochilmagan qismlarni ayt. Hamma dizayn kodini emas, men tanlagan dizaynning to‘liq source paketini ol. ZIP va manifestni tekshir, asl preview’ni ko‘r; yo‘q fayl manzilini taxmin qilma. Tanlangan uslub, shrift rollari va ishlaydigan animatsiyani saqlab, quyidagi biletga moslashtir. Shaffof logo va barcha brend qo‘llanishlarini izchil qil. Menga foydalanuvchi uchun tushunarli interfeys kerak. Bilet, vaqt va tasdiqlangan joydagi qoidalar ustuvor. Avval tushungan maqsad, o‘qilgan manbalar, tayyor/reja holati va birinchi ishlaydigan oqimni qisqa ayt, keyin ishni bajar.”

Dizayn: [aniq nom/havola]. Bilet: [aynan matn]. Qolgan vaqt: [haqiqiy vaqt]. Joydagi tasdiqlangan cheklovlar: [ro‘yxat yoki noma’lum].

## Halol yakun

“Mukammal”, “100% xavfsiz”, “barcha xato yo‘q” yoki test soniga asoslangan sifat balli berilmaydi. Qaysi source versiyasi, muhit va foydalanuvchi oqimi tekshirilgani yoziladi. Ochiq tayyorgarlik materiallari mustaqil mashq javobi yoki joriy rasmiy biletga aylantirilmaydi. Bilet fayllari loyihaning o‘zida yuritiladi.

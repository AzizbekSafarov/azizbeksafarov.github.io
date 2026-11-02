# CODEX — tanlov kuni kuchli AI bilan ishlash (kod yozmaydiganlar uchun)

Bu qo‘llanma Codex (ChatGPT desktop ilovasi ichida) bilan professional sayt yasash uchun. Siz kod yozmaysiz: siz **talab qo‘yasiz, natijani tekshirasiz va qaror qilasiz**, Codex esa kod yozadi. Haqiqiy bilet, vaqt va joydagi qoida ustuvor. Bu fayl bilet bermaydi.

Codex ishlamasa yoki limit tugasa, boshlangan ishni saqlang va JONLI-OZGARISH.md orqali kerakli qo‘lda tahrirni bajaring. Loyiha hali yo‘q yoki mavjudini tugatish imkonsiz bo‘lsa, biletga mos AI’siz yo‘l ZAXIRA.md da.

## 0. Sozlash vaqtida

Video ulanish uchun 15 daqiqa deydi; amaliy vaqtga kirmasligi mezonlar loyihasida. Joydagi tartibni aniqlang.

1. Tashkilotchi bergan Codex ilovasini oching va ruxsat etilgan hisobga kiring. Ilova versiyasiga qarab tugma nomlari farq qilishi mumkin.
2. Shu hisobda mavjud model, qolgan limit va fayl/brauzer vositalarini tekshiring. Sol/Astra/Luna nomlari yoki Plus imkoniyati boshqa hisobda mavjud bo‘lishi kafolatlanmaydi. Bir kichik faylni o‘qish va preview ochish bilan muhitni tekshiring; chat javobi kelishi barcha vosita ishlaganini bildirmaydi.
3. Tanlangan dizaynning **source.zip** faylini yangi bo‘sh papkaga oching. **kit.zip** yuklangan bo‘lsa avval uning ichidagi tanlangan dizayn/source.zip ni ham oching. Ish ildizida site/, START-HERE.md va kit.json turishi kerak.
4. Shu ildiz papkani Codex loyihasi sifatida oching. README.md dagi buyruqlarni aynan ko‘rsatilgan papkadan bajartiring. Tahrirdan oldin node verify-package.mjs; keyin node serve.mjs.
5. Asl preview ochilganini ko‘ring. Bloom’da tahrirdan keyin source build kerak; HTML starterlarda npm yo‘q. Ruxsatlar kerakli loyiha va vositalarga mos bo‘lsin; noma’lum amalni o‘qimasdan tasdiqlamang.

## 1. Asosni tanlash

Codex bilan ish **tanlangan professional starter** ustida boradi: ZIP’dagi `site/` — tayyor dizayn, ishlaydigan oqimlar va testlar. Codex uni biletdagi mahsulotga aylantiradi (pastdagi C1–C6). Mezonlar loyihasida oldindan tayyorlangan to‘liq loyiha topshirish taqiqlangan, shuning uchun starter biletga haqiqatan moslashtiriladi.

| Bilet turi | Starter |
|---|---|
| Kurs, dars, ta’lim | Ziyo |
| Davlat yoki rasmiy xizmat | Yuksal |
| Xizmat, hisobot, jadval, ma’lumotlar | Hisob |
| Muzey, madaniyat, ko‘rgazma | Meros |
| Sayohat, bron, joy | Samar |
| Do‘kon, savat, mahsulot | Forma |
| Yangiliklar, maqolalar | Nashr |
| Texnik, ilmiy, monitoring | Orbita |
| React kerak bo‘lsa (internet va npm ishlasa) | Bloom |

Starterni bir daqiqada tanlang va keyin almashtirmang: vaqt ishlaydigan oqimga ketsin.

Modelni mavjud imkoniyat va haqiqiy sinovga qarab tanlang. Qiyin reja/xatoda chuqurroq fikrlash, oddiy tahrirda qisqaroq ish yetadi; model nomidan sifat yoki sarf kafolati chiqarmang.

`ZAXIRA/skelet/` va `tahrir.html` — siz uchun, AI’siz zaxira: Codex ishlamay qolsa yoki limit tugasa, saytni o‘zingiz panelda yig‘asiz (`ZAXIRA.md`). Codex’ga skeletdan qurishni buyurmang.

## 2. So‘rovlar ketma-ketligi (120 daqiqa — faqat rejalash misoli)

120 daqiqa tasdiqlangan umumiy limit emas. C1–C6 vaqtlarini haqiqiy qolgan vaqtga moslang; majburiy oqim va tekshiruv ustuvor.

Har birini **alohida xabar** qilib yuboring. Kvadrat qavslarni to‘ldiring. Har javobdan keyin natijani **o‘zingiz brauzerda ko‘ring** — Codex “tayyor” desa ham.

### C1 — Tushunish va reja (5–10 daqiqa)

```text
Men bilan o'zbekcha gaplash. Men kod yozmayman: sen kod yozasan, men talab qo'yaman va natijani tekshiraman.
AGENTS.md dagi tartib bilan o'qi: AI-BRIEF.md, tanlov qoidalari (COMPETITION.md, CURRENT-COMPETITION.md, SCORING-WORKPLAN.md) va site/ ichidagi kod.
REGULATIONS.md va FULL-COMPETITION-CONTEXT.md dan biletga tegishli savol tug'ilsa, o'sha bo'limni o'qi.

Quyida tanlov bileti. Hali kod yozma. Faqat:
1) biletning har talabini jadval qil: talab → foydalanuvchi amali → qaysi sahifa/fayl → qanday sinaladi;
2) sahifalar xaritasi (kamida biletda aytilgancha);
3) qaysi starter qismlari qoladi, qaysilari almashadi;
4) xavfli joylar va noaniq savollarim.
Javob qisqa bo'lsin.

BILET:
[biletni to'liq qo'ying]
QOLGAN VAQT: [masalan 110 daqiqa]
```

Rejani o‘qing. Biletdagi biror talab tushib qolgan bo‘lsa, ayting: `Biletdagi [talab] rejada yo‘q, qo‘sh.`

### C2 — Qurish (35–50 daqiqa)

```text
Rejani tasdiqlayman. Endi qur. Qoidalar:
- Tanlangan dizaynning uslubini (shrift, kompozitsiya, rang tili) saqla, mazmun va funksiyalarni biletga moslashtir.
- Starterning texnologiyasida qol (HTML starterlarda oddiy HTML/CSS/JS, Bloom'da mavjud React loyihasi). Frameworkni zaruratsiz almashtirma. Bilet integratsiyasi uchun zarur SDK bo'lsa sababini yoz va mos dependency/lockfile ishlat. Lokal resurslar internet uzilganda ochilsin; haqiqiy server/API amali esa internet talab qilishini yashirma.
- Barcha ko'rinadigan matnlar, ro'yxat ma'lumotlari va asosiy rang oson topilsin:
  ma'lumot bitta faylda (mavjud model.js yoki yangi content.js), asosiy rang CSS o'zgaruvchisida.
- Har forma: majburiy maydonlar, noto'g'ri qiymatda tushunarli xabar, muvaffaqiyatli natija. Biletda lokal saqlash yetarli bo'lsa localStorage; server/login/umumiy baza yoki maxfiy API talab qilinsa va ruxsat bo'lsa ARCHITECTURE.md bo'yicha backend qur. Lokal natijani serverga yuborildi dema.
- Bo'sh holat, xato holati, mobil menyu, klaviatura va ko'rinadigan fokus.
- Demo ma'lumot haqiqiy deb ko'rsatilmasin.
Tugagach: qaysi fayllar o'zgardi va qanday ochiladi — 5 qatorda.
```

Keyin ZIP ildizida `node serve.mjs` bilan oching (Bloom source tahriridan keyin avval build). HTML starterlarning ES modullari file:// orqali ishlamasligi mumkin; yoki Codex’dan so‘rang: `Saytni brauzerda och va asosiy sahifani ko'rsat.` (Codex ichidagi brauzer bor.)

### C3 — Sinov va tuzatish (15–20 daqiqa)

```text
Endi o'zing sina va tuzat:
1) Mavjud testlar va brauzer vositalaridan foydalan. tekshir.js ixtiyoriy yordamchi: u shadow DOM ichini, server ruxsatlarini va biznes oqimini to'liq tekshirmaydi. Uni ishlatsang ?tekshir rejimida och; uch nusxali kenglik sinovini haqiqiy API/yozishli sahifada ishlatma.
2) Biletdagi har talabni boshidan oxirigacha bajar: to'g'ri qiymat, bo'sh forma, noto'g'ri qiymat, takror, saqlangan holat qayta ochilganda.
3) 390, 768 va 1366 px kenglikda gorizontal surish, kesilgan matn, ustma-ust tushish yo'qligini tekshir.
4) Konsolda xato bo'lmasin.
Topilgan har xatoni tuzat va qayta sina. Oxirida jadval: talab → sinov → natija (o'tdi/xato).
```

Jadvaldagi har “o‘tdi”ni **o‘zingiz** bir marta bosib ko‘ring. Ko‘rmagan narsangizni himoyada “ishlaydi” demang.

### C4 — Professional ko‘rinish (10–15 daqiqa, majburiy talablar ishlagandan keyin)

```text
Tanlangan starter uslubini saqla. Funksiyalarni va kompozitsiyani qayta qurma; faqat aniqlangan ko'rinish kamchiliklarini tuzat:
- Birinchi ekran bilet va tanlangan dizayn vazifasiga mos bo'lsin; sarlavha mavzuni aniq aytsin.
- Tanlangan dizaynning rasm, palitra, shakl va kartochka tilini saqla; hammasini bir xil uslubga keltirma.
- Matn kontrasti, tugma/panel farqi, fokus va o'qilishdagi aniq xatoni tuzat. Mavjud foydali animatsiyani saqla, reduced-motion holatini tekshir.
- Matn telefonda sig'sin, shrift o'lchami ekran kengligiga qarab sakramasin.
- Faqat bilet va qolgan vaqtga mos bo'lsa foydali detalni ko'rib chiq: [masalan qolgan joy ko'rsatkichi / saralash / jami hisob].
Keyin 390 va 1366 px da skrinshot olib, ko'rinishni o'zing baholab, bitta eng katta kamchilikni tuzat.
```

### C5 — Topshirish hujjatlari (5–10 daqiqa)

```text
Ildizda README.md yoz (o'zbekcha): sayt nimani hal qiladi, qanday ochiladi, fayllar, bilet talablari va sinov jadvali,
ishlatilgan vositalar (Codex, tanlangan starter manbasi), men nimani o'zgartirganim, cheklovlar.
Yana JONLI-OZGARISH.md yoz: sarlavha, asosiy rang, yangi ro'yxat elementi va yangi blokni qaysi faylda,
qaysi qatorda o'zgartirish kerak — kod bilmaydigan odam uchun qadamma-qadam.
ZAXIRA/HIMOYA.md dagi yagona ssenariy asosida ildizda loyiha uchun HIMOYA.md yoz: 5 daqiqa taqdimot + 5 daqiqa amaliy namoyish + 5 daqiqa savol-javob. Faqat qurilgan va tekshirilgan faktlar, haqiqiy cheklovlar.
Ochiq parol yoki kalit qolmaganini tekshir.
```

### C6 — Jonli o‘zgarish mashqi (5 daqiqa, AI’siz)

`JONLI-OZGARISH.md` ga qarab **o‘zingiz** bitta matn va asosiy rangni o‘zgartiring → Ctrl+S → brauzerda Ctrl+Shift+R. Ishlamasa, Codex’dan: `JONLI-OZGARISH.md ni men tushunadigan qilib soddalashtir; men X ni o'zgartirmoqchi edim, mana bu bo'ldi: Y.`

## 3. Xato bo‘lganda — tayyor iboralar

| Holat | Codex’ga yozing |
|---|---|
| Nimadir buzildi | `Oxirgi o'zgarishdan keyin [nima] ishlamay qoldi. Sababini top, tuzat, qayta sina. Boshqa narsaga tegma.` |
| Juda ko‘p o‘zgartirdi | Javob ostidagi **Undo** tugmasi, yoki: `Oxirgi o'zgarishlarni bekor qil.` |
| Tushunarsiz javob | `Kod bilmayman. Nima qilganingni 3 ta oddiy gapda ayt va men nimani tekshirishim kerak.` |
| Bir joyda aylanib qoldi (2 urinishdan keyin) | `To'xta. Muammoni boshqa yo'l bilan, eng sodda usulda hal qil.` Yoki o‘sha funksiyani soddalashtiring. |
| Ko‘rinish yoqmadi | `[sahifa] da [element] [muammo]. Faqat shu joyni tuzat.` Aniq joy va aniq muammo. |
| Codex ruxsat so‘radi | O‘qing: faqat loyiha papkasidagi fayl/buyruq bo‘lsa ruxsat bering. Tizim sozlamasi, boshqa papka, o‘chirish — rad eting. |

## 4. Vaqt va limit nazorati

| Qolgan vaqt | Holat |
|---|---|
| 120 → 100 | C1 tugagan, reja tasdiqlangan |
| 100 → 55 | C2: barcha majburiy talablar ishlaydi |
| 55 → 35 | C3: sinov jadvali “o‘tdi” |
| 35 → 20 | C4 ko‘rinish, faqat vaqt bo‘lsa |
| 20 → 10 | C5 hujjatlar, skrinshotlar |
| 10 → 0 | Yangi o‘zgarish yo‘q. Papka nusxasi, topshirish |

- 30 daqiqa qolganda yangi funksiya boshlanmaydi.
- Hisobdagi Usage sahifasidan haqiqiy qolgan limit va reset vaqtini o‘qing. Saqlangan eski raqamga tayanmang. Reset taklifi bo‘lsa aynan shu hisobdagi shart va muddatni tekshiring; mavjudligi, chegarasi va avtomatik ishlashi oldindan kafolatlanmaydi. Buni sozlash bo‘yicha foydalanuvchi qarorini avtomatik qabul qilmang.
- Bitta topshiriq — bitta akkaunt. Ikkinchi akkaunt faqat birinchisi umuman ishlamay qolsa; almashtirishdan oldin tashkilotchidan so‘rang.
- Limit tugasa: ishlaydigan holatni saqlang. Qolgan matn/rang ishlarini qo‘lda bajaring (`JONLI-OZGARISH.md`). Hali sayt bo‘lmasa — `ZAXIRA.md` dagi AI’siz yo‘l.

## 5. Himoyada AI haqida to‘g‘ri gapirish

Mezonlar loyihasining 22-bandida AI ishlatishning o‘zi kamaytirish asosi emasligi yozilgan; bu loyiha maqomidagi qoida. Himoyada **siz nimani boshqarganingiz** so‘raladi (5.2 va 4.2 ko‘rsatkichlari):

- “Kodni Codex yozdi. Men biletni talablar jadvaliga aylantirdim, dizaynni tanladim, har talabni o‘zim sinadim, [xato]ni topib tuzattirdim, [matn/rang/detal]ni o‘zim o‘zgartirdim.”
- Cheklovni haqiqiy holatga mos ayting. Faqat lokal loyiha bo‘lsa: “Ma’lumot shu brauzerda saqlanadi”. Server ishlasa uning tekshirilgan holatini ayting.
- Ishlamaydigan narsani “ishlaydi” demang.

## 6. Oldingi tajribadan foydalanish

Oldin to‘liq sinov qilgan bo‘lsangiz, uning natijasidan foydalaning: qayerda vaqt yo‘qolgan, qaysi amal tekshirilmagan va qaysi xato qaytalangan. Faqat ochiq qolgan xavf uchun qisqa maqsadli mashq yetishi mumkin. Yangi muhitda paketni ochish, asosiy amal va himoyada tushuntirishni tekshiring. Mashq davomiyligi tavsiya; rasmiy ish vaqtini tashkilotchi belgilaydi. Shaxsiy mashq bileti va javobi ochiq tayyorgarlik paketiga joylanmaydi.

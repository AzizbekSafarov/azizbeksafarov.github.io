# CODEX — tanlov kuni kuchli AI bilan ishlash (kod yozmaydiganlar uchun)

Bu qo‘llanma Codex (ChatGPT desktop ilovasi ichida) bilan professional sayt yasash uchun. Siz kod yozmaysiz: siz **talab qo‘yasiz, natijani tekshirasiz va qaror qilasiz**, Codex esa kod yozadi. Haqiqiy bilet, vaqt va joydagi qoida ustuvor. Bu fayl bilet bermaydi.

Codex ishlamasa, limit tugasa yoki ruxsat berilmasa: `ZAXIRA.md` → skelet + `tahrir.html`.

## 0. Sozlash vaqtida (15 daqiqa, amaliy vaqtga kirmaydi)

1. **ChatGPT** desktop ilovasini oching → hisobingizga kiring → yuqoridan **Codex** ni tanlang.
2. Yozish oynasi ostini tekshiring:
   - model: **Sol** (asosiy). **Astra** eng kuchli, lekin limitni juda tez yeydi — faqat qiyin bitta muammo uchun;
   - fikrlash darajasi: **High** reja uchun, keyin **Medium** (qiyin xatoda yana High);
   - ruxsat: **Default permissions** yoki **Ask for approval** (Full access emas).
3. Brauzerda `https://azizbeksafarov.github.io/` → dizaynni tanlang → **Kod ZIP** ni yuklang. Internet bo‘lmasa yoki sayt ochilmasa: oldindan olib kelingan ZIP nusxasi (`design/kit.zip` ichida hamma starter bor).
4. ZIP’ni ish stolida bilet formatidagi papkaga oching (masalan `hududiy_017_003`). Ichki ZIP’ni yana ochish shart emas — ichida `site/`, `START-HERE.md`, `ZAXIRA/` bo‘lsa to‘g‘ri.
5. Codex’da **Add new project** (yoki **Ctrl+O**) → shu papkani tanlang → **New chat**.
6. Sinov xabari: `Salom. Papkadagi fayllar ro‘yxatini qisqa ayt.` — javob kelsa, hammasi ishlayapti.
7. **Settings → Usage & billing** da limit qancha qolganini bir marta ko‘rib qo‘ying.

## 1. Asosni tanlash

Codex bilan ish **tanlangan professional starter** ustida boradi: ZIP’dagi `site/` — tayyor dizayn, ishlaydigan oqimlar va testlar. Codex uni biletdagi mahsulotga aylantiradi (pastdagi C1–C6). Tanlov qoidasi bo‘yicha oldindan tayyorlangan to‘liq loyiha topshirilmaydi, shuning uchun starter biletga haqiqatan moslashtiriladi.

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

Model: **Sol** — asosiy; reja (C1) va qiyin xato uchun fikrlash darajasini **High** qiling. **Astra** — faqat Sol uddalamagan bitta muammo uchun. Matn yozish uchun **Luna** yetadi.

`ZAXIRA/skelet/` va `tahrir.html` — siz uchun, AI’siz zaxira: Codex ishlamay qolsa yoki limit tugasa, saytni o‘zingiz panelda yig‘asiz (`ZAXIRA.md`). Codex’ga skeletdan qurishni buyurmang.

## 2. So‘rovlar ketma-ketligi (120 daqiqalik ish uchun)

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
- Starterning texnologiyasida qol (HTML starterlarda oddiy HTML/CSS/JS, Bloom'da mavjud React loyihasi). Yangi framework, npm paket yoki tashqi CDN qo'shma. Internetsiz ham ishlasin.
- Barcha ko'rinadigan matnlar, ro'yxat ma'lumotlari va asosiy rang oson topilsin:
  ma'lumot bitta faylda (mavjud model.js yoki yangi content.js), asosiy rang CSS o'zgaruvchisida.
- Har forma: majburiy maydonlar, noto'g'ri qiymatda tushunarli xabar, muvaffaqiyatli natija. Saqlash kerak bo'lsa localStorage.
- Bo'sh holat, xato holati, mobil menyu, klaviatura va ko'rinadigan fokus.
- Demo ma'lumot haqiqiy deb ko'rsatilmasin.
Tugagach: qaysi fayllar o'zgardi va qanday ochiladi — 5 qatorda.
```

Keyin oching: `site/index.html` ni ikki marta bosing yoki Codex’dan so‘rang: `Saytni brauzerda och va asosiy sahifani ko'rsat.` (Codex ichidagi brauzer bor.)

### C3 — Sinov va tuzatish (15–20 daqiqa)

```text
Endi o'zing sina va tuzat:
1) ZAXIRA/skelet/tekshir.js ni site/ ga nusxala (Bloom'da site/public/ ga) va index.html <head> ga birinchi script qilib ula;
   saytni ?tekshir bilan ochib "Tekshirish" natijasini o'qi.
2) Biletdagi har talabni boshidan oxirigacha bajar: to'g'ri qiymat, bo'sh forma, noto'g'ri qiymat, takror, saqlangan holat qayta ochilganda.
3) 390, 768 va 1366 px kenglikda gorizontal surish, kesilgan matn, ustma-ust tushish yo'qligini tekshir.
4) Konsolda xato bo'lmasin.
Topilgan har xatoni tuzat va qayta sina. Oxirida jadval: talab → sinov → natija (o'tdi/xato).
```

Jadvaldagi har “o‘tdi”ni **o‘zingiz** bir marta bosib ko‘ring. Ko‘rmagan narsangizni himoyada “ishlaydi” demang.

### C4 — Professional ko‘rinish (10–15 daqiqa, majburiy talablar ishlagandan keyin)

```text
Funksiyalarga tegma. Faqat ko'rinishni professional qil:
- Birinchi ekran reklama emas, foydalanuvchi ishini boshlaydigan sahifa bo'lsin; sarlavha mavzuni aniq aytsin.
- Mavzuga mos haqiqiy rasm bo'lsa ishlat (berilgan materiallar yoki papkadagi rasmlar); dekorativ "orb", gradient bloblar yo'q.
- Bir xil rangdagi zerikarli palitra emas: 1 asosiy + 1 urg'u rang, matn kontrasti kamida 4.5:1.
- Kartochka ichida kartochka yo'q; bo'limlar keng polosa, kartochka faqat takrorlanuvchi elementlar uchun.
- Matn telefonda sig'sin, shrift o'lchami ekran kengligiga qarab sakramasin.
- Bitta o'ziga xos foydali detal qo'sh: [masalan qolgan joy ko'rsatkichi / saralash / jami hisob].
Keyin 390 va 1366 px da skrinshot olib, ko'rinishni o'zing baholab, bitta eng katta kamchilikni tuzat.
```

### C5 — Topshirish hujjatlari (5–10 daqiqa)

```text
Ildizda README.md yoz (o'zbekcha): sayt nimani hal qiladi, qanday ochiladi, fayllar, bilet talablari va sinov jadvali,
ishlatilgan vositalar (Codex, tanlangan starter manbasi), men nimani o'zgartirganim, cheklovlar.
Yana JONLI-OZGARISH.md yoz: sarlavha, asosiy rang, yangi ro'yxat elementi va yangi blokni qaysi faylda,
qaysi qatorda o'zgartirish kerak — kod bilmaydigan odam uchun qadamma-qadam.
Yana HIMOYA.md: 5 daqiqalik taqdimot matni va 5 ta standart savolga qisqa javoblar. Faqat haqiqiy faktlar.
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
- **Settings → Usage & billing**: limit 30% dan kam qolsa, qisqa va aniq so‘rovlarga o‘ting, Astra’ni ishlatmang.
- **Banked reset** (Usage sahifasida “Available” ostida, muddati bilan) 5 soatlik va haftalik limitni 100% ga qaytaradi. U faqat shu ikkisidan **biri 80% dan kam qolganda** ishlaydi: haftalik 90% qolgan bo‘lsa ham, 5 soatlik 80% dan kam bo‘lsa — ishlaydi. Ikkalasi ham 80% va undan ko‘p bo‘lsa, rad etiladi va reset sarflanmaydi. Erta ishlatmang: 5 soatlik limit deyarli tugaganda bosing yoki **“Allow your assistant to use resets”** ni yoqing — limit 10% ga tushganda o‘zi ishlatadi. Ishlatgandan keyin keyingi tiklanish vaqti siljiydi. Muddati tanlov kunidan keyin ekanini oldindan tekshiring.
- Bitta topshiriq — bitta akkaunt. Ikkinchi akkaunt faqat birinchisi umuman ishlamay qolsa; almashtirishdan oldin tashkilotchidan so‘rang.
- Limit tugasa: ishlaydigan holatni saqlang. Qolgan matn/rang ishlarini qo‘lda bajaring (`JONLI-OZGARISH.md`). Hali sayt bo‘lmasa — `ZAXIRA.md` dagi AI’siz yo‘l.

## 5. Himoyada AI haqida to‘g‘ri gapirish

Baholashda AI ishlatishning o‘zi minus emas, lekin **siz nimani boshqarganingiz** so‘raladi (5.2 va 4.2 ko‘rsatkichlari):

- “Kodni Codex yozdi. Men biletni talablar jadvaliga aylantirdim, dizaynni tanladim, har talabni o‘zim sinadim, [xato]ni topib tuzattirdim, [matn/rang/detal]ni o‘zim o‘zgartirdim.”
- Cheklovni ochiq ayting: “Ma’lumot brauzerda saqlanadi, server yo‘q.”
- Ishlamaydigan narsani “ishlaydi” demang.

## 6. Oldindan mashq qilish shart

Tanlovdan oldin shu qo‘llanma bo‘yicha kamida **2 marta to‘liq** (120 daqiqa, taymer bilan) soxta bilet bilan ishlang. Har safar: qaysi so‘rov yaxshi ishladi, qayerda vaqt yo‘qoldi — yozib boring. Tanlov kuni yangi narsa sinamang.

# Azizbek — tanlov tayyorgarligi: AI uchun kirish

2026-10-28. Bu Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi uchun ochiq ish maydonining kirish nuqtasi. Foydalanuvchi — Azizbek Safarov. U kod yozmaydi: bilet va qarorlarni beradi, natijani tekshiradi; kodni AI yozadi va sinaydi. U bilan o‘zbekcha, sodda tilda gaplash.

## O‘qish tartibi

1. Bilet — Chatda yoki loyihadagi CURRENT-TASK.md da. Bu ochiq to‘plamda bilet yo‘q; ikkalasida ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Loyiha davom etayotgan bo‘lsa, HANDOFF.md ni ham o‘qi.
2. [Tanlov qoidalari va baholash](https://azizbeksafarov.github.io/design/handoff/competition.md) — Qoidalar holati /design/handoff/current-competition.md va mezon → ish → dalil rejasi /design/handoff/score-workplan.md bilan: biletni qabul sinovlari va himoya dalillariga aylantirish uchun.
3. [Tanlangan dizayn va kod](https://azizbeksafarov.github.io/design/) — Faqat tanlangan /design/SLUG/ai.md va uning source ZIPi. ZIP ichida AGENTS.md ish qoidalari va o‘qish tartibini beradi. Boshqa dizaynlar kodini o‘qish shart emas.
4. [Ish usuli](https://azizbeksafarov.github.io/ish-tartibi/ai.md) — Diagnostika, uch sinov qatlami, topshirish va ehtimoliy muammolar katalogi (ssenariylar, aniqlangan xato emas).
5. [Mahsulot tuzilishi va server rejasi](https://azizbeksafarov.github.io/arxitektura/ai.md) — Sahifa tuzilishi va professional sifat mezonlari. Render + Supabase qismi va /api/ai.md faqat bilet server, login yoki baza talab qilsa kerak; bu reja, yaratilgan xizmat emas.
6. [To‘liq manbalar](https://azizbeksafarov.github.io/tayyorgarlik/ai.md) — Nizomlarning to‘liq matni /ustoz/nizom.md, barcha tadqiqot /ustoz/ai.md, yig‘ma /tayyorgarlik/full-context.md. Qoida savoli tug‘ilsa tegishli bo‘limni to‘liq o‘qi; foydalanuvchi so‘rasa reading-plan.json bo‘yicha hammasini.

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Ekspert amaliy vazifani (biletni) hammaga bir vaqtda beradi; ishdan keyin 15 daqiqalik himoya bo‘ladi: taqdimot, namoyish va savollar. Mezonlar loyihasi va tashkilotchi videosiga ko‘ra, ishdan oldin hisob va dasturni sozlash uchun 15 daqiqa beriladi va u amaliy vaqtga kirmaydi.

- Baholash 6 mezon, jami 100 ball. Imzoli qarordagi vaznlar: funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Shuning uchun avval biletdagi majburiy funksiyalar oxirigacha ishlashi kerak, keyin bezak.
- Mezonlar loyihasida viloyat (hududiy) bosqichi uchun: kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat. Faqat biletdagi majburiy imkoniyatlar talab qilinadi; qo‘shimcha funksiya asosiy kamchilikni qoplamaydi. Saqlash usuli (brauzer yoki server) biletda yoziladi.
- AI, no-code, shablon va ochiq materiallar ruxsat etilgan; moslashtirish va natija baholanadi. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqlangan, shuning uchun starter biletdagi mahsulotga aylantiriladi.
- Himoyada jonli o‘zgartirish masalasida manbalar farq qiladi: imzoli qarorda so‘ralishi mumkin, mezonlar loyihasida esa topshirilgan loyihani o‘zgartirib bo‘lmaydi. Joyda aniqlanadi; tayyor qo‘llanma `ZAXIRA/JONLI-OZGARISH.md` da.
- 21 batafsil ko‘rsatkich hali tasdiqlanmagan loyihadan olingan. Imzoli qaror va joydagi ko‘rsatma ustun turadi. Amaliy vaqtni tashkilotchi belgilaydi: foydalanuvchi aytgan qolgan vaqt bilan ishla.

Qoidalar oxirgi marta 2026-10-28 da tekshirilgan: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil rejasi](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Dizaynlar

Bittasini tanlang; har birining ai.md faylida vizual kontrakt, fayl xaritasi, ishga tushirish va saqlanadigan oqimlar bor.

- [Orbita](https://azizbeksafarov.github.io/design/orbita/ai.md): Qorong‘i texnik observatoriya: Chakra Petch, monospace yozuv, orbital asbob oynasi va vertikal missiya registri.
- [Nashr](https://azizbeksafarov.github.io/design/nashr/ai.md): Bosma gazeta: Newsreader masthead, PT Serif maqola, Archivo xizmat yozuvi, oq-qora suratlar va zich tahririy ustunlar.
- [Hisob](https://azizbeksafarov.github.io/design/hisob/ai.md): Ma’lumotlar ish stoli: Public Sans xizmat interfeysi, ixcham Plex raqamlari, birlashgan ko‘rsatkich bandi va aniq jadval.
- [Ziyo](https://azizbeksafarov.github.io/design/ziyo/ai.md): Rangli ta’lim ustaxonasi: yumshoq Bree Serif, bosqichli dars yo‘li, ishlaydigan ko‘rgazmali misol va olcha rangli mashq daftari.
- [Meros](https://azizbeksafarov.github.io/design/meros/ai.md): Ko‘rgazma plakati: og‘ir Alfa Slab One, dadil Archivo navigatsiyasi, yirik raqamli indeks va ultramarin/limon bloklari.
- [Samar](https://azizbeksafarov.github.io/design/samar/ai.md): Sayohat atlasi: dadil Lora sarlavhasi, yumaloq manzil kartalari, to‘liq rangli reja tugmalari va buklama xarita.
- [Forma](https://azizbeksafarov.github.io/design/forma/ai.md): Zamonaviy obyekt studiyasi: kuchli Manrope, qora savdo tugmalari, yirik narxlar va balandligi turlicha fotografik shelf.
- [Bloom · Material Design 3](https://azizbeksafarov.github.io/design/bloom/ai.md): Rasmiy Material Web komponentlari, Material Symbols va dinamik rang tizimi. Ishlaydigan loyiha maydoni.
- [Yuksal · SI](https://azizbeksafarov.github.io/design/si/ai.md): Oq asosiy fon, O‘zbekistonning moviy va yashil aksentlari; yarim oy va 12 yulduzli zarrachali bayroq. SI.gov harakat mexanikasi, serif va jonli shakl almashishi.

## Ish usuli

- Tanlangan dizaynning uslubini (shriftlar, rang rollari, kompozitsiya, amal tili) saqla; mazmun, navigatsiya va funksiyalarni biletga moslashtir.
- Talab → foydalanuvchi amali → kod joyi → qabul sinovi jadvali bilan ishla. Asosiy oqimni oxirigacha, noto‘g‘ri kiritishni, 390/768/1366 px kengliklarni, klaviaturani va reloaddan keyingi saqlashni tekshir. Xatoni takrorla, sababini tuzat, qayta sina.
- Natija, o‘zgargan fayllar va ochiq muammolarni loyihadagi HANDOFF.md ga yoz; tekshirilgan va tekshirilmaganni ajratib ayt.
- Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma.
- Maxfiy kalitlar bu ochiq hujjatlarda yo‘q va kodga yozilmaydi.

## Boshqa manbalar

- [Bilet yozish va AIga tayyor matn](https://azizbeksafarov.github.io/design/start/) · [Jonli katalog](https://azizbeksafarov.github.io/design/) · [Barcha kod + tanlov matnlari ZIP](https://azizbeksafarov.github.io/design/kit.zip) · [Machine-readable katalog](https://azizbeksafarov.github.io/design/catalog.json)
- [Tanlov tadqiqoti](https://azizbeksafarov.github.io/ustoz/ai.md) · [Nizomlar: 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md) · [Mezonlardan ish rejasiga](https://azizbeksafarov.github.io/ustoz/06-SCORE-WORKPLAN.md) · [Kontekst maqomi: tarixiy va joriy](https://azizbeksafarov.github.io/ustoz/CONTEXT-STATUS.md)
- [To‘liq o‘qish: tayyorgarlik](https://azizbeksafarov.github.io/tayyorgarlik/ai.md), [yig‘ma matn](https://azizbeksafarov.github.io/tayyorgarlik/full-context.md), [bo‘limli xarita](https://azizbeksafarov.github.io/tayyorgarlik/reading-plan.json)
- [Sahifalar va mahsulot oqimi](https://azizbeksafarov.github.io/arxitektura/#sahifalar) · [Professional sifat mezonlari](https://azizbeksafarov.github.io/arxitektura/#sifat) · [API va sanali sinovlar](https://azizbeksafarov.github.io/api/ai.md)
- [Sifat standarti](https://azizbeksafarov.github.io/design/DESIGN-STANDARD.md) · [Tekshirib yuklash yordamchisi](https://azizbeksafarov.github.io/design/get_starter.py) — manifest va ZIP hashlarini solishtiradi.
- Pages ochilmasa: https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/ai.md

## Codex va AI’siz zaxira

[CODEX.md](https://azizbeksafarov.github.io/zaxira/CODEX.md) — foydalanuvchi Codex bilan tanlangan starterda ishlaydigan so‘rovlar ketma-ketligi: sozlash, reja → qurish → sinov → ko‘rinish → hujjatlar, vaqt va limit. [ZAXIRA.md](https://azizbeksafarov.github.io/zaxira/ZAXIRA.md), [build’siz skelet](https://azizbeksafarov.github.io/zaxira/skelet/) va kodsiz panel — AI ishlamay qolganda foydalanuvchining o‘zi uchun; [JONLI-OZGARISH.md](https://azizbeksafarov.github.io/zaxira/JONLI-OZGARISH.md) — himoyada matn, rang yoki elementni AI’siz o‘zgartirish. AI loyihani skeletdan emas, tanlangan starterdan quradi.

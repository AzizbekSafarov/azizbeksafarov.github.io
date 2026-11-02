# Azizbek — tanlov tayyorgarligi: AI uchun kirish

2026-10-28. Bu Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi uchun ochiq ish maydonining kirish nuqtasi. Foydalanuvchi — Azizbek Safarov. U kod yozmaydi: bilet va qarorlarni beradi, natijani tekshiradi; kodni AI yozadi va sinaydi. U bilan o‘zbekcha, sodda tilda gaplash.

## O‘qish tartibi

1. Bilet — Chatda yoki loyihadagi CURRENT-TASK.md da. Bu ochiq to‘plamda bilet yo‘q; tanlov mahsulotini qurish so‘ralib, ikkalasida ham bilet bo‘lmasa bir marta so‘ra. Audit/tayyorgarlik vazifasida joriy foydalanuvchi topshirig‘i yetarli, bilet talab qilma. Loyiha davom etayotgan bo‘lsa, HANDOFF.md ni ham o‘qi.
2. [Tanlov qoidalari va baholash](https://azizbeksafarov.github.io/design/handoff/competition.md) — Qoidalar holati /design/handoff/current-competition.md va mezon → ish → dalil rejasi /design/handoff/score-workplan.md bilan: biletni qabul sinovlari va himoya dalillariga aylantirish uchun.
3. [Tanlangan dizayn va kod](https://azizbeksafarov.github.io/design/) — Faqat tanlangan /design/SLUG/ai.md va uning source ZIPi. ZIP ichida AGENTS.md ish qoidalari va o‘qish tartibini beradi. Boshqa dizaynlar kodini o‘qish shart emas.
4. [Ish usuli](https://azizbeksafarov.github.io/ish-tartibi/ai.md) — Diagnostika, uch sinov qatlami, topshirish va ehtimoliy muammolar katalogi (ssenariylar, aniqlangan xato emas).
5. [Mahsulot tuzilishi va server rejasi](https://azizbeksafarov.github.io/arxitektura/ai.md) — Sahifa tuzilishi va professional sifat mezonlari. Render + Supabase qismi va /api/ai.md faqat bilet server, login yoki baza talab qilsa kerak; bu reja, yaratilgan xizmat emas.
6. [To‘liq manbalar](https://azizbeksafarov.github.io/tayyorgarlik/ai.md) — Nizomlarning to‘liq matni /ustoz/nizom.md, barcha tadqiqot /ustoz/ai.md, yig‘ma /tayyorgarlik/full-context.md. Qoida savoli tug‘ilsa tegishli bo‘limni to‘liq o‘qi; foydalanuvchi so‘rasa reading-plan.json bo‘yicha hammasini.

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Manba maqomlari: **[Imzoli qaror]** — qo‘shma qaror; **[Sayt]** — Ustoz AI saytidagi farqli PDF tahriri; **[Loyiha]** — tasdiqqa taqdim etilgan 11 sahifalik mezonlar; **[Video]** — tashkilotchining tarixiy yo‘riqnomasi. Ularni bitta yangi nizom deb birlashtirmang.

1. **Baholash:** funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10 — jami 100. [Imzoli qaror, 19-band; Sayt: tartibi farqli, vaznlari mos]. Avval biletdagi majburiy funksiyalar va mazmun.
2. **Teng ball:** avval sifat va funksionallik. Keyingi ustunlik [Imzoli qaror, 20¹-band] bo‘yicha zamonaviy texnologiyalar; [Sayt, 20¹-band] bo‘yicha kreativlik va originallik. Aynan joydagi qo‘llanadigan tahrir aniqlanadi.
3. **Himoya:** 15 daqiqa — 5 taqdimot + 5 namoyish + 5 savol-javob; qo‘shimcha vaqt berilmaydi. [Imzoli qaror, 7–9-bandlar; Sayt]. Ssenariy: `ZAXIRA/HIMOYA.md`.
4. **Hududiy ko‘lam:** kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat — tavsiya. [Loyiha, 12–13-bandlar]. Bu tasdiqlangan universal vaqt emas. Saqlash usuli brauzer/server ekanini bilet belgilaydi; faqat biletdagi majburiy imkoniyatlar talab qilinadi [Loyiha, 23-band].
5. **Sozlash:** kompyuter tashkilotchidan, Antigravity/Codex va akkaunt ulash uchun 15 daqiqa [Video]. Bu vaqt amaliy ishga kirmasligi va sinov loyihasi tanlov ishida ishlatilmasligi [Loyiha, 12-band] da yozilgan; videoga tegishli bo‘lmagan tafsilotni unga yuklamang.
6. **AI va shablon:** g‘oya/shablon olish [Video], AI/no-code/ochiq materiallar va manbani ko‘rsatish [Loyiha]. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqi [Loyiha, 2-bob, 2-sahifa: “Taqiqlanadi”]. Starter biletga haqiqatan moslashtiriladi; ruxsat etilgan tayyor kod chegarasi joyda aniqlanadi.
7. **Jonli tahrir ziddiyati:** ekspert real vaqtda o‘zgartirishni so‘rashi mumkin, bajara olmagan ishtirokchining ishi baholanmaydi [Imzoli qaror, 7–9-bandlar]. [Sayt] nusxasida bu band yo‘q. [Loyiha, 17-band] topshirilgan loyihani himoyada o‘zgartirishga yo‘l qo‘ymaydi. Joydagi ko‘rsatmani aniqlang; mashq xaritasi `ZAXIRA/JONLI-OZGARISH.md` da.
8. **Topshirish va tekshiruv:** 390/768/1366 px, source va ishga tushirish yo‘riqnomasi, qisqa tavsif/manbalar, 3–5 ekran tasviri va 1–2 daqiqalik video [Loyiha, 12–15-bandlar va baholash jadvali]. 21 batafsil ko‘rsatkich tasdiqlanmagan loyiha; tayyorgarlik vositasi, yangi rasmiy bilet emas.

Saqlangan nizom matnlari bilan muvofiqlik tahriri: 2026-11-02. Tashqi qoidalar oxirgi tekshirilgan sana: 2026-10-28; bugun yangi hujjat yuklangani anglatilmaydi. Haqiqiy bilet, amaldagi reglament va joydagi ko‘rsatma ustuvor. Manbalar: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

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

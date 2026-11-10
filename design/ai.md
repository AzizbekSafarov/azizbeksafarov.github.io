# Azizbek — tanlov dizaynlari

2026-11-03. Faol dizaynlar: 9. Ustoz AI “Eng yaxshi veb-sayt” tanlovida foydalanuvchi bitta dizaynni tanlaydi, AI uni ekspert biletidagi mahsulotga aylantiradi. Tanlangan dizaynning ai.md fayli va source ZIPi yetarli boshlash nuqtasi: ularda vizual kontrakt, fayl xaritasi, ishga tushirish, saqlanadigan oqimlar va tekshiruv tartibi bor. ZIP ichida ish qoidalari `AGENTS.md` da.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Tanlov mahsulotini qurish so‘ralib, ikkala joyda ham bilet bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Tayyorgarlik, audit yoki kutubxonani saqlash so‘rovida biletni to‘siq qilma; foydalanuvchining aniq ish doirasini bajar. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

- [Orbita](https://azizbeksafarov.github.io/design/orbita/) — /design/orbita/; Qorong‘i texnik observatoriya: Chakra Petch, monospace yozuv, orbital asbob oynasi va vertikal missiya registri.
- [Nashr](https://azizbeksafarov.github.io/design/nashr/) — /design/nashr/; Bosma gazeta: Newsreader masthead, PT Serif maqola, Archivo xizmat yozuvi, oq-qora suratlar va zich tahririy ustunlar.
- [Hisob](https://azizbeksafarov.github.io/design/hisob/) — /design/hisob/; Ma’lumotlar ish stoli: Public Sans xizmat interfeysi, ixcham Plex raqamlari, birlashgan ko‘rsatkich bandi va aniq jadval.
- [Ziyo](https://azizbeksafarov.github.io/design/ziyo/) — /design/ziyo/; Rangli ta’lim ustaxonasi: yumshoq Bree Serif, bosqichli dars yo‘li, ishlaydigan ko‘rgazmali misol va olcha rangli mashq daftari.
- [Meros](https://azizbeksafarov.github.io/design/meros/) — /design/meros/; Ko‘rgazma plakati: og‘ir Alfa Slab One, dadil Archivo navigatsiyasi, yirik raqamli indeks va ultramarin/limon bloklari.
- [Samar](https://azizbeksafarov.github.io/design/samar/) — /design/samar/; Sayohat atlasi: dadil Lora sarlavhasi, yumaloq manzil kartalari, to‘liq rangli reja tugmalari va buklama xarita.
- [Forma](https://azizbeksafarov.github.io/design/forma/) — /design/forma/; Zamonaviy obyekt studiyasi: kuchli Manrope, qora savdo tugmalari, yirik narxlar va balandligi turlicha fotografik shelf.
- [Bloom · Material Design 3](https://azizbeksafarov.github.io/design/bloom/) — /design/bloom/; Rasmiy Material Web komponentlari, Material Symbols va dinamik rang tizimi. Ishlaydigan loyiha maydoni.
- [Yuksal · SI](https://azizbeksafarov.github.io/design/si/) — /design/si/; Oq asosiy fon, O‘zbekistonning moviy va yashil aksentlari; yarim oy va 12 yulduzli zarrachali bayroq. SI.gov harakat mexanikasi, serif va jonli shakl almashishi.

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Manba maqomlari: **[Imzoli qaror]** — qo‘shma qaror; **[Sayt]** — Ustoz AI saytidagi farqli PDF tahriri; **[Loyiha]** — tasdiqqa taqdim etilgan 11 sahifalik mezonlar; **[Video]** — tashkilotchining tarixiy yo‘riqnomasi. Ularni bitta yangi nizom deb birlashtirmang.

1. **Baholash:** funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10 — jami 100. [Imzoli qaror, 19-band; Sayt: tartibi farqli, vaznlari mos]. Majburiy funksiyalar va mazmun to‘liq bajariladi; ularning bajarilishi sifatning yakuniy chegarasi emas. Past ball ulushi dizayn/UX, kreativlik yoki taqdimotni e’tiborsiz qoldirishga sabab bo‘lmaydi.
2. **Teng ball:** avval sifat va funksionallik. Keyingi ustunlik [Imzoli qaror, 20¹-band] bo‘yicha zamonaviy texnologiyalar; [Sayt, 20¹-band] bo‘yicha kreativlik va originallik. Tanlov portali (2026-11-10) imzoli qaror tartibini beradi: 1-mezon, so‘ng 5-mezon (zamonaviy texnologiyalar), keyin ekspertlarning yopiq ovozi.
3. **Himoya:** 15 daqiqa — 5 taqdimot + 5 namoyish + 5 savol-javob; qo‘shimcha vaqt berilmaydi. [Imzoli qaror, 7–9-bandlar; Sayt]. Ssenariy: `ZAXIRA/HIMOYA.md`.
4. **Hududiy ko‘lam:** kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat — tavsiya. [Loyiha, 12–13-bandlar]. Bu tasdiqlangan universal vaqt emas. Saqlash usuli brauzer/server ekanini bilet belgilaydi; faqat biletdagi majburiy imkoniyatlar talab qilinadi [Loyiha, 23-band].
5. **Sozlash:** kompyuter tashkilotchidan, Antigravity/Codex va akkaunt ulash uchun 15 daqiqa [Video]. Bu vaqt amaliy ishga kirmasligi va sinov loyihasi tanlov ishida ishlatilmasligi [Loyiha, 12-band] da yozilgan; videoga tegishli bo‘lmagan tafsilotni unga yuklamang.
6. **AI va shablon:** g‘oya/shablon olish [Video], AI/no-code/ochiq materiallar va manbani ko‘rsatish [Loyiha]. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqi [Loyiha, 2-bob, 2-sahifa: “Taqiqlanadi”]. Starter biletga haqiqatan moslashtiriladi; ruxsat etilgan tayyor kod chegarasi joyda aniqlanadi.
7. **Jonli tahrir:** ekspert real vaqtda o‘zgartirishni so‘rashi mumkin, bajara olmagan ishtirokchining ishi baholanmaydi [Imzoli qaror, 7–9-bandlar]. Tanlov portali (2026-11-10) shu bandni takrorlaydi: so‘ralgan kichik o‘zgartirishni (matn, rang, element) o‘z qurilmasida bajara olmaslik ishni baholashdan chiqaradi. [Sayt] nusxasida bu band yo‘q; [Loyiha, 17-band] zid, lekin portal unga tayanmaydi. Shuning uchun matn, rang va elementlar oson topiladigan va o‘zgartiriladigan bo‘lsin; mashq xaritasi `ZAXIRA/JONLI-OZGARISH.md` da.
8. **Topshirish va tekshiruv:** 390/768/1366 px; ishlaydigan sayt (tekshiriladigan havola yoki kelishilgan mahalliy ishga tushirish), kod va ishga tushirish yo‘riqnomasi; ishtirokchi kodi, bilet, funksiyalar, testlar, cheklovlar, vositalar, asosiy so‘rovlar va tashqi manbalar yozilgan qisqa tavsif; 3–5 ekran tasviri va asosiy amalning 1–2 daqiqalik yozuvi. Papka nomi `bosqich_ishtirokchi-kodi_bilet-raqami`, masalan `hududiy_017_003` [Loyiha, 12–15-bandlar va baholash jadvali]. 21 batafsil ko‘rsatkich tasdiqlanmagan loyiha; tayyorgarlik vositasi, yangi rasmiy bilet emas.

Saqlangan nizom matnlari bilan muvofiqlik tahriri: 2026-11-02. Tashqi qoidalar oxirgi tekshirilgan sana: 2026-11-10 (tanlov portali; nizom PDF’i va amaliy tartib 2026-10-28); bugun yangi hujjat yuklangani anglatilmaydi. Haqiqiy bilet, amaldagi reglament va joydagi ko‘rsatma ustuvor. Manbalar: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Manbalar

- [Markaziy kontekst](https://azizbeksafarov.github.io/ai.md)
- [Barcha yig‘ilgan tanlov ma’lumoti](https://azizbeksafarov.github.io/ustoz/ai.md)
- [Tanlangan 9 source ZIP va tanlov matnlari](https://azizbeksafarov.github.io/design/kit.zip)
- [Machine-readable faol katalog](https://azizbeksafarov.github.io/design/catalog.json)
- [Sifat standarti](https://azizbeksafarov.github.io/design/DESIGN-STANDARD.md)
- [Kengaytirilgan testlar](https://azizbeksafarov.github.io/design/QA-EXPANDED.md)
- [Codex bilan ishlash tartibi](https://azizbeksafarov.github.io/zaxira/CODEX.md); AI ishlamasa, foydalanuvchining AI’siz yo‘li: [ZAXIRA.md](https://azizbeksafarov.github.io/zaxira/ZAXIRA.md)

## Foydalanuvchi dizaynni aytsa

Nom aytilsa, shu paketni oling va boshqasini taklif qilmang: Bloom → `bloom`, Yuksal yoki SI → `si`, Samar → `samar`, Forma → `forma`, Orbita → `orbita`, Nashr → `nashr`, Hisob → `hisob`, Ziyo → `ziyo`, Meros → `meros`. Paket: `/design/<nom>/source.zip` (kit ichida `<nom>/`). Ochgach `AGENTS.md`, keyin o‘zgartirish so‘ralganda `DESIGN-MAP.md`.

Nom aytilmasa, biletga eng mosini bitta jumlada taklif qiling va davom eting (jadval `ZAXIRA/CODEX.md` dagi bilan bir xil):

| Bilet turi | Dizayn |
|---|---|
| Kurs, dars, ta’lim | Ziyo |
| Davlat yoki rasmiy xizmat | Yuksal |
| Xizmat, hisobot, jadval, ma’lumotlar | Hisob |
| Muzey, madaniyat, ko‘rgazma | Meros |
| Sayohat, bron, joy | Samar |
| Do‘kon, savat, mahsulot | Forma |
| Yangiliklar, maqolalar | Nashr |
| Texnik, ilmiy, monitoring | Orbita |
| Boshqa mavzu (sport, tibbiyot, ovqat, navbat, ariza) | Ro‘yxat, tanlash, bron → Samar yoki Forma; jadval va hisob-kitob → Hisob |
| React kerak bo‘lsa (internet va npm ishlasa) | Bloom |

Bu tavsiya, qoida emas: foydalanuvchining tanlovi ustun. Starter tanlangach almashtirilmaydi.

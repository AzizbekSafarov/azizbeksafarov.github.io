# ZAXIRA — kuchli AI bo‘lmasa ham tanlov ishini topshirish

Bu foydalanuvchi uchun AI’siz zaxira yo‘l. AI ishlasa tanlangan starterda CODEX.md bo‘yicha davom eting; limit kamligining o‘zi skeletga o‘tish buyrug‘i emas. Skelet tanlangan starterdan alohida kod: o‘tishdan oldin mavjud ish nusxasini saqlang va bilet talablarini solishtiring.

Haqiqiy bilet, tashkilotchi aytgan vaqt va joydagi qoida hamma narsadan ustun. Bu qo‘llanma bilet bermaydi; skeletdagi “Namuna element” yozuvlari topshiriq emas.

## Kod yozishni bilmasangiz — faqat shu 3 narsa

1. **`skelet/tahrir.html`** — kodsiz tahrirlash paneli. **1. Asosiy → Mavzu** da 9 ta professional ko‘rinishdan birini tanlang (Forma, Samar, Orbita, Nashr, Hisob, Ziyo, Meros, Yuksal, Toza); kerak bo‘lsa bosh ekranga rasm qo‘ying. Tayyor modullar: saralash, jami narx (narx × soni), statistika sahifasi, savol-javob. Brauzerda oching (ikki marta bosing). Matn, rang, ro‘yxat, forma maydonlari va sahifalarni oddiy katakchalarda o‘zgartirasiz, o‘ng tomonda natija darhol ko‘rinadi. **Faylga saqlash** (yoki **Ctrl+S**) birinchi marta so‘raganda papkadagi `malumot.js` ni tanlang — fayl yozish ruxsati saqlansa keyingi saqlash shu faylga yozadi. Fayl tanlash imkoni bo‘lmasa yuklab olingan malumot.js ni loyiha papkasiga ko‘chiring. Panel fayl sintaksisini o‘zi yaratadi; saqlash natijasi va kiritilgan mazmunni tekshiring.
2. **`skelet/index.html`** — saytning o‘zi. Saqlagandan keyin **Ctrl+Shift+R** bilan yangilang.
3. **`skelet/index.html?tekshir`** — o‘z-o‘zini tekshirish paneli; natijani “Nusxalash” bilan README’ga qo‘ying.

Panel bilan odatiy matn/ro‘yxat tahriri uchun kod faylini ochish shart emas. Skeletni ongli ravishda tanlagan bo‘lsangiz, PROMPTLAR.md yordamchi qo‘llanma; asosiy AI yo‘li CODEX.md da.

## 1. Qoidalardan kelib chiqadigan 8 ta asosiy fakt

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

## 2. Qaysi yo‘lni tanlash kerak

| Holat | Yo‘l |
|---|---|
| Kuchli AI ishlayapti (masalan Codex, Plus) | Tanlangan dizayn starteri + **`CODEX.md`** dagi so‘rovlar ketma-ketligi. Skelet zaxira sifatida turadi. |
| AI bor, lekin limit kam qolgan | Starterda qoling: `CODEX.md` dagi so‘rovlarni qisqa va aniq yuboring, bir xabarda bitta ish. Limit tugasa boshlangan ishni saqlang va quyidagi tegishli holatni tanlang. |
| AI umuman yo‘q va loyiha hali boshlanmagan | Biletga mos kelsa **skelet** + `tahrir.html`. Boshlangan loyiha bo‘lsa quyidagi qatorga qarang. |
| Starter boshlangan, lekin AI to‘xtadi | Ishlaydigan nusxani saqlang va qolgan matn/rang ishlarini qo‘lda bajaring. Faqat mavjud ishni tugatish imkonsiz bo‘lsa va biletni skeletda bajarishga vaqt yetsa, ongli ravishda o‘ting. |

Bloom tayyor dist preview uchun npm talab qilmaydi; source tahririni build qilish uchun npm va dependency kerak. HTML starterlar build’siz ishlaydi, lekin ES modullar uchun lokal server bilan ochiladi. Skelet alohida, file:// bilan ham ochiladigan zaxira.

## 3. Vaqt rejasi [Loyiha 14-band tavsiyasi]

| Jami | Reja | Yaratish | Sinov | Topshirish |
|---|---|---|---|---|
| 60 daq | 5 | 40 | 10 | 5 |
| 120 daq | 10 | 80 | 20 | 10 |
| 240 daq | 25 | 155 | 40 | 20 |

Tugashiga 30, 10 va 5 daqiqa qolgani e’lon qilinadi [Loyiha]. Quyidagi taqsimot bizning tavsiya: 30 daqiqa qolganda yangi ixtiyoriy funksiya o‘rniga majburiy oqim va xatolarni tugatishga e’tibor bering. **10 daqiqa qolganda** README to‘ldiriladi, ekran tasvirlari olinadi. **5 daqiqa qolganda** papka nusxalanadi; boshqa tahrir qilinmaydi.

## 4. Skelet bilan ishlash — qadamma-qadam

**0. Sozlash (15 daqiqalik akkaunt vaqtida).** `skelet` papkasini nusxalang va bilet formatida nomlang (masalan `hududiy_017_003`): papka ustida o‘ng tugma → Nusxalash → Joylashtirish → Nomini o‘zgartirish. Ichidagi `index.html` va `tahrir.html` ni brauzerda oching. `index.html?tekshir` bilan tekshiruv paneli chiqishini ko‘ring.

**1. Biletni jadvalga aylantiring (5–10 daqiqa).** Qog‘ozga yoki README’ga: har talab (T1, T2…) → qaysi sahifa yoki maydon → qanday sinaladi. Skelet sahifalari: Bosh, Ro‘yxat (qidiruv/filtr), Tafsilot, Ariza (forma), Arizalarim (saqlangan, o‘chirish, CSV), Biz haqimizda.

**2. `tahrir.html` da to‘ldiring** (bo‘limlar tartibida):
- **1. Asosiy** — sayt nomi, shior, asosiy rang. Faqat namuna mazmuni haqiqiy bilet materiallari bilan almashtirilgan bo‘lsa “Namuna ma’lumot ogohlantirishi”ni o‘chiring;
- **2. Sahifalar** — biletga keraksiz sahifani o‘chiring, menyu nomlarini biletga moslang;
- **3. Bosh sahifa** — sarlavha va matn: kim uchun, nima qiladi, keyingi qadam;
- **4. Ro‘yxat** — biletdagi jadval. Jadval Word/Excel/PDF’da bo‘lsa: nusxalang → “Jadvaldan qo‘shish” → “Ro‘yxatni almashtirish”. Birinchi qatorda ustun nomlari bo‘lsin (Nomi, Turi/Kategoriya, Sana, Vaqt, Joy, Narx, Joylar/Soni, Tavsif). Boshqa ustunlar (Muallif, O‘qituvchi, Davomiyligi…) avtomatik “qo‘shimcha ustun” bo‘ladi va qidiruvda topiladi. Sana, manzil va nomlarni biletdagidek aynan qoldiring (2.4 izchillik). “Sig‘im / soni” — to‘lganda forma yopiladi, kerak bo‘lmasa 0. **“Ustun nomlari va tugma matnlari”** da so‘zlarni mavzuga moslang: masalan mahsulotlar uchun Turi → Kategoriya, Qolgan joy → Omborda, Tanlash → Buyurtma berish. Qidiruv maslahatini ham yozing;
- **5. Ariza formasi** — biletdagi maydonlar va “Majburiy” belgisi. Turlar: qisqa/uzun matn, telefon, email, son (chegarasi bilan), sana, ro‘yxatdan tanlash, o‘z variantlari, rozilik. Rozilik va boshqa matnlardagi “ariza” so‘zini mavzuga moslang (masalan “buyurtma”). “Saqlanganlar sahifasi matnlari” da sarlavha (“Mening buyurtmalarim”) va o‘chirish tugmasi (“Bekor qilish”);
- **6. Biz haqimizda** — kerak bo‘lsa.

Har o‘zgarishdan keyin **Ctrl+S**. Qizil “Saqlashdan oldin tuzating” chiqsa, ro‘yxatdagi xatoni tuzating.

**3. Rasmlar (agar berilgan bo‘lsa).** Sayt papkasida `rasmlar` papkasini yarating, rasmlarni ichiga qo‘ying va panelda elementning “Rasm fayli” katagiga `rasmlar/fayl-nomi.jpg` deb yozing.

**4. Bitta o‘ziga xos foydali qo‘shimcha (6.1–6.2).** Panelning o‘zida tayyor: “Qolgan joy” (joylar soni), filtr uchun “Turi”, sanasi o‘tgan kunni tanlatmaslik, takror arizani rad etish. Saralash 4. Ro‘yxat bo‘limida, jami narx 5. Ariza formasi bo‘limida panel orqali yoqiladi; buning uchun AI kerak emas. Yangi kod talab qiladigan qo‘shimcha faqat biletga foydasi va vaqt yetarliligi bilan asoslanadi.

**5. Sinov (20 daqiqa, 120 daqiqalik ishda).** Quyidagi ro‘yxatni oxirigacha bajaring va natijani README’ga yozing.

**6. Topshirish.** README’dagi kvadrat qavslarni to‘ldiring. 3–5 ekran tasviri (Win+Shift+S) va kerak bo‘lsa 1–2 daqiqalik video (Win+Alt+R, Xbox Game Bar). Papkani topshirish yo‘riqnomasi bo‘yicha bering.

## 5. Sinov ro‘yxati — 21 ko‘rsatkich bo‘yicha

| Kod | Nima qilasiz | Skeletda tayyor |
|---|---|---|
| 1.1 | Biletdagi har amalni boshidan oxirigacha bosib ko‘ring | Ro‘yxat → Tanlash → Ariza → Arizalarim |
| 1.2 | Bo‘sh forma, noto‘g‘ri telefon, takror ariza, to‘lgan joy, “hech narsa topilmadi” | Xato xulosasi, maydon xatolari, bo‘sh holatlar |
| 1.3 | `?tekshir` → Tekshirish joriy sahifani ko‘radi. Alohida “Kengliklarni 3 nusxada tekshirish” faqat yon ta’sirsiz lokal demoda; haqiqiy API/yozishda F12 → Ctrl+Shift+M | Moslashuvchan grid, mobil menyu |
| 1.4 | Panelda “Konsol xatolari yo‘q”, rasmlar yuklangan | Tashqi CDN yo‘q, build kerak emas |
| 2.1–2.3 | Hamma matn biletga mos; vaqtinchalik placeholder qolmagan. Demo ma’lumot mavjud bo‘lsa “namuna” izohi saqlanadi; keyingi qadam aniq | Panel matn mosligini hal qilmaydi; “namuna” topilsa ma’nosini tekshirish uchun ogohlantiradi |
| 2.4 | Nom, sana, narx hamma sahifada bir xil | Hammasi bitta `malumot.js` dan |
| 3.1–3.3 | Menyu tushunarli, Tab bilan hamma narsa bosiladi, fokus ko‘rinadi | Faol menyu, fokus chizig‘i, nomlangan maydonlar |
| 4.1–4.3 | 6-bo‘limdagi himoya ssenariysini 1 marta ovoz chiqarib mashq qiling | — |
| 5.1–5.2 | README: vosita nima uchun tanlangani, AI/shablonda nima o‘zgartirilgani | README shabloni |
| 5.3 | Topilgan xato → tuzatish → qayta sinov README’da | `?tekshir` natijasi, `node --test mantiq.test.mjs` |
| 5.4 | Papka tartibli, ishga tushirish yozilgan, kalit yo‘q | README shabloni |
| 6.1–6.3 | Bitta foydali o‘z qarori; nom, matn va rang bitta mavzuga xizmat qiladi | — |

Klaviatura sinovi: sichqonchasiz Tab, Shift+Tab, Enter, Esc bilan butun oqimni o‘ting.

## 6. Himoya ssenariysi (5 + 5 + 5)

Yagona ssenariy: [HIMOYA.md](HIMOYA.md). Shu tartibda o‘z loyihangizni tayyorlang: 5 daqiqa taqdimot, 5 daqiqa namoyish, 5 daqiqa savol-javob. Faqat bajargan ish va haqiqiy sinov natijasini ayting.

## 7. Favqulodda holatlar

| Muammo | Nima qilish |
|---|---|
| Sahifada “Sayt ma’lumoti o‘qilmadi” | `malumot.js` yuklanmagan yoki buzilgan bo‘lishi mumkin. Avval joriy fayl nusxasini saqlang, yo‘l/sintaksisni tekshiring. Oldin saqlangan o‘z nusxangiz bo‘lsa shundan tiklang. Muharrir qoralamasi fayl versiyasiga bog‘langan: boshqa/toza malumot.js qo‘yilganda oldingi qoralama avtomatik ochilishi kafolatlanmaydi. Mazmunni ko‘rmasdan Ctrl+S bilan ustidan yozmang. |
| O‘zgarish ko‘rinmayapti | Panelda “Saqlandi” yozuvi chiqdimi? Saytda **Ctrl+Shift+R** (keshsiz yangilash). Fayl “Yuklanmalar” papkasiga tushgan bo‘lsa, uni sayt papkasiga ko‘chirib, eskisini almashtiring. |
| Ro‘yxat bo‘sh | Sayt ichidagi qidiruv maydonini tozalang; panelning 4-bo‘limida elementlar borligini tekshiring. |
| Forma yubormayapti | Maydon xabarlarini o‘qing va kiritmani tekshiring. Xabar yo‘q yoki to‘g‘ri qiymat ham rad etilsa, bu ishlamayotgan handler yoki mantiq xatosi bo‘lishi mumkin; konsol va kodni tekshiring. Panelning 5-bo‘limida “Majburiy” va maydon turini tekshiring. |
| AI butun faylni buzdi | Ctrl+Z yoki skeletning toza nusxasidan faylni qayta oling. AI’ga faqat bitta faylni bering (`PROMPTLAR.md` P0). |
| Kompyuter, internet yoki tashkilotchi xizmati to‘xtadi | Darhol kuzatuvchiga ayting; vaqt dalolatnoma bilan qoplanishi mumkin [Loyiha 26–27-band]. Oddiy dastur xatosi va AI navbati qoplanmaydi. |
| Vaqt tugayapti | Ishlaydigan holatni saqlang. Majburiy talabni yashirmang; ishlamagan qismini ochiq qayd eting. Faqat ixtiyoriy tugallanmagan qo‘shimchani chiqarib tashlash mumkin. |

## 8. Oldingi sinovdan keyingi ixtiyoriy mashq

1. AI’siz yo‘lni ilgari tekshirmagan bo‘lsangiz, panelda biletga mos matn/ro‘yxat o‘zgarishini bajaring. Oldingi to‘liq sinov bo‘lsa faqat ochiq qolgan xavfni qayta ko‘ring.
2. `JONLI-OZGARISH.md` bo‘yicha zarur o‘zgarishni tekshiring: sarlavha matni, asosiy rang, yangi ro‘yxat elementi, yangi kartochka.
3. Himoya ssenariysini taymer bilan ovoz chiqarib aytib chiqing.

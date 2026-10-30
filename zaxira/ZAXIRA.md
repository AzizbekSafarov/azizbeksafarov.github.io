# ZAXIRA — kuchli AI bo‘lmasa ham tanlov ishini topshirish

Bu qo‘llanma qisqa kontekstli yoki limitli AI bilan, hatto AI umuman ishlamasa ham, ishlaydigan va himoya qilinadigan sayt topshirish uchun. Katta kontekst fayllarini o‘qish shart emas: shu fayl, `PROMPTLAR.md`, `JONLI-OZGARISH.md` va `skelet/` papkasi yetadi.

Haqiqiy bilet, tashkilotchi aytgan vaqt va joydagi qoida hamma narsadan ustun. Bu qo‘llanma bilet bermaydi; skeletdagi “Namuna element” yozuvlari topshiriq emas.

## Kod yozishni bilmasangiz — faqat shu 3 narsa

1. **`skelet/tahrir.html`** — kodsiz tahrirlash paneli. Brauzerda oching (ikki marta bosing). Matn, rang, ro‘yxat, forma maydonlari va sahifalarni oddiy katakchalarda o‘zgartirasiz, o‘ng tomonda natija darhol ko‘rinadi. **Faylga saqlash** (yoki **Ctrl+S**) birinchi marta so‘raganda papkadagi `malumot.js` ni tanlang — keyingi saqlashlar so‘ramasdan yoziladi. Panel faylni har doim to‘g‘ri yozadi: vergul yoki qo‘shtirnoq xatosi bo‘lmaydi.
2. **`skelet/index.html`** — saytning o‘zi. Saqlagandan keyin **Ctrl+Shift+R** bilan yangilang.
3. **`skelet/index.html?tekshir`** — o‘z-o‘zini tekshirish paneli; natijani “Nusxalash” bilan README’ga qo‘ying.

Kod faylini ochish shart emas. AI bo‘lsa, unga faqat `PROMPTLAR.md` dagi so‘rovlarni bering va javobini panel orqali tekshiring.

## 1. Qoidalardan kelib chiqadigan 8 ta asosiy fakt

Manba maqomi: **[Nizom]** — imzolangan qo‘shma qaror (2026-yil iyul), **[Sayt]** — Ustoz AI saytidagi nizom PDF’i (boshqa tahrir; 28- va 30-oktabrda o‘zgarmagani tekshirilgan), **[Loyiha]** — 11 betlik “tasdiqqa taqdim etiladigan” baholash hujjati (tasdig‘i topilmagan), **[Video]** — Ustoz AI’ning 5-oktabrdagi rasmiy videosi. Manbalar bir-biridan farq qilsa, joydagi tashkilotchi ko‘rsatmasi hal qiladi.

1. **Jonli o‘zgarish — eng katta xavf, manbalar esa har xil.** [Nizom 7–9-band]: ekspert himoyada matn, rang, element yoki kontentni real vaqtda o‘zgartirishni so‘rashi mumkin; o‘z qurilmasida bajara olmagan ishtirokchining ishi baholanmaydi va u chetlashtiriladi. [Sayt] nusxasida bu band yo‘q. [Loyiha]: topshirilgan loyihani himoyada o‘zgartirish mumkin emas. Eng qattiq holatga tayyorlaning: o‘zgarishni AI’siz, qo‘lda, 1 daqiqada qila oling → `JONLI-OZGARISH.md`. Topshirilgan nusxa alohida saqlanib qolsin (o‘zgarishni nusxada qiling, agar joyda shunday so‘ralsa).
2. **Ball: 30 / 20 / 10 / 10 / 20 / 10 = 100. [Nizom 19-band; Sayt]** Sifat va funksionallik 30, dolzarblik va mazmun 20, dizayn/UX 10, taqdimot 10, zamonaviy texnologiyalar 20, kreativlik 10 (ikki tahrirda mezonlar tartibi farqli, vaznlar bir xil). Funksiya, mazmun va texnologiya birga 70 ball.
3. **Teng ballda avval sifat va funksionallik hal qiladi. [Nizom va Sayt 20¹-band]** Ikkinchi mezon farq qiladi: [Nizom] — zamonaviy texnologiyalar, [Sayt] — kreativlik va originallik. Demak ishlaydigan asosiy oqim va sinov dalili eng qimmat, keyin vosita va o‘ziga xos yechim.
4. **Himoya 15 daqiqa: 5 taqdimot + 5 namoyish + 5 savol. Qo‘shimcha vaqt berilmaydi. [Nizom]**
5. **Shablon va g‘oya olish mumkin. [Video; Loyiha]** Ammo avval tayyorlangan to‘liq loyihani topshirish taqiqlanadi [Loyiha]. Skeletni biletga moslashtiring va README’da manba hamda o‘zgartirilgan qismlarni yozing (5.2 va 6.1 ko‘rsatkichlari).
6. **Kompyuter tashkilotchiniki; Antigravity va Codex o‘rnatilgan; akkaunt ulash uchun 15 daqiqa. [Video]** 2026-10-09 tekshiruvida Antigravity Google FAQ’i xizmat 18 yoshdan kichiklarga ochiq emasligini aytgan; Codex limiti tarifga bog‘liq. AI kuchsiz yoki limitli bo‘lishiga tayyor turing.
7. **Hududiy bosqich ko‘lami (tavsiya): kamida 3 sahifa, 2 ta bog‘liq amal, noto‘g‘ri kiritishni tekshirish va natija, taxminan 2 soat. Respublika: 4 sahifa, 3 bog‘liq amal, saqlash, bo‘sh va xato holatlari, taxminan 4 soat. [Loyiha]** Skelet ikkalasini ham qoplaydi.
8. **Sinov kengliklari 390, 768 va 1366 px. Topshirishga: ishlaydigan sayt, tahrirlanadigan kod, qisqa tavsif va manbalar, 3–5 ekran tasviri va 1–2 daqiqalik video. Ochiq parol yoki kalit bo‘lmasin. [Loyiha]**

## 2. Qaysi yo‘lni tanlash kerak

| Holat | Yo‘l |
|---|---|
| Kuchli AI ishlayapti, internet yaxshi | Tanlangan dizayn starteri + oddiy ish tartibi. Bu papka zaxira sifatida turadi. |
| AI bor, lekin kontekst/limit kichik | **Skelet** + `PROMPTLAR.md` dagi qisqa so‘rovlar. AI faqat `malumot.js` ni to‘ldiradi. |
| AI umuman yo‘q yoki limit tugadi | **Skelet** + `tahrir.html` paneli. Kod yozish shart emas. |
| Starter boshlangan, lekin AI to‘xtadi | Qolgan vaqt 60 daqiqadan kam bo‘lsa, starterni tugatishga urinmang: ishlaydigan qismini saqlang va skeletga o‘ting. |

Bloom (React) starteri `npm` va internetni talab qiladi. Kuchsiz AI yoki sekin internetda HTML starterlar yoki skelet xavfsizroq.

## 3. Vaqt rejasi [Loyiha 14-band tavsiyasi]

| Jami | Reja | Yaratish | Sinov | Topshirish |
|---|---|---|---|---|
| 60 daq | 5 | 40 | 10 | 5 |
| 120 daq | 10 | 80 | 20 | 10 |
| 240 daq | 25 | 155 | 40 | 20 |

Tugashiga 30, 10 va 5 daqiqa qolgani e’lon qilinadi [Loyiha]. **30 daqiqa qolganda** yangi funksiya boshlanmaydi, faqat sinov va tuzatish. **10 daqiqa qolganda** README to‘ldiriladi, ekran tasvirlari olinadi. **5 daqiqa qolganda** papka nusxalanadi; boshqa tahrir qilinmaydi.

## 4. Skelet bilan ishlash — qadamma-qadam

**0. Sozlash (15 daqiqalik akkaunt vaqtida).** `skelet` papkasini nusxalang va bilet formatida nomlang (masalan `hududiy_017_003`): papka ustida o‘ng tugma → Nusxalash → Joylashtirish → Nomini o‘zgartirish. Ichidagi `index.html` va `tahrir.html` ni brauzerda oching. `index.html?tekshir` bilan tekshiruv paneli chiqishini ko‘ring.

**1. Biletni jadvalga aylantiring (5–10 daqiqa).** Qog‘ozga yoki README’ga: har talab (T1, T2…) → qaysi sahifa yoki maydon → qanday sinaladi. Skelet sahifalari: Bosh, Ro‘yxat (qidiruv/filtr), Tafsilot, Ariza (forma), Arizalarim (saqlangan, o‘chirish, CSV), Biz haqimizda.

**2. `tahrir.html` da to‘ldiring** (bo‘limlar tartibida):
- **1. Asosiy** — sayt nomi, shior, asosiy rang. Tayyor bo‘lgach “Namuna ma’lumot ogohlantirishi” belgisini olib tashlang;
- **2. Sahifalar** — biletga keraksiz sahifani o‘chiring, menyu nomlarini biletga moslang;
- **3. Bosh sahifa** — sarlavha va matn: kim uchun, nima qiladi, keyingi qadam;
- **4. Ro‘yxat** — biletdagi jadval. Jadval Word/Excel/PDF’da bo‘lsa: nusxalang → “Jadvaldan qo‘shish” → “Ro‘yxatni almashtirish”. Birinchi qatorda ustun nomlari bo‘lsin (Nomi, Turi/Kategoriya, Sana, Vaqt, Joy, Narx, Joylar/Soni, Tavsif). Boshqa ustunlar (Muallif, O‘qituvchi, Davomiyligi…) avtomatik “qo‘shimcha ustun” bo‘ladi va qidiruvda topiladi. Sana, manzil va nomlarni biletdagidek aynan qoldiring (2.4 izchillik). “Sig‘im / soni” — to‘lganda forma yopiladi, kerak bo‘lmasa 0. **“Ustun nomlari va tugma matnlari”** da so‘zlarni mavzuga moslang: masalan mahsulotlar uchun Turi → Kategoriya, Qolgan joy → Omborda, Tanlash → Buyurtma berish. Qidiruv maslahatini ham yozing;
- **5. Ariza formasi** — biletdagi maydonlar va “Majburiy” belgisi. Turlar: qisqa/uzun matn, telefon, email, son (chegarasi bilan), sana, ro‘yxatdan tanlash, o‘z variantlari, rozilik. Rozilik va boshqa matnlardagi “ariza” so‘zini mavzuga moslang (masalan “buyurtma”). “Saqlanganlar sahifasi matnlari” da sarlavha (“Mening buyurtmalarim”) va o‘chirish tugmasi (“Bekor qilish”);
- **6. Biz haqimizda** — kerak bo‘lsa.

Har o‘zgarishdan keyin **Ctrl+S**. Qizil “Saqlashdan oldin tuzating” chiqsa, ro‘yxatdagi xatoni tuzating.

**3. Rasmlar (agar berilgan bo‘lsa).** Sayt papkasida `rasmlar` papkasini yarating, rasmlarni ichiga qo‘ying va panelda elementning “Rasm fayli” katagiga `rasmlar/fayl-nomi.jpg` deb yozing.

**4. Bitta o‘ziga xos foydali qo‘shimcha (6.1–6.2).** Panelning o‘zida tayyor: “Qolgan joy” (joylar soni), filtr uchun “Turi”, sanasi o‘tgan kunni tanlatmaslik, takror arizani rad etish. Kod bilan qo‘shimcha (saralash, jami narx) faqat AI bo‘lsa va majburiy talablar ishlagandan keyin: `PROMPTLAR.md` → P6.

**5. Sinov (20 daqiqa, 120 daqiqalik ishda).** Quyidagi ro‘yxatni oxirigacha bajaring va natijani README’ga yozing.

**6. Topshirish.** README’dagi kvadrat qavslarni to‘ldiring. 3–5 ekran tasviri (Win+Shift+S) va kerak bo‘lsa 1–2 daqiqalik video (Win+Alt+R, Xbox Game Bar). Papkani topshirish yo‘riqnomasi bo‘yicha bering.

## 5. Sinov ro‘yxati — 21 ko‘rsatkich bo‘yicha

| Kod | Nima qilasiz | Skeletda tayyor |
|---|---|---|
| 1.1 | Biletdagi har amalni boshidan oxirigacha bosib ko‘ring | Ro‘yxat → Tanlash → Ariza → Arizalarim |
| 1.2 | Bo‘sh forma, noto‘g‘ri telefon, takror ariza, to‘lgan joy, “hech narsa topilmadi” | Xato xulosasi, maydon xatolari, bo‘sh holatlar |
| 1.3 | `?tekshir` → Tekshirish (390/768/1366 avtomatik, server bilan) yoki F12 → Ctrl+Shift+M | Moslashuvchan grid, mobil menyu |
| 1.4 | Panelda “Konsol xatolari yo‘q”, rasmlar yuklangan | Tashqi CDN yo‘q, build kerak emas |
| 2.1–2.3 | Hamma matn biletga mos, “namuna” so‘zi qolmagan, keyingi qadam aniq | Panel “namuna” matnini topadi |
| 2.4 | Nom, sana, narx hamma sahifada bir xil | Hammasi bitta `malumot.js` dan |
| 3.1–3.3 | Menyu tushunarli, Tab bilan hamma narsa bosiladi, fokus ko‘rinadi | Faol menyu, fokus chizig‘i, nomlangan maydonlar |
| 4.1–4.3 | 6-bo‘limdagi himoya ssenariysini 1 marta ovoz chiqarib mashq qiling | — |
| 5.1–5.2 | README: vosita nima uchun tanlangani, AI/shablonda nima o‘zgartirilgani | README shabloni |
| 5.3 | Topilgan xato → tuzatish → qayta sinov README’da | `?tekshir` natijasi, `node --test mantiq.test.mjs` |
| 5.4 | Papka tartibli, ishga tushirish yozilgan, kalit yo‘q | README shabloni |
| 6.1–6.3 | Bitta foydali o‘z qarori; nom, matn va rang bitta mavzuga xizmat qiladi | — |

Klaviatura sinovi: sichqonchasiz Tab, Shift+Tab, Enter, Esc bilan butun oqimni o‘ting.

## 6. Himoya ssenariysi (5 + 5 + 5)

**Taqdimot, 5 daqiqa:**
1. “Bu sayt [kim] uchun. Muammo: [nima]. Yechim: [asosiy amal].” (30 soniya)
2. Sahifalar xaritasi: Bosh → Ro‘yxat → Ariza → Arizalarim. (1 daqiqa)
3. Vosita: “[AI/skelet/qo‘lda] tanladim, chunki [sabab]. AI natijasida men [o‘zgartirgan narsalar].” (1 daqiqa)
4. Sinov: “Bo‘sh forma, noto‘g‘ri telefon, uch xil ekran kengligini tekshirdim; [topilgan xato]ni tuzatdim.” (1 daqiqa)

**Namoyish, 5 daqiqa:** bitta muvaffaqiyatli yo‘l (tanlash → ariza → tasdiq → Arizalarim), bitta noto‘g‘ri kiritish (bo‘sh forma), telefonda ko‘rinish (F12 → Ctrl+Shift+M).

**Savollar, 5 daqiqa** — loyiha hujjatidagi standart savollar [Loyiha 34-band]:

| Savol | Javob shabloni |
|---|---|
| Foydalanuvchi qaysi ishni bajaradi? | “[foydalanuvchi] [amal] qiladi va [natija] oladi.” |
| Nega shu vosita? | “Vaqt va bilet talabiga eng sodda mos: build kerak emas, istalgan brauzerda ochiladi. Mazmunni kodsiz panel (kichik CMS) orqali boshqaraman — shuning uchun o‘zgartirish tez va xatosiz.” |
| AI yoki tayyor natijada nima o‘zgartirildi? | “Mazmun, forma maydonlari, tekshiruv qoidalari, rang va [qo‘shimcha funksiya].” |
| Qaysi xato qanday tekshirildi? | “Bo‘sh/noto‘g‘ri kiritish, takror ariza, 3 kenglik; [xato] topildi va tuzatildi.” |
| Qanday cheklov bor? | “Ma’lumot faqat shu brauzerda saqlanadi; server yo‘q. Keyingi qadam: [server/bazaga ulash].” |

Ishlamaydigan funksiyani “ishlaydi” demang [Loyiha 24-band]. Cheklovni ochiq aytish ball kamaytirmaydi.

## 7. Favqulodda holatlar

| Muammo | Nima qilish |
|---|---|
| Sahifada “Sayt ma’lumoti o‘qilmadi” | `malumot.js` qo‘lda yoki AI tomonidan buzilgan. Toza zaxira nusxadagi `malumot.js` ni papkaga qo‘ying. `tahrir.html` ishingizni brauzerda eslab qolgan: uni ochib Ctrl+S bosing — to‘g‘ri fayl qayta yoziladi. |
| O‘zgarish ko‘rinmayapti | Panelda “Saqlandi” yozuvi chiqdimi? Saytda **Ctrl+Shift+R** (keshsiz yangilash). Fayl “Yuklanmalar” papkasiga tushgan bo‘lsa, uni sayt papkasiga ko‘chirib, eskisini almashtiring. |
| Ro‘yxat bo‘sh | Sayt ichidagi qidiruv maydonini tozalang; panelning 4-bo‘limida elementlar borligini tekshiring. |
| Forma yubormayapti | Qizil xatolarni o‘qing — bu tekshiruv ishlayapti degani. Panelning 5-bo‘limida “Majburiy” va maydon turini tekshiring. |
| AI butun faylni buzdi | Ctrl+Z yoki skeletning toza nusxasidan faylni qayta oling. AI’ga faqat bitta faylni bering (`PROMPTLAR.md` P0). |
| Kompyuter, internet yoki tashkilotchi xizmati to‘xtadi | Darhol kuzatuvchiga ayting; vaqt dalolatnoma bilan qoplanishi mumkin [Loyiha 26–27-band]. Oddiy dastur xatosi va AI navbati qoplanmaydi. |
| Vaqt tugayapti | Ishlaydigan holatni saqlang. Yarim ishlagan funksiyani menyudan olib tashlang. |

## 8. Oldindan mashq (tanlovdan oldin, 2 marta)

1. Skeletni 60 daqiqada istalgan oddiy mavzuga `tahrir.html` orqali moslang (AI’siz).
2. `JONLI-OZGARISH.md` dagi 4 ta o‘zgarishni 2 daqiqada bajaring: sarlavha matni, asosiy rang, yangi ro‘yxat elementi, yangi kartochka.
3. Himoya ssenariysini taymer bilan ovoz chiqarib aytib chiqing.

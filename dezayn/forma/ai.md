# Forma — yangi AI bilan davom ettirish

Bu — Forma dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-10-31; source fingerprint `ad4bccfcf7c87ad2`.
Entry: https://azizbeksafarov.github.io/design/forma/

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Ekspert amaliy vazifani (biletni) hammaga bir vaqtda beradi; ishdan keyin 15 daqiqalik himoya bo‘ladi: taqdimot, namoyish va savollar. Mezonlar loyihasi va tashkilotchi videosiga ko‘ra, ishdan oldin hisob va dasturni sozlash uchun 15 daqiqa beriladi va u amaliy vaqtga kirmaydi.

- Baholash 6 mezon, jami 100 ball. Imzoli qarordagi vaznlar: funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Shuning uchun avval biletdagi majburiy funksiyalar oxirigacha ishlashi kerak, keyin bezak.
- Mezonlar loyihasida viloyat (hududiy) bosqichi uchun: kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat. Faqat biletdagi majburiy imkoniyatlar talab qilinadi; qo‘shimcha funksiya asosiy kamchilikni qoplamaydi. Saqlash usuli (brauzer yoki server) biletda yoziladi.
- AI, no-code, shablon va ochiq materiallar ruxsat etilgan; moslashtirish va natija baholanadi. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqlangan, shuning uchun starter biletdagi mahsulotga aylantiriladi.
- Himoyada jonli o‘zgartirish masalasida manbalar farq qiladi: imzoli qarorda so‘ralishi mumkin, mezonlar loyihasida esa topshirilgan loyihani o‘zgartirib bo‘lmaydi. Joyda aniqlanadi; tayyor qo‘llanma `ZAXIRA/JONLI-OZGARISH.md` da.
- 21 batafsil ko‘rsatkich hali tasdiqlanmagan loyihadan olingan. Imzoli qaror va joydagi ko‘rsatma ustun turadi. Amaliy vaqtni tashkilotchi belgilaydi: foydalanuvchi aytgan qolgan vaqt bilan ishla.

Qoidalar oxirgi marta 2026-10-28 da tekshirilgan: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil rejasi](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Tanlangan dizayn va haqiqiy kod

Zamonaviy obyekt studiyasi. Manrope 500 asosiy matn, 650 xizmat, 750–800 sarlavha/narx. Oqartirilgan maydon, grafit, material fotosuratlari. Qattiq to‘rtburchak qora savdo tugmalari; aniq rangli savat holati. Ingichka serif, mikro matn, ghost savdo tugmalari va yumaloq sayohat kartalari yo‘q. Asimmetrik fotografik shelf saqlansin; mobil uch buyum ham o‘qiladigan kenglikda. Narx/materiallar namuna, savat lokal. model.js ma’lumot va hisobni, app.js saqlash, dialog, fokus va eksportni boshqaradi. Narxlar va vaqtlar namunaviy. Bron/to‘lov amalga oshirilmaydi. Katta marketing hero yoki bir xil kartalar gridiga qaytarma.

Bu eski arxiv maketi emas: qayta ishlangan mustaqil starter. Bloom/Yuksalni ko‘chirish bilan almashtirma. Har bir rang, shrift roli va tugma holatini saqla; mazmun/model/funksiyalarni biletga moslashtir.

- [Tahrirlanadigan to‘liq source ZIP](https://azizbeksafarov.github.io/design/forma/source.zip)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/source.md)
- [Hash va fayl manifesti](https://azizbeksafarov.github.io/design/forma/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/forma-site/)
- [GitHub AI matni — Pages o‘qilmasa](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/ai.md)

Ish kodi `site/` ichida. Source fayllar:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/model.test.mjs.txt)
- [combinations.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/combinations.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/package.json.txt)

index.html — mazmun va boshlang‘ich kartalar. style.css — asosiy token va komponentlar. layout.css — yakuniy mustaqil sahifa kompozitsiyasi, responsive va holatlar. model.js — ma’lumot/validatsiya/hisob. app.js — dialog, amallar, storage va download. images/, fonts/ — lokal resurslar. CREDITS.md — surat litsenziyasi/provenance; almashtirganda yangila. Karta IDlari index.html va model.js da mos bo‘lsin. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

## Local run va tekshiruv

Npm paket o‘rnatish shart emas. ZIP ildizida `node serve.mjs`; http://127.0.0.1:8080/ . Node bo‘lmasa: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Model test: `node --test site/*.test.mjs`.

- Kategoriya → mos buyumlar; detail dialog → savatga qo‘shish → fokus qaytishi.
- Savat → miqdor +/- → aniq jami → olish → bo‘sh holat. 20 ta chegara; buzilgan storage.
- Reload / ikkinchi tab → bir xil savat; tanlovni TXT yuklash; demo maqomi.

390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px kenglikda brauzerda ko‘r. Document overflow, font/image yuklanishi, Tab/Enter/Space/Escape, fokus qaytishi va dialogning qisqa oynada scrollini tekshir. Images locally bundled; hero has reserved dimensions. CSS reduced-motionni saqlaydi; interactiondan kelgan zoom/dialog/reorder animatsiyasini bezak uchun ko‘paytirma.

Storage faqat known ID va tekshirilgan qiymatlarni oladi. O‘zgarish oldidan so‘nggi state o‘qiladi, boshqa tab storage event bilan yangilanadi; boshqa ma’lumotni tozalama. Saqlash cheklansa joriy tabdagi ish davom etishi va download ishlashi kerak. Model o‘zgarsa keyni versiyala yoki migratsiya qil.

## Ish tartibi

Talab → foydalanuvchi amali → kod joyi → qabul tekshiruvi jadvalini tuz. Asosiy oqimni oxirigacha ishlat. Xatoni takrorla, sababini top, kichik tuzatish qil va qayta sina. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. DESIGN-STANDARD.md ni o‘qi.

HANDOFF.md ga bilet, o‘zgargan fayllar, haqiqiy buyruq/test natijasi, ochiq muammo va keyingi amalni yoz. Yangi chatga CURRENT-TASK.md va HANDOFF.md ni ber. Link o‘z-o‘zidan xotira, internet yoki fayl tahrirlash vositasini bermaydi; o‘qiy olmasa matn/ZIPni chatga bering.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/manrope.ttf` | 160 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/fonts/manrope.ttf) |
| `images/chair.jpg` | 81 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/chair.jpg) |
| `images/lamp.jpg` | 144 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/lamp.jpg) |
| `images/vase.jpg` | 147 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/vase.jpg) |

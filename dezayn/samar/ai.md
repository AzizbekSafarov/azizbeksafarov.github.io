# Samar — yangi AI bilan davom ettirish

Bu — Samar dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-10-31; source fingerprint `5aab28e6d8e1db89`.
Entry: https://azizbeksafarov.github.io/design/samar/

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Ekspert amaliy vazifani (biletni) hammaga bir vaqtda beradi; ishdan keyin 15 daqiqalik himoya bo‘ladi: taqdimot, namoyish va savollar. Mezonlar loyihasi va tashkilotchi videosiga ko‘ra, ishdan oldin hisob va dasturni sozlash uchun 15 daqiqa beriladi va u amaliy vaqtga kirmaydi.

- Baholash 6 mezon, jami 100 ball. Imzoli qarordagi vaznlar: funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Shuning uchun avval biletdagi majburiy funksiyalar oxirigacha ishlashi kerak, keyin bezak.
- Mezonlar loyihasida viloyat (hududiy) bosqichi uchun: kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat. Faqat biletdagi majburiy imkoniyatlar talab qilinadi; qo‘shimcha funksiya asosiy kamchilikni qoplamaydi. Saqlash usuli (brauzer yoki server) biletda yoziladi.
- AI, no-code, shablon va ochiq materiallar ruxsat etilgan; moslashtirish va natija baholanadi. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqlangan, shuning uchun starter biletdagi mahsulotga aylantiriladi.
- Himoyada jonli o‘zgartirish masalasida manbalar farq qiladi: imzoli qarorda so‘ralishi mumkin, mezonlar loyihasida esa topshirilgan loyihani o‘zgartirib bo‘lmaydi. Joyda aniqlanadi; tayyor qo‘llanma `ZAXIRA/JONLI-OZGARISH.md` da.
- 21 batafsil ko‘rsatkich hali tasdiqlanmagan loyihadan olingan. Imzoli qaror va joydagi ko‘rsatma ustun turadi. Amaliy vaqtni tashkilotchi belgilaydi: foydalanuvchi aytgan qolgan vaqt bilan ishla.

Qoidalar oxirgi marta 2026-10-28 da tekshirilgan: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil rejasi](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Tanlangan dizayn va haqiqiy kod

Sayohat atlasi. Lora 700 faqat katta sarlavha/atlas ovozi; Source Sans 3 500–700 manzil nomi, xizmat va boshqaruv. Moviy, qum, osmon. Yumaloq oq manzil kartalari, to‘liq moviy pill shaklidagi reja tugmalari, yumshoq soyalar. Mayda rangsiz outline/ghost tugma yoki moda showroomi emas. Buklama xarita markazda, chapda manzillar, o‘ngda reja; mobil xarita → manzillar → reja. Chizma shartli; haqiqiy navigatsiya/bron emas. model.js ma’lumot va hisobni, app.js saqlash, dialog, fokus va eksportni boshqaradi. Narxlar va vaqtlar namunaviy. Bron/to‘lov amalga oshirilmaydi. Katta marketing hero yoki bir xil kartalar gridiga qaytarma.

Bu eski arxiv maketi emas: qayta ishlangan mustaqil starter. Bloom/Yuksalni ko‘chirish bilan almashtirma. Har bir rang, shrift roli va tugma holatini saqla; mazmun/model/funksiyalarni biletga moslashtir.

- [Tahrirlanadigan to‘liq source ZIP](https://azizbeksafarov.github.io/design/samar/source.zip)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/source.md)
- [Hash va fayl manifesti](https://azizbeksafarov.github.io/design/samar/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/samar-site/)
- [GitHub AI matni — Pages o‘qilmasa](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/ai.md)

Ish kodi `site/` ichida. Source fayllar:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/model.test.mjs.txt)
- [combinations.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/combinations.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/package.json.txt)

index.html — mazmun va boshlang‘ich kartalar. style.css — asosiy token va komponentlar. layout.css — yakuniy mustaqil sahifa kompozitsiyasi, responsive va holatlar. model.js — ma’lumot/validatsiya/hisob. app.js — dialog, amallar, storage va download. images/, fonts/ — lokal resurslar. CREDITS.md — surat litsenziyasi/provenance; almashtirganda yangila. Karta IDlari index.html va model.js da mos bo‘lsin. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

## Local run va tekshiruv

Npm paket o‘rnatish shart emas. ZIP ildizida `node serve.mjs`; http://127.0.0.1:8080/ . Node bo‘lmasa: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Model test: `node --test site/*.test.mjs`.

- Manzil tafsiloti → rasmiy manba / xarita → Escape va fokus.
- Manzil qo‘shish/olish → boshlash vaqtini o‘zgartirish → tartiblash → to‘g‘ri vaqt → reload / boshqa tab.
- Bo‘sh reja → o‘chiq download; tanlangan reja → manbali TXT; tun yarmidan o‘tish.

390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px kenglikda brauzerda ko‘r. Document overflow, font/image yuklanishi, Tab/Enter/Space/Escape, fokus qaytishi va dialogning qisqa oynada scrollini tekshir. Images locally bundled; hero has reserved dimensions. CSS reduced-motionni saqlaydi; interactiondan kelgan zoom/dialog/reorder animatsiyasini bezak uchun ko‘paytirma.

Storage faqat known ID va tekshirilgan qiymatlarni oladi. O‘zgarish oldidan so‘nggi state o‘qiladi, boshqa tab storage event bilan yangilanadi; boshqa ma’lumotni tozalama. Saqlash cheklansa joriy tabdagi ish davom etishi va download ishlashi kerak. Model o‘zgarsa keyni versiyala yoki migratsiya qil.

## Ish tartibi

Talab → foydalanuvchi amali → kod joyi → qabul tekshiruvi jadvalini tuz. Asosiy oqimni oxirigacha ishlat. Xatoni takrorla, sababini top, kichik tuzatish qil va qayta sina. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. DESIGN-STANDARD.md ni o‘qi.

HANDOFF.md ga bilet, o‘zgargan fayllar, haqiqiy buyruq/test natijasi, ochiq muammo va keyingi amalni yoz. Yangi chatga CURRENT-TASK.md va HANDOFF.md ni ber. Link o‘z-o‘zidan xotira, internet yoki fayl tahrirlash vositasini bermaydi; o‘qiy olmasa matn/ZIPni chatga bering.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `render`.

Desktop navigatsiyasi va `.mobile-nav` ichiga `href="#yangi"`, main ichiga `section id="yangi"` qo‘sh. render reja qismini chizadi; yangi ekran uchun alohida render funksiyasi yoz, reja IDlarini buzma.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Manzil qo‘shish → boshlanish vaqti/tartib → jadval → eksport. | `site/app.js` → `update`, `site/app.js` → `render`, `site/model.js` → `schedule` |
| Noto‘g‘ri kiritish | normalize noto‘g‘ri vaqtni 09:00 ga qaytaradi va noma’lum IDlarni olib tashlaydi; bu foydalanuvchiga forma xatosi chiqarish emas. | `site/model.js` → `normalize` |
| Saqlash | app.js read/save, samar-plan-v2; reload va boshqa tab hodisasi mavjud. Bron amalga oshirilmaydi. | `site/app.js` → `read`, `site/app.js` → `save` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletdagi ikki bog‘liq amal, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/lora.ttf` | 207 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/fonts/lora.ttf) |
| `fonts/sourcesans3.ttf` | 631 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/fonts/sourcesans3.ttf) |
| `images/guri-amir.jpg` | 474 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/guri-amir.jpg) |
| `images/registan.jpg` | 382 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/registan.jpg) |
| `images/shohi-zinda.jpg` | 385 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/shohi-zinda.jpg) |

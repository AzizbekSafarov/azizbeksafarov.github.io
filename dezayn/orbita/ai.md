# Orbita — tanlov uchun yangi AI konteksti

Bu — Orbita dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot 2026-10-31; fingerprint 236e17bab5847f6f.

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Ekspert amaliy vazifani (biletni) hammaga bir vaqtda beradi; ishdan keyin 15 daqiqalik himoya bo‘ladi: taqdimot, namoyish va savollar. Mezonlar loyihasi va tashkilotchi videosiga ko‘ra, ishdan oldin hisob va dasturni sozlash uchun 15 daqiqa beriladi va u amaliy vaqtga kirmaydi.

- Baholash 6 mezon, jami 100 ball. Imzoli qarordagi vaznlar: funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Shuning uchun avval biletdagi majburiy funksiyalar oxirigacha ishlashi kerak, keyin bezak.
- Mezonlar loyihasida viloyat (hududiy) bosqichi uchun: kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat. Faqat biletdagi majburiy imkoniyatlar talab qilinadi; qo‘shimcha funksiya asosiy kamchilikni qoplamaydi. Saqlash usuli (brauzer yoki server) biletda yoziladi.
- AI, no-code, shablon va ochiq materiallar ruxsat etilgan; moslashtirish va natija baholanadi. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqlangan, shuning uchun starter biletdagi mahsulotga aylantiriladi.
- Himoyada jonli o‘zgartirish masalasida manbalar farq qiladi: imzoli qarorda so‘ralishi mumkin, mezonlar loyihasida esa topshirilgan loyihani o‘zgartirib bo‘lmaydi. Joyda aniqlanadi; tayyor qo‘llanma `ZAXIRA/JONLI-OZGARISH.md` da.
- 21 batafsil ko‘rsatkich hali tasdiqlanmagan loyihadan olingan. Imzoli qaror va joydagi ko‘rsatma ustun turadi. Amaliy vaqtni tashkilotchi belgilaydi: foydalanuvchi aytgan qolgan vaqt bilan ishla.

Qoidalar oxirgi marta 2026-10-28 da tekshirilgan: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil rejasi](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Vizual kontrakt
Kosmik observatoriya: Chakra Petch texnik display, IBM Plex Mono barcha xizmat/o‘qish matni. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.

Bu mustaqil original implementatsiya; NASA, Muuto yoki professional studiya tomonidan yaratilgan/tasdiqlangan deb aytma. Boshqa starterga o‘xshatib tekislashtirma. Faqat rangni almashtirish dizayn emas. Mazmun markazi, masshtab, grid va o‘zaro ta’sir shaklini saqla.

## Kod va ishga tushirish
- [Jonli demo](https://azizbeksafarov.github.io/design/orbita-site/)
- [To‘liq source ZIP](https://azizbeksafarov.github.io/design/orbita/source.zip)
- [Manifest va hash](https://azizbeksafarov.github.io/design/orbita/manifest.json)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/source.md)
- [Pages ishlamasa raw brief](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/ai.md)

Rootda `node serve.mjs`; http://127.0.0.1:8080/ . Python fallback: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Npm kerak emas. Test: `node --test site/*.test.mjs`.

index.html — mazmun va tuzilma. style.css — lokal fontlar va accessibility mexanikasi. layout.css — tanlangan sohaning to‘liq kompozitsiyasi, tipografika va responsive. app.js — event, dialog/fokus, filtr, saqlash, download. model.js — data va hisob/validatsiya. model.test.mjs — meaningful model checks. Paketdagi font va rasmlar lokal. CREDITS.md litsenziyalar. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

Source faylni alohida o‘qish:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/model.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/package.json.txt)

## Asosiy oqim va tekshiruv
Missiya tanlash → chizma va ma’lumot yangilanishi → kuzatuvga qo‘shish → saqlanish → TXT eksport

Manba IDlari markup/modelda mos qolsin. Foydalanuvchi matnini innerHTMLga qo‘shma. Saqlash known unique IDlarni oladi, buzilgan JSON fallback bor; storage cheklansa joriy tab davom etadi. Boshqa tab storage event orqali yangilanadi. SVG chizmasi shartli, jonli telemetriya emas. Harakat Pause, hidden tab va OS reduced-motion sozlamasiga mos qolsin.

Talab → amal → kod → qabul tekshiruvi. Asosiy oqim, bo‘sh/xato/natija, reload, 390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px, fokus, Escape, shrift/rasm, console va overflow. Animatsiya kontekstni tushuntirsin, foydalanuvchi amalini yashirmasin; reduced-motion saqlansin.

HANDOFF.md ga bilet, o‘zgargan fayl, haqiqiy test natijasi, ochiq muammo va keyingi amalni yoz. Oldingi QA bugungi tahrirga kafolat emas. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. Link avtomatik xotira yoki vosita bermaydi; AI o‘qiy olmasa ZIP/matnni chatga bering.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `render`.

`.orb-header nav` ichiga yangi hash havolasi va main ichiga mos section qo‘sh. render missiya hamda kuzatuvni yangilaydi; yangi ekran uchun alohida funksiya yoz. Yangi missiya qo‘shilsa model.js data, data-mission tugmasi va render ichidagi mode koordinatalari ham mos bo‘lsin.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Missiya tanlash → kuzatuvga qo‘shish → TXT eksport. | `site/app.js` → `render`, `site/app.js` → `toggle`, `site/app.js` → `download` |
| Noto‘g‘ri kiritish | model.js normalize saqlangan IDlarni tozalaydi. Matnli ariza/forma tekshiruvi yo‘q; bilet talab qilsa qo‘shiladi. | `site/model.js` → `normalize` |
| Saqlash | app.js read/commit; saqlash xatosida joriy tab xotirasi va eksport bor. | `site/app.js` → `read`, `site/app.js` → `commit` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletdagi ikki bog‘liq amal, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/chakrapetch.ttf` | 76 KB | [yuklash](https://azizbeksafarov.github.io/design/orbita-site/fonts/chakrapetch.ttf) |
| `fonts/mono.ttf` | 132 KB | [yuklash](https://azizbeksafarov.github.io/design/orbita-site/fonts/mono.ttf) |

# Yuksal · SI — tanlovda yangi AI uchun boshlash

Bu — Yuksal · SI dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-11-02; source fingerprint: `21f0c8f0859b7243`. Readable page: https://azizbeksafarov.github.io/design/si/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Tanlov

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

## 3. Tanlangan dizayn

SI.gov vizual uslubidagi mustaqil Yuksal · SI: O‘zbekiston palitrasi: moviy #0099b5, oq #ffffff, yashil #1eb53a; oq #ffffff asosiy fon; to‘q teal #062c35 matn, moviy kursiv. #ce1126 faqat bayroqning ikki ingichka hoshiyasida; mahalliy Instrument Serif/Sans; canvas SI zarrachalari, katta tahririy sarlavhalar, dumaloq menyu, yon nuqta navigatsiyasi va och kartalar. Rasmiy davlat xizmati emas.

Asosiy amallar: O‘zbekiston palitrasi · 12 yulduzli bayroq · SI ↔ Super Intelligence · kursor / click fizikasi · scroll morph · shaxsiy reja. Mos sohalar: AI, ilm-fan, ta’lim, tashabbuslar, innovatsiya va taqdimot saytlari. Statistika, narx, foydalanuvchi profili va fikrlar namunaviy. Formalar demo; backend yoki haqiqiy yuborish yo‘q. Tanlangan tashabbuslar rejasi shu brauzerda saqlanadi. Bilet so‘ragan haqiqiy funksiyalarni qur; demo natijani haqiqiy xizmat deb ko‘rsatma.

## 4. Haqiqiy kodni olish

- [Tahrirlanadigan kod + tayyor build + local shriftlar + yo‘riqnomalar](https://azizbeksafarov.github.io/design/si/source.zip)
- [AI o‘qiydigan tanlangan kod](https://azizbeksafarov.github.io/design/si/source.md)
- [Kodning HTML ko‘rinishi](https://azizbeksafarov.github.io/design/si/source.html)
- [Paket, fayllar va SHA-256 manifesti](https://azizbeksafarov.github.io/design/si/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/si-site/index.html)
- [GitHub source papkasi](https://github.com/AzizbekSafarov/azizbeksafarov.github.io/tree/main/design/si-site)

Source archive va matn bir snapshotdan yaratilgan. Ish papkasi `site/`. Internet faylni o‘qish imkoniyati bo‘lmasa, foydalanuvchi AI matnini nusxalaydi yoki ZIPni beradi; havola o‘z-o‘zidan xotira, kodni tahrirlash yoki brauzer imkoniyatini yaratmaydi.

## 5. Fayl xaritasi va ishga tushirish

- `index.html`: bo‘lim, kartalar, o‘zbekcha matn va dialoglar.
- `style.css`: O‘zbekiston moviy/oq/yashil palitrasi, oq asosiy fon, to‘q teal matn va responsive holatlar.
- `app.js`: menyu, filtr, reja, yuklash va harakat sozlamalari.
- `motion.js`: yagona persistent spring particle field; hover/tap morph, kursor, click to‘lqini va scroll shakllari.
- `motion.test.mjs`: fizik barqarorlik, kursor, to‘lqin va harakatlanuvchi shakllar.
- `MOTION.md`: originaldan tekshirilgan animatsiya kontrakti.
- `model.js`: ID, mazmun, uch qadam va reja validatsiyasi.
- `model.test.mjs`: saqlanish, toggle va eksport testlari.
- `fonts/`: mahalliy Instrument shriftlar va OFL.
- `QA-REPORT.md`: haqiqiy tekshiruv.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/style.css.txt)
- [fonts/fonts.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/fonts/fonts.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/app.js.txt)
- [motion.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/motion.js.txt)
- [MOTION.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/MOTION.md.txt)
- [motion.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/motion.test.mjs.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/model.test.mjs.txt)
- [combinations.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/combinations.test.mjs.txt)
- [uzbekistan.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/uzbekistan.svg.txt)
- [brand-icon.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/brand-icon.svg.txt)

Plain HTML/CSS/JavaScript ES modules, canvas va native dialog. Npm kerak emas; HTTP serverda ishlaydi. HTML karta IDlari model.js bilan mos qolsin. Canvas butun sahifaga fixed; 1800 desktop / 1500 mobile nuqta, DPR 2, requestAnimationFrame va delta-time spring. SI → Super Intelligence: desktop serpentine text, mobile rotating lettering circle. Pointer repulsion radius 120 px; click expanding wave; spring .045 va damping .84. Scroll shakllarni almashtiradi, zarracha identity/velocity saqlanadi. Hidden tab/pause’da to‘xtaydi; faqat hero offscreen bo‘lgani uchun to‘xtatma. `MOTION.md` ni o‘qi. OS reduced-motion va statik SI fallback saqlansin.

Oldindan yig‘ilgan nusxa uchun npm yoki internet shart emas: ZIP ildizida `node serve.mjs`, so‘ng http://127.0.0.1:8080/ . Node bo‘lmasa README’dagi Python usulini ishlat. Bloom source tahriri uchun npm paketlari o‘rnatilgan/cache’da bo‘lishi yoki internet kerak.

```text
node serve.mjs
# ZIPdagi site/ ichida alohida terminal:
cd site
node --test *.test.mjs
```

## 6. Moslashtirish va xatoni o‘zi tuzatish tartibi

- Biletni “talab → foydalanuvchi amali → kod joyi → qabul sinovi” jadvaliga aylantir. Vazifaga mos navigatsiya, nomlar, ma’lumot va asosiy natijani yoz.
- Haqiqiy source fayllarini o‘qi; mavjud ishga tushirishni tekshir. Kichik xato uchun butun saytni boshqa framework/dizaynga qayta qurma. Oddiy tanlov va qaytariladigan tuzatishlarni mustaqil bajar.
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
- Xatoda: aniq holatni takrorla → konsol/resurs va tegishli kodni tekshir → sababni tuzat → shu oqimni qayta sina. Xatoni yashirish yoki tugmani olib tashlash yechim emas.
- Bitta asosiy yozuvchi ishlasin. Limitni asra: avval shu qisqa kontekst va tegishli fayllar, katta minified vendor JS yoki barcha tarixni birga yuklama.

## 7. Saqlanishi kerak bo‘lgan tuzatishlar

Oq asosiy fon (foydalanuvchi talabi), O‘zbekiston palitrasi, moviy CTA, oq/yashil sirtlar, serif-kursiv/sans farqi va outline holatlar saqlansin. USA bayrog‘iga qaytarma: 3 tasma, 2 ingichka qizil hoshiya, oq yarim oy va 3/4/5 qatorda jami 12 yulduz. Bayroq harakatida ranglari tezlik sabab o‘zgarmasin. Animatsiya matn/tugmani to‘smasin; mobilga majburiy scroll-snap qo‘shilmasin. Pause canvas hamda orbni to‘xtatsin. Favicon brand-icon.svg/PNG Yuksal belgisi; bayroqni favicon qilma. Plan faqat known unique IDlarni oladi; storage event orqali tablar sinxronlashadi, har o‘zgartirish oldidan eng yangi reja o‘qiladi; boshqa storage tozalanmaydi. Detail action footer va Escape/fokus qaytishi saqlansin. Hisob/eksport tanlangan yo‘nalishlarga mos bo‘lsin.

## 8. Qabul sinovlari

Quyidagi baseline amallarni yangi bilet oqimiga moslab tekshir. Eski QA bugungi o‘zgarishlarning isboti emas.

- SI → Super Intelligence hover / mobil tap, kursor itarishi va click to‘lqini. Scroll: ring → helix → towers → ring → broadcast → scatter → flag. Pause/reduced-motion va statik SI fallback.
- Dumaloq menyu → bo‘lim; Escape → ochgan tugmaga fokus qaytishi.
- Kategoriya → 4/2/1/1 kartalar; aniq tanlangan holat.
- Detail → reja qo‘shish/olish → hisob → reload → ikkinchi tab sinxronlashuvi → matn yuklash; bo‘sh rejada yuklash o‘chiq.
- 320 px dialog, uzun sarlavha va yopish/saqlash amallari; lokal shrift va resurslar.
- 390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px: asosiy CTA va yozuvlar kesilmaydi; sahifa bo‘ylab keraksiz horizontal scroll yo‘q. Jadvalning belgilangan ichki scrolli mumkin.
- Bo‘sh/noto‘g‘ri ma’lumot, topilmagan natija, uzun matn, klaviatura Tab/Enter/Escape, ko‘rinadigan fokus va qo‘llangan light/dark rang juftlari.
- Tegishli saqlanishni reload bilan tekshir; shrift/JS/CSS 404lari va ishlashga ta’sir qiladigan konsol xatolari qolmasin.

## 9. Davom ettirish va topshirish

`CURRENT-TASK.md` ga bilet, vaqt va cheklovni yoz. `HANDOFF.md` ga fayllar, bajarilgan/qolgan ish, haqiqiy tekshiruv, ochiq xato va keyingi bitta amalni yozib bor. Shu faylni yangi AIga berish davom ettirishni osonlashtiradi. Oxirida ishlaydigan link/local run, editable source, talablarga mos test qaydi va himoya uchun muammo → yechim → to‘liq oqim → texnologiya → cheklov izohini tayyorla. “Xatosiz”, “to‘liq testlangan” yoki ball kafolatini dalilsiz aytma.

## Paketdagi ekranlar va chegaralar

**Tayyor:** Zarracha animatsiyali kirish; Tashabbuslar filtri; Tashabbus tafsiloti dialogi; Shaxsiy reja va TXT eksport; Navigatsiya dialogi.

**Holatlar:** Bo‘sh reja; Pause/reduced-motion; Xotira xatosi.

**Hali yo‘q:** Haqiqiy ariza yuborish; Akkaunt/dashboard; AI backend.

Bu imkoniyatlar bitta manba paketida. Biletga kerak bo‘ladigan yangi ichki sahifa avtomatik tayyor deb olinmaydi. Mashina o‘qiydigan xarita ZIP ildizidagi `SCREENS.json` da; bu qo‘llanma runtime sinovi o‘rnini bosmaydi.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `renderPlan`.

`#site-menu` dialogidagi menyuga `href="#yangi"`, main ichiga `section id="yangi"` qo‘sh. Mavjud menyu handleri hash havolasini ochib fokusni bo‘limga o‘tkazadi. renderPlan faqat shaxsiy rejani chizadi; motion.js animatsiyasini o‘zgartirma.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Kinematik SI portali: Instrument Serif/Sans, uzluksiz zarracha identifikatori, pointer/click fizikasi va scroll shakl almashishi. MOTION.md va motion.js asosiy manba; reduced-motion hamda pause saqlansin.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Tashabbus tafsiloti → rejaga qo‘shish/olish → TXT eksport. | `site/app.js` → `renderPlan`, `site/model.js` → `togglePlan`, `site/model.js` → `planText` |
| Noto‘g‘ri kiritish | validPlan/parsePlan shikastlangan ma’lumot va noma’lum IDlarni filtrlaydi. Bilet ariza talab qilsa maydon validatsiyasi alohida quriladi. | `site/model.js` → `validPlan`, `site/model.js` → `parsePlan` |
| Saqlash | app.js readCurrentPlan/persist, ustoz.yuksal.plan.v1. Saqlash cheklansa xabar bor. | `site/app.js` → `readCurrentPlan`, `site/app.js` → `persist` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletda berilgan amallar soni, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `apple-touch-icon.png` | 11 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/apple-touch-icon.png) |
| `favicon-32.png` | 1 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/favicon-32.png) |
| `fonts/instrument-0.woff2` | 10 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-0.woff2) |
| `fonts/instrument-1.woff2` | 29 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-1.woff2) |
| `fonts/instrument-2.woff2` | 12 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-2.woff2) |
| `fonts/instrument-3.woff2` | 21 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-3.woff2) |
| `fonts/instrument-4.woff2` | 11 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-4.woff2) |
| `fonts/instrument-5.woff2` | 20 KB | [yuklash](https://azizbeksafarov.github.io/design/si-site/fonts/instrument-5.woff2) |

# Bloom · Material Design 3 — tanlovda yangi AI uchun boshlash

Bu — Bloom · Material Design 3 dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-10-31; source fingerprint: `36aa144427df8d89`. Readable page: https://azizbeksafarov.github.io/design/bloom/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Ekspert amaliy vazifani (biletni) hammaga bir vaqtda beradi; ishdan keyin 15 daqiqalik himoya bo‘ladi: taqdimot, namoyish va savollar. Mezonlar loyihasi va tashkilotchi videosiga ko‘ra, ishdan oldin hisob va dasturni sozlash uchun 15 daqiqa beriladi va u amaliy vaqtga kirmaydi.

- Baholash 6 mezon, jami 100 ball. Imzoli qarordagi vaznlar: funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Shuning uchun avval biletdagi majburiy funksiyalar oxirigacha ishlashi kerak, keyin bezak.
- Mezonlar loyihasida viloyat (hududiy) bosqichi uchun: kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat. Faqat biletdagi majburiy imkoniyatlar talab qilinadi; qo‘shimcha funksiya asosiy kamchilikni qoplamaydi. Saqlash usuli (brauzer yoki server) biletda yoziladi.
- AI, no-code, shablon va ochiq materiallar ruxsat etilgan; moslashtirish va natija baholanadi. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqlangan, shuning uchun starter biletdagi mahsulotga aylantiriladi.
- Himoyada jonli o‘zgartirish masalasida manbalar farq qiladi: imzoli qarorda so‘ralishi mumkin, mezonlar loyihasida esa topshirilgan loyihani o‘zgartirib bo‘lmaydi. Joyda aniqlanadi; tayyor qo‘llanma `ZAXIRA/JONLI-OZGARISH.md` da.
- 21 batafsil ko‘rsatkich hali tasdiqlanmagan loyihadan olingan. Imzoli qaror va joydagi ko‘rsatma ustun turadi. Amaliy vaqtni tashkilotchi belgilaydi: foydalanuvchi aytgan qolgan vaqt bilan ishla.

Qoidalar oxirgi marta 2026-10-28 da tekshirilgan: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil rejasi](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## 3. Tanlangan dizayn

Foydalanuvchi ma’qullagan mustaqil Material Design 3. Neutral sirtlar, aniq primary CTA, 80 px rail/mobile bar, tonal kartalar, Google Sans Flex + Roboto, official Material Symbols va haqiqiy state/ripple animatsiyasi.

Asosiy amallar: Rasmiy M3 komponentlari · dinamik rang · native ripple · formalar · checklist · light/dark · motion. Mos sohalar: Loyiha maydoni, yoshlar platformasi, ta’lim, ijod va shaxsiy kabinet. Statistika, narx, foydalanuvchi profili va fikrlar namunaviy. Formalar demo; backend yoki haqiqiy yuborish yo‘q. Loyiha progressi, saqlangan belgilar va tema shu brauzerda saqlanadi. Bilet so‘ragan haqiqiy funksiyalarni qur; demo natijani haqiqiy xizmat deb ko‘rsatma.

## 4. Haqiqiy kodni olish

- [Tahrirlanadigan kod + tayyor build + local shriftlar + yo‘riqnomalar](https://azizbeksafarov.github.io/design/bloom/source.zip)
- [AI o‘qiydigan tanlangan kod](https://azizbeksafarov.github.io/design/bloom/source.md)
- [Kodning HTML ko‘rinishi](https://azizbeksafarov.github.io/design/bloom/source.html)
- [Paket, fayllar va SHA-256 manifesti](https://azizbeksafarov.github.io/design/bloom/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/material-expressive/dist/index.html)
- [GitHub source papkasi](https://github.com/AzizbekSafarov/azizbeksafarov.github.io/tree/main/design/material-expressive)

Source archive va matn bir snapshotdan yaratilgan. Ish papkasi `site/`. Internet faylni o‘qish imkoniyati bo‘lmasa, foydalanuvchi AI matnini nusxalaydi yoki ZIPni beradi; havola o‘z-o‘zidan xotira, kodni tahrirlash yoki brauzer imkoniyatini yaratmaydi.

## 5. Fayl xaritasi va ishga tushirish

- `src/main.jsx`: UI, dialogs, Material Web bindings, theme and persisted state.
- `src/style.css`: shared M3 tokens, typography, responsive layout and control states.
- `src/persistence.js`: non-destructive startup reads, recovery backups and JSON export; `src/persistence.test.js`: failure regressions.
- `src/model.js`: sample data, categories, validation, search and progress.
- `src/model.test.js`: baseline model tests; `src/combinations.test.js`: combined filters, task masks and storage boundaries.
- `package.json` + `package-lock.json`: actual dependencies; `vite.config.js`: relative build base.
- `src/fonts/`, `public/`: local fonts and licenses; `dist/`: built static site.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/index.html.txt)
- [src/main.jsx](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/main.jsx.txt)
- [src/style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/style.css.txt)
- [src/fonts/google-sans-flex.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/fonts/google-sans-flex.css.txt)
- [src/fonts/roboto.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/fonts/roboto.css.txt)
- [src/fonts/material-symbols.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/fonts/material-symbols.css.txt)
- [src/persistence.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/persistence.js.txt)
- [src/persistence.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/persistence.test.js.txt)
- [src/model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/model.js.txt)
- [src/model.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/model.test.js.txt)
- [src/combinations.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/combinations.test.js.txt)
- [public/bloom.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/public/bloom.svg.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/package.json.txt)
- [vite.config.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/vite.config.js.txt)
- [download_symbols.py](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/download_symbols.py.txt)

React 19 + Vite 7 + Motion + `@material/web` 2.5 + Material Color Utilities. Use the lockfile (`npm ci`). Keep official Material buttons, chip-set/filter chips, outlined fields/selects, radios, checkboxes, dialogs and ripples. React custom-element change events currently use lowercase `onchange`; verify the installed control API rather than substituting native events by guesswork. Tokens come from SchemeTonalSpot with matched on-color roles. The three-step model and its category validation must change together when the ticket needs a different structure. Icons use a local subset: adding a new symbol requires updating `download_symbols.py` and rebuilding the font when network is available; otherwise use an existing supported icon. Unsupported icon names can render as text.

Oldindan yig‘ilgan nusxa uchun npm yoki internet shart emas: ZIP ildizida `node serve.mjs`, so‘ng http://127.0.0.1:8080/ . Node bo‘lmasa README’dagi Python usulini ishlat. Bloom source tahriri uchun npm paketlari o‘rnatilgan/cache’da bo‘lishi yoki internet kerak.

```text
cd site
npm ci
npm run test
npm run build
npm run dev
```

## 6. Moslashtirish va xatoni o‘zi tuzatish tartibi

- Biletni “talab → foydalanuvchi amali → kod joyi → qabul sinovi” jadvaliga aylantir. Vazifaga mos navigatsiya, nomlar, ma’lumot va asosiy natijani yoz.
- Haqiqiy source fayllarini o‘qi; mavjud ishga tushirishni tekshir. Kichik xato uchun butun saytni boshqa framework/dizaynga qayta qurma. Oddiy tanlov va qaytariladigan tuzatishlarni mustaqil bajar.
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
- Xatoda: aniq holatni takrorla → konsol/resurs va tegishli kodni tekshir → sababni tuzat → shu oqimni qayta sina. Xatoni yashirish yoki tugmani olib tashlash yechim emas.
- Bitta asosiy yozuvchi ishlasin. Limitni asra: avval shu qisqa kontekst va tegishli fayllar, katta minified vendor JS yoki barcha tarixni birga yuklama.

## 7. Saqlanishi kerak bo‘lgan tuzatishlar

Keep the neutral hero and unmistakable primary CTA. Metadata/passive panels stay quiet. Palette options need labels, one selected radio and visible boundaries; role samples are not buttons. Palette confirmation stays in the dialog actions slot. Bookmark icon is consistent and uses the real variable FILL font. Selected chip must not deselect on a second click. Form edits clear validation; successful creation resets the next form. If a saved card disappears, restore focus to a connected opener or project heading. Mobile list still exposes saving; segmented view includes a selected check. Uzbek apostrophes normalize in search. Do not undo these fixes during adaptation.

## 8. Qabul sinovlari

Quyidagi baseline amallarni yangi bilet oqimiga moslab tekshir. Eski QA bugungi o‘zgarishlarning isboti emas.

- Yangi loyiha → bo‘sh forma xatosi → haqiqiy yozishda xato yo‘qolishi → muvaffaqiyat → keyingi forma toza.
- Qidiruv + kategoriya + saralash + saqlangan/bajarilgan bo‘limlar; takror bosilgan chip tanlangan qoladi.
- Karta/ro‘yxat, bookmark, detail uch checkbox → progress → reload.
- Palitra label/ArrowRight/Space → bitta radio; light/dark; qisqa oynada Tayyor doim ko‘rinadi.
- Escape → opener; filtrdan yo‘qolgan karta uchun fokus loyiha sarlavhasiga qaytadi.
- 390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px: asosiy CTA va yozuvlar kesilmaydi; sahifa bo‘ylab keraksiz horizontal scroll yo‘q. Jadvalning belgilangan ichki scrolli mumkin.
- Bo‘sh/noto‘g‘ri ma’lumot, topilmagan natija, uzun matn, klaviatura Tab/Enter/Escape, ko‘rinadigan fokus va qo‘llangan light/dark rang juftlari.
- Tegishli saqlanishni reload bilan tekshir; shrift/JS/CSS 404lari va ishlashga ta’sir qiladigan konsol xatolari qolmasin.

## 9. Davom ettirish va topshirish

`CURRENT-TASK.md` ga bilet, vaqt va cheklovni yoz. `HANDOFF.md` ga fayllar, bajarilgan/qolgan ish, haqiqiy tekshiruv, ochiq xato va keyingi bitta amalni yozib bor. Shu faylni yangi AIga berish davom ettirishni osonlashtiradi. Oxirida ishlaydigan link/local run, editable source, talablarga mos test qaydi va himoya uchun muammo → yechim → to‘liq oqim → texnologiya → cheklov izohini tayyorla. “Xatosiz”, “to‘liq testlangan” yoki ball kafolatini dalilsiz aytma.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. Bloom’da `site/dist/` — ulardan yig‘ilgan tayyor build. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `src/fonts/google-sans-flex-latin-ext.woff2` | 18 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/google-sans-flex-latin-ext.woff2) |
| `src/fonts/google-sans-flex-latin.woff2` | 35 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/google-sans-flex-latin.woff2) |
| `src/fonts/material-symbols.woff2` | 5 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/material-symbols.woff2) |
| `src/fonts/roboto-400.ttf` | 120 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/roboto-400.ttf) |
| `src/fonts/roboto-500.ttf` | 121 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/roboto-500.ttf) |
| `src/fonts/roboto-600.ttf` | 121 KB | [yuklash](https://azizbeksafarov.github.io/design/material-expressive/src/fonts/roboto-600.ttf) |

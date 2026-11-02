# Bloom · Material Design 3 — tanlovda yangi AI uchun boshlash

Bu — Bloom · Material Design 3 dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-11-02; source fingerprint: `a7fc344648402b5c`. Readable page: https://azizbeksafarov.github.io/design/bloom/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

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

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/src/main.jsx`, `site/src/main.jsx`; mavjud kirish funksiyasi: `navigate`.

App ichidagi view/setView va navigate(next), sidebar navigatsiyasidagi all/saved/done ro‘yxati hamda sarlavha xaritasini birga kengaytir. Alohida ekran uchun view bo‘yicha yangi komponentni shartli chiqar; visibleProjects filtrlari yangi ekran o‘rnini bosmaydi. src/model.js ni faqat ma’lumot modeli talab etsa o‘zgartir; npm run build bilan dist ni yangila.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Material ish maydoni: Google Sans/Roboto va rasmiy Material komponentlarining ripple, dialog, tanlash holatlari. src/main.jsx dagi Motion layout va reduced-motion yo‘lini saqla; boshqa starter animatsiyasini ustiga qo‘shma.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Loyiha yaratish → tafsilot → vazifani bajarish → progress/filtr. | `site/src/main.jsx` → `submitProject`, `site/src/main.jsx` → `changeTask`, `site/src/model.js` → `progress` |
| Noto‘g‘ri kiritish | createProject nom/uzunlik/kategoriyani tekshiradi; submitProject xatoni ko‘rsatadi. validateProjects saqlangan to‘plamni tekshiradi. | `site/src/model.js` → `createProject`, `site/src/model.js` → `validateProjects` |
| Saqlash | src/persistence.js loadProjectState/persistProjectState; App useEffect orqali yozadi, xatoda asl nusxani saqlash va JSON eksport mavjud. | `site/src/persistence.js` → `loadProjectState`, `site/src/persistence.js` → `persistProjectState` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletdagi ikki bog‘liq amal, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

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

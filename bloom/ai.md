# Bloom · Material Design 3 — tanlovda yangi AI uchun boshlash

Bu — Bloom · Material Design 3 dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Tanlov mahsulotini qurish so‘ralib, ikkala joyda ham bilet bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Tayyorgarlik, audit yoki kutubxonani saqlash so‘rovida biletni to‘siq qilma; foydalanuvchining aniq ish doirasini bajar. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida. Saytni `ochish.cmd` yoki `node serve.mjs` bilan oching: `index.html` ikki marta bosilsa brauzer skript va shriftlarni bloklaydi. Foydalanuvchi rang, shrift, joylashuv, bo‘lim yoki matnni o‘zgartirishni aytsa, uning so‘zi vizual kontraktdan ustun; qayerni tahrirlashni `DESIGN-MAP.md` ko‘rsatadi.

Snapshot: 2026-11-03; source fingerprint: `dcd7f30bd9b155d2`. Readable page: https://azizbeksafarov.github.io/design/bloom/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Manba maqomlari: **[Imzoli qaror]** — qo‘shma qaror; **[Sayt]** — Ustoz AI saytidagi farqli PDF tahriri; **[Loyiha]** — tasdiqqa taqdim etilgan 11 sahifalik mezonlar; **[Video]** — tashkilotchining tarixiy yo‘riqnomasi. Ularni bitta yangi nizom deb birlashtirmang.

1. **Baholash:** funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10 — jami 100. [Imzoli qaror, 19-band; Sayt: tartibi farqli, vaznlari mos]. Majburiy funksiyalar va mazmun to‘liq bajariladi; ularning bajarilishi sifatning yakuniy chegarasi emas. Past ball ulushi dizayn/UX, kreativlik yoki taqdimotni e’tiborsiz qoldirishga sabab bo‘lmaydi.
2. **Teng ball:** avval sifat va funksionallik. Keyingi ustunlik [Imzoli qaror, 20¹-band] bo‘yicha zamonaviy texnologiyalar; [Sayt, 20¹-band] bo‘yicha kreativlik va originallik. Aynan joydagi qo‘llanadigan tahrir aniqlanadi.
3. **Himoya:** 15 daqiqa — 5 taqdimot + 5 namoyish + 5 savol-javob; qo‘shimcha vaqt berilmaydi. [Imzoli qaror, 7–9-bandlar; Sayt]. Ssenariy: `ZAXIRA/HIMOYA.md`.
4. **Hududiy ko‘lam:** kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat — tavsiya. [Loyiha, 12–13-bandlar]. Bu tasdiqlangan universal vaqt emas. Saqlash usuli brauzer/server ekanini bilet belgilaydi; faqat biletdagi majburiy imkoniyatlar talab qilinadi [Loyiha, 23-band].
5. **Sozlash:** kompyuter tashkilotchidan, Antigravity/Codex va akkaunt ulash uchun 15 daqiqa [Video]. Bu vaqt amaliy ishga kirmasligi va sinov loyihasi tanlov ishida ishlatilmasligi [Loyiha, 12-band] da yozilgan; videoga tegishli bo‘lmagan tafsilotni unga yuklamang.
6. **AI va shablon:** g‘oya/shablon olish [Video], AI/no-code/ochiq materiallar va manbani ko‘rsatish [Loyiha]. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqi [Loyiha, 2-bob, 2-sahifa: “Taqiqlanadi”]. Starter biletga haqiqatan moslashtiriladi; ruxsat etilgan tayyor kod chegarasi joyda aniqlanadi.
7. **Jonli tahrir ziddiyati:** ekspert real vaqtda o‘zgartirishni so‘rashi mumkin, bajara olmagan ishtirokchining ishi baholanmaydi [Imzoli qaror, 7–9-bandlar]. [Sayt] nusxasida bu band yo‘q. [Loyiha, 17-band] topshirilgan loyihani himoyada o‘zgartirishga yo‘l qo‘ymaydi. Joydagi ko‘rsatmani aniqlang; mashq xaritasi `ZAXIRA/JONLI-OZGARISH.md` da.
8. **Topshirish va tekshiruv:** 390/768/1366 px; ishlaydigan sayt (tekshiriladigan havola yoki kelishilgan mahalliy ishga tushirish), kod va ishga tushirish yo‘riqnomasi; ishtirokchi kodi, bilet, funksiyalar, testlar, cheklovlar, vositalar, asosiy so‘rovlar va tashqi manbalar yozilgan qisqa tavsif; 3–5 ekran tasviri va asosiy amalning 1–2 daqiqalik yozuvi. Papka nomi `bosqich_ishtirokchi-kodi_bilet-raqami`, masalan `hududiy_017_003` [Loyiha, 12–15-bandlar va baholash jadvali]. 21 batafsil ko‘rsatkich tasdiqlanmagan loyiha; tayyorgarlik vositasi, yangi rasmiy bilet emas.

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
- `src/routes.js`, `src/ProjectWorkspace.jsx`, `src/workspace.css`: hash navigation, full project screen/editor and its layout; `src/workspace.test.js`: route/edit regressions.
- `src/style.css`: shared M3 tokens, typography, responsive layout and control states.
- `src/persistence.js`: non-destructive startup reads, recovery backups and JSON export; `src/persistence.test.js`: failure regressions.
- `src/model.js`: sample data, categories, validation, search and progress.
- `src/model.test.js`: baseline model tests; `src/combinations.test.js`: combined filters, task masks and storage boundaries.
- `package.json` + `package-lock.json`: actual dependencies; `vite.config.js`: relative build base.
- `src/fonts/`, `public/`: local fonts and licenses; `dist/`: built static site.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/index.html.txt)
- [src/main.jsx](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/main.jsx.txt)
- [src/ProjectWorkspace.jsx](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/ProjectWorkspace.jsx.txt)
- [src/routes.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/routes.js.txt)
- [src/workspace.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/workspace.css.txt)
- [src/workspace.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/workspace.test.js.txt)
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
- [package-lock.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/package-lock.json.txt)
- [vite.config.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/vite.config.js.txt)
- [download_symbols.py](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/download_symbols.py.txt)

React 19 + Vite 7 + Motion + `@material/web` 2.5 + Material Color Utilities. Use the lockfile (`npm ci`). The locked Vite requires Node ^20.19.0 or >=22.12.0; check `node --version` before installing (Node 22.12+ is suitable). Keep official Material buttons, chip-set/filter chips, outlined fields/selects, radios, checkboxes, dialogs and ripples. React custom-element change events currently use lowercase `onchange`; verify the installed control API rather than substituting native events by guesswork. Tokens come from SchemeTonalSpot with matched on-color roles. The three-step model and its category validation must change together when the ticket needs a different structure. Icons use a local subset: adding a new symbol requires updating `download_symbols.py` and rebuilding the font when network is available; otherwise use an existing supported icon. Unsupported icon names can render as text.

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
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Bilet texnologiya nomini aytmasa ham zarur yechimni asosla; foydalanuvchining alohida integratsiya yoki tayyorgarlik so‘rovi ham joriy ish doirasiga kiradi. Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
- Xatoda: aniq holatni takrorla → konsol/resurs va tegishli kodni tekshir → sababni tuzat → shu oqimni qayta sina. Xatoni yashirish yoki tugmani olib tashlash yechim emas.
- Bitta asosiy yozuvchi ishlasin. Limitni asra: AGENTS.md dagi o‘qish tartibiga amal qil va tegishli source fayllarni to‘liq o‘qi. Qisqa brief to‘liq o‘qish so‘rovini bekor qilmaydi; bunday so‘rovda READING-PLAN.json bo‘yicha manbalarni o‘qi. Minified vendor JSni faqat unga tegishli muammo bo‘lsa och.

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

## Paketdagi ekranlar va chegaralar

**Tayyor:** Loyihalar, saqlanganlar, bajarilganlar ro‘yxati; Alohida loyiha ish ekrani: #all/ID, #saved/ID, #done/ID; Nom, izoh va uch qadamni tahrirlash; Yangi loyiha, yordam va palitra dialoglari.

**Holatlar:** Topilmagan loyiha; Bo‘sh qidiruv/filtr; Noto‘g‘ri tahrir; Saqlanmagan tahrirdan chiqish; Saqlash xatosi va ikki-tab ziddiyati.

**Hali yo‘q:** Login/Google Auth; Server sinxronizatsiyasi; Jamoa rollari; JSON import.

Bu imkoniyatlar bitta manba paketida. Biletga kerak bo‘ladigan yangi ichki sahifa avtomatik tayyor deb olinmaydi. Mashina o‘qiydigan xarita ZIP ildizidagi `SCREENS.json` da; bu qo‘llanma runtime sinovi o‘rnini bosmaydi.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/src/main.jsx`, `site/src/main.jsx`; mavjud kirish funksiyasi: `navigate`.

src/routes.js hash yo‘llarini boshqaradi: #all, #saved, #done va #all/ID kabi loyiha ekranlari. App ichidagi navigate(next), sidebar ro‘yxati va sarlavha xaritasini yo‘l parseri bilan birga kengaytir. src/ProjectWorkspace.jsx ichki ish ekrani va tahrir formasini, src/workspace.css uning Material ko‘rinishini boshqaradi. Alohida ekran uchun view bo‘yicha yangi komponentni shartli chiqar; visibleProjects filtrlari yangi ekran o‘rnini bosmaydi. src/model.js ni faqat ma’lumot modeli talab etsa o‘zgartir; npm run build bilan dist ni yangila.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Material ish maydoni: Google Sans/Roboto va rasmiy Material komponentlarining ripple, dialog, tanlash holatlari. Ichki ekran qisqa yon o‘tish bilan ochiladi, fokus sarlavhaga o‘tadi; reduced-motion’da siljish yo‘q. src/main.jsx va ProjectWorkspace.jsx dagi Motion layout va reduced-motion yo‘lini saqla; boshqa starter animatsiyasini ustiga qo‘shma.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Loyiha yaratish → alohida hash ish ekrani → matn/qadam tahriri → saqlash → reload yoki Orqaga → progress/filtr. | `site/src/main.jsx` → `submitProject`, `site/src/main.jsx` → `changeTask`, `site/src/model.js` → `progress` |
| Noto‘g‘ri kiritish | createProject nom/uzunlik/kategoriyani tekshiradi; submitProject xatoni ko‘rsatadi. validateProjects saqlangan to‘plamni tekshiradi. | `site/src/model.js` → `createProject`, `site/src/model.js` → `validateProjects` |
| Saqlash | src/persistence.js loadProjectState/persistProjectState; App useEffect orqali yozadi. Boshqa tab yozgan holat bilan ziddiyatda yozish to‘xtaydi; foydalanuvchi JSON eksport olib keyin yangilaydi. Jonli avtomatik merge yo‘q. Recovery nusxalari oldingisini almashtirmaydi. | `site/src/persistence.js` → `loadProjectState`, `site/src/persistence.js` → `persistProjectState` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletda berilgan amallar soni, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

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

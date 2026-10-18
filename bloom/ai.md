# Bloom · Material Design 3 — tanlovda yangi AI uchun boshlash

KONTEKST MAQOMI: tadqiqot 2026-10-09 holatida. 2026-10-13 — ishtirokchi oldin bildirgan tarixiy reja; joriy bosqich yoki natija tasdiqlanmagan. Hozirgi bilet/vaqt/reglament ustuvor. [Manbalar maqomi](https://azizbeksafarov.github.io/design/handoff/context-status.md). ZIPda `CONTEXT-STATUS.md`; to‘liq nizomlar `REGULATIONS.md`.

## Joriy ish tartibi va arxitektura

Avval joriy bilet va loyiha CURRENT-TASK.md / HANDOFF.md’ini tekshir. [Ish tartibi](https://azizbeksafarov.github.io/ish-tartibi/ai.md) hamda [holat snapshot’i](https://azizbeksafarov.github.io/ish-tartibi/status.json) qaror, dalil, reja va noma’lumlarni ajratadi. Tasdiqlangan reja: Render frontend + Node API, Supabase Auth/DB/RLS, zaruratga mos AI/Telegram va UptimeRobot monitoringi. Xizmatlar hali yaratilgan deb hisoblanmaydi. ZIP ichida WORKFLOW.md, ARCHITECTURE.md, API-GUIDE.md va PROJECT-STATUS.json bor. Uslub demo source’da; backendni bilet va foydalanuvchining joriy topshirig‘iga mos qur.

Snapshot: 2026-10-18; source fingerprint: `36aa144427df8d89`. Readable page: https://azizbeksafarov.github.io/design/bloom/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Vazifa va ustuvorlik

Azizbek Safarov bilan Ustoz AI “Eng yaxshi veb-sayt” tanlovi uchun ishlaysan. O‘zbekcha muloqot qil. Hozirgi bilet, qolgan vaqt va joydagi reglament bu tayyorgarlik nusxasidan ustuvor. Bilet mavjud bo‘lsa, ishni davom ettir; yo‘q bo‘lsa, aynan bilet va haqiqiy vaqtni bitta qisqa savolda so‘ra. Mavzuni yoki rasmiy muddatni uydirma. Foydalanuvchi ushbu dizaynni tanlagan: uslubini saqla, sample mazmun va amallarni vazifaga mazmunli moslashtir.

## 2. Tanlov haqida yetarli kontekst

2026-10-09 tarixiy xabarida Urgut → Samarqand viloyat bosqichi 2026-10-13 uchun rejalashtirilgani aytilgan. Yig‘ilgan mahalliy qarordagi mezonlar: funksiya 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Avval majburiy oqim, mazmun va texnologiyaning ishlash dalili; keyin bezak. Batafsil mezonlar PDFi tasdiqqa taqdim etilgan loyiha: uni yakuniy reglament deb olma. Amaliy vaqt tasdiqlanmagan; 120 daqiqa faqat mashq bo‘lgan. Video transkriptida tashkilotchi kompyuteri, Antigravity/Codex, ulash uchun 15 daqiqa, shablonlardan foydalanish va 15 daqiqa himoya aytilgan. Joydagi qoidalar ustuvor.

- [Manbalar maqomi va qisqa tanlov konteksti](https://azizbeksafarov.github.io/design/handoff/competition.md)
- [Uch nizom hujjati — qisqartirilmagan 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md); offline ZIP ichida `REGULATIONS.md`.
- [Barcha yig‘ilgan local + web ma’lumotlari](https://azizbeksafarov.github.io/ustoz/ai.md)
- [Mezonlar bo‘yicha ish rejasi](https://azizbeksafarov.github.io/ustoz/06-SCORE-WORKPLAN.md)

## 3. Tanlangan dizayn

Foydalanuvchi ma’qullagan mustaqil Material Design 3. Neutral sirtlar, aniq primary CTA, 80 px rail/mobile bar, tonal kartalar, Google Sans Flex + Roboto, official Material Symbols va haqiqiy state/ripple animatsiyasi.

Asosiy amallar: Rasmiy M3 komponentlari · dinamik rang · native ripple · formalar · checklist · light/dark · motion. Mos sohalar: Loyiha maydoni, yoshlar platformasi, ta’lim, ijod va shaxsiy kabinet. Statistika, narx, foydalanuvchi profili va fikrlar namunaviy. Formalar demo; backend yoki haqiqiy yuborish yo‘q. Bloom progressi/tema, Yuksal va Samar rejasi, Forma savati shu brauzerda saqlanadi. Bilet so‘ragan haqiqiy funksiyalarni qur; demo natijani haqiqiy xizmat deb ko‘rsatma.

## 4. Haqiqiy kodni olish

- [Tahrirlanadigan kod + tayyor build + local shriftlar + yo‘riqnomalar](https://azizbeksafarov.github.io/design/bloom/source.zip)
- [AI o‘qiydigan tanlangan kod](https://azizbeksafarov.github.io/design/bloom/source.md)
- [Kodning HTML ko‘rinishi](https://azizbeksafarov.github.io/design/bloom/source.html)
- [Paket, fayllar va SHA-256 manifesti](https://azizbeksafarov.github.io/design/bloom/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/material-expressive/dist/index.html)
- [GitHub source papkasi](https://github.com/AzizbekSafarov/azizbeksafarov.github.io/tree/main/design/material-expressive)

Source archive va matn bir snapshotdan yaratilgan. ZIPni ochgach `AGENTS.md`, `AI-BRIEF.md`, `CURRENT-TASK.md`, `HANDOFF.md` ni o‘qi. Ish papkasi `site/`. Internet faylni o‘qish imkoniyati bo‘lmasa, foydalanuvchi AI matnini nusxalaydi yoki ZIPni beradi; havola o‘z-o‘zidan xotira, kodni tahrirlash yoki brauzer imkoniyatini yaratmaydi.

## 5. Fayl xaritasi va ishga tushirish

- `src/main.jsx`: UI, dialogs, Material Web bindings, theme and persisted state.
- `src/style.css`: shared M3 tokens, typography, responsive layout and control states.
- `src/persistence.js`: non-destructive startup reads, recovery backups and JSON export; `src/persistence.test.js`: failure regressions.
- `src/model.js`: sample data, categories, validation, search and progress.
- `src/model.test.js`: baseline model tests; `src/combinations.test.js`: combined filters, task masks and storage boundaries.
- `package.json` + `package-lock.json`: actual dependencies; `vite.config.js`: relative build base.
- `src/fonts/`, `public/`: local fonts and licenses; `dist/`: built static site.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [src/main.jsx](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/main.jsx.txt)
- [src/style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/style.css.txt)
- [src/persistence.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/persistence.js.txt)
- [src/persistence.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/persistence.test.js.txt)
- [src/model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/model.js.txt)
- [src/model.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/model.test.js.txt)
- [src/combinations.test.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/bloom/files/src/combinations.test.js.txt)
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
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir; backend foydalanuvchining joriy Render + Supabase rejasi va biletga mos quriladi. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
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
- 320/390, 768, 1024, 1440 px: asosiy CTA va yozuvlar kesilmaydi; sahifa bo‘ylab keraksiz horizontal scroll yo‘q. Jadvalning belgilangan ichki scrolli mumkin.
- Bo‘sh/noto‘g‘ri ma’lumot, topilmagan natija, uzun matn, klaviatura Tab/Enter/Escape, ko‘rinadigan fokus va qo‘llangan light/dark rang juftlari.
- Tegishli saqlanishni reload bilan tekshir; shrift/JS/CSS 404lari va ishlashga ta’sir qiladigan konsol xatolari qolmasin.

## 9. Davom ettirish va topshirish

`CURRENT-TASK.md` ga bilet, vaqt va cheklovni yoz. `HANDOFF.md` ga fayllar, bajarilgan/qolgan ish, haqiqiy tekshiruv, ochiq xato va keyingi bitta amalni yozib bor. Shu faylni yangi AIga berish davom ettirishni osonlashtiradi. Oxirida ishlaydigan link/local run, editable source, talablarga mos test qaydi va himoya uchun muammo → yechim → to‘liq oqim → texnologiya → cheklov izohini tayyorla. “Xatosiz”, “to‘liq testlangan” yoki ball kafolatini dalilsiz aytma.

# Jonli o‘zgarish — AI’siz tahrir qo‘llanmasi

Imzolangan nizomga ko‘ra ekspert himoyada matn, rang, element yoki kontentni real vaqtda o‘zgartirishni so‘rashi mumkin. Ishtirokchi buni o‘z qurilmasida bajara olmasa, ish baholanmaydi. Ustoz AI saytidagi nizom nusxasida bu band yo‘q, baholash loyihasi esa topshirilgan loyihani o‘zgartirmaslikni aytadi — joydagi ko‘rsatma hal qiladi. Eng qattiq holatga tayyor bo‘lish uchun quyidagilarni AI’siz bajarishni oldindan mashq qiling.

## Dizayn starterida yoki boshqa loyihada — umumiy usul

1. VS Code’da loyiha papkasini oching (File → Open Folder).
2. **Ekranda ko‘ringan matnni** tahrirlanadigan source ichidan qidiring: HTML starterda site/, Bloom’da site/src/. Ctrl+Shift+F → matnning bir qismini yozing. Hujjat, backup yoki minified dist nusxasini tasodifan tahrirlamang.
3. O‘zgartiring → **Ctrl+S**.
4. HTML starterda lokal HTTP preview’ni yangilang. Bloom’da source tahriri uchun dev server yoki qayta build kerak: ZIP ildizidan `npm --prefix site run build`, so‘ng `node serve.mjs` oynasini yangilang. Ctrl+Shift+R eski keshni chetlab o‘tadi; source build o‘rnini bosmaydi.
5. Bekor qilish kerak bo‘lsa **Ctrl+Z** → Ctrl+S. HTML starterda previewni yangilang; Bloom production preview uchun yana `npm --prefix site run build` bajaring, keyin yangilang. Build xato bilan tugasa eski dist ko‘rinishi mumkin — uni qaytarilgan yoki yangi source natijasi deb qabul qilmang.

Rang: avval o‘sha elementning CSS qoidasi yoki rang tokenini toping. Bitta hex kodini butun loyihada Ctrl+H bilan ommaviy almashtirmang: matn, fon va fokus bir xil koddan foydalangan bo‘lishi mumkin. Fon bilan ustidagi matn kontrastini birga tekshiring. Bloom palitrasi JavaScript orqali Material rang rollarini hosil qiladi; faqat CSS tokenini o‘zgartirish keyingi renderda bekor bo‘lishi mumkin.

Element: shu starter uchun AI-BRIEF.md dagi yangi sahifa/ekran va amal xaritasidan foydalaning. Nusxalangan blokda id, label-for, aria-labelledby va handler bog‘lanishlarini yangilang. Faqat ko‘rinadigan kartani nusxalash data va hisobga avtomatik qo‘shmaydi.

### Source o‘zgardi, lekin eski matn ko‘rinyaptimi?

Bloom’da `src/model.js` dagi initialProjects boshlang‘ich namunadir. Brauzerda yaroqli saqlangan loyiha bo‘lsa, nom, izoh va qadamlar o‘sha yozuvdan olinadi; source namunani o‘zgartirish uni almashtirmaydi. Mavjud loyihani ichki **Tahrirlash** formasidan yangilang. Yangi default mazmunni tekshirish uchun alohida toza brauzer profili/kontekstidan foydalaning. Avvalgi ishni o‘chirib sinovni o‘tkazmang: kerak bo‘lsa oldin JSON nusxasini eksport qiling; sxema o‘zgarsa migratsiyani alohida loyihalang. Dev server va preview boshqa portda bo‘lsa, ularning localStorage ma’lumoti ham alohida bo‘ladi.

## Zaxira skeletda — kodsiz, `tahrir.html` paneli bilan

Himoyadan oldin: `tahrir.html` ni oching va bir marta **Ctrl+S** bosib papkadagi `malumot.js` ni tanlang. Fayl yozish ruxsati saqlansa keyingi saqlash shu faylga yozadi. Brauzer fayl tanlash API’sini qo‘llamasa yuklab olingan malumot.js ni loyiha papkasiga ko‘chiring. “Saqlandi” yoki yuklash xabarini tekshiring. Saytni yonidagi tabda oching.

| Ekspert so‘rovi | Panelda | Keyin |
|---|---|---|
| “Sarlavhani o‘zgartiring” | 3. Bosh sahifa → Katta sarlavha (sayt nomi — 1. Asosiy) | Ctrl+S → saytda Ctrl+Shift+R |
| “Rangni qizil qiling” | 1. Asosiy → rang kvadratchasi yoki Rang kodi `#c62828` | Ctrl+S → Ctrl+Shift+R |
| “Yana bitta element qo‘shing” | 4. Ro‘yxat → pastdagi **+ Qo‘shish** → nomi, sana… | Ctrl+S → Ctrl+Shift+R |
| “Yangi blok/kartochka qo‘shing” | 3. Bosh sahifa → Afzalliklar → **+ Qo‘shish** | Ctrl+S → Ctrl+Shift+R |
| “Formaga maydon qo‘shing” | 5. Ariza formasi → **+ Qo‘shish** → nomi, turi, Majburiy | Ctrl+S → Ctrl+Shift+R |
| “Tugma yoki menyu matnini o‘zgartiring” | 3. Bosh sahifa (tugmalar), 2. Sahifalar (menyu), 5. (yuborish tugmasi) | Ctrl+S → Ctrl+Shift+R |
| “Bu bo‘limni olib tashlang” | 2. Sahifalar → belgini olib tashlang | Ctrl+S → Ctrl+Shift+R |

O‘ng tomondagi oldindan ko‘rish natijani saqlashdan oldin ham ko‘rsatadi. Sayt hamma o‘zgarishni `malumot.js` dan oladi — boshqa faylga tegish shart emas.

Panelsiz (faqat zarurat bo‘lsa): `malumot.js` ni Bloknot yoki VS Code’da ochib, faqat qo‘shtirnoq `"..."` ichidagi matnni o‘zgartiring.

## Dizayn starterlarida qayerni o‘zgartirish kerak

Jadval amaldagi kod asosida avtomatik yaratilgan. Rang ustunida CSS fayllarda eng ko‘p uchragan rang kodlari va soni berilgan: bu sonlar rangning vazifasi yoki to‘g‘ri almashtirish ko‘rsatmasi emas. Tegishli selektor/tokenni tekshiring va faqat kerakli qoidadagi rangni o‘zgartiring. Asosiy matn fayllari ko‘pincha bir qatorga siqilgan — Ctrl+F bilan qidiring.

| Dizayn | Asosiy sarlavha | `:root` rang o‘zgaruvchilari | Eng ko‘p rang kodlari (style.css + layout.css) |
|---|---|---|---|
| Forma | `site/index.html` → “Tanlangan buyumlar. 01—03 / OBYEKTLAR” | `--ink: #25251f`, `--line: #c3c2b8`, `--muted: #55564e` | `#255a3c` ×3, `#111111` ×2, `#4b4e40` ×2, `#736858` ×2 |
| Samar | `site/index.html` → “Samarqand, o‘z ritmingizda.” | `--ink: #173952`, `--line: #c3d1d8`, `--modal: #fffdf7` | `#49616f` ×17, `#c3d1d8` ×11, `#173952` ×8, `#586f7d` ×4 |
| Orbita | `site/index.html` → “ORBITAL ATLAS” | `--ink: #e6eef0`, `--line: #294046`, `--modal: #102024` | `#b1f56a` ×14, `#294046` ×10, `#6e969d` ×3, `#111111` ×2 |
| Nashr | `site/index.html` → “Nashr” | `--ink: #20201c`, `--line: #a3a094`, `--modal: #f4f1e6` | `#a3271e` ×9, `#444438` ×5, `#aaa695` ×3, `#111111` ×2 |
| Hisob | `site/index.html` → “Hududlar hisoboti” | `--ink: #26313a`, `--line: #d4d9de`, `--modal: #fff` | `#5c6972` ×8, `#c7d0d6` ×7, `#111111` ×2, `#26313a` ×2 |
| Ziyo | JavaScript chizadi: `site/model.js` yoki `site/identity.js` dan matnni qidiring | `--ink: #402d26`, `--line: #d8c9bb`, `--focus: #2451ad` | `#402d26` ×4, `#bd4731` ×4, `#2451ad` ×3, `#111111` ×2 |
| Meros | `site/index.html` → “Shahar xotirasi” | `--ink: #e5f344`, `--line: #6573e9`, `--modal: #f2f1df` | `#e5f344` ×26, `#1d2ed8` ×22, `#c5ceff` ×6, `#1524b3` ×4 |
| Yuksal · SI | `site/index.html` → “Yangi davr. Yangi imkoniyat. Uni birga yaratamiz.” | `--navy: #062c35`, `--navy-deep: #041e26`, `--cream: #f8fcfb` | `#3f6269` ×6, `#168a43` ×4, `#062c35` ×2, `#f8fcfb` ×2 |
| Bloom (React) | `site/src/main.jsx` → `<h1>` | UI: rang palitrasi; source: `SEEDS` / `applyMaterialTheme` (`src/main.jsx`) | ZIP ildizidan `npm --prefix site run dev` yoki `npm --prefix site run build` → `node serve.mjs` |

Forma va Samar’da statik karta hamda model yozuvini bir xil ID bilan moslang; SI’da tashabbus tugmasi va model, Orbita’da model, missiya tugmasi va koordinatalar birga yangilanadi. Nashr/Meros/Ziyo mazmuni modeldan chiziladi; HTMLga ikkinchi nusxa qo‘shmang. Bloom’da src/model.js va src/main.jsx qo‘llanadi. Matn modeldan kelayotgan bo‘lsa aynan o‘sha manbani tahrirlang. Har starterning AI-BRIEF.md xaritasi ustuvor.

## Mashq (tanlovdan oldin)

Taymer qo‘ying va 2 daqiqada bajaring: sarlavha matni → asosiy rang → yangi element → Ctrl+Shift+R bilan ko‘rsatish. Bu ixtiyoriy tayyorgarlik; oldingi sinovda noma’lum qolgan amalni tekshiring.

Asosiy ish Codex bilan tanlangan starterda bo‘ladi: yuqoridagi umumiy usulni (Ctrl+Shift+F → o‘zgartirish → Ctrl+S → Ctrl+Shift+R) oldindan tushunib, zarur joyini tekshiring. AI ishlamay qolib sayt skeletda yig‘ilgan bo‘lsa, jonli o‘zgarishning hammasi `tahrir.html` panelida.

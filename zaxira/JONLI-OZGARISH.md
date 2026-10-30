# Jonli o‘zgarish — himoyada 1 daqiqada, AI’siz

Imzolangan nizomga ko‘ra ekspert himoyada matn, rang, element yoki kontentni real vaqtda o‘zgartirishni so‘rashi mumkin. Ishtirokchi buni o‘z qurilmasida bajara olmasa, ish baholanmaydi. Shuning uchun quyidagilarni AI’siz bajarishni oldindan mashq qiling.

## Dizayn starterida yoki boshqa loyihada — umumiy usul

1. VS Code’da loyiha papkasini oching (File → Open Folder).
2. **Ekranda ko‘ringan matnni** butun papkadan qidiring: **Ctrl+Shift+F** → matnning bir qismini yozing → natijani bosing.
3. O‘zgartiring → **Ctrl+S**.
4. Brauzerda **Ctrl+Shift+R** (keshsiz yangilash). `node serve.mjs` keshni o‘chiradi; fayl to‘g‘ridan-to‘g‘ri ochilgan bo‘lsa Ctrl+Shift+R shart.
5. Ishlamasa **Ctrl+Z** → Ctrl+S → yana yangilang.

Rang: CSS faylda rang kodini qidiring (**Ctrl+H** — topish va almashtirish) yoki `:root` ichidagi o‘zgaruvchini o‘zgartiring. Rang kodini tanlash: VS Code’da rang kvadratchasini bosing yoki `#d32f2f` (qizil), `#2e7d32` (yashil), `#1d4ed8` (ko‘k), `#6a1b9a` (binafsha) dan foydalaning.

Element: mavjud o‘xshash blokni (karta, tugma, bo‘lim) nusxalang, yoniga qo‘ying va matnini o‘zgartiring. Yangi kod yozishdan ko‘ra nusxalash xavfsizroq.

## Zaxira skeletda — kodsiz, `tahrir.html` paneli bilan

Himoyadan oldin: `tahrir.html` ni oching va bir marta **Ctrl+S** bosib papkadagi `malumot.js` ni tanlang. Shundan keyin har saqlash so‘ramasdan yoziladi. Saytni yonidagi tabda oching.

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

Jadval amaldagi kod asosida avtomatik yaratilgan. Rang ustunida CSS fayllarda eng ko‘p uchragan rang kodlari va soni berilgan: ularni **Ctrl+H** bilan almashtirish butun saytning shu rangini o‘zgartiradi. Asosiy matn fayllari ko‘pincha bir qatorga siqilgan — Ctrl+F bilan qidiring.

| Dizayn | Asosiy sarlavha | `:root` rang o‘zgaruvchilari | Eng ko‘p rang kodlari (style.css + layout.css) |
|---|---|---|---|
| Forma | `site/index.html` → “Tanlangan buyumlar. 01—03 / OBYEKTLAR” | `--ink:#25251f`, `--line:#c3c2b8`, `--muted:#55564e` | `#255a3c` ×3, `#111111` ×2, `#4b4e40` ×2, `#736858` ×2 |
| Samar | `site/index.html` → “Samarqand, o‘z ritmingizda.” | `--ink:#173952`, `--line:#c3d1d8`, `--modal:#fffdf7` | `#49616f` ×17, `#c3d1d8` ×11, `#173952` ×8, `#586f7d` ×4 |
| Orbita | `site/index.html` → “ORBITAL ATLAS” | `--ink:#e6eef0`, `--line:#294046`, `--modal:#102024` | `#b1f56a` ×13, `#294046` ×10, `#6e969d` ×3, `#111111` ×2 |
| Nashr | `site/index.html` → “Nashr” | `--ink:#20201c`, `--line:#a3a094`, `--modal:#f4f1e6` | `#a3271e` ×9, `#444438` ×5, `#aaa695` ×3, `#111111` ×2 |
| Hisob | `site/index.html` → “Hududlar hisoboti” | `--ink:#26313a`, `--line:#d4d9de`, `--modal:#fff` | `#5c6972` ×8, `#c7d0d6` ×7, `#111111` ×2, `#26313a` ×2 |
| Ziyo | JavaScript chizadi: `site/model.js` yoki `site/identity.js` dan matnni qidiring | `--ink:#402d26`, `--line:#d8c9bb`, `--focus:#2451ad` | `#402d26` ×4, `#bd4731` ×4, `#2451ad` ×3, `#111111` ×2 |
| Meros | `site/index.html` → “Shahar xotirasi” | `--ink:#e5f344`, `--line:#6573e9`, `--modal:#f2f1df` | `#e5f344` ×25, `#1d2ed8` ×21, `#c5ceff` ×6, `#1524b3` ×4 |
| Yuksal · SI | `site/index.html` → “Yangi davr. Yangi imkoniyat. Uni birga yaratamiz.” | `--navy:#062c35`, `--navy-deep:#041e26`, `--cream:#f8fcfb` | `#3f6269` ×6, `#168a43` ×4, `#062c35` ×2, `#f8fcfb` ×2 |
| Bloom (React) | `site/src/main.jsx` → `<h1>` | `site/src/style.css`: `--md-sys-color-primary` | npm kerak: o‘zgarish `npm run dev` ochiq bo‘lgandagina ko‘rinadi |

Ko‘p dizaynda kartalar ham `site/index.html` da, ham `site/model.js` dagi ro‘yxatda bor. Yangi karta qo‘shilsa, ikkala joyda ham bir xil `id` bilan qo‘shing. Faqat matn yoki rang so‘ralsa, model va kodni o‘zgartirmang.

## Mashq (tanlovdan oldin)

Taymer qo‘ying va 2 daqiqada bajaring: sarlavha matni → asosiy rang → yangi element → Ctrl+Shift+R bilan ko‘rsatish. Ikki marta muvaffaqiyatli bajarilmaguncha takrorlang.

Kod yozmasangiz: tanlov uchun skelet + `tahrir.html` eng xavfsiz yo‘l — jonli o‘zgarishning hammasi panelda. Dizayn starterini tanlasangiz, yuqoridagi umumiy usulni (Ctrl+Shift+F → o‘zgartirish → Ctrl+S → Ctrl+Shift+R) oldindan kamida ikki marta mashq qiling.

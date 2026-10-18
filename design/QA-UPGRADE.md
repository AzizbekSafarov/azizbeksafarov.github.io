# Kutubxona va topshiriq oqimi — 2026-10-18

613 avtomatik test o‘tdi, 0 xato. Avvalgi 544 test saqlandi; 69 ta yangi tekshiruv topshiriq ko‘chirish va ma’lumotni saqlashdagi haqiqiy xatolarga qaratilgan. Ular barcha qurilmalarning kafolati emas.

## Natija va sabab

- Bosh sahifada namunalar katta ko‘rinishda, tavsif bilan birga beriladi. Tanlanganda tafsilot, jonli sayt, AI yo‘riqnomasi va kod ZIP ochiladi. Barcha namunalarga qaytish klaviatura fokusini tiklaydi. Alohida dizayn havolasini nusxalash va clipboard ishlamasa qo‘lda olish bor. Kattalashtirilgan namunadagi tanlangan belgi ham 40×40 px; eski CSS 22 px qilib qo‘ygan ustuvorlik tuzatildi.
- Topshiriq formasi aniq bilet, qolgan vaqt va joydagi cheklovlardan Markdown hosil qiladi. Qoralama brauzerda saqlanadi; JSON eksport/import, import/tozalashni qaytarish va CURRENT-TASK.md yuklash bor. Ikki tabdagi yangi qoralamani eski tab ogohlantirishsiz almashtirmaydi. Noto‘g‘ri fayl mavjud matnni o‘zgartirmaydi. Hech qaysi maydon serverga yuborilmaydi.
- Bloom sahifani ochishning o‘zida buzilgan yoki o‘qilmagan loyihalar ustiga namuna yozgan. Endi boshlang‘ich o‘qish hech narsa yozmaydi. Buzilgan ma’lumot almashtirilishidan oldin asl baytlar zaxiralanadi; zaxiralash ishlamasa asl yozuv saqlanadi. Boshlang‘ich o‘qish imkonsiz bo‘lsa, shu sessiya xotirada ishlaydi, keyin ruxsat qaytsa ham noma’lum loyihalarni bosmaydi. Ko‘rinayotgan loyihalarni JSONga yuklash mumkin.
- Yuksalda storage to‘lib qolsa, keyingi tanlash oldingi disk nusxasini yana o‘qib, joriy reja amallarini yo‘qotgan. Shu sessiyada reja xotirada saqlanadi va ogohlantirish ko‘rinadi. Nashr/Merosda saqlash xatosi muvaffaqiyat xabari bilan darhol yashirilishi tuzatildi.
- Yetti sektor sahifasida modul yoki shrift yuklanmasa sarlavhani doimiy yashiradigan font-loading darvozasi olib tashlandi. Har birining alohida shrift va kompozitsiyasi saqlandi. Takrorlanuvchi saqlash/ochish amallari mazmunli accessible nomlarga ega.

## Avtomatik dalil

`node design/qa/run.mjs` — 613 passed, 0 failed. `assets/hq/starter-controller.test.mjs`dagi 12 test haqiqiy controller va modelni soddalashtirilgan DOM/storage VM muhiti orqali ishlatadi; ular brauzer testlari emas. Model testlari JSON uzunlik/bayt chegarasi, o‘zbekcha matn, kutilmagan propertylarni chiqarish, ikki tab to‘qnashuvi, quota, Markdown fence va to‘qqiz dizayn havolasini tekshiradi. Bloomda 141 test bor.

Tarqatilgan to‘qqiz source.zip alohida papkaga ochilib, ichidagi jami 488 test o‘tdi. Bu 613 testning bir qismi, qo‘shimcha 488 test degani emas. [Paket natijalari](https://azizbeksafarov.github.io/design/qa/portable-results-20261017.json).

`python design/verify_site.py` — 33 yaratilgan sahifa, 517 lokal murojaat, 48 JS/CSS resurs: yo‘qolgan resurs/anchor, takror ID yoki asosiy markup xatosi topilmadi. Meros katalogdan runtime’da yaratiladigan aniq anchorlar alohida hisobga olinadi. Bu skript brauzerda rasm chizmaydi.

`python design/verify_handoff.py` ZIP tarkibi, SHA-256, manifest, o‘qiladigan source nusxalari, assetlar va umumiy kitni tekshiradi. Bloom yangi persistence moduli ham AI o‘qiydigan source eksportiga kiritildi. CSS/JS va model importlari content hash bilan versiyalanadi.

## Jonli tekshiruv

17-oktabrda Chromium asosidagi brauzerda to‘qqiz dizayn 320/390/768/1440 px da tekshirildi: gorizontal overflow yo‘q. Bosh sahifa, tafsilot va topshiriq formasi qo‘shimcha o‘lchamlarda ko‘rildi. To‘qqiz dizaynni tanlash, fokus, qidiruv bo‘sh holati, Savdo filtri va ulashish amali bajarildi.

Topshiriqni reload orqali tiklash, majburiy maydonlar, JSON import, tozalash/qaytarish, ikki tabdagi o‘zgarishdan ogohlantirish va saqlangan nusxani tanlash bajarildi. CURRENT-TASK.md, topshiriq JSONi va Bloom loyiha JSONi haqiqiy brauzer yuklamalari orqali olindi. Mobil menyuda Escape fokusni tugmaga qaytardi. Storage denial/quota va buzilgan loyiha regressiyalari unit fixture’da tekshirildi.

18-oktabrda 12 sahifa/holat × 5 kenglik (1440, 1024, 768, 390, 320 px) = 60 responsive holat qo‘shimcha tekshirildi. So‘ralgan kenglik haqiqiy innerWidth bilan solishtirildi; gorizontal overflow, takror ID, yashirin h1 yoki buzilgan ko‘rinadigan rasm topilmadi. Yakuniy responsive o‘lchovlar va dalillar: [QA-UPGRADE-BROWSER.json](https://azizbeksafarov.github.io/design/QA-UPGRADE-BROWSER.json). Eski 16-oktabr QA baseline sifatida alohida saqlandi. Bu tekshiruv to‘liq accessibility, security yoki barcha brauzerlar auditi emas.

## Dizayn qarorlariga asos

[NN/g: variantlar orasidagi farqni ochiq ko‘rsatish](https://www.nngroup.com/articles/explicit-differences/) — tanlashdan oldin haqiqiy katta ko‘rinish va mazmuniy tavsif berishga asos bo‘ldi. [web.dev: browser-level image loading](https://web.dev/articles/browser-level-image-lazy-loading) — pastdagi namunalarga native lazy loading, boshidagi rasmlarga eager loading qo‘llandi. Bu o‘lchangan tezlik oshishi haqidagi da’vo emas. Rasm o‘lchamlari markup’da berilgan; namunalar alohida dizaynlar sifatida saqlandi.

## Qayta yaratish

```sh
python design/build_collection.py
python design/build_refined.py
npm run build --prefix design/material-expressive
node design/qa/run.mjs
python design/build_handoff.py
python design/verify_handoff.py
python design/verify_site.py
```

Source tahriridan keyin generator, Bloom production buildi va ZIPlar birga yangilanadi. Vite muvaffaqiyatli build berdi; taxminan 741 KB JS / 195 KB gzip uchun large-chunk tavsiyasi bor. Bu bitta ishlaydigan client ilova; backend yoki hisoblararo sinxronlash qo‘shilmadi. Tanlov bileti bajarilganda aynan yangi ishni qayta sinab, CURRENT-TASK.md va HANDOFF.md ga haqiqiy natijani yozish kerak.

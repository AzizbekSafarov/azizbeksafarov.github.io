# [Sayt nomi] — tanlov loyihasi

> Bu fayl topshirish shabloni. Kvadrat qavsdagi joylarni to‘ldiring, keraksiz izohlarni o‘chiring.
> Papka nomi (loyiha hujjatidagi tavsiya): `bosqich_ishtirokchi-kodi_bilet-raqami`, masalan `hududiy_017_003`.

## Qisqa tavsif

- **Ishtirokchi kodi / bilet:** [kod] / [bilet raqami]
- **Kim uchun:** [biletdagi foydalanuvchi]
- **Qaysi muammoni hal qiladi:** [bir jumla]
- **Asosiy foydalanuvchi yo‘li:** [masalan: ro‘yxatdan tanlaydi → ariza beradi → arizalarida ko‘radi]

## Ishga tushirish

1. `index.html` faylini brauzerda oching (ikki marta bosish yetadi, internet va o‘rnatish kerak emas).
2. Yoki server bilan: `node serve.mjs` → http://127.0.0.1:8080/ (Node.js bo‘lsa).
3. Yoki: `python -m http.server 8080 --bind 127.0.0.1` → http://127.0.0.1:8080/

## Fayllar

| Fayl | Nima bor |
|---|---|
| `tahrir.html`, `tahrir.js` | Kodsiz tahrirlash paneli: mazmunni formalar orqali o‘zgartiradi va `malumot.js` ni yozadi |
| `malumot.js` | Barcha matn, rang, ro‘yxat elementlari va forma maydonlari |
| `uslub.css` | Asosiy ko‘rinish va o‘zgaruvchilar |
| `mavzular/mavzular.css`, `mavzular/shrift/` | 9 ta mavzu (`malumot.js`: `mavzu`) va ularning shriftlari (SIL OFL litsenziyasi bilan) |
| `index.html` | Sahifalar tuzilishi |
| `ilova.js` | Sahifalar, qidiruv, forma, saqlash mantig‘i |
| `mantiq.js` | Tekshirish, filtr, saqlash funksiyalari (testlangan) |
| `tekshir.js` | `?tekshir` bilan ochiladigan o‘z-o‘zini tekshirish paneli |

## Biletdagi talablar va sinov natijalari

| Kod | Talab | Qayerda | Qanday sinadim | Natija |
|---|---|---|---|---|
| T1 | [talab] | [sahifa / maydon] | [qadamlar] | [o‘tdi / qisman / ochiq xato] |
| T2 | [talab] | | Bo‘sh forma yubordim → xato xabari | |
| T3 | [talab] | | To‘g‘ri test ma’lumoti → tasdiq | |
| T4 | [talab] | | 390 / 768 / 1366 px | |

Avtomatik tekshiruv (`index.html?tekshir` → Tekshirish → Nusxalash) natijasini shu yerga qo‘ying:

```text
[natija]
```

Mantiq testlari: `node --test mantiq.test.mjs` → [o‘tdi / soni].

Topilgan va tuzatilgan xato: [nima edi → qanday tuzatildi → qayta sinov].

## Vositalar va manbalar

- Vositalar: [masalan: VS Code, Chrome, Codex / Antigravity / boshqa — qaysi biri nimaga ishlatilgani]
- Asosiy so‘rovlar yoki tarix: [AI ishlatilgan bo‘lsa 2–5 ta asosiy so‘rov]
- Shablon: ochiq “zaxira skelet” (https://azizbeksafarov.github.io/zaxira/). Biletga moslashtirilgan qismlar: [matnlar, ro‘yxat, forma maydonlari, ranglar, qo‘shilgan funksiya]
- Rasmlar va matnlar manbasi: [tashkilotchi bergan materiallar / o‘zim yozdim]

## Cheklovlar

- Ma’lumot faqat shu brauzerda saqlanadi (localStorage); serverga yuborilmaydi.
- Forma sinov uchun; haqiqiy ro‘yxatga yozilmaydi.
- [boshqa ma’lum cheklov]

## Zaxira dalillar

- Ekran tasvirlari: [3–5 ta fayl nomi]
- Asosiy amal videosi: [1–2 daqiqalik fayl nomi]

Ochiq parol, token yoki maxfiy kalit yo‘q.

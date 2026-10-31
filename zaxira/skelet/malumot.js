/* =====================================================================
   MALUMOT.JS — saytning BARCHA mazmuni shu faylda.
   Biletdagi ma'lumotni shu yerga yozing; ilova.js va mantiq.js
   o'zgarmasa ham sayt yangi mazmun bilan ishlaydi.

   Qoidalar:
   - Matnni qo'shtirnoq "..." ichida yozing. Har qatordan keyin vergul.
   - Oxirgi elementdan keyin vergul bo'lsa ham bo'ladi.
   - Saqlang (Ctrl+S) va brauzerni yangilang (F5).
   - Xato bo'lsa: brauzerda F12 → Console qizil qatorni ko'rsatadi.

   QUYIDAGILAR NAMUNA. Bu bilet emas: tanlovdagi haqiqiy topshiriq
   ma'lumoti bilan almashtiring va "namuna" belgisini o'chiring.
   ===================================================================== */

window.SAYT = {
  nomi: "Sayt nomi",                         // logo, sarlavha, brauzer tabida
  shior: "Bir jumlada: kim uchun va qanday foyda beradi.",
  tavsif: "Bu yerga saytning maqsadi yoziladi: foydalanuvchi kim, qaysi muammo hal bo‘ladi va u saytda nima qila oladi.",
  mavzu: "toza",                             // KO'RINISH: toza, forma, samar, orbita, nashr, hisob, ziyo, meros, yuksal
  rang: "",                                  // ASOSIY RANG (#RRGGBB). Bo'sh qolsa mavzuning o'z rangi
  namuna: true,                              // true — sahifada "Namuna ma'lumot" ogohlantirishi chiqadi
  saqlash: true,                             // true — arizalar brauzer xotirasiga saqlanadi va "Arizalarim" ishlaydi
  omborKaliti: "zaxira-arizalar-v1",          // boshqa loyiha bilan aralashmasligi uchun nomini o'zgartirish mumkin

  // Menyudagi nomlar. Keraksiz sahifani o'chirish uchun qatorni o'chiring yoki // bilan izohga oling.
  sahifalar: {
    bosh: "Bosh sahifa",
    royxat: "Ro‘yxat",
    ariza: "Ariza",
    saqlangan: "Arizalarim",
    haqida: "Biz haqimizda"
    // statistika: "Statistika"            // yoqsangiz: arizalar soni va to'lganlik jadvali
  },

  bosh: {
    sarlavha: "Asosiy sarlavha shu yerda",
    matn: "Ikki-uch jumla: foydalanuvchi bu saytda nima qila oladi va keyingi qadam nima.",
    rasm: "",                                // ixtiyoriy: "rasmlar/bosh.jpg" — bosh ekran rasm ustida chiqadi
    rasmIzoh: "",
    asosiyTugma: "Ro‘yxatni ko‘rish",
    ikkinchiTugma: "Ariza qoldirish",
    afzalliklar: [
      { sarlavha: "Tanlang", matn: "Ro‘yxatdan mos variantni toping: qidiruv va filtr bor." },
      { sarlavha: "Ariza bering", matn: "Qisqa formani to‘ldiring. Xato bo‘lsa sayt aniq aytadi." },
      { sarlavha: "Kuzating", matn: "Yuborilgan arizalar shu brauzerda saqlanadi." }
    ]
  },

  royxat: {
    sarlavha: "Ro‘yxat",
    matn: "Qidiring yoki turini tanlang. Batafsil ma’lumot uchun kartani oching.",
    bosh: "Hech narsa topilmadi. Boshqa so‘z bilan qidiring yoki filtrni tozalang.",
    saralash: true,                          // nom / sana / narx bo'yicha saralash tanlovi
    // Mavzuga mos so'zlar (bo'sh qolsa standart). Masalan mahsulotlar: turi "Kategoriya", joylar "Omborda".
    yorliqlar: { turi: "Turi", joylar: "Qolgan joy", toldi: "Joy qolmagan", tanlash: "Tanlash" }
  },

  // "Saqlanganlar" sahifasi matnlari (sarlavha bo'sh qolsa menyudagi nom olinadi)
  saqlangan: { bosh: "Hali ariza yo‘q.", ochirish: "O‘chirish" },

  haqida: {
    sarlavha: "Biz haqimizda",
    matnlar: [
      "Tashkilot yoki loyiha haqida qisqa ma’lumot.",
      "Bog‘lanish yoki ish tartibi haqida ikkinchi xatboshi."
    ],
    aloqa: [
      { nom: "Manzil", qiymat: "Namuna manzil" },
      { nom: "Telefon", qiymat: "+998 00 000 00 00" },
      { nom: "Ish vaqti", qiymat: "Dushanba–shanba, 09:00–18:00" }
    ]
  },

  // Bosh sahifadagi savol-javob (bo'sh ro'yxat bo'lsa ko'rinmaydi)
  savollar: [
    { savol: "Namuna savol?", javob: "Namuna javob." }
  ],

  pastki: "Sinov uchun yaratilgan sayt. Forma ma’lumotlari hech qayerga yuborilmaydi."
};

/* Ro'yxatdagi elementlar (kurs, tadbir, mahsulot, xizmat...).
   Majburiy: id (takrorlanmas, bo'sh joysiz), nom.
   Ixtiyoriy: turi, sana (YYYY-MM-DD), vaqt, joy, narx (so'm, 0 = Bepul),
   joylar (sig'im; berilsa to'lganda ariza yopiladi), tavsif, rasm (fayl yo'li),
   qoshimcha: { "Muallif": "...", "Davomiyligi": "..." } — biletdagi boshqa ustunlar. */
window.ELEMENTLAR = [
  { id: "n1", nom: "Namuna element 1", turi: "1-tur", sana: "2026-12-01", vaqt: "10:00", joy: "Namuna manzil", narx: 0, joylar: 12, tavsif: "Bu yerga biletdagi tavsif yoziladi.", qoshimcha: { "Mas’ul": "Namuna mas’ul" } },
  { id: "n2", nom: "Namuna element 2", turi: "1-tur", sana: "2026-12-02", vaqt: "14:00", joy: "Namuna manzil", narx: 0, joylar: 2, tavsif: "Sig‘imi kichik: ikki ariza bilan to‘ladi." },
  { id: "n3", nom: "Namuna element 3", turi: "2-tur", sana: "2026-12-03", vaqt: "11:00", joy: "Namuna manzil", narx: 50000, joylar: 0, tavsif: "joylar: 0 — cheklov yo‘q." },
  { id: "n4", nom: "Namuna element 4", turi: "2-tur", sana: "2026-12-04", vaqt: "16:00", joy: "Namuna manzil", narx: 0, joylar: 20, tavsif: "Qisqa tavsif." },
  { id: "n5", nom: "Namuna element 5", turi: "3-tur", sana: "2026-12-05", vaqt: "09:30", joy: "Namuna manzil", narx: 120000, joylar: 15, tavsif: "Qisqa tavsif." },
  { id: "n6", nom: "Namuna element 6", turi: "3-tur", sana: "2026-12-06", vaqt: "15:00", joy: "Namuna manzil", narx: 0, joylar: 10, tavsif: "Qisqa tavsif." }
];

/* Ariza formasi. Har maydon:
   nom (ichki nom, lotin harfda), yorliq (ekranda), tur, majburiy,
   min/max (matn uzunligi yoki son chegarasi), maslahat (maydon ostidagi izoh), xato (o'z xabaringiz).
   Turlar: matn, matnmaydon, telefon, email, son, sana, tanlash, belgi.
   "element" nomli tanlash maydoni ro'yxatdagi elementlar bilan avtomatik to'ldiriladi. */
window.FORMA = {
  sarlavha: "Ariza qoldirish",
  matn: "Majburiy maydonlar * bilan belgilangan.",
  tugma: "Yuborish",
  muvaffaqiyat: "Arizangiz qabul qilindi!",
  takrorXato: "Bu telefon raqami bilan shu tanlovga ariza allaqachon bor.",
  toldiXato: "Bu tanlovda joy qolmagan. Boshqasini tanlang.",
  jamiKorsat: false,                         // true: "Jami: narx × soni" formada va arizada
  jamiYorliq: "Jami",
  maydonlar: [
    { nom: "ism", yorliq: "Ism va familiya", tur: "matn", majburiy: true, min: 2, max: 60, avto: "name" },
    { nom: "telefon", yorliq: "Telefon", tur: "telefon", majburiy: true, maslahat: "Masalan: +998 90 123 45 67", avto: "tel" },
    { nom: "element", yorliq: "Tanlov", tur: "tanlash", majburiy: true },
    { nom: "izoh", yorliq: "Izoh", tur: "matnmaydon", majburiy: false, max: 300 },
    { nom: "rozilik", yorliq: "Ma’lumotlarim faqat shu ariza uchun ishlatilishiga roziman", tur: "belgi", majburiy: true }
  ]
};

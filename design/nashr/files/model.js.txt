export const data=[
  {
    "id": "city",
    "name": "O‘qish uchun kundan bir parcha",
    "category": "madaniyat",
    "tag": "MADANIYAT",
    "image": "reading.jpg",
    "intro": "Telefonni bir chetga qo‘yib, bir matn bilan qolish. Diqqat uchun kichik, lekin ongli tanlov.",
    "text": [
      "Har kuni ko‘plab sarlavhalarni ko‘ramiz. Bitta matnni boshidan oxirigacha o‘qish esa boshqa tajriba: fikrning qanday qurilganini kuzatish imkonidir.",
      "Qisqa mashq: bir maqolani tanlang. O‘qib bo‘lgach, uning asosiy fikrini bir jumlada yozing va muallifga beradigan bitta savolingizni belgilang.",
      "Bu original namuna matni. Surat Joseph Sintum tomonidan olingan; undagi odamning shaxsiy fikri yoki odatlari haqida da’vo qilinmaydi."
    ],
    "alt": "Deraza yonida gazeta o‘qiyotgan kishi"
  },
  {
    "id": "craft",
    "name": "Hunar — qo‘l bilan o‘ylash",
    "category": "madaniyat",
    "tag": "HUNAR",
    "image": "craft.jpg",
    "intro": "Material, bosim va sabr. Buyum shakllanishini kuzatish mehnatning ko‘rinmaydigan qismini ochadi.",
    "text": [
      "Tayyor buyum ortida ko‘plab kichik qarorlar bor: qayerini yupqatish, qayerini tekislash, qachon kutish kerak. Material bilan ishlash shu qarorlarni ko‘rinadigan qiladi.",
      "Vizual kuzatish mashqi: bir buyumni tanlang. Uning shakli, sirt teksturasi va vazifasi orasidagi bog‘liqlikni yozing. Bu original tahririy namuna; muayyan ustaning texnikasi haqida da’vo emas."
    ],
    "alt": "Loy ustida ishlayotgan hunarmandning qo‘llari"
  },
  {
    "id": "learn",
    "name": "Bir savol, yaxshiroq o‘rganish",
    "category": "talim",
    "tag": "TA’LIM",
    "intro": "Tayyor javobdan oldin yaxshi savol yozib ko‘ring. Bilim amalda tekshirilganda mustahkamlanadi.",
    "text": [
      "Bir mavzuni o‘rganishdan oldin uchta savol yozing. Nima ma’lum? Nima tushunarsiz? Natijani qanday tekshirish mumkin?",
      "O‘rganganingizni boshqa kishiga oddiy misol bilan tushuntiring. Tushuntirish qiyin bo‘lgan qism keyingi mashq uchun yo‘nalish beradi."
    ]
  },
  {
    "id": "tools",
    "name": "Vosita tanlashdan oldin vazifani aniqlang",
    "category": "texnologiya",
    "tag": "TEXNOLOGIYA",
    "intro": "Yangi texnologiya har bir muammoning javobi emas. Avval foydalanuvchi bajaradigan amalni yozing.",
    "text": [
      "Sayt uchun birinchi savol texnologiya nomi bo‘lmasligi kerak. Foydalanuvchi nimaga erishishi, qanday ma’lumot kerakligi va qaysi natija tekshirilishi aniqlansin.",
      "Eng kichik ishlaydigan oqimni tuzing. Keyin ma’lumotni saqlash, xato holati va foydalanish qulayligini shu oqimning bir qismi sifatida tekshiring."
    ]
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}

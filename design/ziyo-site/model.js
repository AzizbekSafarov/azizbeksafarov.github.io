export const data=[
  {
    "id": "structure",
    "name": "Mazmun va tuzilma",
    "tag": "01 / HTML",
    "minutes": "8 daqiqa",
    "title": "Har bir elementning vazifasi bor.",
    "text": "HTML sahifa mazmunining tuzilishini bildiradi. Sarlavha, navigatsiya, asosiy mazmun va tugma alohida semantik vazifalarga ega.",
    "example": "<main>\n  <h1>Mening loyiham</h1>\n  <button>Rejaga qo‘shish</button>\n</main>",
    "question": "Amal bajaradigan element uchun qaysi teg mos?",
    "answers": [
      "<div>",
      "<button>",
      "<p>"
    ],
    "correct": 1,
    "explanation": "button klaviatura, fokus va tugma semantikasini tabiiy qo‘llaydi. div bu xatti-harakatlarni o‘z-o‘zidan bermaydi."
  },
  {
    "id": "style",
    "name": "Vizual iyerarxiya",
    "tag": "02 / CSS",
    "minutes": "10 daqiqa",
    "title": "Muhim narsani ko‘z birinchi topsin.",
    "text": "Masshtab, oraliq va kontrast birga ishlaydi. Uchta yozuv roli tanlang: sarlavha, o‘qish matni va yordamchi belgi. Har bir elementni bir xil darajada ta’kidlamang.",
    "example": "h1 { font-size: 3rem; }\np { line-height: 1.6; }\n.note { color: #566; }",
    "question": "Asosiy tugma qanday ajralishi kerak?",
    "answers": [
      "Barcha panellar bilan bir xil",
      "Aniq kontrast va amal yozuvi bilan",
      "Faqat kattaroq soya bilan"
    ],
    "correct": 1,
    "explanation": "Kontrast va tushunarli amal yozuvi foydalanuvchiga nimani bosish mumkinligini ko‘rsatadi."
  },
  {
    "id": "interaction",
    "name": "Amal va natija",
    "tag": "03 / JAVASCRIPT",
    "minutes": "12 daqiqa",
    "title": "Bosishdan keyin nima sodir bo‘ladi?",
    "text": "Interfeys amal natijasini ko‘rsatishi kerak. Tekshirish, xato, muvaffaqiyat va bo‘sh holatlar bir oqimning qismlari. Faqat chiroyli bosiladigan tugma yetarli emas.",
    "example": "button.addEventListener(\"click\", () => {\n  status.textContent = \"Rejaga qo‘shildi\";\n});",
    "question": "Foydalanuvchi noto‘g‘ri javob bersa nima kerak?",
    "answers": [
      "Hech narsa ko‘rsatmaslik",
      "Sahifani yopish",
      "Sabab va qayta urinish imkoniyati"
    ],
    "correct": 2,
    "explanation": "Aniq izoh xatoni tushunishga yordam beradi. Foydalanuvchi qayta urinib natijani tekshira olishi kerak."
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
export function grade(id,answer){const p=data.find(p=>p.id===id);return !!p&&Number.isInteger(answer)&&answer===p.correct;}

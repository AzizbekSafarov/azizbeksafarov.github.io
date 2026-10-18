# AI API va Telegram — sinovlar va ishlatish qoidalari

Yangilangan: 2026-10-18. Bu ochiq, kalitlarsiz hujjat. Kalit qiymatlari, akkaunt identifikatorlari va billing ma’lumotlari bu yerda yo‘q.

## Haqiqatan tekshirilgan

2026-10-18 kuni rasmiy endpointlarga sintetik “Connectivity test. Reply with only OK.” so‘rovi yuborildi. Natijalar vaqtga bog‘liq snapshot; hozirgi uptime yoki kelajakdagi ishlash kafolati emas. Har qatorda bittadan o‘lchov, streaming ishlatilmadi. Response modellari bo‘yicha umumiy sifat reytingi chiqarmang.

| Xizmat | Kalit roli | Model / amal | HTTP | Natija | To‘liq so‘rov vaqti |
| --- | --- | --- | --- | --- | --- |
| Groq | Asosiy | openai/gpt-oss-120b | 200 | OK | 406 ms |
| Groq | Zaxira | openai/gpt-oss-120b | 200 | OK | 447 ms |
| Gemini | Asosiy | gemini-3.8-flash | 200 | OK | 10183 ms |
| Gemini | Zaxira | gemini-3.8-flash | 200 | OK | 3608 ms |
| Telegram | Bot | getMe | 200 | Token botga tegishli | 3881 ms |
| Telegram | Bot | getChat | 200 | Berilgan shaxsiy chat topildi | 355 ms |

Qo‘shimcha dastlabki sinovlar: Groq openai/gpt-oss-20b va Gemini gemini-3.5-flash-lite ham HTTP 200, OK. Telegram getWebhookInfo muvaffaqiyatli; sinov paytida webhook o‘rnatilmagan. Xabar yuborish va ikki tomonlama AI-bot oqimi hali sinovdan o‘tmagan. Real so‘rovlar faqat ulanishni tasdiqlaydi; tutor sifati, uzun kontekst va yuklama alohida tekshiriladi.

## Tier va xizmat nomlarini ajratish

Free tier — provayderning bepul rejasi. Billing tier — akkaunt/loyihaning to‘lov va kvota darajasi. Serving tier — so‘rovning xizmat ko‘rsatish turi. Gemini javobidagi serviceTier=standard pullik billing yoqilganini isbotlamaydi. Modelga muvaffaqiyatli so‘rov ham akkaunt Free ekanini yoki cheksiz kvotani isbotlamaydi. Biz billing dashboard’da tasdiqlamaganmiz.

Groq 120B sinov javob sarlavhalarida 1000 request/day va 8000 token/min limit ko‘rsatdi. Rasmiy Free jadvalida GPT-OSS 120B uchun 30 RPM, 1000 RPD, 8000 TPM, 200000 TPD ko‘rsatilgan (2026-10-18 tekshiruvi). Aniq organization limitlari dashboard’dan olinadi. Bir organization’dagi projectlar uning umumiy chegarasini oshirmaydi.

Gemini limitlari model va loyiha tier’iga bog‘liq. Bir Google Cloud project’dagi ikkita kalit bir xil model kvotasini bo‘lishadi. Ikki saqlangan kalitning bir loyihaga tegishliligi bizning qisqa sinovlarda aniqlanmagan. Qo‘shimcha kvota deb hisoblamang. Groq va Gemini turli provayderlar; ular orasidagi fallback alohida xizmatni tanlaydi.

## Backend integratsiyasi

Asosiy arxitektura /arxitektura/ai.md’da. Render Node API’da server secrets’dan kalit o‘qi; frontendga yuborma. GROQ_API_KEY / GROQ_API_KEY_BACKUP va GEMINI_API_KEY / GEMINI_API_KEY_BACKUP nomlari backend uchun kelishilgan konvensiya, SDK zaxira kalitni o‘zi avtomatik almashtiradi degani emas. Model nomi alohida konfiguratsiya bo‘lsin: GROQ_MODEL=openai/gpt-oss-120b va GEMINI_MODEL=gemini-3.8-flash hozir sinalgan nomlar; amaliy vazifada qayta bahola.

Groq OpenAI-compatible endpoint: POST https://api.groq.com/openai/v1/chat/completions, Authorization Bearer serverda. Gemini rasmiy API endpointi yoki SDK, API kaliti serverda x-goog-api-key sarlavhasida. Kalitni URL query’sida saqlama/loglama. Gemini 3.8 Flash uchun minimal thinking qo‘llanmaydi; oldingi qisqa sinov low bilan bajarilgan. Bu parametrni boshqa modellarga avtomatik ko‘chirma.

Supabase Google OAuth Client ID/Secret — AI kalitlaridan boshqa sozlama; Google Cloud’da yaratiladi. Telegram tokeni — bot vakolati, chat ID esa xabar manzili. Bot tokenini frontenddan chaqirma. Webhook uchun alohida secret, update_id deduplikatsiyasi va kerakli chat ruxsatlari tekshiriladi.

## Xatolar

- 401: noto‘g‘ri yoki bekor qilingan credential; qayta-qayta urinish o‘rniga sozlamani tekshir.
- 403: model, loyiha yoki foydalanuvchi ruxsati yetishmaydi.
- 429: RPM/TPM/RPD kabi limitlar yoki provayder cheklovini ajrat; Retry-After’ni hurmat qil. Bir loyihadagi kalitni aylantirish kvotani tiklamaydi.
- Timeout/5xx: cheklangan retry/backoff, so‘ng mos boshqa provayder. Har foydalanuvchi savoliga cheksiz yoki parallel takroriy chaqiruv yuborma.
- Ikkala AI ham ishlamasa aniq xabar ko‘rsat; asosiy saqlash, qidirish va kabinet ishlashda davom etsin.

## Keyingi sinov

Bir xil o‘zbekcha topshiriqlar, fakt aniqligi, JSON strukturasi, manbaga tayangan javob, noto‘g‘ri ma’lumotdan himoya, bir nechta foydalanuvchi va kvota holatini sinash. Oldingi bir so‘zli OK vaqtlaridan sifat yoki barqarorlik xulosasi chiqarmaslik. Natijani yangi sana, model, anonim kalit roli va test usuli bilan yozish; maxfiy response/request yoki tokenlarni chiqarmaslik.


[AI ish tartibi va diagnostika](https://azizbeksafarov.github.io/ish-tartibi/ai.md)

## Rasmiy manbalar

- [Groq: model va limitlar](https://console.groq.com/docs/rate-limits)
- [Groq: loyihalar va umumiy tashkilot limiti](https://console.groq.com/docs/projects)
- [Gemini: loyiha kvotasi](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Gemini: tariflar](https://ai.google.dev/gemini-api/docs/pricing)
- [Telegram: webhook va secret token](https://core.telegram.org/bots/api#setwebhook)
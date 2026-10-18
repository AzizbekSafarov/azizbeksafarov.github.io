# Tanlov dizaynlarini davom ettirish

Faol: Orbita, Nashr, Hisob, Ziyo, Meros, Samar, Forma, Bloom, Yuksal. /design/ — jonli katalog; /design/start/ — bilet va vaqtdan AI matni. /ai.md — markaziy kontekst. Har bir /design/{slug}/ — AI brief, source.zip, source.md va SHA-256 manifest.

ZIP root: node serve.mjs; source site/ ichida. Npm kerak emas; Bloom source buildi alohida. AGENTS.md, AI-BRIEF.md, CURRENT-TASK.md, HANDOFF.md tartibida o‘qing. Bilet va joydagi reglament ustuvor.

Joriy server va AI konteksti: /ish-tartibi/ai.md → /ish-tartibi/status.json → /arxitektura/ai.md → /api/ai.md. ZIP ichida ham WORKFLOW.md, PROJECT-STATUS.json, ARCHITECTURE.md va API-GUIDE.md bor. Tasdiqlangan reja — Render + Supabase; mahsulotga hali ulanmagan xizmatlar reja deb ko‘rsatiladi. Aniqlangan xato, ehtimoliy xavf, ko‘rsatma va tavsiya alohida.

Kutubxonani yangilash: build_collection.py beshta sektor dizayni; build_refined.py Samar/Forma; build_hq.py bosh qarorgoh; build_handoff.py barcha paket va sahifalarni yig‘adi. verify_handoff.py hash, amaldagi runtime, kontekst nusxalari va resurslarni tekshiradi. To‘liq tartib BUILD-GUIDE.md’da. Previews haqiqiy brauzer screenshotlari; eski QA faqat o‘z sanasi va yozilgan tekshiruviga tegishli.

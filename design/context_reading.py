"""Shared online reading order; project-local facts precede public snapshots."""
from html import escape
URL = 'https://azizbeksafarov.github.io'
STEPS = [
 ('Joriy bilet va loyiha holati', None, 'Bu ochiq to‘plamda haqiqiy bilet yo‘q. /design/handoff/task-boundary.json manba rollarini ajratadi. Biletni foydalanuvchi beradi; yo‘q bo‘lsa so‘ra, mavzu o‘ylab topma. CURRENT-TASK.md / HANDOFF.md ommaviy nusxalari bo‘sh shablon. Dizayn demo yozuvlari va nizom loyihasidagi namunaviy bilet joriy topshiriq emas.'),
 ('Joriy tanlov yangilanishi', '/design/handoff/current-competition.md', '2026-10-28: nizom, baholash, himoya, amaliy vaqt va ruxsatlar tekshiruvi. CURRENT-COMPETITION-FACTS.json qoida qaydi; loyiha yoki eski xabar yangi tasdiqlangan talab emas.'),
 ('To‘liq tayyorgarlik', '/tayyorgarlik/ai.md', 'START-HERE mundarija. To‘liq o‘qish so‘ralganda full-context.md yoki reading-plan.json dagi barcha manbalar; o‘qish qaydida to‘liq/qisman/ochilmadi holati. Ishtirokchi vazifalari, to‘liq paket va shaffof brend qoidalari.'),
 ('Markaziy kontekst', '/ai.md', 'Umumiy tayyorgarlik va tegishli havolalar. Hozir ochiq/o‘qilgan hujjatni qayta ochish shart emas.'),
 ('Ish tartibi va holat snapshot’i', '/ish-tartibi/ai.md', 'Shu qo‘llanma bilan /ish-tartibi/status.json ni o‘qi. Snapshot jonli xizmat holati emas; loyiha dalillari va joriy foydalanuvchi qarori ustuvor.'),
 ('Tanlov konteksti va mezonlar', '/design/handoff/competition.md', '/design/handoff/score-workplan.md bilan talab → qabul dalilini bog‘la. /ustoz/CONTEXT-STATUS.md va to‘liq nizom /ustoz/nizom.md manba maqomini tushuntiradi; to‘liq matn kerak bo‘lsa qisqa kirish bilan almashtirma.'),
 ('Arxitektura va API', '/arxitektura/ai.md', '/api/ai.md bilan birga sahifa rollari, server chegarasi, kvota, xavfsizlik va sifat mezonlarini o‘qi. Rejalashtirilgan xizmatni yaratilgan deb hisoblama.'),
 ('Bitta tanlangan dizayn va kod', '/design/', 'Faqat tanlangan /design/SLUG/ai.md va source ZIP. ZIP ichida START-HERE.md → AGENTS.md / AI-BRIEF.md → kerakli source; joriy vazifa va holat birinchi qadamdayoq tekshiriladi. Barcha dizaynlarni birdan yuklama.'),
]
MACHINE_ORDER = [
 '/design/handoff/task-boundary.json; this public package supplies no actual ticket',
 'current user ticket and project-local CURRENT-TASK.md / HANDOFF.md; public copies are templates',
 '/design/handoff/current-competition.md and current-competition-facts.json',
 '/tayyorgarlik/ai.md; full-context.md or reading-plan.json for full reading',
 '/ai.md', '/ish-tartibi/ai.md', '/ish-tartibi/status.json',
 '/design/handoff/competition.md', '/design/handoff/score-workplan.md',
 '/ustoz/CONTEXT-STATUS.md and full regulations as needed',
 '/arxitektura/ai.md', '/api/ai.md', '/design/SELECTED-SLUG/ai.md and selected package instructions/source',
]
def markdown():
 return '\n'.join(f'{i}. '+(f'[{title}]({URL}{path})' if path else title)+f' — {detail}' for i,(title,path,detail) in enumerate(STEPS,1))+'\n'
def html():
 return '<ol class="reading-path">'+''.join(f'<li><span>{i:02}</span><div>'+(f'<a href="{path}">{escape(title)}</a>' if path else f'<strong>{escape(title)}</strong>')+f'<p>{escape(detail)}</p></div></li>' for i,(title,path,detail) in enumerate(STEPS,1))+'</ol>'

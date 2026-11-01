"""Shared online reading order; project-local facts precede public snapshots."""
from html import escape
URL = 'https://azizbeksafarov.github.io'
STEPS = [
 ('Bilet', None, 'Chatda yoki loyihadagi CURRENT-TASK.md da. Bu ochiq to‘plamda bilet yo‘q; ikkalasida ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Loyiha davom etayotgan bo‘lsa, HANDOFF.md ni ham o‘qi.'),
 ('Tanlov qoidalari va baholash', '/design/handoff/competition.md', 'Qoidalar holati /design/handoff/current-competition.md va mezon → ish → dalil rejasi /design/handoff/score-workplan.md bilan: biletni qabul sinovlari va himoya dalillariga aylantirish uchun.'),
 ('Tanlangan dizayn va kod', '/design/', 'Faqat tanlangan /design/SLUG/ai.md va uning source ZIPi. ZIP ichida AGENTS.md ish qoidalari va o‘qish tartibini beradi. Boshqa dizaynlar kodini o‘qish shart emas.'),
 ('Ish usuli', '/ish-tartibi/ai.md', 'Diagnostika, uch sinov qatlami, topshirish va ehtimoliy muammolar katalogi (ssenariylar, aniqlangan xato emas).'),
 ('Mahsulot tuzilishi va server rejasi', '/arxitektura/ai.md', 'Sahifa tuzilishi va professional sifat mezonlari. Render + Supabase qismi va /api/ai.md faqat bilet server, login yoki baza talab qilsa kerak; bu reja, yaratilgan xizmat emas.'),
 ('To‘liq manbalar', '/tayyorgarlik/ai.md', 'Nizomlarning to‘liq matni /ustoz/nizom.md, barcha tadqiqot /ustoz/ai.md, yig‘ma /tayyorgarlik/full-context.md. Qoida savoli tug‘ilsa tegishli bo‘limni to‘liq o‘qi; foydalanuvchi so‘rasa reading-plan.json bo‘yicha hammasini.'),
]
MACHINE_ORDER = [
 'current user ticket (chat or project-local CURRENT-TASK.md) and HANDOFF.md; this public package supplies no ticket',
 '/design/handoff/competition.md, current-competition.md, score-workplan.md',
 '/design/SELECTED-SLUG/ai.md and the selected package AGENTS.md / source',
 '/ish-tartibi/ai.md',
 '/arxitektura/ai.md; /api/ai.md only when the ticket needs a server, login or database',
 'full sources as needed: /ustoz/nizom.md, /ustoz/ai.md, /tayyorgarlik/full-context.md, reading-plan.json',
]
def markdown():
 return '\n'.join(f'{i}. '+(f'[{title}]({URL}{path})' if path else title)+f' — {detail}' for i,(title,path,detail) in enumerate(STEPS,1))+'\n'
def html():
 return '<ol class="reading-path">'+''.join(f'<li><span>{i:02}</span><div>'+(f'<a href="{path}">{escape(title)}</a>' if path else f'<strong>{escape(title)}</strong>')+f'<p>{escape(detail)}</p></div></li>' for i,(title,path,detail) in enumerate(STEPS,1))+'</ol>'

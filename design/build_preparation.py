"""Complete source index and readable preparation guide; no exercise/private state."""
from pathlib import Path
from hashlib import sha256
import json
from html import escape

ROOT = Path(__file__).resolve().parent
SITE = ROOT.parent
COMMON = [
 ('TASK-BOUNDARY.json','design/handoff/task-boundary.json'),
 ('CURRENT-COMPETITION.md','design/handoff/current-competition.md'),
 ('CURRENT-COMPETITION-FACTS.json','design/handoff/current-competition-facts.json'),
 ('PREPARATION.md','design/preparation-guide.md'),
 ('WORKFLOW.md','ish-tartibi/ai.md'),
 ('PROJECT-STATUS.json','ish-tartibi/status.json'),
 ('ARCHITECTURE.md','arxitektura/ai.md'),
 ('API-GUIDE.md','api/ai.md'),
 ('API-EVIDENCE.json','api/verification.json'),
 ('CONTEXT-STATUS.md','design/handoff/context-status.md'),
 ('SCORING-WORKPLAN.md','design/handoff/score-workplan.md'),
 ('FULL-COMPETITION-CONTEXT.md','design/handoff/competition-full.md'),
 ('REGULATIONS.md','design/handoff/regulations.md'),
 ('DESIGN-STANDARD.md','design/DESIGN-STANDARD.md'),
]
RECEIPT = '''# O‘qish qaydi — loyiha ichida to‘ldiriladi

Bu bo‘sh shablon. Hali biror manba o‘qilgan deb belgilangan emas.

Joriy bilet/manba va sana: [...]
Tanlangan dizayn va source hash/versiya: [...]
O‘qish rejimi: [to‘liq / foydalanuvchi kelishgan tor doira]

| Fayl/bo‘lim | O‘qilgan oraliq | Holat: to‘liq/qisman/ochilmadi | Ishga ta’siri yoki qolgan qism |
| --- | --- | --- | --- |
| [...] | [...] | [...] | [...] |

Bir xil matn boshqa formatda o‘qilgan bo‘lsa uning nomi/manbasini ko‘rsat. Hash mosligi o‘qilganlik isboti emas. Output kesilgan bo‘lsa qolgan oraliqni o‘qi. To‘liq rejim tugamagan bo‘lsa tugadi demagin.

Qayta aytish: maqsad; dizayn tili; stack; real/reja holati; birinchi to‘liq oqim; noma’lum yoki ziddiyatli talab.
Bu qayd maxfiy qiymat va shaxsiy ma’lumotsiz loyiha papkasida saqlanadi.
'''

def normalized(path):
    # A section and its indexed digest must describe the same bytes, including EOF.
    text = (SITE/path).read_text(encoding='utf-8-sig').replace('\r\n','\n')
    return text if text.endswith('\n') else text+'\n'

def package_plan(files):
    names=['CURRENT-TASK.md','HANDOFF.md']+[n for n,_ in COMMON]+['AI-BRIEF.md','AGENTS.md','README.md','CHECKLIST.md']
    return json.dumps({'schema_version':1,'mode':'full-context plus selected design',
      'meaning':'Reading map, not evidence that an agent has read these files. Current user task and local project state take priority.',
      'documents':[{'path':n,'bytes':len(files[n]),'sha256':sha256(files[n]).hexdigest()} for n in names],
      'source':'site/; inspect relevant complete editable files and runtime assets',
      'receipt':'READ-RECEIPT.md','not_required':'Other designs source and duplicate identical exports'},ensure_ascii=False,indent=2)+'\n'

def build():
    folder=SITE/'tayyorgarlik';folder.mkdir(exist_ok=True)
    intro='# Tanlov uchun to‘liq umumiy kontekst\n\nBu yerda joriy bilet yo‘q. Haqiqiy topshiriqni foydalanuvchi beradi; namuna yoki demo mavzudan vazifa chiqarma. Birinchi TASK-BOUNDARY.json manba rollarini ajratadi. Bu yig‘ma nusxa asl manbalarni qisqartirmaydi. Ularning maqomi va sanasi o‘z bo‘limida saqlanadi. Eski reja joriy vazifa emas. Tanlangan dizayn source’i alohida ZIPda. Bo‘limlar reading-plan.json bilan xaritalangan.\n\n'
    parts=[intro];entries=[];line=len(intro.splitlines())+1
    for name,path in COMMON:
        text=normalized(path);header=f'\n# MANBA: {name}\n\nAsl fayl: {path}\n\n'
        start=line+len(header.splitlines())
        data=text.encode('utf-8')
        entries.append({'package_path':name,'source_url':'https://azizbeksafarov.github.io/'+path,
          'bytes':len(data),'sha256':sha256(data).hexdigest(),'start_line':start,'end_line':start+len(text.splitlines())-1})
        chunk=header+text;parts.append(chunk);line+=len(chunk.splitlines())
    full=''.join(parts)
    (folder/'full-context.md').write_text(full,encoding='utf-8',newline='\n')
    (folder/'ai.md').write_text(normalized('design/preparation-guide.md'),encoding='utf-8',newline='\n')
    (folder/'READ-RECEIPT.md').write_text(RECEIPT,encoding='utf-8',newline='\n')
    (folder/'reading-plan.json').write_text(json.dumps({'schema_version':1,'updated':'2026-10-28',
        'full_context_url':'https://azizbeksafarov.github.io/tayyorgarlik/full-context.md',
        'full_context_sha256':sha256(full.encode()).hexdigest(),'full_context_bytes':len(full.encode()),
        'documents':entries,'selected_design':'Read manifest and full source archive for only the selected design.',
        'receipt':'https://azizbeksafarov.github.io/tayyorgarlik/READ-RECEIPT.md',
        'scope':'All common context; does not mark content as read or replace current on-site rules.'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')

def build_page():
    from workspace_hq import frame
    from build_handoff import render_md
    content='''<div class="document-page"><p class="eyebrow">BILETDAN OLDIN → YANGI AI → TO‘LIQ LOYIHA</p><h1>Tayyorgarlik joyida.<br>Asosni yo‘qotmang.</h1><p class="document-lead">Sizning vazifangiz, AI o‘qiydigan manbalar, dizaynni to‘liq olish va brendni izchil moslashtirish — bitta yo‘lda.</p><div class="blueprint-actions"><a class="button dark" href="/design/start/">Bilet va dizaynni berish ↗</a><a href="/tayyorgarlik/full-context.md">To‘liq umumiy kontekst ↓</a><a href="/tayyorgarlik/reading-plan.json">Fayllar xaritasi ↗</a><a href="/design/get_starter.py" download>Tekshirib olish yordamchisi ↓</a></div><p class="context-explainer"><strong>2026-10-28 tanlov yangilanishi:</strong> <a href="/design/handoff/current-competition.md">Nizom, amaliy vaqt, akkaunt va ruxsatlar →</a>. Yangi tasdiqlangan nizom/texnik qoida topilmadi; eski loyiha va yangi talab ajratilgan.</p><nav aria-label="Tayyorgarlik yo‘li"><p><strong>Siz:</strong> bilet + dizayn + vaqt + joydagi qoidalar.</p><p><strong>AI:</strong> to‘liq kontekst → asl paket → bitta ishlaydigan oqim → tekshiruv → topshirish.</p></nav><details><summary>To‘liq o‘qish va moslashtirish qo‘llanmasi</summary><article class="prose">'''+render_md(normalized('design/preparation-guide.md'))+'''</article></details><p class="context-explainer">Kirish matni mundarija. <a href="/tayyorgarlik/ai.md">Ushbu qo‘llanma Markdown’da</a> · <a href="/tayyorgarlik/READ-RECEIPT.md">O‘qish qaydi shabloni</a>. To‘liq nizom va tadqiqot yig‘ma faylda qisqartirilmagan; boshqa dizaynlarning kodini birdan o‘qish talab qilinmaydi.</p></div>'''
    (SITE/'tayyorgarlik/index.html').write_text(frame('Tanlovga tayyorgarlik',content,'preparation'),encoding='utf-8',newline='\n')

if __name__=='__main__':
    build();build_page()

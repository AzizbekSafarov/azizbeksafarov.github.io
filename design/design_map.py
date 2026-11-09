"""DESIGN-MAP.md: a per-starter map, read from the real files, of what to edit when the user asks for a change."""
import re
from pathlib import Path

ROLES = {
    'index.html': 'sahifa tuzilishi, bo‘limlar va boshlang‘ich matn',
    'style.css': 'rang tokenlari, shriftlar va komponentlar',
    'layout.css': 'sahifa joylashuvi, responsive va holatlar',
    'workspace.css': 'loyiha ish maydoni uslubi',
    'app.js': 'tugmalar, dialoglar, saqlash va eksport',
    'main.jsx': 'ekranlar, tugmalar va Material komponentlari',
    'ProjectWorkspace.jsx': 'loyiha ichidagi ish maydoni',
    'model.js': 'namuna ma’lumotlar, tekshiruv va hisob-kitob',
    'motion.js': 'zarrachali harakat va animatsiya',
    'routes.js': 'hash manzillar',
    'persistence.js': 'brauzerda saqlash',
    'identity.js': 'dizaynga xos kichik holatlar',
}
COLOR = re.compile(r'#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|oklch\(')


def _sources(slug, base):
    root = base / 'src' if slug == 'bloom' else base
    prefix = 'site/src/' if slug == 'bloom' else 'site/'
    files = [p for p in sorted(root.iterdir()) if p.suffix in {'.html', '.css', '.js', '.jsx'} and '.test.' not in p.name]
    if slug == 'bloom':
        files = [p for p in files if p.name != 'index.html']
    return root, prefix, files


def _tokens(css):
    found = {}
    for block in re.findall(r':root[^{]*\{(.*?)\}', css, re.S):
        for name, value in re.findall(r'(--[\w-]+)\s*:\s*([^;]+);', block):
            value = ' '.join(value.split())
            if COLOR.search(value):
                found.setdefault(name, value)
    return found


def _palette(files):
    counts, where = {}, {}
    for path in files:
        for match in re.findall(r'#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b', path.read_text(encoding='utf-8')):
            value = match.lower()
            if len(value) == 4:
                value = '#' + ''.join(c * 2 for c in value[1:])
            counts[value] = counts.get(value, 0) + 1
            where.setdefault(value, set()).add(path.name)
    top = sorted(counts.items(), key=lambda item: -item[1])[:14]
    return [(value, count, ', '.join(sorted(where[value]))) for value, count in top]


def _fonts(css):
    faces = []
    for block in re.findall(r'@font-face\s*\{(.*?)\}', css, re.S):
        family = re.search(r'font-family:\s*["\']?([^"\';]+)', block)
        source = re.search(r'url\(["\']?([^"\')?]+)', block)
        if family and source and (family[1], source[1]) not in faces:
            faces.append((family[1], source[1]))
    return faces


def _sections(html):
    rows = []
    for tag, attrs in re.findall(r'<(header|main|section|aside|footer|dialog|nav)\b([^>]*)>', html):
        ident = re.search(r'\bid="([^"]+)"', attrs)
        label = re.search(r'aria-label="([^"]+)"', attrs)
        if ident or label:
            rows.append((tag, ident[1] if ident else '—', label[1] if label else ''))
    return rows


def render(template):
    slug, name = template['slug'], template['name']
    base = Path(__file__).resolve().parent / ('material-expressive' if slug == 'bloom' else slug + '-site')
    root, prefix, files = _sources(slug, base)
    css = '\n'.join(p.read_text(encoding='utf-8') for p in files if p.suffix == '.css')
    entry = base / 'index.html'
    extra_css = list((root / 'fonts').glob('*.css')) if (root / 'fonts').is_dir() else []
    inline = '\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', entry.read_text(encoding='utf-8'), re.S))
    tokens = _tokens(css + inline)
    fonts = _fonts('\n'.join([css, inline] + [p.read_text(encoding='utf-8') for p in extra_css]))
    palette = _palette(files)
    css_file = prefix + next((p.name for p in files if p.name == 'style.css'), 'style.css')
    media = prefix + next((p.name for p in files if p.name == 'layout.css'), 'style.css')
    data = prefix + 'model.js'
    behaviour = prefix + ('main.jsx' if slug == 'bloom' else 'app.js')
    markup = 'site/index.html' if slug != 'bloom' else 'site/src/main.jsx'
    images = 'site/images/' if (base / 'images').is_dir() else 'site/public/' if slug == 'bloom' else 'site/ (yangi `images/` papkasini oching)'
    after = ('Har tahrirdan keyin `site/` ichida `npm run test` va `npm run build` bajaring; ko‘rinadigan natija `site/dist/` dan chiqadi.'
             if slug == 'bloom' else 'Build kerak emas: faylni saqlab, brauzerni yangilash yetarli.')
    lines = [
        f'# {name} — dizayn xaritasi', '',
        'Foydalanuvchi kod yozmaydi va o‘zgarishni oddiy so‘z bilan aytadi. Bu fayl o‘sha so‘zni aniq fayl va amalga bog‘laydi. Qiymatlar shu paketdagi haqiqiy fayllardan olingan.', '',
        '## Kimning so‘zi ustun', '',
        '1. Foydalanuvchining aniq aytgani (rang, shrift, joylashuv, bo‘lim, matn) vizual kontraktdan ustun: darhol bajaring, “dizaynni saqlash kerak” deb rad etmang.',
        '2. Bilet talabi va joydagi tashkilotchi ko‘rsatmasi hech qachon buzilmaydi; zid bo‘lsa, buni bir jumlada ayting va qaror so‘rang.',
        '3. Aytilmagan hamma narsada shu dizaynning shrift, rang roli va tugma uslubi saqlanadi. Vizual kontrakt tasodifiy buzilishdan himoya qiladi, foydalanuvchini cheklamaydi.',
        '4. O‘zgarishni butun saytga izchil qo‘llang: bitta tokenni o‘zgartirib, unga bog‘liq matn kontrasti (kamida 4.5:1), hover va tanlangan holatlarni ham tekshiring.', '',
        f'{after}', '',
        '## Foydalanuvchi aytsa', '',
        '| So‘z | Qayerda | Nima qilinadi |', '|---|---|---|',
        f'| “Rangni o‘zgartir”, “ko‘kroq qil” | “Asosiy ranglar” jadvali, `{css_file}` | Token yetmaydi: ko‘p rang to‘g‘ridan-to‘g‘ri yozilgan. Jadvaldagi qiymatni ko‘rsatilgan fayllarda birga almashtiring, keyin kontrastni tekshiring |',
        f'| “Shriftni almashtir”, “kattaroq yoz” | `{css_file}`, `@font-face` | Yangi shriftni loyihaga lokal qo‘shing; o‘lchamni sarlavha va matn darajalari bo‘yicha o‘zgartiring |',
        f'| “Matnni o‘zgartir”, “sarlavha boshqacha bo‘lsin” | `{markup}`, `{data}` | Boshlang‘ich matn sahifada, takrorlanadigan kartalar ma’lumotda |',
        f'| “Rasmni almashtir” | `{images}` | Faylni almashtiring, alt matnini yangilang, litsenziyani `CREDITS.md` ga yozing |',
        f'| “Yangi bo‘lim”, “yangi sahifa qo‘sh” | `{markup}`, `{behaviour}`, `{media}` | Mavjud bo‘lim naqshidan foydalaning, navigatsiyaga ulang, responsive holatini qo‘shing |',
        f'| “Bu bo‘limni olib tashla” | `{markup}`, `{behaviour}` | Bo‘limni, unga havolani va ishlatilmay qolgan kodni birga olib tashlang |',
        f'| “Forma qo‘sh”, “tekshiruv bo‘lsin” | `{data}`, `{behaviour}` | Qoidani modelga, xabarni ekranga yozing; bo‘sh va noto‘g‘ri qiymatni sinang |',
        f'| “Saqlansin”, “yangilaganda yo‘qolmasin” | `{behaviour}` | Storage kaliti versiyasi bilan saqlang, reload va boshqa tabda sinang |',
        f'| “Telefonda buzilyapti” | `{media}` | 390, 768 va 1366 px da ko‘ring, sababini tuzating |',
        f'| “Butunlay boshqa kayfiyat” | `{css_file}`, `{media}` | Avval tokenlar va shriftlarni o‘zgartiring; freymvorkni almashtirmang |',
        f'| “Hakam shu joyni o‘zgartirishni so‘radi” | yuqoridagi qatorlar | Eng kichik xavfsiz tahrirni qiling, shu oqimni qayta sinang (`ZAXIRA/JONLI-OZGARISH.md`) |',
        '', '## Fayllar', '', '| Fayl | Qator | Vazifasi |', '|---|---|---|',
    ]
    if slug == 'bloom':
        lines.append('| `site/index.html` | — | Vite kirish fayli |')
    for path in files:
        lines.append(f'| `{prefix}{path.name}` | {len(path.read_text(encoding="utf-8").splitlines())} | {ROLES.get(path.name, "dizaynning qo‘shimcha fayli")} |')
    lines += ['', '## Rang tokenlari', '']
    if tokens:
        lines += ['| Token | Hozirgi qiymat |', '|---|---|'] + [f'| `{k}` | `{v}` |' for k, v in list(tokens.items())[:48]]
    else:
        lines.append('`:root` da rang tokeni kam; ranglar komponent qoidalarida yozilgan. O‘zgartirishdan oldin ularni qidirib, kerak bo‘lsa token qiling.')
    lines += ['', '## Asosiy ranglar', '', 'Kodda eng ko‘p ishlatilgan to‘g‘ridan-to‘g‘ri qiymatlar. Rang o‘zgarishi saytda ko‘rinishi uchun shu qiymatlarni almashtiring.', '', '| Rang | Marta | Fayllar |', '|---|---|---|']
    lines += [f'| `{value}` | {count} | {names} |' for value, count, names in palette]
    lines += ['', '## Shriftlar', '']
    lines += [f'- {family} — `{source}`' for family, source in fonts] or ['- Shrift qoidalari shu dizayn CSS fayllarida.']
    sections = _sections(entry.read_text(encoding='utf-8')) if slug != 'bloom' else []
    if sections:
        lines += ['', '## Sahifa bo‘limlari', '', '| Teg | id | Tavsif |', '|---|---|---|'] + [f'| `{t}` | `{i}` | {l} |' for t, i, l in sections]
    return '\n'.join(lines) + '\n'

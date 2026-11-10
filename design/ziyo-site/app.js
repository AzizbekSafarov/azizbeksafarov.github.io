import { showLesson } from './identity.js?v=0f200d48ab';
import { data, normalize, grade } from './model.js?v=e82989d08d';
const SLUG = 'ziyo';
const $ = s => document.querySelector(s),
  $$ = s => [...document.querySelectorAll(s)];
const storageKey = SLUG + '-state-v1';
let memory = [],
  persistent = true;
function read() {
  if (!persistent) return memory;
  try {
    const raw = localStorage.getItem(storageKey),
      parsed = raw === null ? [] : JSON.parse(raw);
    if (!Array.isArray(parsed)) throw Error('Invalid stored list');
    memory = normalize(parsed);
    return memory;
  } catch {
    persistent = false;
    $('#status').textContent =
      'Saqlangan ma’lumot o‘qilmadi. Asl nusxa o‘zgartirilmaydi; yangi tanlov faqat shu tabda qoladi.';
    return memory;
  }
}
function commit(ids) {
  memory = normalize(ids);
  if (!persistent) return memory;
  try {
    localStorage.setItem(storageKey, JSON.stringify(memory));
  } catch {
    persistent = false;
    $('#status').textContent =
      'Saqlash cheklangan. Tanlov faqat shu ochiq tabda qoladi; sahifani yangilashda yo‘qolishi mumkin.';
  }
  return memory;
}
function toggle(id) {
  const ids = read();
  return commit(ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id]);
}
function download(name, text, type = 'text/plain;charset=utf-8') {
  const url = URL.createObjectURL(new Blob(['\ufeff' + text], { type })),
    a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
let opener, openedId;
function openDialog(button) {
  opener = button;
  openedId = button.dataset.read;
  $('#reader').showModal();
}
$$('[data-close]').forEach(b => b.addEventListener('click', () => $('#reader').close()));
$('#reader')?.addEventListener('close', () => {
  const target = opener?.isConnected
    ? opener
    : document.querySelector('[data-read="' + openedId + '"]') || $('#saved-toggle');
  target?.focus();
});
window.addEventListener('storage', e => {
  if (e.key === storageKey || e.key === null) {
    const active = document.activeElement;
    const attribute = ['data-save', 'data-read', 'data-lesson'].find(a => active?.hasAttribute(a));
    const value = attribute ? active.getAttribute(attribute) : null;
    render();
    if ($('#reader')?.open && typeof syncSave === 'function') syncSave();
    if (attribute && !active.isConnected) {
      const next = $$('[' + attribute + ']').find(b => b.getAttribute(attribute) === value && !b.disabled);
      const target = next || $('#saved-toggle') || $('#lesson-title');
      if (target) {
        if (!next && target.id === 'lesson-title') target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  }
});
let selected = 'structure';
function render() {
  const ids = read();
  $('#progress-label').textContent = ids.length + ' / ' + data.length + ' modul tugallangan';
  $('#progress-fill').style.width = (ids.length / data.length) * 100 + '%';
  $('#lesson-tabs').innerHTML = data
    .map(
      (p, i) =>
        `<button data-lesson="${p.id}" aria-pressed="${p.id === selected}"><span>${ids.includes(p.id) ? '✓' : i + 1}</span>${p.name}</button>`
    )
    .join('');
}
function lesson() {
  const p = data.find(p => p.id === selected);
  $('#lesson-tag').textContent = p.tag + ' · ' + p.minutes;
  $('#lesson-title').textContent = p.title;
  $('#lesson-text').textContent = p.text;
  $('#lesson-code').textContent = p.example;
  showLesson(p);
  $('#question').textContent = p.question;
  $('#answers').innerHTML = p.answers
    .map((a, i) => `<label><input type="radio" name="answer" value="${i}" required><span></span></label>`)
    .join('');
  $$('#answers label span').forEach((s, i) => (s.textContent = p.answers[i]));
  $('#feedback').textContent = '';
  $('#feedback').removeAttribute('data-result');
  $('#next').hidden = true;
  render();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-lesson]');
  if (b) {
    selected = b.dataset.lesson;
    lesson();
    document.querySelector('[data-lesson="' + selected + '"]').focus();
  }
});
$('#quiz').addEventListener('submit', e => {
  e.preventDefault();
  $('#next').hidden = true;
  const choice = new FormData(e.currentTarget).get('answer');
  if (choice === null) {
    $('#feedback').textContent = 'Avval javobni tanlang.';
    return;
  }
  const p = data.find(p => p.id === selected),
    correct = grade(selected, Number(choice));
  $('#feedback').dataset.result = correct ? 'correct' : 'wrong';
  $('#feedback').textContent = (correct ? 'To‘g‘ri. ' : 'Yana urinib ko‘ring. ') + p.explanation;
  if (correct) {
    commit([...read(), selected]);
    render();
    $('#next').hidden = data.at(-1).id === selected;
  }
});
$('#next').addEventListener('click', () => {
  selected = data[data.findIndex(p => p.id === selected) + 1].id;
  lesson();
  $('#lesson-title').setAttribute('tabindex', '-1');
  $('#lesson-title').focus();
});
lesson();

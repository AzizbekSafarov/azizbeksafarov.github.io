/* Local preferences only; no account, form or contact information is stored. */
const demoStore = {
  read(key, fallback) { try { return JSON.parse(localStorage.getItem('ustoz.' + key)) ?? fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem('ustoz.' + key, JSON.stringify(value)); return true; } catch { return false; } }
};
const palettes = {'#d9ef3f':'#f2f6cd', '#b6d6ff':'#e6f0ff', '#f5afd1':'#fce4ef'};
function setPalette(color) {
  if (!palettes[color]) return;
  document.documentElement.style.setProperty('--accent', color); document.documentElement.style.setProperty('--wash', palettes[color]);
  document.querySelectorAll('[data-color]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
}
if (document.querySelector('[data-color]')) setPalette(demoStore.read('spark.palette', '#d9ef3f'));
document.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => { setPalette(button.dataset.color); demoStore.write('spark.palette', button.dataset.color); }));
const themeButton = document.querySelector('button[data-theme]');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'; themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘i rejimga o‘tish');
}
if (themeButton) {
  setTheme(demoStore.read('qadam.theme', 'light') === 'dark');
  themeButton.addEventListener('click', () => { const dark = document.documentElement.dataset.theme !== 'dark'; setTheme(dark); demoStore.write('qadam.theme', dark ? 'dark' : 'light'); });
}
const courseCards = [...document.querySelectorAll('[data-course]')], validCourseIds = courseCards.map(card => card.dataset.course);
const readIds = key => { const stored = demoStore.read(key, []); return new Set(Array.isArray(stored) ? stored.filter(id => validCourseIds.includes(id)) : []); };
let currentCourseFilter = 'all', onlySaved = false;
const savedCourses = readIds('qadam.saved.v1'), completedLessons = readIds('qadam.completed.v1');
const searchText = value => value.trim().toLocaleLowerCase('uz').replace(/[‘’ʻʼ`]/g, "'").replace(/\s+/g, ' ');
function updateCourses() {
  const query = searchText(document.querySelector('#course-search')?.value || ''); let count = 0;
  const clearSearch = document.querySelector('[data-clear-search]');
  if (clearSearch) {
    clearSearch.hidden = !document.querySelector('#course-search').value;
    document.querySelector('.search-hint').hidden = !clearSearch.hidden;
  }
  courseCards.forEach(card => {
    const searchable = card.querySelector('h3').textContent + ' ' + card.querySelector('.m-course-copy>p').textContent;
    card.hidden = !(currentCourseFilter === 'all' || card.dataset.kind === currentCourseFilter) || !searchText(searchable).includes(query) || (onlySaved && !savedCourses.has(card.dataset.course));
    if (!card.hidden) count++;
    const button = card.querySelector('[data-save-course]'), saved = savedCourses.has(card.dataset.course);
    button.setAttribute('aria-pressed', String(saved)); button.classList.toggle('is-saved', saved);
    button.setAttribute('aria-label', card.querySelector('h3').textContent + (saved ? ': saqlanganlardan olib tashlash' : ': saqlash'));
  });
  const empty = document.querySelector('#course-empty'); if (empty) empty.hidden = count > 0;
  const status = document.querySelector('#course-results'); if (status) status.textContent = count + ' ta kurs' + (onlySaved ? ' · Saqlanganlar' : '');
  document.querySelectorAll('[data-saved-count]').forEach(item => item.textContent = savedCourses.size);
}
document.querySelector('#course-search')?.addEventListener('input', updateCourses);
document.querySelector('[data-clear-search]')?.addEventListener('click', () => {
  document.querySelector('#course-search').value = ''; updateCourses(); document.querySelector('#course-search').focus();
});
document.querySelector('#course-search')?.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); document.querySelector('#course-heading').focus();
    document.querySelector('#kurslar').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth', block:'start'});
  }
  if (event.key === 'Escape' && event.currentTarget.value) { event.preventDefault(); event.currentTarget.value = ''; updateCourses(); }
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,[contenteditable],dialog')) {
    const input = document.querySelector('#course-search'); if (input) { event.preventDefault(); input.focus(); }
  }
});
document.querySelectorAll('[data-app-filter]').forEach(button => button.addEventListener('click', () => {
  currentCourseFilter = button.dataset.appFilter;
  document.querySelectorAll('[data-app-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); updateCourses();
}));
document.querySelectorAll('[data-save-course]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.saveCourse; if (savedCourses.has(id)) savedCourses.delete(id); else savedCourses.add(id);
  demoStore.write('qadam.saved.v1', [...savedCourses]); updateCourses();
  if (button.closest('[data-course]').hidden) document.querySelector('[data-only-saved]').focus();
}));
document.querySelector('[data-only-saved]')?.addEventListener('click', event => {
  onlySaved = !onlySaved; event.currentTarget.setAttribute('aria-pressed', String(onlySaved)); event.currentTarget.classList.toggle('selected', onlySaved); updateCourses();
});
document.querySelector('[data-reset-courses]')?.addEventListener('click', () => {
  onlySaved = false; const button = document.querySelector('[data-only-saved]'); button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false');
  document.querySelector('#course-search').value = ''; document.querySelector('[data-app-filter="all"]').click(); document.querySelector('#course-search').focus();
});
const tasks = {
  web: ['HTML sahifada header, main va footer qismlarini yarating.', 'Sarlavha, qisqa matn va ishlaydigan tugma qo‘shing.', 'Sahifani telefon kengligida ochib, matn va tugmalarni tekshiring.'],
  design: ['Bitta asosiy rang, matn rangi va och fon tanlang.', 'Sarlavha hamda asosiy matn uchun ikki shrift o‘lchamini belgilang.', 'Matn o‘qilishini va klaviatura bilan tugmaga o‘tishni tekshiring.'],
  ai: ['Maqsad, auditoriya va kerakli natijani aniq yozing.', 'AI javobidan foydalanib bitta kichik namuna yarating.', 'Natijadagi faktlarni tekshiring va bitta kamchilikni tuzating.']
};
const lessonDialog = document.querySelector('#lesson'); let selectedLesson;
const storedSteps = demoStore.read('qadam.steps.v1', {});
const lessonSteps = courseCards.length ? QadamLessonModel.restoreSteps(storedSteps, validCourseIds, completedLessons) : {};
function saveSteps() {
  return demoStore.write('qadam.steps.v1', Object.fromEntries(Object.entries(lessonSteps).map(([id, steps]) => [id, [...steps]])));
}
function updateLessonAction() {
  const done = completedLessons.has(selectedLesson), count = lessonSteps[selectedLesson].size;
  const complete = document.querySelector('#complete-lesson');
  complete.disabled = !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, done);
  complete.textContent = done ? 'Dars bajarilgan ✓' : 'Darsni yakunlash ✓';
  document.querySelector('#lesson-step-status').textContent = count + ' / ' + tasks[selectedLesson].length + ' qadam bajarildi' + (!done && count < 3 ? ' · Davom eting' : '');
}
function updateProgress() {
  if (!lessonDialog) return;
  const count = completedLessons.size, total = validCourseIds.length;
  document.querySelector('#lesson-progress-text').textContent = count + ' / ' + total + ' dars';
  const bar = document.querySelector('#lesson-progress'); bar.style.width = count / total * 100 + '%';
  bar.parentElement.setAttribute('aria-valuenow', count); bar.parentElement.setAttribute('aria-valuemax', total);
  courseCards.forEach(card => { card.querySelector('[data-completion]').hidden = !completedLessons.has(card.dataset.course); });
  document.querySelector('[data-reset-progress]').disabled = count === 0 && Object.values(lessonSteps).every(steps => steps.size === 0);
  const next = courseCards.find(card => !completedLessons.has(card.dataset.course)) || courseCards[0];
  const source = next.querySelector('[data-lesson]'), hero = document.querySelector('.continue-card [data-lesson]');
  Object.assign(hero.dataset, {lesson: source.dataset.lesson, lessonTitle: source.dataset.lessonTitle, lessonDescription: source.dataset.lessonDescription});
  hero.lastChild.textContent = count === total ? ' Darsni takrorlash' : ' Darsni boshlash';
  document.querySelector('.continue-card p').textContent = count === total ? 'Barcha demo darslar bajarildi. Istalgan darsni qayta ko‘rib chiqing.' : source.dataset.lessonTitle + ' bo‘yicha navbatdagi amaliy qadamingiz tayyor.';
}
document.querySelector('[data-reset-progress]')?.addEventListener('click', () => {
  completedLessons.clear(); Object.values(lessonSteps).forEach(steps => steps.clear()); saveSteps(); demoStore.write('qadam.completed.v1', []); updateProgress();
  document.querySelector('.continue-card [data-lesson]').focus();
});
document.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => {
  selectedLesson = button.dataset.lesson; document.querySelector('#lesson-title').textContent = button.dataset.lessonTitle;
  document.querySelector('#lesson-description').textContent = button.dataset.lessonDescription;
  const list = lessonDialog.querySelector('ol'); list.replaceChildren();
  tasks[selectedLesson].forEach((text, index) => {
    const item = document.createElement('li'), label = document.createElement('label'), input = document.createElement('input'), description = document.createElement('span');
    label.className = 'lesson-step'; input.type = 'checkbox'; input.checked = lessonSteps[selectedLesson].has(index); input.disabled = completedLessons.has(selectedLesson); description.textContent = text;
    input.addEventListener('change', () => {
      if (input.checked) lessonSteps[selectedLesson].add(index); else lessonSteps[selectedLesson].delete(index);
      const persisted = saveSteps(); updateLessonAction(); updateProgress();
      if (!persisted) document.querySelector('#lesson-feedback').textContent = 'Brauzer saqlashga ruxsat bermadi. Qadamlar ochiq sahifada saqlanadi.';
    });
    label.append(input, description); item.append(label); list.append(item);
  });
  updateLessonAction(); document.querySelector('#lesson-feedback').textContent = ''; lessonDialog.demoOpener = button; lessonDialog.showModal();
}));
document.querySelector('#complete-lesson')?.addEventListener('click', event => {
  if (!selectedLesson || !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, completedLessons.has(selectedLesson))) return;
  completedLessons.add(selectedLesson); const persisted = demoStore.write('qadam.completed.v1', [...completedLessons]);
  event.currentTarget.disabled = true; event.currentTarget.textContent = 'Dars bajarilgan ✓'; updateProgress();
  lessonDialog.querySelectorAll('.lesson-step input').forEach(input => input.disabled = true);
  document.querySelector('#lesson-feedback').textContent = persisted ? 'Bajarildi. Natija shu brauzerda saqlandi.' : 'Bajarildi. Natija faqat ochiq sahifada saqlanadi.';
  lessonDialog.querySelector('.dialog-actions [data-close]').focus();
});
updateCourses(); updateProgress();

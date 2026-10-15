/* No account, tracking or remote form submission. Fields exist only in this tab. */
const fontGate = document.documentElement;
if (document.fonts) {
  Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 2500))])
    .finally(() => fontGate.classList.remove('font-loading'));
} else fontGate.classList.remove('font-loading');

const starter = document.getElementById('starter');
const promptField = document.getElementById('ai-prompt');
const status = document.getElementById('copy-status');
function updatePrompt() {
  if (!starter) return;
  const slug = starter.elements.design.value;
  const topic = starter.elements.topic.value.trim() || '[ekspert bergan bilet]';
  const time = starter.elements.time.value.trim() || '[haqiqiy qolgan vaqt]';
  const name = starter.elements.design.selectedOptions[0].textContent;
  promptField.value = `https://azizbeksafarov.github.io/design/${slug}/\nUstoz AI tanlovi uchun ${name} dizaynini tanladim. Shu manzildagi AI yo‘riqnomasi va haqiqiy source kodni o‘qi.\nSahifa o‘qilmasa: https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/${slug}/ai.md\nBilet: ${topic}\nQolgan vaqt: ${time}\nHozirgi topshiriq va joydagi reglament ustuvor. Uslubni saqlab mazmun va funksiyalarni biletga moslashtir. Avval asosiy foydalanuvchi oqimini ishlat. Mobil, klaviatura, xato/bo‘sh/natija holatlarini tekshir. Topilgan xatoni takrorla, sababini tuzat va qayta sina. Demo natijani haqiqiy backend deb ko‘rsatma. CURRENT-TASK.md va HANDOFF.md ga vazifa, o‘zgarish, haqiqiy sinov va qolgan ishni yoz. Men bilan o‘zbekcha gaplash.`;
  document.getElementById('selected-kit').href = `/design/${slug}/source.zip`;
  document.getElementById('selected-brief').href = `/design/${slug}/`;
  for (const name of ['topic','time']) {
    const field=starter.elements[name];
    if(field.value.trim()){field.removeAttribute('aria-invalid');document.getElementById(field.id+'-error').hidden=true;}
  }
  const preview=document.getElementById('selected-preview');
  if(preview)preview.href='/design/'+({bloom:'material-expressive/dist/index.html',si:'si-site/index.html'}[slug]||slug+'-site/');
  document.querySelector('.workspace-nav a[href="/"],.workspace-nav a[href^="/?design="]')?.setAttribute('href','/?design='+encodeURIComponent(slug));
  status.textContent = '';
}
if (starter) {
  const requested = new URL(location.href).searchParams.get('design');
  if ([...starter.elements.design.options].some(option => option.value === requested)) starter.elements.design.value = requested;
  starter.addEventListener('submit', event => event.preventDefault());
  starter.addEventListener('input', updatePrompt);
  starter.addEventListener('change', () => {
    const url = new URL(location.href); url.searchParams.set('design', starter.elements.design.value); history.replaceState(null, '', url); updatePrompt();
  });
  updatePrompt();
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const output = button.dataset.copy === 'prompt' ? promptField : document.getElementById('quick-prompt');
    const target = document.getElementById(button.dataset.status || 'copy-status');
    if (button.dataset.copy === 'prompt') {
      const missing=['time','topic'].map(name=>starter.elements[name]).filter(field=>!field.value.trim());
      if(missing.length){
        missing.forEach(field=>{field.setAttribute('aria-invalid','true');document.getElementById(field.id+'-error').hidden=false;});
        target.textContent='Topshiriq tayyor bo‘lishi uchun bilet matni va qolgan vaqt kerak.';missing[0].focus();return;
      }
    }
    const value = output.value || output.innerText;
    button.disabled = true;
    try { await navigator.clipboard.writeText(value); target.textContent = 'Nusxalandi. AI chatiga joylang.'; }
    catch {
      if (output.select) { output.focus(); output.select(); }
      else { const range = document.createRange(); range.selectNodeContents(output); const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range); }
      target.textContent = 'Matn belgilandi. Ctrl+C yoki telefonning nusxalash amalidan foydalaning.';
    } finally { button.disabled = false; }
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const menu = document.querySelector('.mobile-menu[open]');
    if (menu) { menu.open = false; menu.querySelector('summary').focus(); }
  }
});

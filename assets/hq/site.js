/* Shared copy helpers. The task editor is isolated in starter.mjs. */
const fontGate = document.documentElement;
if (document.fonts) {
  Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 2500))])
    .finally(() => fontGate.classList.remove('font-loading'));
} else fontGate.classList.remove('font-loading');

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const output = document.getElementById('quick-prompt');
    const target = document.getElementById(button.dataset.status || 'copy-status');
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

/* Shared copy helpers. The task editor is isolated in starter.mjs. */
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

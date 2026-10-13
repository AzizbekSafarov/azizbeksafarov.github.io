/* Nothing is sent or stored. Clipboard is written only after the user's click. */
const config = JSON.parse(document.getElementById('prompt-config').textContent);
const topic = document.getElementById('topic');
const time = document.getElementById('time');
const prompt = document.getElementById('prompt');
const status = document.getElementById('copy-status');
function updatePrompt(){
  prompt.value = `${config.url}\nShu havoladagi AI yo‘riqnomasini va tanlangan ${config.name} kodini o‘qi. Ustoz AI tanlovi uchun birga ishlaymiz.\nBilet: ${topic.value.trim() || '[ekspert bergan topshiriqni shu yerga yozaman]'}\nQolgan vaqt: ${time.value.trim() || '[haqiqiy vaqtni yozaman]'}\nDizaynning asosiy uslubini saqla, mazmun va funksiyalarni biletga moslashtir. Avval majburiy oqimni ishlat; xato topsang tekshirib tuzat, keyin qayta sina. Bajarilgan ish va tekshirilmagan joyni aniq ayt. Ishni HANDOFF.md ga yozib bor. Men bilan o‘zbekcha gaplash.`;
  status.textContent = '';
}
topic.addEventListener('input',updatePrompt);time.addEventListener('input',updatePrompt);updatePrompt();
document.getElementById('copy-prompt').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(prompt.value);status.textContent='Nusxalandi. AI chatiga joylang.';}
  catch{prompt.focus();prompt.select();status.textContent='Matn belgilandi. Ctrl+C orqali nusxalang.';}
});

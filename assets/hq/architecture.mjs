// This page explains the planned system; it never calls an AI, bot or private API.
const components = {
 frontend: ['01 / INTERFEYS','Tanlangan dizayn → haqiqiy mahsulot','Kutubxonadan bitta uslub va uning source kodi olinadi. Formaning amali haqiqiy API va bazaga ulanadi; demo natija saqlangan ma’lumot deb ko‘rsatilmaydi.','Keyingi ish: biletga mos dizayn, ma’lumot modeli va asosiy foydalanuvchi oqimini tanlash.'],
 render: ['02 / SERVER','Bitta Render Web Service','Frontend build va Node.js API bir origin’da. AI va Telegram so‘rovlari shu serverdan chiqadi; haqiqiy ma’lumotlar Supabase’da saqlanadi.','Keyingi ish: xizmat yaratish, build/start buyruqlari va server secrets’ni ulash.'],
 supabase: ['03 / BACKEND','Ma’lumot va vakolat bir joyda','PostgreSQL, Google orqali Auth, RLS va zarur fayllar uchun Storage. Server foydalanuvchi tokenini tekshiradi; admin huquqi brauzerdan kelgan bayroq bilan berilmaydi.','Keyingi ish: alohida tanlov loyihasi, migratsiyalar, RLS va ikki akkaunt bilan ruxsat sinovi.'],
 integrations: ['04 / INTEGRATSIYALAR','AI yordam beradi. Telegram yetkazadi.','Groq yoki Gemini topshiriqqa mos yordamchi bo‘ladi. Telegram bildirishnoma yoki bot interfeysini beradi. API kalitlar frontendga chiqmaydi.','Keyingi ish: bir xil o‘zbekcha savollar, kvota holati, webhook secret va takroriy update’larni sinash.']
};
const scenarios = {
 assistant: { caption:'AI kaliti faqat serverda. Model foydalanuvchi vakolatini belgilamaydi.', steps:[['Foydalanuvchi savoli','Interfeys savolni Render API’ga yuboradi.'],['Ruxsat va limit','Supabase sessiyasi, so‘rov hajmi va foydalanish budjeti tekshiriladi.'],['Groq yoki Gemini','Faqat zarur kontekst bilan rasmiy API chaqiriladi.'],['Foydali javob','Natija yoki tushunarli xato interfeysga qaytadi.']] },
 login: { caption:'Google callback — Supabase’ga; Supabase redirect — saytga. Client Secret brauzerga yuborilmaydi.', steps:[['Google orqali kirish','Sayt Supabase Auth orqali Google login’ni boshlaydi.'],['Google roziligi','Faqat so‘ralgan profil ruxsatlari va OAuth client tekshiriladi.'],['Supabase callback','Google javobi Supabase /auth/v1/callback manziliga keladi.'],['Saytdagi sessiya','Foydalanuvchi /auth/callback orqali kabinetga qaytadi.']] },
 telegram: { caption:'Webhook secret tekshiriladi. Bir update_id qayta bajarilmaydi. Bu oqim hali integratsiya qilinmagan.', steps:[['Botga xabar','Foydalanuvchi Telegram bot bilan muloqot qiladi.'],['Render webhook','/api/telegram maxfiy sarlavha va takroriy update’ni tekshiradi.'],['Vakolat va ish','Bog‘langan akkaunt/ruxsat tekshirilib, kerak bo‘lsa baza yoki AI chaqiriladi.'],['Telegram javobi','Bot API orqali tegishli chatga natija yuboriladi.']] },
 monitor: { caption:'Bu monitoring sxemasi, jonli uptime ko‘rsatkichi emas. /health 200 javobi AI va baza sog‘lomligining dalili emas.', steps:[['5 daqiqalik interval','UptimeRobot HTTP monitori belgilangan manzilni tekshiradi.'],['Origin so‘rovi','Render GET /health so‘rovini haqiqatan qabul qiladi.'],['Yengil javob','Process sog‘lom bo‘lsa 200 va status: ok; AI chaqirilmaydi.'],['Holat va ogohlantirish','Monitor javobni qayd etadi; xatolik bo‘lsa ogohlantirish qoidasi ishlaydi.']] }
};
function showComponent(key) {
 if (!Object.hasOwn(components,key)) return;
 document.querySelectorAll('[data-component]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.component===key)));
 ['component-label','component-title','component-text','component-next'].forEach((id,i)=>document.getElementById(id).textContent=components[key][i]);
}
function showScenario(key, updateUrl=false) {
 if (!Object.hasOwn(scenarios,key)) key='assistant';
 const scenario=scenarios[key];
 document.querySelectorAll('[data-scenario]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scenario===key)));
 const list=document.getElementById('flow-steps'); list.replaceChildren();
 scenario.steps.forEach(([title,text],index)=>{
  const item=document.createElement('li'),number=document.createElement('span'),body=document.createElement('div'),heading=document.createElement('strong'),description=document.createElement('p');
  number.textContent=String(index+1).padStart(2,'0');heading.textContent=title;description.textContent=text;body.append(heading,description);item.append(number,body);list.append(item);
 });
 document.getElementById('flow-status').textContent=scenario.caption;
 if(updateUrl){const url=new URL(location.href);url.searchParams.set('oqim',key);history.replaceState(null,'',url);}
}
document.querySelectorAll('[data-component]').forEach(button=>button.addEventListener('click',()=>showComponent(button.dataset.component)));
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>showScenario(button.dataset.scenario,true)));
showScenario(new URL(location.href).searchParams.get('oqim') || 'assistant');
window.addEventListener('popstate',()=>showScenario(new URL(location.href).searchParams.get('oqim') || 'assistant'));

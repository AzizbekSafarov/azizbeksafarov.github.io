import {DRAFT_KEY,MAX_IMPORT_BYTES,emptyTask,parseDraft,serializeDraft,createDraftStore,taskMarkdown,taskErrors,linksFor} from './starter-model.mjs?v=92c861b7d9';
const $=id=>document.getElementById(id), form=$('starter');
if(form){
 const fields=form.elements, designs=[...fields.design.options].map(o=>o.value);
 // Accessing localStorage itself may throw when site storage is disabled.
 const store=createDraftStore({getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v),removeItem:k=>localStorage.removeItem(k)},designs);
 let blocked=false, undo=null;
 const task=()=>Object.fromEntries(['design','topic','time','constraints'].map(k=>[k,fields[k].value]));
 const say=message=>{$('draft-status').textContent=message;};
 function update(){
  const current=task(), links=linksFor(current.design);
  $('ai-prompt').value=taskMarkdown(current,fields.design.selectedOptions[0].textContent);
  $('selected-kit').href=links.source;$('selected-brief').href='/design/'+current.design+'/';$('selected-preview').href=links.preview;
  for(const key of ['time','topic'])if(fields[key].value.trim()){fields[key].removeAttribute('aria-invalid');$(fields[key].id+'-error').hidden=true;}
  const url=new URL(location.href);url.searchParams.set('design',current.design);history.replaceState(null,'',url);
  document.querySelector('.workspace-nav a[href="/"],.workspace-nav a[href^="/?design="]')?.setAttribute('href','/?design='+current.design);
 }
 function apply(value){for(const key of ['design','topic','time','constraints'])fields[key].value=value[key];update();}
 function showConflict(){blocked=true;$('draft-conflict').hidden=false;say('Bu yerdagi matn saqlanmagan. JSON nusxa olib qo‘yishingiz mumkin.');}
 function save(force=false){
  if(blocked&&!force)return;
  const result=store.save(task(),{force});
  if(result.state==='conflict'){showConflict();return;}
  if(result.ok){blocked=false;$('draft-conflict').hidden=true;say('Qoralama shu brauzerda saqlandi.');}
  else say('Brauzerga saqlab bo‘lmadi. Sahifani yopishdan oldin JSON nusxa oling.');
 }
 function restore(){
  const result=store.load();
  if(result.ok){blocked=false;$('draft-conflict').hidden=true;apply(result.draft||emptyTask(fields.design.value));say(result.draft?'Saqlangan qoralama tiklandi.':'Yangi topshiriq. Yozganingiz shu brauzerda saqlanadi.');}
  else if(result.state==='unavailable')say('Brauzer xotirasi ishlamayapti. JSON nusxa orqali saqlang.');
  else showConflict();
 }
 const requested=new URL(location.href).searchParams.get('design');restore();
 if(designs.includes(requested)){fields.design.value=requested;update();}
 form.addEventListener('submit',e=>e.preventDefault());
 form.addEventListener('input',e=>{if(!['design','time','topic','constraints'].includes(e.target.name))return;update();save();$('copy-status').textContent='';});
 fields.design.addEventListener('change',()=>{update();save();});
 $('replace-draft').addEventListener('click',()=>save(true));
 $('load-draft').addEventListener('click',()=>{undo=task();$('undo-draft').hidden=false;restore();});
 window.addEventListener('storage',event=>{if((event.key===DRAFT_KEY||event.key===null)&&store.changed(event.key===null?null:event.newValue))showConflict();});
 function download(text,name,type){const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 $('export-draft').addEventListener('click',()=>{download(serializeDraft(task(),designs),'topshiriq-qoralama.json','application/json');say('JSON nusxa yuklash brauzerga topshirildi. Yuklamalarni tekshiring.');});
 $('import-draft').addEventListener('click',()=>$('draft-file').click());
 $('draft-file').addEventListener('change',async event=>{
  const file=event.target.files[0];event.target.value='';if(!file)return;
  if(file.size>MAX_IMPORT_BYTES){say('Fayl 64 KB dan katta. Joriy topshiriq o‘zgarmadi.');return;}
  try{const result=parseDraft(await file.text(),designs);if(!result.ok){say(result.error);return;}undo=task();$('undo-draft').hidden=false;apply(result.draft);save();}
  catch{say('Fayl o‘qilmadi. Joriy topshiriq o‘zgarmadi.');}
 });
 $('clear-draft').addEventListener('click',()=>{undo=task();$('undo-draft').hidden=false;apply(emptyTask(fields.design.value));for(const key of ['time','topic']){fields[key].removeAttribute('aria-invalid');$(fields[key].id+'-error').hidden=true;}save();$('copy-status').textContent='';fields.topic.focus();});
 $('undo-draft').addEventListener('click',()=>{if(!undo)return;apply(undo);undo=null;$('undo-draft').hidden=true;save();});
 function valid(){const missing=taskErrors(task());for(const key of missing){fields[key].setAttribute('aria-invalid','true');$(fields[key].id+'-error').hidden=false;}if(missing.length){$('copy-status').textContent='Bilet matni va qolgan vaqtni kiriting.';fields[missing[0]].focus();return false;}return true;}
 $('copy-task').addEventListener('click',async()=>{if(!valid())return;const button=$('copy-task');button.disabled=true;try{await navigator.clipboard.writeText($('ai-prompt').value);$('copy-status').textContent='Nusxalandi. AI chatiga joylang.';}catch{$('ai-prompt').focus();$('ai-prompt').select();$('copy-status').textContent='Matn belgilandi. Ctrl+C yoki telefonning nusxalash amalidan foydalaning.';}finally{button.disabled=false;}});
 $('download-task').addEventListener('click',()=>{if(!valid())return;download($('ai-prompt').value,'CURRENT-TASK.md','text/markdown;charset=utf-8');$('copy-status').textContent='Topshiriq fayli yuklashga topshirildi. Uni tanlangan ZIP ichiga qo‘shing.';});
 update();
}

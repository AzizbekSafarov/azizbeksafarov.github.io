import {matching,selectedItem} from './library-model.mjs?v=1';
const payload=document.getElementById('library-data');
if(payload){
 const items=JSON.parse(payload.textContent),$=s=>document.querySelector(s);
 const rows=[...document.querySelectorAll('[data-template]')],groups=[...document.querySelectorAll('[data-group]')];
 const query=$('#design-search'),panel=$('#selected-design'),empty=$('#search-empty');
 let group='all',current=selectedItem(items,new URL(location.href).searchParams.get('design'));
 function show(item,announce=false){
  current=item;
  rows.forEach(row=>{const on=row.dataset.template===item?.slug;row.setAttribute('aria-pressed',String(on));row.querySelector('.row-check').textContent=on?'✓':'→';});
  if(!item)return;
  $('#selected-name').textContent=item.name;$('#selected-category').textContent=item.category;$('#selected-summary').textContent=item.summary;
  $('#selected-use').textContent=item.use;$('#selected-features').textContent=item.features;
  $('#selected-image').src=item.image;$('#selected-image').alt=item.name+' sahifasining ko‘rinishi';
  for(const id of ['selected-demo','preview-link','preview-expand'])$('#'+id).href=item.demo;
  $('#preview-link').setAttribute('aria-label',item.name+' saytini ochish');$('#preview-address').textContent=item.name+' · Jonli namuna';
  $('#selected-context').href=item.context;$('#selected-download').href=item.zip;$('#selected-size').textContent=item.size+' KB';
  $('#download-status').textContent='';if(announce)$('#selection-status').textContent=item.name+' tanlandi. Saytni ochish yoki AI bilan ishlash amalini tanlang.';
 }
 function render(){
  const found=matching(items,query.value,group),slugs=new Set(found.map(t=>t.slug));
  rows.forEach(row=>{row.hidden=!slugs.has(row.dataset.template);});
  $('#design-count').textContent=found.length+' ta dizayn';
  $('.design-index').hidden=!found.length;panel.hidden=!found.length;empty.hidden=!!found.length;
  if(found.length){
   const before=current?.slug;show(slugs.has(current?.slug)?current:found[0]);
   if(current.slug!==before){const url=new URL(location.href);url.searchParams.set('design',current.slug);history.replaceState({design:current.slug},'',url);}
  }
  groups.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.group===group)));
 }
 rows.forEach(row=>row.addEventListener('click',()=>{
  const item=selectedItem(items,row.dataset.template);show(item,true);
  const url=new URL(location.href);url.searchParams.set('design',item.slug);history.pushState({design:item.slug},'',url);
  if(matchMedia('(max-width:700px)').matches){panel.scrollIntoView({behavior:'auto',block:'start'});$('#selected-name').focus({preventScroll:true});}
 }));
 query.addEventListener('input',render);
 groups.forEach(b=>b.addEventListener('click',()=>{group=b.dataset.group;render();}));
 $('#clear-search').addEventListener('click',()=>{query.value='';group='all';render();query.focus();});
 window.addEventListener('popstate',()=>{query.value='';group='all';current=selectedItem(items,new URL(location.href).searchParams.get('design'));render();});
 document.addEventListener('keydown',event=>{if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){event.preventDefault();query.focus();}});
 show(current);render();
}
document.querySelectorAll('[data-download]').forEach(a=>a.addEventListener('click',()=>{
 const status=a.closest('#selected-design')?document.getElementById('download-status'):document.getElementById('global-download-status');
 if(status)status.textContent='Fayl yuklash brauzerga topshirildi. Yuklamalar bo‘limini tekshiring.';
}));

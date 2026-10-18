import {matching,readLibraryState,writeLibraryState} from './library-model.mjs?v=a03b61b91b';
const $=selector=>document.querySelector(selector);
const navToggle=$('#nav-toggle'),sidebar=$('.workspace-sidebar');
if(navToggle){
 document.documentElement.classList.add('workspace-ready');navToggle.hidden=false;
 const closeMenu=()=>{navToggle.setAttribute('aria-expanded','false');sidebar.classList.remove('nav-open');};
 navToggle.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')!=='true';navToggle.setAttribute('aria-expanded',String(open));sidebar.classList.toggle('nav-open',open);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&sidebar.classList.contains('nav-open')){closeMenu();navToggle.focus();}});
 sidebar.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
}
const payload=$('#library-data');
if(payload){
 const items=JSON.parse(payload.textContent),rows=[...document.querySelectorAll('[data-template]')],groups=[...document.querySelectorAll('[data-group]')];
 const query=$('#design-search'),library=$('#designs'),panel=$('#selected-design'),empty=$('#search-empty');
 let state=readLibraryState(items,location.search);
 function show(item){
  rows.forEach(row=>{const on=row.dataset.template===item?.slug;row.setAttribute('aria-pressed',String(on));row.querySelector('.row-check').textContent=on?'✓':'→';});
  if(!item)return;
  $('#selected-name').textContent=item.name;$('#selected-category').textContent=item.category;$('#selected-summary').textContent=item.summary;
  $('#selected-use').textContent=item.use;$('#selected-features').textContent=item.features;
  $('#selected-image').src=item.image;$('#selected-image').alt=item.name+' sahifasining ko‘rinishi';
  for(const id of ['selected-demo','preview-link','preview-expand'])$('#'+id).href=item.demo;
  $('#preview-link').setAttribute('aria-label',item.name+' saytini ochish');$('#preview-address').textContent=item.name+' · Sayt ko‘rinishi';
  $('#selected-context').href=item.context;$('#selected-download').href=item.zip;$('#selected-size').textContent=item.size+' KB';
  document.querySelectorAll('a[href^="/design/start/"]').forEach(a=>{a.href='/design/start/?design='+encodeURIComponent(item.slug);});
  $('#download-status').textContent='';
  $('#share-status').textContent='';$('#share-url').hidden=true;
 }
 function render(){
  state.found=matching(items,state.query,state.group);const slugs=new Set(state.found.map(t=>t.slug));
  state.selected=state.found.find(t=>t.slug===state.selected?.slug)||state.found[0]||null;
  rows.forEach(row=>{row.hidden=!slugs.has(row.dataset.template);});
  query.value=state.query;$('#design-count').textContent=state.found.length+' ta dizayn';
  $('.design-index').hidden=!state.found.length;panel.hidden=!state.found.length;empty.hidden=!!state.found.length;
  if(!state.found.length)state.view='list';
  library.dataset.view=state.view;
  groups.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.group===state.group)));
  show(state.selected);
 }
 function remember(push=false){const url=writeLibraryState(location.href,state);if(url.href!==location.href)history[push?'pushState':'replaceState'](null,'',url);}
 function choose(slug){
  const item=state.found.find(t=>t.slug===slug);if(!item)return;
  state.selected=item;state.view='detail';render();remember(true);
  $('#selection-status').textContent=item.name+' tanlandi. Saytni oching yoki shu dizayn bilan boshlang.';
  panel.scrollIntoView({behavior:'auto',block:'start'});$('#selected-name').focus({preventScroll:true});
 }
 rows.forEach(row=>row.addEventListener('click',()=>choose(row.dataset.template)));
 query.addEventListener('input',()=>{state.query=query.value;state.view='list';render();remember();});
 groups.forEach(b=>b.addEventListener('click',()=>{state.group=b.dataset.group;state.view='list';render();remember(true);}));
 $('#clear-search').addEventListener('click',()=>{state.query='';state.group='all';state.view='list';render();remember(true);query.focus();});
 $('#back-to-list').addEventListener('click',()=>{state.view='list';render();remember(true);const row=rows.find(r=>r.dataset.template===state.selected?.slug);row?.focus();});
 $('#share-design').addEventListener('click',async()=>{
  const button=$('#share-design'),url=new URL('/',location.origin);url.searchParams.set('design',state.selected.slug);button.disabled=true;
  try{await navigator.clipboard.writeText(url.href);$('#share-status').textContent='Tanlangan dizayn havolasi nusxalandi.';}
  catch{const input=$('#share-url');input.value=url.href;input.hidden=false;input.focus();input.select();$('#share-status').textContent='Havolani qo‘lda nusxalang.';}
  finally{button.disabled=false;}
 });
 window.addEventListener('popstate',()=>{state=readLibraryState(items,location.search);render();});
 document.addEventListener('keydown',event=>{if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!document.activeElement?.isContentEditable&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){event.preventDefault();state.view='list';render();remember();query.focus();}});
 render();
}
document.querySelectorAll('[data-download]').forEach(a=>a.addEventListener('click',()=>{
 const status=a.closest('#selected-design')?$('#download-status'):$('#global-download-status');
 if(status)status.textContent='Fayl yuklash brauzerga topshirildi. Yuklamalar bo‘limini tekshiring.';
}));

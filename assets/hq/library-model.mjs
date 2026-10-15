export function searchable(value){return String(value??'').normalize('NFKC').toLocaleLowerCase().replace(/[‘’ʻʼ`']/g,'').trim();}
export function matching(items,query='',group='all'){
 const terms=searchable(query).split(/\s+/).filter(Boolean);
 return items.filter(t=>(group==='all'||t.group===group)&&terms.every(term=>searchable([t.name,t.category,t.use,t.summary].join(' ')).includes(term)));
}
export function selectedItem(items,slug){return items.find(t=>t.slug===slug)||items[0]||null;}
export function readLibraryState(items,search){
 const params=new URLSearchParams(search),query=params.get('q')||'';
 const group=['app','story','shop'].includes(params.get('type'))?params.get('type'):'all';
 const found=matching(items,query,group),requested=params.get('design');
 const selected=found.find(t=>t.slug===requested)||found[0]||null;
 return {query,group,selected,found,view:params.get('view')==='list'||!items.some(t=>t.slug===requested)?'list':'detail'};
}
export function writeLibraryState(url,state){
 const result=new URL(url);
 for(const key of ['design','q','type','view'])result.searchParams.delete(key);
 if(state.selected)result.searchParams.set('design',state.selected.slug);
 if(state.query)result.searchParams.set('q',state.query);
 if(state.group!=='all')result.searchParams.set('type',state.group);
 if(state.view==='list')result.searchParams.set('view','list');
 result.hash='';
 return result;
}

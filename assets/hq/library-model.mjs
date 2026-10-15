export function searchable(value){return String(value??'').normalize('NFKC').toLocaleLowerCase().replace(/[‘’ʻʼ`']/g,'').trim();}
export function matching(items,query='',group='all'){
 const terms=searchable(query).split(/\s+/).filter(Boolean);
 return items.filter(t=>(group==='all'||t.group===group)&&terms.every(term=>searchable([t.name,t.category,t.use,t.summary].join(' ')).includes(term)));
}
export function selectedItem(items,slug){return items.find(t=>t.slug===slug)||items[0]||null;}

import test from 'node:test';
import assert from 'node:assert/strict';
import {initialProjects,categories,visibleProjects,validateProjects,createProject,progress} from './model.js';

for(const view of ['all','saved','done'])for(const category of categories)for(const query of ['', 'AI', "TA'LIM", 'missing'])for(const sort of ['recent','name']) {
  test('Bloom filter combination '+JSON.stringify({view,category,query,sort}),()=>{
    const before=JSON.stringify(initialProjects),result=visibleProjects(initialProjects,{view,category,query,sort});
    assert.equal(JSON.stringify(initialProjects),before);
    // Explicit catalog oracle: empty results cannot accidentally make the
    // per-result assertions below pass vacuously.
    const searchIds={'':['kasb','brand','ai','portfolio'],'AI':['ai'],"TA'LIM":['kasb'],'missing':[]}[query];
    const expected=searchIds.filter(id=>
      (view!=='saved'||id==='brand')&&(view!=='done'||id==='portfolio')&&
      (category==='Hammasi'||({'kasb':'Ta’lim','brand':'Dizayn','ai':'Texnologiya','portfolio':'Dizayn'})[id]===category));
    assert.deepEqual(result.map(p=>p.id).sort(),[...expected].sort());
    for(const p of result){
      if(view==='saved')assert.equal(p.saved,true);
      if(view==='done')assert.equal(p.tasks.every(t=>t.done),true);
      if(category!=='Hammasi')assert.equal(p.category,category);
    }
    if(query==='missing')assert.equal(result.length,0);
    if(query==='AI')assert.deepEqual(result.map(p=>p.id),view==='saved'||view==='done'||!['Hammasi','Texnologiya'].includes(category)?[]:['ai']);
    if(sort==='name')for(let i=1;i<result.length;i++)assert.ok(result[i-1].title.localeCompare(result[i].title,'uz')<=0);
    if(query===''&&view==='all'&&category==='Hammasi')assert.equal(result.length,4);
  });
}

for(let mask=0;mask<8;mask++)test('Bloom progress for task mask '+mask,()=>{
  const p=structuredClone(initialProjects[0]);p.tasks.forEach((t,i)=>t.done=!!(mask&(1<<i)));
  assert.equal(progress(p),[...mask.toString(2)].filter(c=>c==='1').length/3);
  assert.equal(visibleProjects([p],{view:'done'}).length,mask===7?1:0);
});

for(const category of categories.slice(1))test('new project / '+category,()=>{
  const p=createProject({title:'  <img src=x>  ',description:'  Example  ',category},'safe-id');
  assert.equal(p.title,'<img src=x>');assert.equal(p.description,'Example');
  assert.equal(progress(p),0);assert.equal(p.saved,false);assert.equal(p.tasks.length,3);
  assert.ok(validateProjects([p]));
});

for(const patch of [{title:''},{title:' '},{title:'a'.repeat(81)},{description:'a'.repeat(201)},{category:'unknown'},{saved:1},{tone:'bad'},{art:'bad'},{tasks:[]},{tasks:[null,null,null]}]) {
  test('Bloom rejects corrupt persisted field '+JSON.stringify(patch),()=>{
    assert.equal(validateProjects([{...structuredClone(initialProjects[0]),...patch}]),null);
  });
}

test('Bloom project count and text lengths accept exact limits',()=>{
  const p=createProject({title:'a'.repeat(80),description:'b'.repeat(200),category:categories[1]},'id');
  const projects=Array.from({length:200},(_,i)=>({...structuredClone(p),id:'p'+i}));
  assert.ok(validateProjects(projects));assert.equal(validateProjects([...projects,{...p,id:'extra'}]),null);
});

test('Bloom persisted tasks must have readable bounded labels',()=>{
  for(const text of ['', ' ', 'a'.repeat(201)]){
    const p=structuredClone(initialProjects[0]);p.tasks[0].text=text;
    assert.equal(validateProjects([p]),null);
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('./tekshir.js',import.meta.url),'utf8');

function environment(search, storage=new Map()) {
  const hooks=[], frames=[], timers=[], nodes={};
  const originalError=()=>{};
  const doc={readyState:'loading',addEventListener:(...a)=>hooks.push(a),
    documentElement:{scrollWidth:390,lang:'uz'},images:[],
    querySelectorAll:()=>[],body:{innerText:'',appendChild:e=>frames.push(e)},
    createElement:tag=>({style:{},setAttribute(){},remove(){this.removed=true;},
      querySelector:s=>nodes[s]??=( {style:{},appendChild(){},insertAdjacentHTML(){}} )})};
  const context={document:doc,location:{search,href:'http://localhost:8080/'+search,hash:''},
    console:{error:originalError},URLSearchParams,URL,innerWidth:390,
    addEventListener:(...a)=>hooks.push(a),setTimeout:(fn,ms)=>{timers.push({fn,ms});return timers.length;},clearTimeout(){},
    localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)}};
  context.window=context;vm.runInNewContext(source,context);
  return {context,originalError,hooks,doc,frames,timers,nodes};
}
test('normal page and similarly named query have no diagnostic side effects',()=>{
  for(const search of ['', '?tekshir-other=1']) {
    const e=environment(search);
    assert.equal(e.context.console.error,e.originalError);assert.equal(e.hooks.length,0);
    assert.equal(e.context.TEKSHIR,undefined);
  }
});
test('storage probe preserves existing keys, including old diagnostic names',()=>{
  const data=new Map([['__tekshir','private'],['__tekshir_probe','keep'],['app','record']]);
  const before=[...data];const e=environment('?tekshir',data);
  e.context.TEKSHIR.sahifa();assert.deepEqual([...data],before);
});
test('pending images do not receive a false loaded verdict',()=>{
  const e=environment('?tekshir');e.doc.images=[{complete:false,getAttribute:()=> 'pending.png',hasAttribute:()=>true}];
  const rows=e.context.TEKSHIR.sahifa();
  assert.ok(rows.some(r=>r[0]==='ogoh'&&r[1].includes('yuklanmoqda')));
  assert.ok(!rows.some(r=>r[1]==='Rasmlar yuklangan'));
});

test('missing referenced labels are flagged; valid external button labels are resolved',()=>{
  const e=environment('?tekshir');
  const item={tagName:'INPUT',ownerDocument:e.doc,offsetWidth:100,offsetHeight:40,labels:[],textContent:'',getAttribute:n=>n==='aria-labelledby'?'label-id':null,querySelector:()=>null};
  e.doc.getElementById=()=>null;
  e.doc.querySelectorAll=s=>s.startsWith('input:not')?[item]:[];
  assert.ok(e.context.TEKSHIR.sahifa().some(r=>r[0]==='ogoh'&&r[1].includes('maydon uchun oddiy nom topilmadi')));
  item.tagName='BUTTON';e.doc.getElementById=()=>({textContent:'Saqlash'});
  e.doc.querySelectorAll=s=>s==='button,a[href]'?[item]:[];
  assert.ok(e.context.TEKSHIR.sahifa().some(r=>r[0]==='ok'&&r[1].includes('1 ta oddiy tugma/havolada nom topildi')));
});
test('ordinary check opens no frames; explicit width check times out and unlocks',()=>{
  const e=environment('?tekshir');
  e.hooks.find(h=>h[0]==='DOMContentLoaded')[1]();
  e.nodes['[data-t=run]'].onclick();
  assert.equal(e.frames.length,1,'only diagnostic panel');
  const button=e.nodes['[data-t=widths]'];button.onclick();
  assert.equal(button.disabled,true);assert.equal(e.frames.length,4);
  e.timers.filter(t=>t.ms===8000).forEach(t=>t.fn());
  assert.equal(button.disabled,false);assert.ok(e.frames.slice(1).every(f=>f.removed));
});

// Neutral regression fixtures; no competition ticket or real browser data.
import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const M=createRequire(import.meta.url)('./mantiq.js');
function memory(){const map=new Map();return {map,getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,String(v)),removeItem:k=>map.delete(k)};}

test('failed recovery leaves original intact and new records in memory',()=>{
 const s=memory(),original='{original';s.setItem('k',original);
 const write=s.setItem;s.setItem=(k,v)=>{if(k.includes(':buzilgan'))throw Error('QuotaExceeded');write(k,v);};
 const o=M.ombor(s,'k');assert.deepEqual(o.oqi(),[]);
 assert.equal(o.qosh({ism:'Synthetic'}).ok,false);
 assert.equal(s.getItem('k'),original);assert.equal(o.oqi().length,1);
 assert.match(o.holat().ogohlantirish,/Zaxira nusxa yozilmadi/);
});
test('invalid rows are recovered without crashing; previous backup is preserved',()=>{
 for(const row of [null,3,[],{}, {id:'x',vaqt:'invalid'}]){
  const s=memory(),raw=JSON.stringify({versiya:1,yozuvlar:[row]});s.setItem('k',raw);s.setItem('k:buzilgan','previous');
  const o=M.ombor(s,'k');assert.deepEqual(o.oqi(),[]);
  assert.equal(M.statistika([{id:'a'}],o.oqi()).jamiArizalar,0);
  assert.equal(s.getItem('k:buzilgan'),'previous');assert.equal(s.getItem('k:buzilgan:1'),raw);
  assert.equal(o.qosh({ism:'New'}).ok,true);
 }
});
test('count fields require positive integers and agree with total and capacity',()=>{
 const field={nom:'soni',tur:'son',soni:true,majburiy:true};
 for(const soni of ['0.5','1.5','0','-1','abc'])assert.equal(M.tekshir([field],{soni}).ok,false,soni);
 const result=M.tekshir([field],{soni:'3'});assert.equal(result.ok,true);
 assert.equal(M.yozuvSoni(result.toza,'soni'),3);assert.equal(M.jamiNarx({narx:10},result.toza.soni),30);
 assert.equal(M.qolganJoy({id:'a',joylar:4},[{element:'a',...result.toza}],'element','soni'),1);
 assert.equal(M.tekshir([{...field,min:4}],{soni:'3'}).ok,false);
 assert.equal(M.tekshir([{nom:'vazn',tur:'son'}],{vazn:'0.5'}).ok,true,'unrelated numeric fields still allow fractions');
});
test('table import retains empty edge cells and rejects silent numeric corruption',()=>{
 const r=M.jadvalOqi('Narx\tNomi\tJoy\n\tSynthetic\t');
 assert.equal(r.xato,'');assert.deepEqual(r.elementlar,[{id:'e1',nom:'Synthetic'}]);
 for(const value of ['-12000','unknown','12oops'])assert.ok(M.jadvalOqi('Nomi;Narx\nSynthetic;'+value).xato);
 for(const value of ['-2','unknown','1.5'])assert.ok(M.jadvalOqi('Nomi;Joylar\nSynthetic;'+value).xato);
 assert.equal(M.jadvalOqi('Nomi;Narx\nSynthetic;12 000 so‘m').elementlar[0].narx,12000);
 const rejected=M.jadvalOqi('Nomi;Narx\nGood;10\nBad;unknown');assert.ok(rejected.xato);assert.deepEqual(rejected.elementlar,[]);
 assert.ok(M.jadvalOqi('Narx\tNomi\n12\t').xato);
});
test('internal metadata cannot be overwritten by form fields',()=>{
 for(const name of ['id','vaqt','jami']){
  assert.notEqual(M.nomYasa(name),name);
  assert.equal(M.tekshir([{nom:name,tur:'matn'}],{[name]:'value'}).ok,false);
 }
 const o=M.ombor(memory(),'k'),a=o.qosh({id:'same',vaqt:'user time',ism:'A'}),b=o.qosh({id:'same',vaqt:'user time',ism:'B'});
 assert.notEqual(a.yozuv.id,b.yozuv.id);assert.ok(Number.isFinite(Date.parse(a.yozuv.vaqt)));
 o.ochir(a.yozuv.id);assert.deepEqual(o.oqi().map(x=>x.ism),['B']);
});
test('foreground selection measures the actual returned foreground',()=>{
 function L(h){const c=h.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
 function ratio(a,b){return (Math.max(L(a),L(b))+.05)/(Math.min(L(a),L(b))+.05);}
 const bg='#777777',chosen=M.matnRangi(bg);
 assert.ok(ratio(bg,chosen)>=4.5);assert.ok(ratio(bg,chosen)>ratio(bg,'#111111'));
});

const file={SAYT:{nomi:'Project B',rang:'',sahifalar:{}},ELEMENTLAR:[],FORMA:{maydonlar:[]}};
const draft={SAYT:{...file.SAYT,nomi:'Project A'},ELEMENTLAR:[],FORMA:{maydonlar:[]}};
const editorUrl='http://localhost:8080/project/tahrir.html';
function startup(storage,accept){
 const source=readFileSync(new URL('./tahrir.js',import.meta.url),'utf8');
 const marker='    chiz(); korish();\n    try { localStorage.setItem';assert.ok(source.includes(marker));
 const modified=source.replace(marker,'    window.audit={data:d,key:draftKalit,preview:korish}; return;\n    try { localStorage.setItem');
 const frame={contentWindow:{location:{hash:'#royxat'}}},win={...structuredClone(file),Mantiq:M};let prompts=0;
 vm.runInNewContext(modified,{window:win,location:{href:editorUrl},document:{readyState:'complete',querySelector:s=>s==='#t-iframe'?frame:{}},localStorage:storage,confirm:()=>{prompts++;return accept;}});
 return {win,frame,prompts};
}
test('editor ignores unscoped or other-project drafts and preserves them',()=>{
 const s=memory();s.setItem(M.QORALAMA_KALIT,JSON.stringify(draft));s.setItem(M.qoralamaKaliti(editorUrl,draft),JSON.stringify(draft));
 const result=startup(s,true);assert.equal(result.win.audit.data.SAYT.nomi,'Project B');assert.equal(result.prompts,0);
 assert.ok(s.getItem(M.QORALAMA_KALIT));
 assert.equal(M.qoralamaKaliti(editorUrl,file),M.qoralamaKaliti('http://localhost:8080/project/index.html?qoralama&t=1',file));
 assert.notEqual(M.qoralamaKaliti(editorUrl,file),M.qoralamaKaliti('http://localhost:8080/other/tahrir.html',file));
});
test('matching draft requires consent; declined draft and preview remain separate',()=>{
 const s=memory(),key=M.qoralamaKaliti(editorUrl,file),raw=JSON.stringify(draft);s.setItem(key,raw);
 const rejected=startup(s,false);assert.equal(rejected.prompts,1);assert.equal(rejected.win.audit.data.SAYT.nomi,'Project B');
 assert.notEqual(rejected.win.audit.key,key);assert.equal(s.getItem(key),raw);
 rejected.win.audit.preview();const url=new URL(rejected.frame.src,editorUrl);assert.equal(url.searchParams.get('qoralamaKey'),rejected.win.audit.key);
 const accepted=startup(s,true);assert.equal(accepted.prompts,1);assert.equal(accepted.win.audit.data.SAYT.nomi,'Project A');assert.equal(accepted.win.audit.key,key);
});

test('preview reads the editor draft and cannot pick another project key',()=>{
 const s=memory(),key=M.qoralamaKaliti(editorUrl,file),alternate=key+':yangi:fixture';s.setItem(alternate,JSON.stringify(draft));
 const source=readFileSync(new URL('./ilova.js',import.meta.url),'utf8');
 const marker="  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boshla); else boshla();";
 assert.ok(source.includes(marker));
 function preview(requested,loadedFile=file){
  const url=new URL('index.html?qoralama&qoralamaKey='+encodeURIComponent(requested),editorUrl);
  const win={...structuredClone(loadedFile),Mantiq:M,localStorage:s};
  vm.runInNewContext(source.replace(marker,'  window.auditRead=qoralama;'),{window:win,document:{},URLSearchParams,location:{href:url.href,search:url.search}});
  return win.auditRead();
 }
 assert.equal(preview(alternate).SAYT.nomi,'Project A');
 assert.equal(preview(alternate,{...file,SAYT:{...file.SAYT,nomi:'Saved version'}}).SAYT.nomi,'Project A','live preview continues after a file save');
 const foreign=M.qoralamaKaliti('http://localhost:8080/other/tahrir.html',draft)+':yangi:fixture';s.setItem(foreign,JSON.stringify(draft));
 assert.equal(preview(foreign),null);
});

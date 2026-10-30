// Ishga tushirish: node --test mantiq.test.mjs   (npm o'rnatish shart emas)
import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const M=createRequire(import.meta.url)('./mantiq.js');

const maydonlar=[
 {nom:'ism',yorliq:'Ism',tur:'matn',majburiy:true,min:2,max:20},
 {nom:'telefon',yorliq:'Telefon',tur:'telefon',majburiy:true},
 {nom:'email',yorliq:'Email',tur:'email'},
 {nom:'yosh',yorliq:'Yosh',tur:'son',min:14,max:30},
 {nom:'sana',yorliq:'Sana',tur:'sana',otmishEmas:true},
 {nom:'element',yorliq:'Tanlov',tur:'tanlash',majburiy:true,variantlar:[{qiymat:'a'},{qiymat:'b'}]},
 {nom:'rozilik',yorliq:'Rozilik',tur:'belgi',majburiy:true}
];
const togri={ism:'  Ali  ',telefon:'90 123-45-67',email:'',yosh:'',sana:'',element:'a',rozilik:true};

test('to‘g‘ri qiymatlar qabul qilinadi va tozalanadi',()=>{
 const n=M.tekshir(maydonlar,togri,{bugun:'2026-11-01'});
 assert.equal(n.ok,true,JSON.stringify(n.xatolar));
 assert.equal(n.toza.ism,'Ali');
 assert.equal(n.toza.telefon,'+998901234567');
});
test('bo‘sh forma: har majburiy maydon uchun xabar',()=>{
 const n=M.tekshir(maydonlar,{},{bugun:'2026-11-01'});
 assert.equal(n.ok,false);
 assert.deepEqual(Object.keys(n.xatolar).sort(),['element','ism','rozilik','telefon']);
});
test('faqat bo‘sh joy yozilgan maydon bo‘sh hisoblanadi',()=>{
 assert.ok(M.tekshir(maydonlar,{...togri,ism:'   '}).xatolar.ism);
});
for(const [maydon,qiymat] of [['ism','A'],['ism','a'.repeat(21)],['telefon','12345'],['telefon','+1 202 555 0100'],['email','ali@'],['yosh','13'],['yosh','31'],['yosh','abc'],['sana','2026-10-31'],['sana','31.10.2026'],['element','z'],['rozilik',false]])
 test(`noto‘g‘ri ${maydon}: ${qiymat}`,()=>{
  const n=M.tekshir(maydonlar,{...togri,[maydon]:qiymat},{bugun:'2026-11-01'});
  assert.equal(n.ok,false); assert.ok(n.xatolar[maydon],maydon);
 });
test('telefon ko‘rinishlari',()=>{
 for(const t of ['+998 90 123 45 67','998901234567','901234567','(90) 123-45-67'])assert.equal(M.telefon(t),'+998901234567',t);
 assert.equal(M.telefon('+99890123456'),null);
});
test('naqsh qoidasi va o‘z xato matni',()=>{
 const n=M.tekshir([{nom:'kod',tur:'matn',naqsh:'^[A-Z]{2}\\d{3}$',naqshXato:'Kod AA123 ko‘rinishida'}],{kod:'a1'});
 assert.equal(n.xatolar.kod,'Kod AA123 ko‘rinishida');
});
test('qidiruv apostrof, katta-kichik harf va bir necha so‘z bilan ishlaydi',()=>{
 const e=[{id:1,nom:'O‘quv markazi',turi:'Ta’lim',joy:'Samarqand'},{id:2,nom:'Sport zali',turi:'Sport',joy:'Urgut'}];
 assert.deepEqual(M.filtrla(e,{qidiruv:"o'quv"}).map(x=>x.id),[1]);
 assert.deepEqual(M.filtrla(e,{qidiruv:'SPORT urgut'}).map(x=>x.id),[2]);
 assert.deepEqual(M.filtrla(e,{turi:'Sport'}).map(x=>x.id),[2]);
 assert.deepEqual(M.filtrla(e,{turi:'hammasi',qidiruv:''}).length,2);
 assert.deepEqual(M.filtrla(e,{qidiruv:'yo‘q narsa'}),[]);
 assert.deepEqual(M.turlar(e),['Ta’lim','Sport']);
});
test('qolgan joy: sig‘im, band va cheksiz',()=>{
 const y=[{element:'a'},{element:'a'},{element:'b'}];
 assert.equal(M.qolganJoy({id:'a',joylar:2},y),0);
 assert.equal(M.qolganJoy({id:'b',joylar:5},y),4);
 assert.equal(M.qolganJoy({id:'c',joylar:0},y),Infinity);
});
function xotira(){const m=new Map();return {m,getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k)};}
test('ombor: qo‘shish, o‘qish, o‘chirish, tozalash',()=>{
 const s=xotira(),o=M.ombor(s,'k');
 assert.deepEqual(o.oqi(),[]);
 const a=o.qosh({ism:'A'}),b=o.qosh({ism:'B'});
 assert.equal(a.ok,true); assert.equal(o.oqi().length,2);
 assert.equal(M.ombor(s,'k').oqi().length,2,'yangi sahifada ham o‘qiladi');
 o.ochir(a.yozuv.id); assert.deepEqual(o.oqi().map(x=>x.ism),['B']);
 o.tozala(); assert.deepEqual(o.oqi(),[]); assert.ok(b.yozuv.id&&b.yozuv.vaqt);
});
test('ombor: buzilgan ma’lumot o‘chirilmaydi, nusxaga olinadi',()=>{
 const s=xotira(); s.setItem('k','{buzuq');
 const o=M.ombor(s,'k');
 assert.deepEqual(o.oqi(),[]);
 assert.equal(s.getItem('k:buzilgan'),'{buzuq');
 assert.ok(o.holat().ogohlantirish);
});
test('ombor: xotira to‘lsa sayt buzilmaydi, yozuv sahifada qoladi',()=>{
 const s=xotira(),o=M.ombor(s,'k'); o.qosh({ism:'A'});
 s.setItem=()=>{throw new Error('QuotaExceeded');};
 const r=o.qosh({ism:'B'});
 assert.equal(r.ok,false); assert.equal(o.oqi().length,2); assert.ok(o.holat().ogohlantirish);
});
test('ombor: localStorage umuman yo‘q bo‘lsa ham ishlaydi',()=>{
 const o=M.ombor(null,'k'); o.qosh({ism:'A'}); assert.equal(o.oqi().length,1);
 const yopiq=M.ombor({getItem(){throw new Error('denied')},setItem(){throw new Error('denied')},removeItem(){}},'k');
 assert.deepEqual(yopiq.oqi(),[]); yopiq.qosh({ism:'B'}); assert.equal(yopiq.oqi().length,1);
});
test('CSV: vergul, qo‘shtirnoq, yangi qator va formula xavfsiz',()=>{
 const t=M.csv([{a:'x,y',b:'"q"'},{a:'=1+1',b:'1\n2'}],[{nom:'a',yorliq:'A'},{nom:'b',yorliq:'B'}]);
 assert.ok(t.startsWith('﻿A,B\r\n'));
 assert.ok(t.includes('"x,y","""q"""'));
 assert.ok(t.includes("'=1+1"));
 assert.ok(t.includes('"1\n2"'));
});
test('sana va pul ko‘rinishi',()=>{
 assert.equal(M.sanaMatn('2026-11-05'),'5-noyabr, 2026');
 assert.equal(M.sanaMatn('5 noyabr'),'5 noyabr');
 assert.equal(M.pul(0),'Bepul'); assert.equal(M.pul(1250000),'1 250 000 so‘m');
 assert.equal(M.bugun(new Date(2026,0,9)),'2026-01-09');
});
test('malumot.js namunasi to‘liq va izchil',()=>{
 const oyna={};vm.runInNewContext(readFileSync(new URL('./malumot.js',import.meta.url),'utf8'),{window:oyna});
 const {SAYT,ELEMENTLAR,FORMA}=oyna;
 assert.ok(SAYT.nomi&&SAYT.sahifalar&&FORMA.maydonlar.length);
 const idlar=ELEMENTLAR.map(e=>String(e.id));
 assert.equal(new Set(idlar).size,idlar.length,'id takrorlanmasin');
 for(const e of ELEMENTLAR){assert.match(String(e.id),/^[\w-]+$/);assert.ok(e.nom);if(e.sana)assert.match(e.sana,/^\d{4}-\d{2}-\d{2}$/);}
 const turlar=new Set(['matn','matnmaydon','telefon','email','son','sana','tanlash','belgi']);
 for(const m of FORMA.maydonlar){assert.ok(turlar.has(m.tur),m.nom+': '+m.tur);assert.match(m.nom,/^[a-z][\w]*$/);}
 assert.ok(FORMA.maydonlar.some(m=>m.nom==='element'&&m.tur==='tanlash'));
});
test('asosiy rang ustidagi matn o‘qiladigan rangda',()=>{
 assert.equal(M.matnRangi('#1d4ed8'),'#ffffff');
 assert.equal(M.matnRangi('#ffeb3b'),'#111111');
 assert.equal(M.matnRangi('#000000'),'#ffffff');
 assert.equal(M.matnRangi('yaroqsiz'),'#ffffff');
});
test('maydon nomi yorliqdan yasaladi va takrorlanmaydi',()=>{
 assert.equal(M.nomYasa('Telefon raqami'),'telefonraqami');
 assert.equal(M.nomYasa('O‘quvchi yoshi'),'oquvchiyoshi');
 assert.equal(M.nomYasa('Ism',['ism']),'ism2');
 assert.equal(M.nomYasa('123'),'maydon123');
});
test('sana ko‘rinishlari ISO ga keltiriladi',()=>{
 assert.equal(M.sanaIso('5.12.2026'),'2026-12-05');
 assert.equal(M.sanaIso('05/12/2026'),'2026-12-05');
 assert.equal(M.sanaIso('2026-1-9'),'2026-01-09');
 assert.equal(M.sanaIso('ertaga'),'ertaga');
});
test('Word/Excel jadvali (Tab) elementlarga aylanadi',()=>{
 const n=M.jadvalOqi('Nomi\tYo‘nalish\tSana\tVaqt\tJoyi\tNarxi\tO‘rinlar\tRang\nBirinchi\tIT\t05.12.2026\t10:00\t1-xona\t120 000 so‘m\t15\tqizil\n\nIkkinchi\tDizayn\t2026-12-06\t11:00\t2-xona\t0\t\t');
 assert.equal(n.xato,'');
 assert.deepEqual(n.tanilmagan,['Rang']);
 assert.deepEqual(n.elementlar[0],{id:'e1',nom:'Birinchi',turi:'IT',sana:'2026-12-05',vaqt:'10:00',joy:'1-xona',narx:120000,joylar:15});
 assert.equal(n.elementlar.length,2);
});
test('Markdown | jadvali va ; ajratuvchi ham o‘qiladi',()=>{
 assert.equal(M.jadvalOqi('| Nomi | Sana |\n|---|---|\n| A | 01.01.2027 |\n| B | 02.01.2027 |').elementlar.length,2);
 assert.equal(M.jadvalOqi('nom;joy\nA;X').elementlar[0].joy,'X');
});
test('jadvalda Nomi ustuni yoki ma’lumot bo‘lmasa tushunarli xato',()=>{
 assert.ok(M.jadvalOqi('Sana;Joy\n01.01.2027;X').xato);
 assert.ok(M.jadvalOqi('Nomi').xato);
});
test('malumotYoz har doim qayta o‘qiladigan fayl yozadi (qo‘shtirnoq, yangi qator, apostrof)',()=>{
 const oyna={};vm.runInNewContext(readFileSync(new URL('./malumot.js',import.meta.url),'utf8'),{window:oyna});
 const d={SAYT:{...oyna.SAYT,nomi:'Sayt "nomi"\nO‘quv </script>'},ELEMENTLAR:oyna.ELEMENTLAR,FORMA:oyna.FORMA};
 const yangi={};vm.runInNewContext(M.malumotYoz(d),{window:yangi});
 assert.deepEqual(JSON.parse(JSON.stringify(yangi)),JSON.parse(JSON.stringify(d)));
});

document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
import {products,normalize,change,total,money,exportCart} from './model.js?v=878bdb00f7';
const $=s=>document.querySelector(s),key='forma-cart-v2';let cart=normalize(null),category='all',opener,selected;
let storageUsable=true;
function read(){if(!storageUsable)return normalize(cart);try{return normalize(JSON.parse(localStorage.getItem(key)));}catch{return normalize(null);}}
function write(){try{localStorage.setItem(key,JSON.stringify(cart));}catch{storageUsable=false;$('#storage-note').textContent='Saqlash cheklangan. Tanlovingizni fayl qilib yuklab oling.';}}
function mutate(id,delta){const before=read();cart=change(before,id,delta);write();renderCart();return (before[id]||0)!==(cart[id]||0);}
function renderCart(){
 document.querySelectorAll('[data-add]').forEach(b=>{const full=(cart[b.dataset.add]||0)>=20;b.disabled=full;b.textContent=full?'Limit: 20':'Savatga +';});
 if(selected){$('#detail-add').disabled=(cart[selected.id]||0)>=20;$('#detail-add').textContent=$('#detail-add').disabled?'Savatda 20 ta':'Savatga qo‘shish +';}
 $('#cart-count').textContent=Object.values(cart).reduce((n,x)=>n+x,0);$('#cart-total').textContent=money(total(cart));$('#cart-empty').hidden=!!Object.keys(cart).length;$('#export-cart').disabled=!Object.keys(cart).length;
 $('#cart-items').innerHTML=products.filter(p=>cart[p.id]).map(p=>`<li class="cart-item"><img src="images/${p.image}" alt="${p.alt}" width="84" height="105"><div><h3>${p.name}</h3><p>${money(p.price)}</p><div class="quantity"><button type="button" data-change="${p.id}" data-delta="-1" aria-label="${p.name}: bittaga kamaytirish">−</button><span aria-label="Miqdor">${cart[p.id]}</span><button type="button" data-change="${p.id}" data-delta="1" ${cart[p.id]>=20?'disabled':''} aria-label="${p.name}: bittaga oshirish">+</button><button class="remove" type="button" data-remove="${p.id}" aria-label="${p.name}: savatdan olish">O‘chirish</button></div></div></li>`).join('');
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.filter){category=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let count=0;document.querySelectorAll('[data-product]').forEach(c=>{c.hidden=category!=='all'&&c.dataset.category!==category;if(!c.hidden)count++;});$('#product-count').textContent=`${count} ta buyum`;}
 if(b.dataset.detail){selected=products.find(p=>p.id===b.dataset.detail);opener=b;cart=read();renderCart();$('#detail-title').textContent=selected.name;$('#detail-image').src='images/'+selected.image;$('#detail-image').alt=selected.alt;$('#detail-text').textContent=selected.description;$('#detail-material').textContent=selected.material;$('#detail-size').textContent=selected.size;$('#detail-price').textContent=money(selected.price);$('#detail-care').textContent=selected.care;$('#detail').showModal();}
 if(b.dataset.add||b.id==='detail-add'){const id=b.dataset.add||selected.id;const added=mutate(id,1);$('#live-status').textContent=added?products.find(p=>p.id===id).name+' savatga qo‘shildi.':'Bu buyumdan ko‘pi bilan 20 ta tanlash mumkin.';if(added&&b.id==='detail-add')$('#detail').close();if(added&&b.dataset.add&&!b.disabled){b.textContent='Qo‘shildi ✓';b.classList.add('just-added');setTimeout(()=>{b.classList.remove('just-added');if(!b.disabled)b.textContent='Savatga +';},1800);}}
 if(b.id==='cart-open'){opener=b;cart=read();renderCart();$('#cart').showModal();}
 if(b.dataset.change){const id=b.dataset.change,d=b.dataset.delta;mutate(id,Number(d));const next=document.querySelector(`[data-change="${id}"][data-delta="${d}"]:not(:disabled)`);(next||$('#cart-heading')).focus();}
 if(b.dataset.remove){mutate(b.dataset.remove,-20);$('#cart-heading').focus();}
 if(b.dataset.close)$('#'+b.dataset.close).close();
});
for(const d of document.querySelectorAll('dialog'))d.addEventListener('close',()=>{if(opener?.isConnected)opener.focus();});
$('#export-cart').addEventListener('click',()=>{cart=read();renderCart();if(!Object.keys(cart).length)return;const blob=new Blob(['\ufeff'+exportCart(cart)],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='forma-tanlovim.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);});
window.addEventListener('storage',e=>{if(e.key===key||e.key===null){cart=read();renderCart();}});cart=read();renderCart();

document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{a.closest('details').open=false;}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const menu=document.querySelector('.mobile-nav[open]');if(menu){menu.open=false;menu.querySelector('summary').focus();}}});

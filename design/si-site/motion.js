// One persistent particle field: targets change; particles keep their positions/velocity.
// Independently implemented from observed SI.gov interaction and timing.
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const seeded=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
export const FLAG_COLORS=['#ffffff','#0099b5','#1eb53a','#ce1126'];
export const FLAG_STARS=Object.freeze([3,4,5].flatMap((count,row)=>Array.from({length:count},(_,col)=>Object.freeze({x:87-(count-1-col)*12,y:8+row*12,row}))));
const flagCache=new Map();
export function uzbekFlagPoints(count){
 if(flagCache.has(count))return flagCache.get(count);
 const points=[],lineCount=Math.round(count*.10/2),moonCount=Math.round(count*.11),starCount=18,backgroundCount=count-lineCount*2-moonCount-starCount*12;
 const cols=Math.ceil(Math.sqrt(backgroundCount*2)),rows=Math.ceil(backgroundCount/cols);
 for(let i=0;i<backgroundCount;i++){
  const x=(i%cols+.5)/cols*250,y=(Math.floor(i/cols)+.5)/rows*125;
  points.push({x,y,color:y<40?1:y<42.5?3:y<82.5?0:y<85?3:2,feature:'field'});
 }
 for(const y of [41.25,83.75])for(let i=0;i<lineCount;i++)points.push({x:(i+.5)/lineCount*250,y,color:3,feature:'separator'});
 // Sample the crescent's white area rather than painting a blue disc on top.
 let attempt=0;while(points.length<backgroundCount+lineCount*2+moonCount){
  const x=20+seeded(attempt+601)*30,y=5+seeded(attempt+1601)*30;attempt++;
  if(Math.hypot(x-35,y-20)<=15&&Math.hypot(x-40.5,y-20)>15)points.push({x,y,color:0,feature:'crescent'});
 }
 FLAG_STARS.forEach((star,index)=>{
  for(let i=0;i<starCount;i++){
   const edge=i%10,angle=-Math.PI/2+edge*Math.PI/5,radius=edge%2?1.15:3,fill=i>=10?.52:1;
   points.push({x:star.x+Math.cos(angle)*radius*fill,y:star.y+Math.sin(angle)*radius*fill,color:0,feature:'star',star:index,row:star.row});
  }
 });
 flagCache.set(count,points);return points;
}
export function advanceParticle(p,target,pointer,waves,dt=1){
 const steps=Math.max(1,Math.ceil(dt)),step=dt/steps;
 for(let j=0;j<steps;j++){
  let ax=(target.x-p.x)*.045,ay=(target.y-p.y)*.045;
  const dx=p.x-pointer.x,dy=p.y-pointer.y,d=Math.hypot(dx,dy);
  if(d<120&&d>.01){const force=(1-d/120)*5;ax+=dx/d*force;ay+=dy/d*force;}
  for(const wave of waves){const x=p.x-wave.x,y=p.y-wave.y,r=Math.hypot(x,y);if(r>.01&&Math.abs(r-wave.radius)<26){ax+=x/r*10;ay+=y/r*10;}}
  const damping=Math.pow(.84,step);p.vx=(p.vx+ax*step)*damping;p.vy=(p.vy+ay*step)*damping;p.x+=p.vx*step;p.y+=p.vy*step;
 }
}
export function shapeTarget(kind,i,count,time,box,pointer={nx:0,ny:0}){
 const cx=box.x+box.w/2,cy=box.y+box.h/2,r=Math.min(box.w,box.h)*.42;
 if(kind==='sphere'||kind==='ring'){
  const ring=kind==='ring'?Math.floor(count*.2):0;
  if(i<ring){const a=i/ring*Math.PI*2+time*.35,x=Math.cos(a)*r*1.55,y=Math.sin(a)*r*.38;return{x:cx+x*Math.cos(-.32)-y*Math.sin(-.32),y:cy+x*Math.sin(-.32)+y*Math.cos(-.32),alpha:.95,color:1,size:1.6};}
  const t=(i-ring+.5)/(count-ring),polar=Math.acos(1-2*t),angle=(i-ring+.5)*10.166407384630519;
  const x=Math.sin(polar)*Math.cos(angle),y=Math.cos(polar),z=Math.sin(polar)*Math.sin(angle),rotation=time*.22+pointer.nx*.7,tilt=.35+pointer.ny*.35;
  const xx=x*Math.cos(rotation)-z*Math.sin(rotation),zz=x*Math.sin(rotation)+z*Math.cos(rotation),yy=y*Math.cos(tilt)-zz*Math.sin(tilt),depth=y*Math.sin(tilt)+zz*Math.cos(tilt),perspective=1/(1.9-depth*.5);
  return{x:cx+xx*r*perspective*1.5,y:cy+yy*r*perspective*1.5,alpha:.25+.75*(depth*.5+.5),size:1+depth*.9};
 }
 if(kind==='helix'){
  const strand=i%3,t=(i/count+time*.03)%1,a=t*Math.PI*16+time*1.1+(strand===1?Math.PI:0),radius=Math.min(box.w,box.h)*.28;
  if(strand===2){const row=Math.floor(t*40)/40;return{x:cx+radius*Math.cos(row*Math.PI*16+time*1.1)*((i*.618%1)*2-1),y:box.y+box.h*(1-row),alpha:.45,color:2,size:1.1};}
  const depth=Math.sin(a);return{x:cx+radius*Math.cos(a)*(1+t*.6),y:box.y+box.h*(1-t),alpha:.35+.65*(depth*.5+.5),color:strand?1:0,size:1.1+depth*.8};
 }
 if(kind==='towers'){
  const column=i%36,col=column%9,row=Math.floor(column/9),level=i*.381966%1,height=.25+seeded(column+98)*.75;
  return{x:box.x+box.w*(.08+col/8*.84)+(row-1.5)*box.w*.035+box.w/9*.55*(1-row*.12)*(i*.7548%1-.5),y:box.y+box.h*(.95-row*.06)-level*box.h*.75*height*(.9+.1*Math.sin(time*1.4+column)),alpha:.3+row*.2+(level>.97?.4:0),color:level>.97?1:row===3?2:0,size:1.3};
 }
 if(kind==='broadcast'){
  const ring=i%9,t=(time*.07+ring/9)%1,a=Math.floor(i/9)/Math.ceil(count/9)*Math.PI*2+.4*ring+.05*Math.sin(time*.3+ring),radius=40+t*Math.max(box.w,box.h)*.72;
  return{x:cx+Math.cos(a)*radius,y:cy+box.h*.06+Math.sin(a)*radius*(box.w<700?1:.62),alpha:.85*(1-t),color:ring%3===0?1:2,size:1.2+.8*(1-t)};
 }
 if(kind==='flag'){
  const p=uzbekFlagPoints(count)[i],w=Math.min(box.w*.96,box.h*1.68),h=w/2,u=p.x/250;
  const wave=Math.sin(u*7-time*2.4)*h*.05*(u+.15)+Math.sin(u*3-time*1.1)*h*.02;
  return{x:box.x+(box.w-w)/2+u*w,y:box.y+(box.h-h)/2+p.y/125*h+wave,alpha:1,color:p.color,size:p.feature==='star'?1.05:1.4};
 }
 return{x:box.x+(seeded(i+51)*box.w+8*time*(seeded(i+5)+.2))%(box.w+20)-10,y:box.y+seeded(i+71)*box.h+8*Math.sin(time*.5+seeded(i+5)*9),alpha:.08+.28*seeded(i+5),size:1+seeded(i+5)};
}

export class ParticleField{
 constructor(canvas,{paused=false,reduced=false}={}){
  this.canvas=canvas;this.ctx=canvas.getContext('2d');this.paused=paused;this.reduced=reduced;this.frame=0;this.time=0;this.last=0;this.waves=[];this.cache=new Map();this.particles=[];this.pointer={x:-10000,y:-10000,nx:0,ny:0};this.expanded=false;this.mode='text';this.targetName='SI';this.box={x:0,y:0,w:1,h:1};this.visible=!document.hidden;this.motionStart=0;
 }
 async init(){
  if(!this.ctx)throw new Error('Canvas unavailable');
  await document.fonts.load('400 200px "Instrument Serif"');await document.fonts.ready;this.resize();
  window.addEventListener('pointermove',e=>this.onPointer(e),{passive:true});
  document.addEventListener('pointerleave',()=>{this.pointer.x=this.pointer.y=-10000;});
  window.addEventListener('pointerdown',e=>{if(this.paused||this.reduced||e.target.closest('a,input,button:not(.art-toggle),dialog'))return;this.waves.push({x:e.clientX,y:e.clientY,radius:0});},{passive:true});
  window.addEventListener('scroll',()=>{this.syncScene();if(this.paused)this.paint();},{passive:true});
  let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>this.resize(),120);});
  document.addEventListener('visibilitychange',()=>{this.visible=!document.hidden;if(this.visible)this.start();else this.stop();});
  const art=document.querySelector('.art-toggle');let lastPointerType;
  art.addEventListener('pointerdown',event=>{lastPointerType=event.pointerType;});
  art.addEventListener('click',event=>{if(lastPointerType==='touch'||event.pointerType==='touch'||event.detail===0)this.setExpanded(!this.expanded);lastPointerType=null;});
  this.canvas.classList.add('ready');document.querySelector('.hero-art').classList.add('ready');this.paint();this.start();return this;
 }
 resize(){
  this.width=innerWidth;this.height=innerHeight;const dpr=Math.min(devicePixelRatio||1,2);this.canvas.width=Math.round(this.width*dpr);this.canvas.height=Math.round(this.height*dpr);this.ctx.setTransform(dpr,0,0,dpr,0,0);
  const count=this.width<700?1500:1800;
  if(this.particles.length!==count)this.particles=Array.from({length:count},(_,i)=>({x:seeded(i+7)*this.width,y:seeded(i+47)*this.height,vx:0,vy:0,color:seeded(i+17)<.35?1:seeded(i+37)<.4?2:0}));
  this.cache.clear();this.syncScene(true);if(this.paused||this.reduced)this.snap();this.paint();this.start();
 }
 onPointer(e){
  if(e.pointerType==='touch'||this.paused||this.reduced)return;
  this.pointer={x:e.clientX,y:e.clientY,nx:e.clientX/this.width*2-1,ny:e.clientY/this.height*2-1};
  if(this.scene!=='hero'||document.querySelector('dialog[open]'))return;
  const b=this.expanded?this.textBounds:this.siBounds,pad=this.expanded?60:20;
  if(b)this.setExpanded(e.clientX>b.x-pad&&e.clientX<b.x+b.w+pad&&e.clientY>b.y-pad&&e.clientY<b.y+b.h+pad);
 }
 setExpanded(value){
  if(value===this.expanded||this.paused||this.reduced)return;this.expanded=value;document.querySelector('.art-toggle').setAttribute('aria-pressed',String(value));this.syncScene(true);
 }
 syncScene(force=false){
  const middle=this.height*.5,hero=document.querySelector('.hero'),heroBox=hero.getBoundingClientRect();
  const candidates=[...document.querySelectorAll('[data-motion]')].filter(e=>{const b=e.getBoundingClientRect();return b.top<=middle&&b.bottom>middle;});
  let section=candidates.at(-1)||hero;let mode=section.dataset.motion||'text',scene=section===hero?'hero':section.id||mode;
  let box;
  if(scene==='hero'){
   const heading=document.querySelector('.hero-copy').getBoundingClientRect().top+scrollY;
   mode=this.expanded?(this.width<900?'circle':'snake'):'text';
   box=this.width>=900?(this.expanded?{x:this.width*.04,y:72,w:this.width*.92,h:Math.max(120,heading-90)}:{x:this.width*.04,y:this.height*.1,w:this.width*.92,h:Math.max(120,Math.min(this.height*.6,heading-18-this.height*.1))}):{x:this.width*.02,y:64,w:this.width*.96,h:Math.max(this.height*.25,heading-82)};
  }else{
   const b=section.querySelector('.motion-stage')?.getBoundingClientRect();
   box=this.width>=900&&scene!=='reja'?{x:this.width*.52,y:this.height*.14,w:this.width*.42,h:this.height*.72}:b?{x:b.left,y:b.top,w:b.width,h:b.height}:{x:this.width*.08,y:this.height*.1,w:this.width*.84,h:this.height*.5};
  }
  if(mode==='scatter'||mode==='broadcast')box={x:0,y:0,w:this.width,h:this.height};
  const target=mode==='text'?'SI':mode==='snake'?'Super|Intelligence':mode==='circle'?'SUPER INTELLIGENCE ':'';
  const signature=[mode,scene,target,Math.round(box.x),Math.round(box.y),Math.round(box.w),Math.round(box.h)].join('|');
  const changed=signature!==this.signature;
  this.scene=scene;this.box=box;this.mode=mode;this.targetName=target;
  const surface=section.closest('section')||hero,channels=getComputedStyle(surface).backgroundColor.match(/[\d.]+/g)?.slice(0,3).map(Number);
  this.light=!channels||channels[0]*.2126+channels[1]*.7152+channels[2]*.0722>150;
  this.canvas.dataset.surface=this.light?'light':'dark';
  const footer=document.querySelector('.site-footer').getBoundingClientRect();this.opacity=clamp((footer.top-this.height*.25)/(this.height*.5),0,1);
  if(scene==='hero'&&heroBox.bottom<0)this.opacity=0;
  if(changed||force){
   const modeChanged=this.canvas.dataset.form!==mode;this.signature=signature;
   if(mode==='text'||mode==='snake'||mode==='circle'){
    this.previous=this.targets;this.targets=this.textTargets(target,box,mode==='circle');
    if(mode==='text')this.siBounds=this.targets.bounds;else this.textBounds=this.targets.bounds;
   }
   if(modeChanged)this.motionStart=this.time;
   this.canvas.dataset.form=mode;this.canvas.dataset.scene=scene;
   if(this.paused||this.reduced)this.snap();
  }
 }
 textTargets(text,box,circular=false){
  const key=[text,box.x|0,box.y|0,box.w|0,box.h|0,circular].join(':');if(this.cache.has(key))return this.cache.get(key);
  const mask=document.createElement('canvas');mask.width=Math.max(20,Math.round(box.w));mask.height=Math.max(20,Math.round(box.h));const c=mask.getContext('2d',{willReadFrequently:true});
  c.fillStyle='#fff';c.textAlign='center';c.textBaseline='alphabetic';let points=[];
  if(circular){
   const chars=[...text],radius=Math.min(box.w,box.h)*.36,font=radius*.42;c.font=`400 ${font}px "Instrument Serif"`;c.textBaseline='middle';
   chars.forEach((char,i)=>{const a=-Math.PI/2+i/chars.length*Math.PI*2;c.save();c.translate(box.w/2+Math.cos(a)*radius,box.h/2+Math.sin(a)*radius);c.rotate(a+Math.PI/2);c.fillText(char,0,0);c.restore();});
  }else{
   const lines=text.split('|');c.font='400 100px "Instrument Serif"';const metrics=lines.map(line=>c.measureText(line)),mw=Math.max(...metrics.map(m=>m.actualBoundingBoxLeft+m.actualBoundingBoxRight)),ascent=metrics[0].actualBoundingBoxAscent/100,descent=metrics.at(-1).actualBoundingBoxDescent/100;
   const total=ascent+.92*(lines.length-1)+descent,font=Math.min(box.w*.86/(mw/100),box.h*.9/total);c.font=`400 ${font}px "Instrument Serif"`;
   lines.forEach((line,i)=>c.fillText(line,box.w/2,(box.h-total*font)/2+ascent*font+i*font*.92));
  }
  const pixels=c.getImageData(0,0,mask.width,mask.height).data;let area=0;for(let j=3;j<pixels.length;j+=4)if(pixels[j]>128)area++;
  const spacing=Math.max(1.5,Math.sqrt(area/(this.particles.length*.95)));
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  for(let y=spacing/2;y<mask.height;y+=spacing)for(let x=spacing/2;x<mask.width;x+=spacing)if(pixels[(Math.floor(y)*mask.width+Math.floor(x))*4+3]>128){points.push({x:box.x+x,y:box.y+y,column:Math.floor(x/spacing),line:text.includes('|')&&y>box.h/2?1:0});minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}
  if(!points.length)throw new Error('Particle text mask empty');
  points.sort((a,b)=>a.line-b.line||a.column-b.column||(a.column%2?b.y-a.y:a.y-b.y));points.forEach((p,i)=>p.rank=i/points.length);
  // Stable shuffle avoids visible rows flying in together; rank preserves the writing path.
  for(let j=points.length-1;j>0;j--){const k=Math.floor(seeded(j+97)*(j+1));[points[j],points[k]]=[points[k],points[j]];}
  const result=Array.from({length:this.particles.length},(_,i)=>{const p=points[i%points.length];return{...p,x:p.x+(i>=points.length?(seeded(i+9)-.5)*3:0),y:p.y+(i>=points.length?(seeded(i+19)-.5)*3:0),alpha:1,size:1.7};});
  result.bounds={x:box.x+minX,y:box.y+minY,w:maxX-minX,h:maxY-minY};this.cache.set(key,result);return result;
 }
 target(i){
  if(this.mode==='text')return this.targets[i];
  if(this.mode==='snake'){
   const p=this.targets[i],progress=(this.time-this.motionStart)/2.4;
   if(!this.reduced&&progress<p.rank){return this.previous?.[i]||{...p,alpha:.3};}
   return{...p,color:!this.reduced&&progress-p.rank<.045?1:undefined,size:!this.reduced&&progress-p.rank<.045?2.7:1.7};
  }
  if(this.mode==='circle'){
   const p=this.targets[i],cx=this.box.x+this.box.w/2,cy=this.box.y+this.box.h/2,angle=this.reduced?0:Math.max(0,this.time-this.motionStart-.6)*.35,x=p.x-cx,y=p.y-cy;return{...p,x:cx+x*Math.cos(angle)-y*Math.sin(angle),y:cy+x*Math.sin(angle)+y*Math.cos(angle),size:1.6};
  }
  return shapeTarget(this.mode,i,this.particles.length,this.reduced?0:this.time,this.box,this.pointer);
 }
 snap(){if(!this.targets&&['text','snake','circle'].includes(this.mode))return;for(let i=0;i<this.particles.length;i++){const t=this.target(i),p=this.particles[i];p.x=t.x;p.y=t.y;p.vx=p.vy=0;}}
 paint(dt=0){
  if(!this.ctx||!this.particles.length)return;const c=this.ctx;c.clearRect(0,0,this.width,this.height);
  const palette=this.mode==='flag'?FLAG_COLORS:this.light?['#062c35','#007c92','#168a43','#ce1126']:FLAG_COLORS;
  for(let i=0;i<this.particles.length;i++){
   const p=this.particles[i],t=this.target(i);if(dt)advanceParticle(p,t,this.pointer,this.waves,dt);
   const speed=clamp(Math.hypot(p.vx,p.vy)/7,0,1),size=t.size*(this.width<700?1.1:1.35)+speed*2;
   c.globalAlpha=clamp((t.alpha+speed*.4)*this.opacity,0,1);c.fillStyle=palette[this.mode==='flag'?t.color:speed>.35?1:t.color??p.color];
   if(this.mode==='flag'&&this.light&&t.color===0){c.strokeStyle='#59757d';c.lineWidth=.45;c.strokeRect(p.x-size/2,p.y-size/2,size,size);}
   c.fillRect(p.x-size/2,p.y-size/2,size,size);
  }c.globalAlpha=1;
 }
 tick=now=>{
  this.frame=0;if(this.paused||!this.visible)return;const elapsed=this.last?clamp((now-this.last)/16.6667,0,3):1;this.last=now;this.time+=elapsed/60;
  for(const wave of this.waves)wave.radius+=16*elapsed;this.waves=this.waves.filter(w=>w.radius<Math.max(this.width,this.height)*1.2);
  this.paint(elapsed);this.start();
 };
 start(){if(!this.frame&&!this.paused&&this.visible)this.frame=requestAnimationFrame(this.tick);}
 stop(){if(this.frame)cancelAnimationFrame(this.frame);this.frame=0;this.last=0;}
 setPaused(paused,reduced=this.reduced){this.paused=paused;this.reduced=reduced;if(paused){this.stop();if(reduced){this.expanded=false;this.syncScene(true);this.snap();}this.paint();}else this.start();}
}

# Bloom · Material Design 3 — editable source snapshot

Source fingerprint: `577e3a75cb0b13ee359aab2180b462d42435f0f53ee1e89195d42f00142082fd`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/src/main.jsx

```jsx
import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence,MotionConfig,useReducedMotion} from 'motion/react';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/fab/fab.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/chip-set.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/radio/radio.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/dialog/dialog.js';
import '@material/web/ripple/ripple.js';
import {argbFromHex,hexFromArgb,Hct,SchemeTonalSpot,MaterialDynamicColors} from '@material/material-color-utilities';
import {categories,visibleProjects,createProject,progress} from './model.js';
import {loadProjectState,persistProjectState,exportProjects} from './persistence.js';
import './style.css';
const SPRING={type:'spring',stiffness:380,damping:29,mass:1};
function Icon({name,size=24,fill,style,...props}){return <span {...props} aria-hidden="true" className="material-symbols" style={{fontSize:size,fontVariationSettings:`'FILL' ${fill&&fill!=='none'?1:0}`, ...style}}>{name}</span>}
function DownloadIcon({size=18,...props}){return <svg {...props} aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"/></svg>}
const Plus=p=><Icon name="add" {...p}/>,Search=p=><Icon name="search" {...p}/>,X=p=><Icon name="close" {...p}/>,ArrowUpRight=p=><Icon name="arrow_outward" {...p}/>,ArrowRight=p=><Icon name="arrow_forward" {...p}/>,Bookmark=p=><Icon name="bookmark" {...p}/>,LayoutGrid=p=><Icon name="grid_view" {...p}/>,Check=p=><Icon name="check" {...p}/>,CheckCheck=p=><Icon name="check_circle" {...p}/>,Sun=p=><Icon name="light_mode" {...p}/>,Moon=p=><Icon name="dark_mode" {...p}/>,ChevronDown=p=><Icon name="expand_more" {...p}/>,HelpCircle=p=><Icon name="help" {...p}/>,Leaf=p=><Icon name="check_circle" {...p}/>,FolderOpen=p=><Icon name="folder_open" {...p}/>,ExternalLink=p=><Icon name="arrow_outward" {...p}/>,Home=p=><Icon name="home" {...p}/>,Star=p=><Icon name="star" {...p}/>,List=p=><Icon name="list" {...p}/>,HardDrive=p=><Icon name="storage" {...p}/>,Cloud=p=><Icon name="cloud" {...p}/>,ChevronRight=p=><Icon name="chevron_right" {...p}/>,GraduationCap=p=><Icon name="school" {...p}/>,Palette=p=><Icon name="palette" {...p}/>,Code2=p=><Icon name="code" {...p}/>;
function ProjectIcon({category,size=24}){const Element=category==='Ta’lim'?GraduationCap:category==='Dizayn'?Palette:Code2;return <Element size={size}/>}
function Art({kind='flower',title='Yangi loyiha',category='Loyiha'}){return <div className={`material-cover cover-${kind}`} aria-hidden="true"><div className="cover-ring"/><div className="cover-page"><span className="cover-kicker">{category}</span><strong>{title}</strong><div className="cover-sample"><span/><span/><span/></div><div className="cover-caption">G‘oya · Reja · Natija</div></div></div>}
function BloomMark(){return <svg aria-hidden="true" viewBox="0 0 40 40"><rect x="3" y="3" width="34" height="34" rx="12" fill="currentColor"/><path d="M12 27V13h8a5 5 0 0 1 0 10h-8m0-5h10a4.5 4.5 0 0 1 0 9H12" fill="none" stroke="var(--md-sys-color-on-primary)" strokeWidth="2.4" strokeLinejoin="round"/></svg>}
function Button({children,className='',type='button',...props}){
 if(className==='preview-open')return <button {...props} type={type} className={className}><md-ripple/>{children}</button>;
 if(className.includes('filter'))return <md-filter-chip {...props} className={className} selected={props['aria-pressed']} label={React.Children.toArray(children).filter(c=>typeof c==='string').join('').trim()}/>;
 const Tag=className.includes('new-button')?'md-fab':className.includes('icon-button')?'md-icon-button':className.includes('filled')?'md-filled-button':className.includes('tonal')||className.includes('chosen')?'md-filled-tonal-button':className.includes('outlined')?'md-outlined-button':'md-text-button';
 const items=React.Children.toArray(children).map(child=>React.isValidElement(child)&&child.props.size?React.cloneElement(child,{slot:Tag==='md-icon-button'?undefined:'icon'}):child);
 return <Tag {...props} type={type} className={className}>{items}</Tag>;
}
function Modal({open,onOpenChange,title,description,children,actions,opener,className=''}){
 const dialog=useRef(null);const reduce=useReducedMotion();
 useEffect(()=>{const el=dialog.current;const closed=()=>{onOpenChange(false);const target=opener?.current?.isConnected?opener.current:document.getElementById('projects-heading');target?.focus({preventScroll:true})};el.addEventListener('closed',closed);return()=>el.removeEventListener('closed',closed)},[onOpenChange,opener]);
 useEffect(()=>{const el=dialog.current;if(open)el.show();else if(el.open)el.close()},[open]);
 return <md-dialog ref={dialog} quick={reduce} className={`material-dialog ${className}`} aria-label={title}><div slot="headline" className="dialog-heading" aria-label={title}><span>{title}</span><Button className="icon-button" aria-label="Oynani yopish" onClick={()=>onOpenChange(false)}><X size={24}/></Button></div><div slot="content"><p className="dialog-description">{description}</p>{children}</div>{actions&&<div slot="actions">{actions}</div>}</md-dialog>;
}
const SEEDS=[{color:'#6750a4',label:'Binafsha'},{color:'#1a73e8',label:'Ko‘k'},{color:'#00856a',label:'Yashil'},{color:'#ad4d25',label:'Terrakota'}];
function applyMaterialTheme(seed,dark){const scheme=new SchemeTonalSpot(Hct.fromInt(argbFromHex(seed)),dark,0);const roles=new MaterialDynamicColors();for(const color of roles.allColors){document.documentElement.style.setProperty('--md-sys-color-'+color.name.replaceAll('_','-'),hexFromArgb(color.getArgb(scheme)))} }
function App(){
const reduce=useReducedMotion();const [startup]=useState(()=>loadProjectState(()=>localStorage));const [projects,setProjects]=useState(startup.projects);const [view,setView]=useState('all');const [category,setCategory]=useState('Hammasi');const [query,setQuery]=useState('');const [sort,setSort]=useState('recent');const [selected,setSelected]=useState(null);const [detailOpen,setDetailOpen]=useState(false);const [createOpen,setCreateOpen]=useState(false);const [helpOpen,setHelpOpen]=useState(false);const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('ustoz.bloom.theme')==='dark'?'dark':'light'}catch{return'light'}});const [toast,setToast]=useState('');const [storageStatus,setStorageStatus]=useState(startup.status);const [formError,setFormError]=useState('');const [formVersion,setFormVersion]=useState(0);const [display,setDisplay]=useState('grid');const [paletteOpen,setPaletteOpen]=useState(false);const paletteOpener=useRef(null);const [seed,setSeed]=useState(()=>{try{const stored=localStorage.getItem('ustoz.bloom.seed');return SEEDS.some(s=>s.color===stored)?stored:SEEDS[0].color}catch{return SEEDS[0].color}});const opener=useRef(null);const createOpener=useRef(null);const helpOpener=useRef(null);const searchRef=useRef(null);const headingRef=useRef(null);
useEffect(()=>{if(projects===startup.projects)return;setStorageStatus(persistProjectState(()=>localStorage,projects,{startupStatus:startup.status}).status)},[projects,startup]);
useEffect(()=>{try{localStorage.setItem('ustoz.bloom.theme',theme)}catch{}document.documentElement.dataset.theme=theme;applyMaterialTheme(seed,theme==='dark');try{localStorage.setItem('ustoz.bloom.seed',seed)}catch{}},[theme,seed]);
useEffect(()=>{if(!toast)return;const timer=setTimeout(()=>setToast(''),3200);return()=>clearTimeout(timer)},[toast]);
useEffect(()=>{function shortcut(event){if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!document.querySelector('md-dialog[open]')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){event.preventDefault();searchRef.current?.focus()}}window.addEventListener('keydown',shortcut);return()=>window.removeEventListener('keydown',shortcut)},[]);
const filtered=visibleProjects(projects,{view,category,query,sort});const done=projects.filter(p=>progress(p)===1).length;const saved=projects.filter(p=>p.saved).length;const totalTasks=projects.reduce((n,p)=>n+p.tasks.length,0);const checkedTasks=projects.reduce((n,p)=>n+p.tasks.filter(t=>t.done).length,0);const selectedProject=projects.find(p=>p.id===selected);const totalPercent=totalTasks?Math.round(checkedTasks/totalTasks*100):0;
function downloadBackup(){const url=URL.createObjectURL(new Blob([exportProjects(projects)],{type:'application/json;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='bloom-loyihalar.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);setToast('Loyihalar nusxasi yuklashga topshirildi')}
function navigate(next){setView(next);setCategory('Hammasi');setQuery('')}
function openProject(event,id){opener.current=event.currentTarget;setSelected(id);setDetailOpen(true)}
function startProject(event){createOpener.current=event.currentTarget;setFormError('');setCreateOpen(true)}
function toggleSaved(id){setProjects(prev=>prev.map(p=>p.id===id?{...p,saved:!p.saved}:p));const project=projects.find(p=>p.id===id);setToast(project.saved?'Loyiha saqlanganlardan olindi':'Loyiha saqlandi');if(view==='saved'&&project.saved&&!detailOpen)requestAnimationFrame(()=>headingRef.current?.focus({preventScroll:true}))}
function changeTask(id,index){setProjects(prev=>prev.map(p=>p.id===id?{...p,tasks:p.tasks.map((t,i)=>i===index?{...t,done:!t.done}:t)}:p))}
function submitProject(event){event.preventDefault();try{const project=createProject({title:String(event.currentTarget.querySelector('[name=title]').value||''),description:String(event.currentTarget.querySelector('[name=description]').value||''),category:String(event.currentTarget.querySelector('[name=category]').value||'')},crypto.randomUUID());if(projects.length>=200){setFormError('Bu demo 200 tagacha loyiha saqlaydi.');return}setProjects(prev=>[project,...prev]);navigate('all');setSort('recent');setCreateOpen(false);setToast('Yangi loyiha yaratildi');setFormVersion(v=>v+1)}catch{setFormError('Loyiha nomini yozing va yo‘nalishini tanlang.');event.currentTarget.querySelector('[name=title]')?.focus()}}
const transition=reduce?{duration:0}:SPRING;
return <MotionConfig reducedMotion="user" transition={transition}>
<a className="skip-link" href="#main">Asosiy mazmunga o‘tish</a>
<div className="app-shell">
 <aside className="sidebar"><a href="#main" className="rail-brand" aria-label="Bloom bosh sahifasi"><BloomMark/></a><Button className="new-button" onClick={startProject} aria-label="Yangi loyiha yaratish"><Plus size={24}/></Button><nav aria-label="Asosiy navigatsiya">{[{id:'all',icon:Home,label:'Loyihalar'},{id:'saved',icon:Bookmark,label:'Saqlangan'},{id:'done',icon:CheckCheck,label:'Bajarilgan'}].map(item=><button id={`nav-${item.id}`} key={item.id} className={`nav-item ${view===item.id?'active':''}`} onClick={()=>{navigate(item.id);headingRef.current?.scrollIntoView({behavior:reduce?'instant':'smooth',block:'start'})}} aria-current={view===item.id?'page':undefined}><span className="nav-icon">{view===item.id&&<motion.span className="nav-selection" layoutId="nav-selection" transition={transition}/>}<md-ripple for={`nav-${item.id}`}/><item.icon size={24} fill={view===item.id?'currentColor':'none'}/></span><span>{item.label}</span></button>)}</nav><Button className="icon-button rail-help" aria-label="Bloom haqida" onClick={event=>{helpOpener.current=event.currentTarget;setHelpOpen(true)}}><HelpCircle size={24}/></Button></aside>
 <main id="main" className="workspace">
  <header className="topbar"><a href="#main" className="wordmark">Bloom<span>Ijod maydoni</span></a><div className="search"><Search size={24}/><input ref={searchRef} value={query} onChange={e=>setQuery(e.target.value)} type="search" aria-label="Loyihalarni qidirish" placeholder="Loyihalarni qidirish" onKeyDown={e=>{if(e.key==='Escape')setQuery('');if(e.key==='Enter')headingRef.current?.focus({preventScroll:true})}}/>{query?<Button className="icon-button" onClick={()=>{setQuery('');searchRef.current?.focus()}} aria-label="Qidiruvni tozalash"><X size={24}/></Button>:<kbd>/</kbd>}</div><div className="top-actions"><Button className="icon-button top-help" aria-label="Bloom haqida" onClick={event=>{helpOpener.current=event.currentTarget;setHelpOpen(true)}}><HelpCircle size={24}/></Button><Button className="icon-button" aria-label="Rang palitrasini tanlash" onClick={event=>{paletteOpener.current=event.currentTarget;setPaletteOpen(true)}}><Palette size={24}/></Button><Button className="icon-button" aria-label={theme==='light'?'Qorong‘i rejimga o‘tish':'Yorug‘ rejimga o‘tish'} onClick={()=>setTheme(t=>t==='light'?'dark':'light')}>{theme==='light'?<Moon size={24}/>:<Sun size={24}/>}</Button><span className="avatar" aria-label="Namuna profil: Azizbek Safarov">A</span></div></header>
  <div className="greeting"><h1>Salom, Azizbek</h1><p>Bugun yaxshi g‘oyaga bir qadam yaqinlashing.</p></div>
  {['invalid','unavailable','invalid-current','recovered'].includes(storageStatus)&&<div className="storage-warning"><p role="alert">{storageStatus==='invalid'?'Saqlangan loyihalarni o‘qib bo‘lmadi. Asl ma’lumot o‘zgartirilmadi; hozir namuna loyihalari ko‘rsatilmoqda.':storageStatus==='recovered'?'Yangi o‘zgarishlar saqlandi. Avvalgi o‘qilmagan ma’lumotning zaxira nusxasi ham saqlab qo‘yildi.':'Brauzer xotirasiga saqlab bo‘lmadi. O‘zgarishlar faqat bu ochiq sahifada qoladi. Ularni fayl sifatida yuklab olishingiz mumkin.'}</p><Button className="outlined" onClick={downloadBackup}>Loyihalarni yuklab olish <DownloadIcon size={18}/></Button></div>}
  <section className="overview"><div className="hero"><div><span className="hero-label"><Icon name="palette" size={18}/> Sizning ijodiy maydoningiz</span><h2>G‘oyangizga<br/>shakl bering.</h2><p>Yangi loyiha boshlang. Aniq qadamlar bilan uni tayyor natijaga aylantiring.</p><div className="hero-actions"><Button className="filled" onClick={startProject}><Plus size={18}/> Yangi loyiha</Button><Button className="outlined" onClick={()=>{headingRef.current?.scrollIntoView({behavior:reduce?'instant':'smooth',block:'start'});headingRef.current?.focus({preventScroll:true})}}>Loyihalarni ko‘rish</Button></div></div><div className="hero-composition" aria-hidden="true"><motion.div className="shape shape-square" initial={reduce?false:{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={transition}/><motion.div className="shape shape-circle" initial={reduce?false:{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{...transition,delay:reduce?0:.08}}/><div className="shape shape-arch"/><span className="composition-label">B</span></div></div><aside className="progress-panel"><div className="progress-label"><CheckCheck size={24}/> Qadamlaringiz</div><strong>{totalPercent}<span>%</span></strong><p>{checkedTasks} / {totalTasks} qadam bajarildi</p><md-linear-progress value={totalPercent/100} aria-label="Umumiy loyiha progressi"/><div className="progress-counts"><span><b>{projects.length}</b>loyiha</span><span><b>{done}</b>tayyor</span><span><b>{saved}</b>saqlangan</span></div></aside></section>
  <div className="workspace-header"><h2 ref={headingRef} tabIndex={-1} id="projects-heading">{{all:'Loyihalaringiz',saved:'Saqlangan loyihalar',done:'Bajarilgan loyihalar'}[view]}</h2><div className="view-switch" role="group" aria-label="Ko‘rinish">{[{id:'list',icon:List,label:'Ro‘yxat ko‘rinishi'},{id:'grid',icon:LayoutGrid,label:'Karta ko‘rinishi'}].map(item=><button type="button" key={item.id} className={`view-segment ${display===item.id?'chosen':''}`} aria-label={item.label} title={item.label} aria-pressed={display===item.id} onClick={()=>setDisplay(item.id)}><md-ripple/>{display===item.id&&<Check size={16}/>}<item.icon size={20}/></button>)}</div></div>
  <div className="toolbar"><md-chip-set className="filters" aria-label="Loyiha yo‘nalishlari">{categories.map(c=><Button key={c} onClick={event=>{if(category===c)event.preventDefault();else setCategory(c)}} aria-pressed={category===c} className={`filter ${category===c?'selected':''}`}>{c}</Button>)}</md-chip-set><md-outlined-select className="sort" value={sort} quick={reduce} onchange={e=>setSort(e.target.value)} aria-label="Loyihalarni saralash"><md-select-option value="recent"><div slot="headline">Yangi qo‘shilgan</div></md-select-option><md-select-option value="name"><div slot="headline">Nom bo‘yicha</div></md-select-option></md-outlined-select></div>
<section className="projects-section" aria-labelledby="projects-heading">
      {display==='list'&&filtered.length>0&&<div className="list-heading" aria-hidden="true"><span>Loyiha nomi</span><span>Yo‘nalish</span><span>Bajarilgan</span><span/></div>}
      <div className={`project-grid ${display==='list'?'project-list':''}`}><AnimatePresence mode="popLayout" initial={false}>{filtered.map(project=><motion.article layout={reduce?false:'position'} className={`project-card ${project.tone}`} key={project.id} initial={{opacity:0,y:reduce?0:10}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:reduce?1:.98}} transition={transition}>
        <div className="card-name"><span className="file-icon"><ProjectIcon category={project.category}/></span><h3><button className="project-title-button" onClick={event=>openProject(event,project.id)}>{project.title}</button></h3><Button className={`icon-button save ${project.saved?'saved':''}`} onClick={()=>toggleSaved(project.id)} aria-label={`${project.title}: ${project.saved?'saqlanganlardan olish':'saqlash'}`} aria-pressed={project.saved}><Bookmark size={24} fill={project.saved?'currentColor':'none'}/></Button></div>
        <Button className="preview-open" onClick={event=>openProject(event,project.id)} aria-label={`${project.title} loyihasini ochish`}><Art kind={project.art} title={project.title} description={project.description} category={project.category}/><span className="preview-open-label" aria-hidden="true"><ArrowUpRight size={22}/></span></Button>
        <div className="project-category">{project.category}</div><p className="project-description">{project.description}</p>
        <div className="project-progress"><span className={progress(project)===1?'complete':''}>{progress(project)===1&&<Check size={14}/>} {project.tasks.filter(t=>t.done).length} / 3 qadam</span><md-linear-progress className="mini-progress" value={progress(project)} aria-label={`${project.title} progressi`}/></div>
        {display==='list'&&<Button className="row-open icon-button" onClick={event=>openProject(event,project.id)} aria-label={`${project.title} loyihasini ochish`}><ChevronRight size={20}/></Button>}
      </motion.article>)}</AnimatePresence></div>
      {filtered.length===0&&<motion.div className="empty-state" initial={{opacity:0,y:reduce?0:12}} animate={{opacity:1,y:0}}><span><FolderOpen size={40}/></span><h3>{query?'Hech narsa topilmadi':view==='done'?'Bajarilgan loyihalar shu yerda':view==='saved'?'Saqlangan loyihalar shu yerda':'Bu yo‘nalishda hali loyiha yo‘q'}</h3><p>{query?'Boshqa so‘z bilan qidiring yoki filtrlarni tozalang.':view==='saved'?'Loyiha kartasidagi saqlash belgisini bosing.':view==='done'?'Loyihadagi uchta qadamni bajaring va belgilang.':'Yangi loyihangizni shu yo‘nalishda boshlang.'}</p><Button className="filled" onClick={()=>navigate('all')}>Barcha loyihalarni ko‘rish</Button></motion.div>}
      <p className="results-status" role="status" aria-live="polite">{filtered.length} ta loyiha{query?` · “${query}” uchun`:''}</p>
    </section>
    <footer><span>Bloom · Material Design 3</span><a href="https://material-web.dev/" target="_blank" rel="noopener">Rasmiy M3 komponentlari <ExternalLink size={16}/></a></footer>
  </main>
</div>
<Modal open={createOpen} onOpenChange={setCreateOpen} title="Yangi loyiha" description="Yangi loyiha yarating. U shu brauzerda saqlanadi." opener={createOpener}><form key={formVersion} onSubmit={submitProject} onInput={()=>setFormError('')} className="project-form" noValidate><md-outlined-text-field autofocus id="project-title" name="title" label="Loyiha nomi" aria-label="Loyiha nomi" maxLength={80} required error={!!formError} error-text={formError}/><md-outlined-text-field type="textarea" id="project-description" name="description" label="Qisqa g‘oya" aria-label="Qisqa g‘oya" rows={3} maxLength={200}/><md-outlined-select id="project-category" name="category" label="Yo‘nalish" aria-label="Yo‘nalish" quick={reduce}><md-select-option selected value="Ta’lim"><div slot="headline">Ta’lim</div></md-select-option>{categories.slice(2).map(c=><md-select-option key={c} value={c}><div slot="headline">{c}</div></md-select-option>)}</md-outlined-select>{formError&&<p className="sr-only" id="form-error" role="alert">{formError}</p>}<div className="form-actions"><Button className="text" onClick={()=>setCreateOpen(false)}>Bekor qilish</Button><Button type="submit" className="filled">Loyihani yaratish <Plus size={18}/></Button></div></form></Modal>
<Modal open={detailOpen} onOpenChange={setDetailOpen} title={selectedProject?.title||'Loyiha'} description={selectedProject?.description||''} opener={opener} className="detail-modal">{selectedProject&&<><div className={`detail-art ${selectedProject.tone}`}><Art kind={selectedProject.art} title={selectedProject.title} description={selectedProject.description} category={selectedProject.category}/><span>{selectedProject.category}</span></div><div className="detail-progress"><h3>Uchta aniq qadam</h3><span>{selectedProject.tasks.filter(t=>t.done).length} / 3 bajarildi</span></div><div className="task-list">{selectedProject.tasks.map((task,index)=><div className={`task ${task.done?'checked':''}`} key={index}><md-checkbox id={`task-${index}`} checked={task.done} onchange={()=>changeTask(selectedProject.id,index)} aria-label={task.text}/><label htmlFor={`task-${index}`}><small>0{index+1}</small>{task.text}</label></div>)}</div><AnimatePresence mode="wait"><motion.div className={`detail-result ${progress(selectedProject)===1?'finished':''}`} key={progress(selectedProject)===1?'done':'in-progress'} initial={{opacity:0,y:reduce?0:8}} animate={{opacity:1,y:0}} exit={{opacity:0}}>{progress(selectedProject)===1?<><CheckCheck size={23}/><div><strong>Yaxshi ish. Loyiha tayyor!</strong><span>Bajarilgan loyihalar bo‘limida ham ko‘rinadi.</span></div></>:<><Leaf size={22}/><div><strong>Har bir qadam hisobga olinadi.</strong><span>Progress avtomatik saqlanadi.</span></div></>}</motion.div></AnimatePresence><div className="detail-actions"><Button className="tonal" onClick={()=>toggleSaved(selectedProject.id)}><Bookmark size={18} fill={selectedProject.saved?'currentColor':'none'}/>{selectedProject.saved?'Saqlangan':'Saqlash'}</Button><Button className="filled" onClick={()=>setDetailOpen(false)}>Davom etamiz <ArrowRight size={18}/></Button></div></>}</Modal>
<Modal open={helpOpen} onOpenChange={setHelpOpen} title="Bloom haqida" description="Material Design 3 komponentlari bilan yaratilgan mustaqil loyiha maydoni." opener={helpOpener}><div className="help-copy"><p>Yangi loyiha yarating, uchta qadamni belgilang va yoqqan loyihalarni saqlang. Qidiruv, filtrlar va saralash birgalikda ishlaydi.</p><p>Ma’lumotlar faqat shu brauzer xotirasida qoladi. Profil va boshlang‘ich loyihalar namuna. Serverga ma’lumot yuborilmaydi.</p><p>Loyihalar, saqlangan belgilar va bajarilgan qadamlarni JSON fayliga yuklab olishingiz mumkin.</p><Button className="outlined" onClick={downloadBackup}>Loyihalarni yuklab olish <DownloadIcon size={18}/></Button><p>Tugmalar, maydonlar, checkboxlar, filtrlar va dialoglar rasmiy Material Web komponentlaridan foydalanadi. Ranglar Google Material Color Utilities bilan hosil qilinadi. Operatsion tizimda harakatni kamaytirish yoqilsa, katta harakatlar o‘chadi.</p><a href="https://m3.material.io/styles/motion/overview/how-it-works" target="_blank" rel="noopener">Google Material motion qo‘llanmasi <ExternalLink size={15}/></a></div></Modal>
<Modal open={paletteOpen} onOpenChange={setPaletteOpen} title="O‘zingizga mos rang" description="Tugmalar va faol belgilar rangini tanlang." opener={paletteOpener} className="palette-modal" actions={<Button className="filled" onClick={()=>setPaletteOpen(false)}>Tayyor <Check size={18}/></Button>}>
 <div className="palette-options" role="radiogroup" aria-label="Asosiy rang">{SEEDS.map((item,index)=><label key={item.color} className="palette-option" data-selected={seed===item.color} htmlFor={`palette-${index}`}><span className="palette-swatch" style={{background:item.color}} aria-hidden="true"/><span className="palette-name">{item.label}<small>{seed===item.color?'Tanlangan':'Tanlash'}</small></span><md-radio id={`palette-${index}`} name="palette" value={item.color} checked={seed===item.color} aria-label={item.label} onchange={event=>{if(event.target.checked)setSeed(item.color)}}/></label>)}</div>
 <div className="palette-samples"><h3>Sahifadagi ko‘rinishi</h3><dl className="palette-preview"><div><dt>Asosiy tugma</dt><dd className="sample-primary"/></div><div><dt>Sahifa foni</dt><dd className="sample-surface"/></div><div><dt>Oddiy panel</dt><dd className="sample-panel"/></div></dl></div>
 </Modal>
<AnimatePresence>{toast&&<motion.div className="snackbar" role="status" initial={{opacity:0,y:reduce?0:25,scale:reduce?1:.95}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:reduce?0:12}}><Check size={18}/><span>{toast}</span><Button className="icon-button" aria-label="Xabarni yopish" onClick={()=>setToast('')}><X size={18}/></Button></motion.div>}</AnimatePresence></MotionConfig>
}
createRoot(document.getElementById('root')).render(<App/>);



```

## site/src/style.css

```css
@import url('./fonts/google-sans-flex.css');
@import url('./fonts/roboto.css');
@import url('./fonts/material-symbols.css');

:root{--md-ref-typeface-brand:'Google Sans Flex';--md-ref-typeface-plain:'Roboto';--md-sys-color-primary:#6750a4;--md-sys-color-on-primary:#fff;--md-sys-color-primary-container:#eaddff;--md-sys-color-on-primary-container:#21005d;--md-sys-color-secondary:#625b71;--md-sys-color-secondary-container:#e8def8;--md-sys-color-on-secondary-container:#1d192b;--md-sys-color-tertiary:#7d5260;--md-sys-color-tertiary-container:#ffd8e4;--md-sys-color-on-tertiary-container:#31111d;--md-sys-color-surface:#fdf7ff;--md-sys-color-surface-container-lowest:#fff;--md-sys-color-surface-container-low:#f7f2fa;--md-sys-color-surface-container:#f3edf7;--md-sys-color-surface-container-high:#ece6f0;--md-sys-color-surface-container-highest:#e6e0e9;--md-sys-color-on-surface:#1d1b20;--md-sys-color-on-surface-variant:#49454f;--md-sys-color-outline:#79747e;--md-sys-color-outline-variant:#cac4d0;--md-sys-color-error:#b3261e;--md-sys-color-error-container:#f9dedc;--md-sys-color-on-error-container:#410e0b;--md-sys-color-inverse-surface:#322f35;--md-sys-color-inverse-on-surface:#f5eff7;--md-sys-shape-corner-extra-small:4px;--md-sys-shape-corner-small:8px;--md-sys-shape-corner-medium:12px;--md-sys-shape-corner-large:16px;--md-sys-shape-corner-extra-large:28px;--md-sys-typescale-label-large-font:'Google Sans Flex';--md-sys-typescale-label-large-weight:500;background:var(--md-sys-color-surface);color:var(--md-sys-color-on-surface);color-scheme:light}
:root[data-theme=dark]{color-scheme:dark}*{box-sizing:border-box}body{margin:0;min-width:280px;font:400 14px/1.5 'Roboto',sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3{font-family:'Google Sans Flex',sans-serif;font-weight:400;margin:0}p{margin:0}button,input,textarea,select{font:inherit}a{color:inherit}button{cursor:pointer;color:inherit}svg{flex-shrink:0}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--md-sys-color-primary);outline-offset:4px}.material-symbols{font-family:'Material Symbols Rounded';font-weight:400;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;width:1em;height:1em}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden;white-space:nowrap}.skip-link{position:fixed;top:-80px;left:20px;z-index:70;padding:14px 20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);border-radius:12px}.skip-link:focus{top:12px}.button-label{display:contents}md-icon-button{flex-shrink:0;--md-icon-button-icon-size:24px}md-filled-button,md-filled-tonal-button,md-outlined-button,md-text-button{flex-shrink:0}.app-shell{display:grid;grid-template-columns:96px minmax(0,1fr);min-height:100dvh}.sidebar{position:sticky;top:0;height:100dvh;background:var(--md-sys-color-surface-container);display:flex;flex-direction:column;align-items:center;padding:20px 8px;gap:26px}.rail-brand{display:flex;color:var(--md-sys-color-primary);border-radius:12px}.rail-brand svg{width:40px;height:40px}.new-button{--md-fab-container-shape:16px;--md-fab-container-elevation:0px}.sidebar nav{display:flex;flex-direction:column;gap:20px;width:100%}.nav-item{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:4px;padding:0;color:var(--md-sys-color-on-surface-variant);font-size:12px;font-weight:500;line-height:16px;min-height:56px;border-radius:16px;position:relative}.nav-icon{position:relative;display:flex;align-items:center;justify-content:center;width:64px;height:32px;border-radius:16px}.nav-icon>.material-symbols{position:relative;z-index:1}.nav-selection{position:absolute;inset:0;background:var(--md-sys-color-secondary-container);border-radius:16px}.nav-item.active{color:var(--md-sys-color-on-secondary-container)}.nav-item:hover .nav-icon{background:var(--md-sys-color-surface-container-highest)}.rail-help{margin-top:auto}.workspace{width:100%;max-width:1540px;margin:0 auto;min-width:0;padding:20px 40px 24px}.topbar{display:flex;align-items:center;gap:32px;min-height:64px}.wordmark{text-decoration:none;font-family:'Google Sans Flex',sans-serif;font-size:28px;line-height:32px;min-width:145px}.wordmark>span{display:block;font-family:'Roboto',sans-serif;font-size:12px;line-height:16px;color:var(--md-sys-color-on-surface-variant);margin-top:2px}.search{display:flex;align-items:center;gap:16px;padding:0 16px;background:var(--md-sys-color-surface-container-high);border-radius:28px;height:56px;width:100%;max-width:620px;margin-left:auto;color:var(--md-sys-color-on-surface-variant)}.search:focus-within{box-shadow:0 0 0 2px var(--md-sys-color-primary)}.search input{min-width:0;flex:1;height:56px;padding:0;background:transparent;border:0;color:var(--md-sys-color-on-surface);font-size:16px;outline:none}.search input:focus-visible{outline:none}.search input::placeholder{color:var(--md-sys-color-on-surface-variant)}.search input::-webkit-search-cancel-button{display:none}.search kbd{font:12px 'Roboto';padding:2px 5px;border:1px solid var(--md-sys-color-outline-variant);border-radius:4px}.top-actions{display:flex;gap:8px;align-items:center}.avatar{width:40px;height:40px;border-radius:50%;background:var(--md-sys-color-tertiary-container);color:var(--md-sys-color-on-tertiary-container);font-family:'Google Sans Flex';font-size:20px;display:grid;place-items:center;margin-left:4px}.greeting{margin:34px 0 24px}.greeting h1{font-size:32px;line-height:40px}.greeting p{font-size:14px;color:var(--md-sys-color-on-surface-variant);margin-top:4px;line-height:20px}.overview{display:grid;grid-template-columns:minmax(0,2.4fr) minmax(250px,1fr);gap:24px;margin-bottom:36px}.hero{position:relative;overflow:hidden;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);border-radius:28px;padding:32px;min-height:320px;display:flex;align-items:center}.hero>div:first-child{position:relative;z-index:1;max-width:440px}.hero-label{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:500;line-height:16px;margin-bottom:14px}.hero h2{font-size:52px;line-height:56px;font-weight:450;letter-spacing:-1px}.hero p{max-width:340px;font-size:14px;line-height:20px;margin:16px 0 24px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap}.hero .outlined{--md-outlined-button-outline-color:var(--md-sys-color-primary);--md-outlined-button-label-text-color:var(--md-sys-color-on-primary-container)}.hero-composition{position:absolute;right:30px;top:30px;bottom:30px;width:220px;pointer-events:none}.shape{position:absolute}.shape-square{background:var(--md-sys-color-primary);width:125px;height:125px;top:13px;right:0;border-radius:28px;rotate:16deg}.shape-circle{background:var(--md-sys-color-tertiary-container);width:118px;height:118px;border-radius:50%;right:80px;top:90px}.shape-arch{width:100px;height:132px;background:var(--md-sys-color-secondary);border-radius:50px 50px 20px 20px;right:3px;bottom:1px;rotate:-12deg}.composition-label{position:absolute;font-family:'Google Sans Flex';font-size:80px;line-height:1;right:26px;top:39px;color:var(--md-sys-color-on-primary);rotate:16deg}.progress-panel{border-radius:28px;padding:28px;background:var(--md-sys-color-surface-container);display:flex;flex-direction:column}.progress-label{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:500;color:var(--md-sys-color-on-surface-variant)}.progress-panel>strong{font:400 64px/76px 'Google Sans Flex';letter-spacing:-2px;margin:14px 0 0}.progress-panel>strong>span{font-size:32px;letter-spacing:0;margin-left:3px}.progress-panel>p{font-size:12px;color:var(--md-sys-color-on-surface-variant);margin:2px 0 18px}.progress-panel md-linear-progress{width:100%;--md-linear-progress-track-height:4px}.progress-counts{display:flex;justify-content:space-between;gap:12px;margin-top:auto;padding-top:24px}.progress-counts>span{display:flex;flex-direction:column;font-size:12px;color:var(--md-sys-color-on-surface-variant)}.progress-counts b{font:400 24px/32px 'Google Sans Flex';color:var(--md-sys-color-on-surface)}.workspace-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.workspace-header h2{font-size:24px;line-height:32px}.view-switch{display:flex;gap:2px;background:var(--md-sys-color-surface-container);padding:2px;border-radius:24px}.view-switch .chosen{background:var(--md-sys-color-secondary-container);border-radius:50%;--md-icon-button-icon-color:var(--md-sys-color-on-secondary-container)}.toolbar{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}.filters{display:flex;gap:8px;flex-wrap:wrap}.sort{display:flex;align-items:center;position:relative;color:var(--md-sys-color-on-surface-variant)}.sort select{appearance:none;border:0;background:transparent;border-radius:8px;padding:12px 26px 12px 12px;font-size:12px;color:inherit;cursor:pointer}.sort>.material-symbols{position:absolute;right:4px;pointer-events:none}.project-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.project-card{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto auto auto;border-radius:12px;border:1px solid var(--md-sys-color-outline-variant);background:var(--md-sys-color-surface);overflow:hidden;position:relative;min-width:0;transition:background .15s}.project-card:hover{background:var(--md-sys-color-surface-container-low)}.preview-open{grid-row:1;grid-column:1/-1;display:block;width:100%;padding:0;min-height:0;position:relative;border:0;border-radius:0;background:none;overflow:hidden;text-align:left}.preview-open-label{position:absolute;bottom:10px;right:10px;display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:20px;font:500 12px/16px 'Google Sans Flex';background:var(--md-sys-color-surface-container-lowest);color:var(--md-sys-color-primary);opacity:0;transition:opacity .15s}.preview-open:hover .preview-open-label,.preview-open:focus-visible .preview-open-label{opacity:1}.material-cover{height:156px;padding:18px 24px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);position:relative;overflow:hidden}.cover-flower{background:var(--md-sys-color-tertiary-container);color:var(--md-sys-color-on-tertiary-container)}.cover-spark{background:var(--md-sys-color-secondary-container);color:var(--md-sys-color-on-secondary-container)}.cover-stack{background:var(--md-sys-color-surface-container-highest);color:var(--md-sys-color-on-surface)}.cover-ring{position:absolute;right:-22px;bottom:-35px;width:148px;height:148px;border-radius:50%;border:22px solid currentColor;opacity:.08}.cover-page{position:relative;z-index:1;max-width:260px}.cover-kicker{display:block;font-size:10px;line-height:16px;letter-spacing:.4px}.cover-page strong{display:block;font:450 22px/26px 'Google Sans Flex';margin:5px 0 12px;max-width:220px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow-wrap:anywhere}.cover-sample{display:flex;gap:5px;margin-bottom:6px}.cover-sample span{background:currentColor;opacity:.18;border-radius:8px;height:7px;width:28px}.cover-sample span:first-child{width:48px;opacity:.65}.cover-caption{font-size:9px;line-height:14px;opacity:.8}.card-name{grid-row:2;grid-column:1/-1;display:flex;align-items:flex-start;gap:10px;padding:18px 16px 0 20px;min-width:0}.file-icon{display:none}.card-name h3{font-size:20px;line-height:28px;font-weight:450;overflow-wrap:anywhere;min-width:0;flex:1;min-height:56px}.save{margin:-4px -4px 0 0;--md-icon-button-icon-size:24px}.save.saved{--md-icon-button-icon-color:var(--md-sys-color-primary)}.project-category{grid-row:3;grid-column:1/-1;font-size:12px;line-height:16px;color:var(--md-sys-color-on-surface-variant);padding:8px 20px 14px}.project-progress{grid-row:4;grid-column:1/-1;padding:0 20px 20px}.project-progress>span{display:flex;gap:5px;align-items:center;font-size:12px;color:var(--md-sys-color-on-surface-variant);margin-bottom:10px}.mini-progress{width:100%;--md-linear-progress-track-height:4px}.complete{color:var(--md-sys-color-primary)!important}.results-status{font-size:12px;line-height:16px;color:var(--md-sys-color-on-surface-variant);margin-top:20px}.empty-state{text-align:center;padding:60px 20px;color:var(--md-sys-color-on-surface-variant)}.empty-state>span{display:block;color:var(--md-sys-color-primary);margin-bottom:16px}.empty-state h3{font-size:24px;line-height:32px}.empty-state p{font-size:14px;line-height:20px;margin:12px auto 24px;max-width:350px}.workspace footer{display:flex;justify-content:space-between;gap:16px;align-items:center;padding-top:44px;color:var(--md-sys-color-on-surface-variant);font-size:12px}.workspace footer a{display:flex;align-items:center;gap:5px;text-decoration:none;color:var(--md-sys-color-primary);min-height:40px}.workspace footer a:hover{text-decoration:underline}.storage-warning{margin:16px 0;padding:12px 16px;background:var(--md-sys-color-error-container);color:var(--md-sys-color-on-error-container);border-radius:12px}.list-heading{display:grid;grid-template-columns:minmax(0,2fr) 110px 150px 40px;gap:20px;padding:12px 20px;font-size:12px;border-bottom:1px solid var(--md-sys-color-outline-variant);color:var(--md-sys-color-on-surface-variant)}.project-list{display:flex;flex-direction:column;gap:0}.project-list .project-card{display:grid;grid-template-columns:minmax(0,2fr) 110px 150px 40px;grid-template-rows:auto;gap:20px;padding:12px 20px;align-items:center;border:0;border-bottom:1px solid var(--md-sys-color-outline-variant);border-radius:0;overflow:visible;min-height:76px}.project-list .card-name{grid-row:1;grid-column:1;padding:0;align-items:center;gap:12px;min-width:0}.project-list .card-name h3{font-size:16px;line-height:24px;min-height:0}.project-list .file-icon{display:flex;color:var(--md-sys-color-primary)}.project-list .preview-open{display:none}.project-list .project-category{grid-row:1;grid-column:2;padding:0}.project-list .project-progress{grid-row:1;grid-column:3;padding:0}.project-list .row-open{grid-row:1;grid-column:4}.project-list .save{margin:0}.material-dialog{max-width:min(540px,calc(100vw - 32px));--md-dialog-container-shape:28px;--md-dialog-container-color:var(--md-sys-color-surface-container-high);--md-dialog-headline-color:var(--md-sys-color-on-surface);--md-dialog-headline-font:'Google Sans Flex'}.dialog-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:24px 24px 0}.dialog-heading>span{font-size:24px;line-height:32px;overflow-wrap:anywhere}.dialog-heading md-icon-button{margin:-4px -8px 0 0}.material-dialog [slot=content]{padding:16px 24px 24px;box-sizing:border-box}.dialog-description{font-size:14px;line-height:20px;color:var(--md-sys-color-on-surface-variant);margin-bottom:24px;overflow-wrap:anywhere}.project-form{display:flex;flex-direction:column;gap:20px}.project-form md-outlined-text-field{width:100%;--md-outlined-text-field-container-shape:4px}.project-form>label{font-size:12px;color:var(--md-sys-color-on-surface-variant);margin-bottom:-14px}.project-form select{width:100%;height:56px;background:transparent;border:1px solid var(--md-sys-color-outline);border-radius:4px;color:var(--md-sys-color-on-surface);padding:0 16px;font-size:16px}.form-actions,.detail-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:4px;flex-wrap:wrap}.form-error{font-size:12px;color:var(--md-sys-color-error);line-height:16px}.detail-art{display:flex;align-items:center;justify-content:space-between;background:var(--md-sys-color-surface-container);border-radius:12px;padding:0;overflow:hidden;margin-bottom:24px}.detail-art .material-cover{height:120px;width:70%;padding:14px 20px}.detail-art .cover-page strong{font-size:18px;line-height:24px}.detail-art .cover-sample,.detail-art .cover-caption{display:none}.detail-art>span{font-size:12px;padding:16px;color:var(--md-sys-color-on-surface-variant)}.detail-progress{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.detail-progress h3{font-size:16px;line-height:24px;font-weight:500}.detail-progress>span{font-size:12px;color:var(--md-sys-color-on-surface-variant);white-space:nowrap}.task{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--md-sys-color-outline-variant);min-height:72px}.task md-checkbox{flex-shrink:0}.task label{cursor:pointer;font-size:14px;line-height:20px;overflow-wrap:anywhere}.task small{display:block;font-size:10px;line-height:16px;color:var(--md-sys-color-on-surface-variant)}.task.checked label{color:var(--md-sys-color-on-surface-variant)}.detail-result{display:flex;align-items:center;gap:12px;margin:20px 0;color:var(--md-sys-color-on-surface-variant);font-size:12px;line-height:16px}.detail-result strong{display:block;font-weight:500;font-size:14px;line-height:20px}.detail-result span{display:block;margin-top:4px}.detail-result.finished{color:var(--md-sys-color-primary)}.help-copy{font-size:14px;line-height:24px;color:var(--md-sys-color-on-surface-variant)}.help-copy p{margin-bottom:16px}.help-copy a{display:flex;align-items:center;gap:8px;min-height:40px;color:var(--md-sys-color-primary)}.palette-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:24px}.palette-option{display:flex;flex-direction:column;align-items:center;gap:8px;background:none;border:0;font-size:12px;border-radius:12px;padding:8px 4px}.palette-option:hover{background:var(--md-sys-color-surface-container-highest)}.palette-option>span{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;color:white}.palette-preview{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px}.palette-preview>span{padding:16px;border-radius:12px;font-size:12px}.palette-preview>span:nth-child(1){background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary)}.palette-preview>span:nth-child(2){background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container)}.palette-preview>span:nth-child(3){background:var(--md-sys-color-secondary-container);color:var(--md-sys-color-on-secondary-container)}.palette-preview>span:nth-child(4){background:var(--md-sys-color-surface);color:var(--md-sys-color-on-surface)}.snackbar{position:fixed;bottom:24px;left:0;right:0;margin:auto;z-index:50;max-width:calc(100vw - 32px);width:fit-content;display:flex;align-items:center;gap:12px;background:var(--md-sys-color-inverse-surface);color:var(--md-sys-color-inverse-on-surface);padding:8px 8px 8px 16px;border-radius:4px;font-size:14px;box-shadow:0 3px 6px #0003}.snackbar md-icon-button{--md-icon-button-icon-color:var(--md-sys-color-inverse-on-surface)}
@media(min-width:1600px){.hero-composition{right:45px;width:260px}.hero{padding:40px}.hero h2{font-size:57px;line-height:64px}}
@media(max-width:1250px){.workspace{padding:20px 28px}.topbar{gap:24px}.hero-composition{right:0;width:160px;opacity:.8}.shape-square{width:100px;height:100px;top:15px;right:16px}.shape-circle{width:85px;height:85px;right:65px;top:103px}.shape-arch{width:80px;height:118px;right:20px;bottom:8px}.composition-label{font-size:65px;top:34px;right:37px}.hero{padding:28px}.hero h2{font-size:45px;line-height:52px}.hero p{max-width:270px}.hero>div:first-child{max-width:340px}.overview{grid-template-columns:minmax(0,2fr) minmax(230px,1fr)}.progress-panel{padding:24px}.project-grid{gap:20px}.card-name{padding-left:16px}.card-name h3{font-size:18px;line-height:26px}.project-category,.project-progress{padding-left:16px;padding-right:16px}}
@media(max-width:1000px){.app-shell{grid-template-columns:80px minmax(0,1fr)}.sidebar{padding:20px 4px}.workspace{padding:20px 24px}.wordmark{min-width:100px;font-size:26px}.wordmark>span{font-size:10px}.topbar{gap:16px}.top-actions{gap:0}.avatar{width:36px;height:36px}.search{gap:10px;padding:0 14px}.search input{font-size:14px}.hero-composition{display:none}.hero h2{font-size:44px;line-height:52px}.hero p{max-width:100%}.hero-actions{gap:8px}.hero>div:first-child{max-width:100%}.overview{gap:20px;grid-template-columns:minmax(0,1.5fr) minmax(220px,1fr)}.hero{padding:24px}.progress-panel{padding:24px}.project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.project-list{display:flex}.list-heading,.project-list .project-card{grid-template-columns:minmax(0,1fr) 90px 95px 40px;gap:12px;padding-left:12px;padding-right:12px}.project-list .save{display:none}.greeting h1{font-size:28px;line-height:36px}}
@media(max-width:760px){.app-shell{display:block;padding-bottom:76px}.sidebar{position:fixed;inset:auto 0 0;height:68px;z-index:20;padding:6px 8px;background:var(--md-sys-color-surface-container);box-shadow:0 -1px 0 var(--md-sys-color-outline-variant)}.sidebar nav{height:100%;flex-direction:row;justify-content:space-around;gap:0}.nav-item{flex:1;gap:4px;font-size:11px}.rail-brand,.new-button,.rail-help{display:none}.workspace{padding:18px 20px 24px}.topbar{display:grid;grid-template-columns:1fr auto;gap:16px}.wordmark{grid-column:1}.top-actions{grid-column:2;grid-row:1}.search{grid-row:2;grid-column:1/-1;width:100%;max-width:none;height:56px}.search input{font-size:16px}.greeting{margin:28px 0 20px}.greeting h1{font-size:28px;line-height:36px}.overview{grid-template-columns:1fr;gap:16px;margin-bottom:28px}.hero{padding:28px;min-height:290px;border-radius:28px}.hero h2{font-size:44px;line-height:52px}.hero p{max-width:340px}.hero-composition{display:block;width:145px;right:12px;top:30px;bottom:30px;opacity:.7}.hero>div:first-child{max-width:100%}.hero-actions{margin-top:20px}.progress-panel{padding:20px 24px;display:grid;grid-template-columns:1fr auto;gap:0 18px}.progress-label{grid-row:1;grid-column:1}.progress-panel>strong{grid-row:1/4;grid-column:2;align-self:center;font-size:48px;line-height:56px;margin:0}.progress-panel>strong>span{font-size:24px}.progress-panel>p{grid-row:2;grid-column:1;margin:6px 0 12px}.progress-panel>md-linear-progress{grid-row:3;grid-column:1}.progress-counts{grid-row:4;grid-column:1/-1;padding-top:16px;margin-top:18px;border-top:1px solid var(--md-sys-color-outline-variant);justify-content:space-around;text-align:center}.progress-counts>span{font-size:11px}.progress-counts b{font-size:20px;line-height:28px}.workspace-header h2{font-size:22px;line-height:28px}.toolbar{gap:12px;flex-wrap:wrap;margin-bottom:20px}.sort{margin-left:auto}.project-grid{gap:16px}.material-cover{height:150px;padding:16px}.cover-page strong{font-size:20px;line-height:24px}.card-name h3{font-size:18px;line-height:26px}.workspace footer{font-size:11px;padding-top:28px;flex-wrap:wrap;gap:4px}.project-list{display:flex}.list-heading{display:none}.project-list .project-card{grid-template-columns:minmax(0,1fr) 40px;grid-template-rows:auto auto;gap:4px 12px;padding:12px 4px}.project-list .card-name{grid-row:1;grid-column:1}.project-list .card-name h3{font-size:16px}.project-list .project-category{display:none}.project-list .project-progress{grid-row:2;grid-column:1;margin-left:36px}.project-list .project-progress>span{margin-bottom:6px;font-size:11px}.project-list .row-open{grid-row:1/3;grid-column:2}.snackbar{bottom:82px}.palette-options{gap:6px}.palette-option{font-size:11px}}
@media(max-width:460px){.workspace{padding:16px}.hero{padding:24px;min-height:304px}.hero h2{font-size:40px;line-height:48px;letter-spacing:-.5px}.hero-label{font-size:11px}.hero-composition{display:none}.hero p{font-size:14px;line-height:20px}.hero-actions{gap:8px}.hero-actions md-filled-button,.hero-actions md-outlined-button{--md-filled-button-container-height:40px;--md-outlined-button-container-height:40px}.project-grid{grid-template-columns:minmax(0,1fr)}.project-list{display:flex}.material-cover{height:160px;padding:18px 24px}.card-name h3{min-height:0;font-size:20px;line-height:28px}.card-name{padding-top:16px}.topbar{gap:16px 8px}.search kbd{display:none}.progress-panel{padding:20px}.toolbar{gap:6px}.sort select{padding-top:8px;padding-bottom:8px}.material-dialog [slot=content]{padding:16px 20px 20px}.dialog-heading{padding:20px 20px 0;gap:8px}.dialog-heading>span{font-size:22px;line-height:28px}.detail-art .material-cover{width:65%;padding:14px}.detail-art .cover-page strong{font-size:16px;line-height:20px}.detail-progress h3{font-size:14px}.detail-progress>span{font-size:11px}.task{gap:8px}.palette-preview>span{font-size:11px;padding:12px}.palette-option>span{width:44px;height:44px}}
/* M3 display, headline, title and body roles retain their standard sizes. */
.hero h2{font-size:57px;line-height:64px;font-weight:400;letter-spacing:-.25px}.card-name h3{font-size:22px;line-height:28px;font-weight:400}.progress-panel>strong{font-size:57px;line-height:64px;letter-spacing:-.25px}.project-list .card-name h3{font-size:16px;line-height:24px;font-weight:500}
@media(max-width:1250px){.hero h2{font-size:45px;line-height:52px}}
@media(max-width:760px){.progress-panel>strong{font-size:36px;line-height:44px}}
@media(max-width:460px){.hero h2{font-size:36px;line-height:44px;letter-spacing:0}}
/* Larger reading text uses the M3 body-large and body-medium roles. */
body{font-size:16px;line-height:24px}
.greeting p,.hero p,.task label,.help-copy,.dialog-description{font-size:16px;line-height:24px}
.progress-panel>p,.progress-counts>span,.project-category,.project-progress>span,.sort select,.detail-progress>span,.detail-result,.palette-option,.palette-preview>span{font-size:14px;line-height:20px}
.task small{font-size:12px;line-height:16px}
/* M3 interaction and layout refinement. Shared tokens keep every state coherent. */
:root{--md-sys-typescale-body-large-font:'Roboto';--md-sys-typescale-body-medium-font:'Roboto';--md-sys-typescale-title-medium-font:'Google Sans Flex';--md-sys-typescale-headline-small-font:'Google Sans Flex'}
.app-shell{grid-template-columns:80px minmax(0,1fr)}
.sidebar{padding-inline:4px}
.new-button{--md-fab-container-elevation:3;--md-fab-container-color:var(--md-sys-color-primary-container);--md-fab-icon-color:var(--md-sys-color-on-primary-container)}
.nav-item{font-size:12px;line-height:16px;font-weight:500}
.nav-item.active{font-weight:600}
.nav-icon{isolation:isolate;overflow:hidden}
.nav-icon md-ripple{border-radius:inherit}
.nav-selection{z-index:-1}
.nav-item:hover .nav-icon{background:transparent}
.workspace-header{flex-wrap:wrap;scroll-margin-top:24px}
#projects-heading{scroll-margin-top:24px}
.view-switch{gap:0;padding:0;border:1px solid var(--md-sys-color-outline);border-radius:20px;background:transparent;overflow:hidden}
.view-segment{position:relative;display:grid;place-items:center;width:56px;height:38px;padding:0;border:0;background:transparent;color:var(--md-sys-color-on-surface);isolation:isolate}
.view-segment+.view-segment{border-left:1px solid var(--md-sys-color-outline)}
.view-segment.chosen{background:var(--md-sys-color-secondary-container);color:var(--md-sys-color-on-secondary-container)}
.view-switch .view-segment{border-radius:0}
.view-segment:focus-visible{outline-offset:-4px;border-radius:20px}
.toolbar{flex-wrap:wrap;gap:12px 24px}
.filters{min-width:0;--md-chip-set-spacing:8px}
.sort{width:204px;margin-left:auto;--md-outlined-select-text-field-container-shape:4px;--md-outlined-select-text-field-input-text-size:14px;--md-outlined-select-text-field-top-space:12px;--md-outlined-select-text-field-bottom-space:12px}
.project-card{grid-template-rows:auto auto auto 1fr auto}
.project-title-button{display:block;max-width:100%;padding:0;border:0;border-radius:4px;background:transparent;font:inherit;color:inherit;text-align:left;overflow-wrap:anywhere}
.project-title-button:hover{color:var(--md-sys-color-primary)}
.project-category{padding-bottom:8px;font-weight:500;color:var(--md-sys-color-primary)}
.project-description{grid-column:1/-1;grid-row:4;margin:0;padding:0 20px 20px;color:var(--md-sys-color-on-surface-variant);font-size:14px;line-height:20px;overflow-wrap:anywhere}
.project-progress{grid-row:5}
.project-list .project-description{display:none}
.project-list .save{display:inline-flex;flex-shrink:0}
.material-dialog{width:min(520px,calc(100vw - 32px));max-height:calc(100dvh - 48px)}
.project-form md-outlined-select{width:100%}
.palette-option{position:relative;min-height:88px;transition:background .15s}
.palette-option[aria-pressed=true]{background:var(--md-sys-color-secondary-container);color:var(--md-sys-color-on-secondary-container)}
.palette-option>span{flex-shrink:0}
.empty-state p{font-size:16px;line-height:24px}
.preview-open:focus-visible{outline-offset:-4px;z-index:2}
.preview-open:focus-visible .preview-open-label{opacity:1;transform:none}
@media(min-width:761px){.top-help{display:none}}
@media(max-width:1250px){.project-description{padding-inline:16px}}
@media(min-width:1001px) and (max-width:1250px){.hero>div:first-child{max-width:calc(100% - 130px)}.hero h2{font-size:40px;line-height:48px}.hero-composition{right:8px;transform:scale(.85);transform-origin:right center}}
@media(max-width:760px){.app-shell{padding-bottom:calc(96px + env(safe-area-inset-bottom))}.sidebar{height:calc(80px + env(safe-area-inset-bottom));padding:12px 8px calc(12px + env(safe-area-inset-bottom));box-shadow:none}.nav-item{min-height:56px;font-size:12px;line-height:16px}.project-list .project-progress{grid-row:2}.snackbar{bottom:calc(96px + env(safe-area-inset-bottom))}.hero-composition{display:none}.sort{width:204px}.material-dialog{max-height:calc(100dvh - 32px)}.project-list .card-name{gap:8px}.project-list .project-progress{margin-left:32px}}
@media(max-width:460px){.palette-options{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.palette-option{font-size:14px}.palette-preview>span{font-size:12px}.card-name h3{font-size:22px;line-height:28px}.hero-actions md-filled-button,.hero-actions md-outlined-button{--md-filled-button-container-height:40px;--md-outlined-button-container-height:40px}}
/* Color communicates action. Informational surfaces stay quiet. */
.hero{background:var(--md-sys-color-surface-container-low);color:var(--md-sys-color-on-surface);border:1px solid var(--md-sys-color-outline-variant)}
.hero .outlined{--md-outlined-button-label-text-color:var(--md-sys-color-primary);--md-outlined-button-outline-color:var(--md-sys-color-outline)}
.project-category{color:var(--md-sys-color-on-surface-variant)}
.preview-open-label{opacity:1;transform:none;display:grid;place-items:center;bottom:12px;right:12px;width:40px;height:40px;padding:0;border-radius:50%;background:var(--md-sys-color-surface);color:var(--md-sys-color-primary);border:1px solid var(--md-sys-color-outline-variant);box-shadow:0 1px 2px #0002}
.preview-open:hover .preview-open-label{background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary)}
.view-segment{display:flex;align-items:center;justify-content:center;gap:4px;width:48px;transition:width .2s cubic-bezier(.2,0,0,1)}
.view-segment.chosen{width:64px}
.palette-options{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:24px}
.palette-option{flex-direction:row;justify-content:flex-start;gap:10px;min-height:76px;padding:12px;border:1px solid var(--md-sys-color-outline);border-radius:12px;background:var(--md-sys-color-surface);color:var(--md-sys-color-on-surface);cursor:pointer;text-align:left}
.palette-option:hover{background:var(--md-sys-color-surface-container-highest)}
.palette-option[data-selected=true]{border-color:var(--md-sys-color-primary);box-shadow:inset 0 0 0 1px var(--md-sys-color-primary);background:var(--md-sys-color-surface)}
.palette-option:focus-within{outline:3px solid var(--md-sys-color-primary);outline-offset:3px}
.palette-option>.palette-swatch{width:32px;height:32px;flex:0 0 32px;border-radius:50%}
.palette-option>.palette-name{display:block;place-items:normal;flex:1;width:auto;height:auto;min-width:0;border-radius:0;color:inherit;font-size:14px;line-height:20px}
.palette-name small{display:block;font-size:12px;line-height:16px;color:var(--md-sys-color-on-surface-variant)}
.palette-option md-radio{flex-shrink:0}
.palette-samples{border-top:1px solid var(--md-sys-color-outline-variant);padding-top:20px;margin-bottom:24px}
.palette-samples h3{font-size:16px;line-height:24px;font-weight:500;margin-bottom:12px}
.palette-preview{display:block;margin:0;cursor:default}
.palette-preview>div{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:6px 0}
.palette-preview dt{font-size:14px;line-height:20px;color:var(--md-sys-color-on-surface-variant)}
.palette-preview dd{margin:0;width:72px;height:14px;border-radius:2px;border:1px solid var(--md-sys-color-outline-variant)}
.sample-primary{background:var(--md-sys-color-primary)}
.sample-surface{background:var(--md-sys-color-surface)}
.sample-panel{background:var(--md-sys-color-surface-container)}
.palette-modal [slot=content]{padding-bottom:8px}.palette-modal .palette-samples{margin-bottom:0}
@media(max-width:460px){.palette-options{grid-template-columns:1fr;gap:8px}.palette-option{min-height:68px}.palette-option>.palette-name{font-size:16px;line-height:24px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition-duration:0s!important;animation-duration:0s!important}}

```

## site/src/persistence.js

```javascript
import {initialProjects, validateProjects} from './model.js';

export const PROJECTS_KEY = 'ustoz.bloom.projects.v1';
export const RECOVERY_KEY = 'ustoz.bloom.projects.recovery.v1';

function parseProjects(raw) {
  try { return validateProjects(JSON.parse(raw)); } catch { return null; }
}

// Reading is deliberately side-effect free. A damaged or temporarily unreadable
// workspace must not be replaced by sample projects merely by opening the page.
export function loadProjectState(getStorage) {
  try {
    const raw = getStorage().getItem(PROJECTS_KEY);
    if (raw === null) return {projects: structuredClone(initialProjects), status: 'new'};
    const projects = parseProjects(raw);
    if (projects) return {projects, status: 'ready'};
    return {projects: structuredClone(initialProjects), status: 'invalid'};
  } catch {
    return {projects: structuredClone(initialProjects), status: 'unavailable'};
  }
}

export function persistProjectState(getStorage, projects, {startupStatus} = {}) {
  if (!validateProjects(projects)) return {status: 'invalid-current'};
  // A failed initial read means the displayed samples may not be the user's
  // actual workspace. Keep this session in memory even if access later returns.
  if (startupStatus === 'unavailable') return {status: 'unavailable'};
  try {
    const storage = getStorage();
    const raw = storage.getItem(PROJECTS_KEY);
    const needsRecovery = raw !== null && !parseProjects(raw);
    // Preserve the exact original before replacement. If this backup fails,
    // the original key stays untouched and the caller keeps an in-memory copy.
    if (needsRecovery) storage.setItem(RECOVERY_KEY, raw);
    storage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    return {status: needsRecovery ? 'recovered' : 'saved'};
  } catch {
    return {status: 'unavailable'};
  }
}

export function exportProjects(projects) {
  if (!validateProjects(projects)) throw new Error('Invalid project backup');
  return JSON.stringify(projects, null, 2);
}

```

## site/src/persistence.test.js

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {initialProjects, createProject} from './model.js';
import {PROJECTS_KEY, RECOVERY_KEY, loadProjectState, persistProjectState, exportProjects} from './persistence.js';

function memoryStorage(entries = [], {readBlocked = false, failKey = ''} = {}) {
  const values = new Map(entries), writes = [];
  return {values, writes, getItem(key) {
    if (readBlocked) throw new Error('Read access denied');
    return values.get(key) ?? null;
  }, setItem(key, value) {
    if (key === failKey) throw new Error('Storage quota exceeded');
    writes.push(key);
    values.set(key, value);
  }};
}

for (const raw of ['{broken user work', 'null', '{}', '[{"title":"My draft"}]']) {
  test('opening a corrupt workspace preserves its original bytes: ' + raw, () => {
    const storage = memoryStorage([[PROJECTS_KEY, raw]]);
    const state = loadProjectState(() => storage);
    assert.equal(state.status, 'invalid');
    assert.deepEqual(state.projects, initialProjects);
    assert.notEqual(state.projects, initialProjects);
    assert.equal(storage.values.get(PROJECTS_KEY), raw);
    assert.deepEqual(storage.writes, []);
  });
  test('the first edit backs up a corrupt workspace before replacement: ' + raw, () => {
    const storage = memoryStorage([[PROJECTS_KEY, raw]]);
    const projects = [createProject({title: 'New work', description: '', category: 'Dizayn'}, 'new')];
    assert.equal(persistProjectState(() => storage, projects).status, 'recovered');
    assert.equal(storage.values.get(RECOVERY_KEY), raw);
    assert.deepEqual(storage.writes, [RECOVERY_KEY, PROJECTS_KEY]);
    assert.deepEqual(loadProjectState(() => storage).projects, projects);
  });
}

test('first visit returns independent samples without writing them', () => {
  const storage = memoryStorage();
  const first = loadProjectState(() => storage), second = loadProjectState(() => storage);
  assert.equal(first.status, 'new');
  first.projects[0].tasks[0].done = false;
  assert.equal(second.projects[0].tasks[0].done, true);
  assert.equal(initialProjects[0].tasks[0].done, true);
  assert.deepEqual(storage.writes, []);
});

test('an intentionally empty saved workspace stays empty', () => {
  const storage = memoryStorage([[PROJECTS_KEY, '[]']]);
  const state = loadProjectState(() => storage);
  assert.equal(state.status, 'ready');
  assert.deepEqual(state.projects, []);
  assert.deepEqual(storage.writes, []);
});

test('denied storage property access is recoverable without crashing', () => {
  const denied = () => {throw new Error('SecurityError');};
  assert.equal(loadProjectState(denied).status, 'unavailable');
  assert.equal(persistProjectState(denied, initialProjects).status, 'unavailable');
});

test('read denied but write allowed never overwrites unknown existing work', () => {
  const raw = JSON.stringify(initialProjects.slice(0, 1));
  const storage = memoryStorage([[PROJECTS_KEY, raw]], {readBlocked: true});
  assert.equal(loadProjectState(() => storage).status, 'unavailable');
  assert.equal(persistProjectState(() => storage, initialProjects).status, 'unavailable');
  assert.equal(storage.values.get(PROJECTS_KEY), raw);
  assert.deepEqual(storage.writes, []);
});

test('a session that started unreadable cannot replace real projects after storage access returns', () => {
  const original = [{...structuredClone(initialProjects[0]), id: 'real-project', title: 'My saved work'}];
  const storage = memoryStorage([[PROJECTS_KEY, JSON.stringify(original)]]);
  let blocked = true;
  const getStorage = () => {
    if (blocked) throw new Error('Temporary SecurityError');
    return storage;
  };
  const startup = loadProjectState(getStorage);
  assert.equal(startup.status, 'unavailable');
  const edited = startup.projects.map(project => ({...project, saved: true}));
  blocked = false;
  for (let edit = 0; edit < 2; edit++) {
    assert.equal(persistProjectState(getStorage, edited, {startupStatus: startup.status}).status, 'unavailable');
  }
  assert.deepEqual(JSON.parse(storage.values.get(PROJECTS_KEY)), original);
  assert.deepEqual(storage.writes, []);
  assert.deepEqual(JSON.parse(exportProjects(edited)), edited);
  // A new page load can read the actual workspace normally.
  assert.deepEqual(loadProjectState(getStorage).projects, original);
});

test('failed recovery backup prevents destructive replacement', () => {
  const raw = '{valuable broken draft';
  const storage = memoryStorage([[PROJECTS_KEY, raw]], {failKey: RECOVERY_KEY});
  assert.equal(persistProjectState(() => storage, initialProjects).status, 'unavailable');
  assert.equal(storage.values.get(PROJECTS_KEY), raw);
  assert.deepEqual(storage.writes, []);
});

test('failed main write keeps both the original and the successful recovery backup', () => {
  const raw = '{valuable broken draft';
  const storage = memoryStorage([[PROJECTS_KEY, raw]], {failKey: PROJECTS_KEY});
  assert.equal(persistProjectState(() => storage, initialProjects).status, 'unavailable');
  assert.equal(storage.values.get(PROJECTS_KEY), raw);
  assert.equal(storage.values.get(RECOVERY_KEY), raw);
  assert.deepEqual(storage.writes, [RECOVERY_KEY]);
});

test('healthy edits preserve recovery backups from an earlier session', () => {
  const storage = memoryStorage([[PROJECTS_KEY, JSON.stringify(initialProjects)], [RECOVERY_KEY, '{original draft']]);
  assert.equal(persistProjectState(() => storage, []).status, 'saved');
  assert.equal(storage.values.get(RECOVERY_KEY), '{original draft');
  assert.deepEqual(storage.writes, [PROJECTS_KEY]);
  assert.deepEqual(loadProjectState(() => storage).projects, []);
});

test('invalid current state cannot overwrite valid stored projects', () => {
  const raw = JSON.stringify(initialProjects);
  const storage = memoryStorage([[PROJECTS_KEY, raw]]);
  assert.equal(persistProjectState(() => storage, [{title: 'Incomplete'}]).status, 'invalid-current');
  assert.equal(storage.values.get(PROJECTS_KEY), raw);
  assert.deepEqual(storage.writes, []);
});

test('downloaded backups preserve Unicode, checklists, bookmarks and boundaries', () => {
  const project = createProject({title: 'O‘zbekcha — ' + 'a'.repeat(65), description: 'b'.repeat(200), category: 'Ta’lim'}, 'backup');
  project.saved = true;
  project.tasks[1].done = true;
  const projects = Array.from({length: 200}, (_, i) => ({...structuredClone(project), id: 'p' + i}));
  assert.deepEqual(JSON.parse(exportProjects(projects)), projects);
  assert.throws(() => exportProjects([...projects, {...project, id: 'extra'}]));
});

```

## site/src/model.js

```javascript
export const categories=['Hammasi','Ta’lim','Dizayn','Texnologiya'];
export const initialProjects=[
{id:'kasb',title:'Kasb yo‘lingizni toping',description:'Yoshlar uchun kasblar va o‘quv imkoniyatlarini bir joyga jamlaymiz.',category:'Ta’lim',tone:'blue',art:'orbit',saved:false,tasks:[{text:'Asosiy g‘oyani yozish',done:true},{text:'Mobil maketni tayyorlash',done:false},{text:'Ishlaydigan sahifani tekshirish',done:false}]},
{id:'brand',title:'G‘oyaga yangi ko‘rinish',description:'Rang, tipografika va shakllar bilan o‘ziga xos brend yarating.',category:'Dizayn',tone:'peach',art:'flower',saved:true,tasks:[{text:'Ranglar palitrasini tanlash',done:false},{text:'Tipografik iyerarxiyani yaratish',done:false},{text:'Komponentlarni tekshirish',done:false}]},
{id:'ai',title:'AI bilan bir qadam',description:'Kundalik ishlarni yengillashtiradigan sodda yordamchi ilova.',category:'Texnologiya',tone:'green',art:'spark',saved:false,tasks:[{text:'Foydalanuvchi ehtiyojini aniqlash',done:true},{text:'Asosiy oqimni yaratish',done:true},{text:'Natijani sinovdan o‘tkazish',done:false}]},
{id:'portfolio',title:'Ishlaringiz so‘zlasin',description:'Eng yaxshi loyihalaringiz uchun tiniq va tartibli portfolio.',category:'Dizayn',tone:'lavender',art:'stack',saved:false,tasks:[{text:'Loyihalarni saralash',done:true},{text:'Sahifalarni yig‘ish',done:true},{text:'Taqdimotni tekshirish',done:true}]}
];
export function progress(project){return project.tasks.filter(task=>task.done).length/project.tasks.length}
export function validateProjects(value){if(!Array.isArray(value)||value.length>200)return null;const ids=new Set();for(const p of value){if(!p||typeof p.id!=='string'||ids.has(p.id)||typeof p.title!=='string'||!p.title.trim()||p.title.length>80||typeof p.description!=='string'||p.description.length>200||!categories.slice(1).includes(p.category)||!['blue','peach','green','lavender'].includes(p.tone)||!['orbit','flower','spark','stack'].includes(p.art)||typeof p.saved!=='boolean'||!Array.isArray(p.tasks)||p.tasks.length!==3||p.tasks.some(t=>!t||typeof t.text!=='string'||!t.text.trim()||t.text.length>200||typeof t.done!=='boolean'))return null;ids.add(p.id)}return value}
export function normalizeSearch(text){return text.toLocaleLowerCase('uz').normalize('NFKC').replace(/[‘’ʻʼ`´]/g,"'").trim()}
export function visibleProjects(projects,{view='all',category='Hammasi',query='',sort='recent'}={}){const normalized=normalizeSearch(query);const filtered=projects.filter(p=>(view!=='saved'||p.saved)&&(view!=='done'||progress(p)===1)&&(category==='Hammasi'||p.category===category)&&normalizeSearch(`${p.title} ${p.description} ${p.category}`).includes(normalized));return sort==='name'?[...filtered].sort((a,b)=>a.title.localeCompare(b.title,'uz')):filtered}
export function createProject({title,description,category},id){const cleanTitle=title.trim(),cleanDescription=description.trim();if(!cleanTitle||cleanTitle.length>80||cleanDescription.length>200||!categories.slice(1).includes(category))throw new Error('Invalid project');const visual={'Ta’lim':['blue','orbit'],'Dizayn':['peach','flower'],'Texnologiya':['green','spark']}[category];return{id,title:cleanTitle,description:cleanDescription||'Yangi g‘oyani ishlaydigan loyihaga aylantiring.',category,tone:visual[0],art:visual[1],saved:false,tasks:[{text:'G‘oyani aniq yozish',done:false},{text:'Birinchi variantni yaratish',done:false},{text:'Natijani tekshirish',done:false}]}}

```

## site/src/model.test.js

```javascript
import {test} from 'node:test';import assert from 'node:assert/strict';import {initialProjects,validateProjects,visibleProjects,createProject,progress} from './model.js';
test('invalid persisted state is rejected before rendering',()=>{assert.equal(validateProjects({}),null);assert.equal(validateProjects([{...initialProjects[0],tasks:[]}]),null);assert.equal(validateProjects([initialProjects[0],initialProjects[0]]),null);assert.ok(validateProjects(initialProjects))});
test('filters combine and completion derives from checked tasks',()=>{assert.equal(visibleProjects(initialProjects,{view:'done'}).length,1);assert.equal(visibleProjects(initialProjects,{view:'saved',category:'Ta’lim'}).length,0);assert.equal(visibleProjects(initialProjects,{query:'AI'}).length,1);assert.equal(progress(initialProjects[3]),1)});
test('new projects validate trimmed titles and start at zero progress',()=>{assert.throws(()=>createProject({title:' ',description:'',category:'Dizayn'},'new'));const p=createProject({title:'  Demo  ',description:'',category:'Ta’lim'},'new');assert.equal(p.title,'Demo');assert.equal(progress(p),0);assert.ok(validateProjects([p]))});

test('Uzbek search treats keyboard and typographic apostrophes equally',()=>{for(const query of ["g'oya",'g‘oya','gʻoya','gʼoya'])assert.ok(visibleProjects(initialProjects,{query}).some(p=>p.id==='brand'));assert.equal(visibleProjects(initialProjects,{query:"TA'LIM"}).length,1)});

```

## site/src/combinations.test.js

```javascript
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

```

## site/package.json

```json
{"name":"bloom-material-expressive","version":"1.0.0","private":true,"type":"module","scripts":{"dev":"vite --host 127.0.0.1 --port 8767 --strictPort","build":"vite build","preview":"vite preview --host 127.0.0.1 --port 8767 --strictPort","test":"node --test src/*.test.js"},"dependencies":{"@material/material-color-utilities":"^0.4.0","@material/web":"^2.5.0","motion":"^12.35.0","react":"^19.2.0","react-dom":"^19.2.0"},"devDependencies":{"vite":"^7.3.1"}}

```

## site/vite.config.js

```javascript
import {defineConfig} from 'vite';
export default defineConfig({base:'./'});

```

## site/download_symbols.py

```python
"""Refresh the licensed Google Material Symbols subset used by Bloom."""
from pathlib import Path
from urllib.request import Request, urlopen
import re

names = 'add,arrow_back,arrow_forward,arrow_outward,bookmark,check,check_circle,chevron_right,close,cloud,code,dark_mode,expand_more,folder_open,grid_view,help,home,light_mode,list,more_horiz,palette,school,search,star,storage,tune'
url = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=' + names + '&display=block'
css = urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}), timeout=30).read().decode()
font_url = re.search(r'src: url\(([^)]+)\)', css).group(1)
assert font_url.startswith('https://fonts.gstatic.com/')
font = urlopen(font_url, timeout=30).read()
root = Path(__file__).parent / 'src/fonts'
(root/'material-symbols.woff2').write_bytes(font)
(root/'material-symbols.css').write_text(css.replace(font_url, './material-symbols.woff2'), encoding='utf-8')
print('Updated Material Symbols subset:', len(font), 'bytes')

```


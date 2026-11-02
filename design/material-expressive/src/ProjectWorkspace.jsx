import React,{useState,useEffect,useRef} from 'react';
import {motion,useReducedMotion} from 'motion/react';
import {updateProjectDetails,progress} from './model.js';

export function ProjectWorkspace({project,view,onBack,onUpdate,onTask,onBookmark,onExport,storageStatus,onDirtyChange,Button}) {
  const reduce=useReducedMotion();
  const [editing,setEditing]=useState(false);
  const [draft,setDraft]=useState(null);
  const [error,setError]=useState('');
  const [notice,setNotice]=useState('');
  const editRef=useRef(null);
  const dirty=editing&&draft!==null&&(draft.title!==project.title||draft.description!==project.description||draft.tasks.some((text,i)=>text!==project.tasks[i].text));
  useEffect(()=>{onDirtyChange(dirty);return()=>onDirtyChange(false)},[dirty,onDirtyChange]);
  useEffect(()=>{if(!dirty)return;const warn=e=>{e.preventDefault();e.returnValue=''};window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn)},[dirty]);
  const limited=['unavailable','invalid-current','conflict'].includes(storageStatus);
  function edit(){setDraft({title:project.title,description:project.description,tasks:project.tasks.map(t=>t.text)});setEditing(true);setError('');setNotice('')}
  function cancel(){if(dirty&&!window.confirm('O‘zgartirilgan matn saqlanmagan. Bekor qilinsin?'))return;setEditing(false);setError('');requestAnimationFrame(()=>editRef.current?.focus())}
  function save(event){event.preventDefault();try{const next=updateProjectDetails(project,draft);onUpdate(next);onDirtyChange(false);setEditing(false);setNotice('Loyiha tafsilotlari yangilandi.');requestAnimationFrame(()=>editRef.current?.focus())}catch{setError('Nom va uch qadam bo‘sh bo‘lmasin. Nom 80, izoh va har qadam 200 belgidan oshmasin.')}}
  function field(name,value){setDraft(d=>({...d,[name]:value}));setError('')}
  return <motion.section className="project-workspace" aria-labelledby="project-heading" initial={reduce?false:{opacity:0,x:16}} animate={{opacity:1,x:0}} transition={{duration:reduce?0:.24,ease:[.2,0,0,1]}}>
    <nav className="project-breadcrumb" aria-label="Loyiha yo‘li"><Button onClick={onBack}>← {{all:'Loyihalar',saved:'Saqlanganlar',done:'Bajarilganlar'}[view]}</Button><span aria-current="page">Ish maydoni</span></nav>
    <header className="project-workspace-heading"><div><span className="project-kind">{project.category}</span><h1 id="project-heading" tabIndex={-1}>{project.title}</h1><p>{project.description}</p></div><Button className="outlined" onClick={onBookmark} aria-pressed={project.saved}>{project.saved?'Belgini olib tashlash':'Saqlanganlarga belgilash'}</Button></header>
    <div className="project-workspace-grid"><div className="project-workspace-content">
      <div className="project-section-heading"><h2>{editing?'Loyihani tahrirlash':'Bajariladigan qadamlar'}</h2>{!editing&&<button ref={editRef} className="workspace-edit" onClick={edit}>Tahrirlash</button>}</div>
      {editing?<form className="workspace-editor" onSubmit={save} noValidate>
        <label>Loyiha nomi<input autoFocus value={draft.title} maxLength={80} onChange={e=>field('title',e.target.value)} required/></label>
        <label>Qisqa izoh<textarea value={draft.description} maxLength={200} rows={3} onChange={e=>field('description',e.target.value)}/></label>
        <fieldset><legend>Uchta aniq qadam</legend>{draft.tasks.map((text,i)=><label key={i}>{i+1}-qadam<input value={text} required maxLength={200} onChange={e=>{const tasks=[...draft.tasks];tasks[i]=e.target.value;field('tasks',tasks)}}/></label>)}</fieldset>
        {error&&<p role="alert" className="workspace-error">{error}</p>}
        <p className="workspace-draft-state" role="status">{dirty?'Saqlanmagan tahrir bor.':'Matnlar o‘zgartirilmagan.'}</p>
        <div className="workspace-actions"><Button type="submit" className="filled">O‘zgarishlarni saqlash</Button><Button onClick={cancel}>Bekor qilish</Button></div>
      </form>:<div className="workspace-checklist">{project.tasks.map((task,index)=><label className={'workspace-task '+(task.done?'is-done':'')} key={index}><input type="checkbox" checked={task.done} onChange={()=>onTask(index)}/><span className="workspace-task-number" aria-hidden="true">{String(index+1).padStart(2,'0')}</span><span>{task.text}</span></label>)}</div>}
      {notice&&!editing&&<p role="status" className="workspace-notice">{notice}</p>}
    </div><aside className="project-workspace-summary" aria-label="Loyiha holati"><h2>Hozirgi holat</h2><div className="workspace-progress-number">{project.tasks.filter(t=>t.done).length}<span> / 3 qadam</span></div><md-linear-progress value={progress(project)} aria-label="Loyiha qadamlari"/><p>{progress(project)===1?'Uchala qadam belgilangan. Natijani o‘zingiz tekshirib ko‘ring.':'Keyingi qadamni bajaring, so‘ng belgilab qo‘ying.'}</p><div className="workspace-storage" role="status"><strong>{editing&&dirty?'Saqlanmagan matn bor':limited?'Faqat shu tabda':'Brauzerdagi loyiha'}</strong><p>{editing&&dirty?'Tahrirni avval saqlang: eksportga hali yangi matn kirmaydi. Brauzerga yozish ishlamasa ham saqlangan tahrirni keyin faylga yuklab olish mumkin.':limited?'Brauzerga yozilmadi. Joriy ish nusxasini yuklab oling.':'Hisobga ulanmagan lokal namuna. Boshqa kompyuterga ma’lumot avtomatik ko‘chmaydi.'}</p></div><Button className="outlined" onClick={onExport}>Loyihalar nusxasini yuklash</Button></aside></div>
  </motion.section>;
}

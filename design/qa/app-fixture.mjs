// Executes the actual application event handlers against a small, deterministic
// DOM/storage fixture. This is a unit fixture, not a browser or visual test.
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';

export async function application(url, model, storage = {}) {
  const elements = new Map(), events = new Map(), windowEvents = new Map();
  let activeElement, choice = null;
  function element(selector) {
    if (elements.has(selector)) return elements.get(selector);
    const listeners = new Map(), classes = new Set(), attrs = new Map();
    const el = {
      dataset: {}, style: {}, hidden: false, disabled: false, textContent: '', innerHTML: '',
      isConnected: true, clientWidth: 700,
      classList: {add: x => classes.add(x), remove: x => classes.delete(x), contains: x => classes.has(x), toggle(x) {if(classes.has(x)){classes.delete(x);return false;}classes.add(x);return true;}},
      setAttribute(k,v) {attrs.set(k,String(v));}, getAttribute: k => attrs.get(k) ?? null,
      removeAttribute: k => attrs.delete(k), hasAttribute: k => attrs.has(k),
      addEventListener: (name, fn) => listeners.set(name, fn),
      fire: (name, event = {}) => listeners.get(name)?.({preventDefault(){}, currentTarget: el, ...event}),
      focus() {activeElement=el;}, closest() {return el;},
      querySelector: s => element(selector+' '+s), querySelectorAll: () => [],
      getBoundingClientRect: () => ({top:0,left:0,right:700,bottom:400}),
      animate(){}, showModal(){el.open=true;}, close(){el.open=false;el.fire('close');}
    };
    elements.set(selector,el);return el;
  }
  const document = {
    hidden: false, body: element('body'), documentElement: element('html'),
    querySelector: element,
    querySelectorAll(selector) {
      if(selector==='#answers label span')return [0,1,2].map(i=>element('answer-span-'+i));
      if(selector==='[data-mission]')return model.data.map(p=>{const el=element('mission-'+p.id);el.dataset.mission=p.id;return el;});
      if(selector==='#satellite circle')return [element('satellite-circle')];
      return [];
    },
    addEventListener: (name,fn)=>events.set(name,fn),
    get activeElement(){return activeElement;}
  };
  const values = new Map(Object.entries(storage.values ?? {}));
  const context = vm.createContext({
    ...model, document,
    window:{addEventListener:(name,fn)=>windowEvents.set(name,fn)},
    localStorage:{getItem(k){if(storage.readThrows)throw Error('storage denied');return values.get(k)??null;},setItem(k,v){if(storage.writeThrows)throw Error('quota');values.set(k,v);}},
    FormData:class {get(){return choice;}},
    showLesson(){}, matchMedia:()=>({matches:true}),
    setTimeout:()=>0,clearTimeout(){},
  });
  const source=(await readFile(url,'utf8')).replace(/^import .*?;\r?\n/gm,'');
  new vm.Script(source,{filename:url.pathname}).runInContext(context);
  return {
    element, document, values,
    choose(value){choice=value;},
    click(selector){const el=element(selector);if(el.disabled)return;el.fire('click',{target:el});events.get('click')?.({target:el});},
    submit(){element('#quiz').fire('submit');},
    visibility(hidden){document.hidden=hidden;events.get('visibilitychange')?.();},
    external(key,value){if(value===null)values.delete(key);else values.set(key,value);windowEvents.get('storage')?.({key,newValue:value});}
  };
}

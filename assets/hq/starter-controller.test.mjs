// Unit integration: run the real controller with its real model inside a small
// deterministic DOM/storage fixture. These checks do not claim browser, layout,
// native file-picker, clipboard-permission or download-manager verification.
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as model from './starter-model.mjs';

const designs = ['bloom', 'si', 'forma', 'samar', 'orbita', 'meros', 'nashr', 'ziyo', 'hisob'];
const names = {bloom: 'Bloom', si: 'Yuksal', forma: 'Forma', samar: 'Samar', orbita: 'Orbita', meros: 'Meros', nashr: 'Nashr', ziyo: 'Ziyo', hisob: 'Hisob'};
const original = {design: 'bloom', topic: '  O‘quv markazi uchun sayt\nKurslarni tanlash.  ', time: '85 daqiqa', constraints: 'Server yo‘q'};
const encode = task => model.serializeDraft(task, designs, '2026-10-17T12:00:00.000Z');
const controllerUrl = new URL('./starter.mjs', import.meta.url);
const source = (await readFile(controllerUrl, 'utf8')).replace(/^import[^\n]+starter-model\.mjs[^\n]+\r?\n/, '');
assert.doesNotMatch(source, /^import /m, 'fixture must bind every controller import');
// Fail on a removed/renamed HTML ID instead of inventing arbitrary DOM nodes.
const pageSource = await readFile(new URL('../../design/starter_page.py', import.meta.url), 'utf8');
const pageIds = [...pageSource.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);

function application({draft = null, query = '', values = new Map(), clipboardDenied = false, readDenied = false, writeDenied = false} = {}) {
  if (draft !== null) values.set(model.DRAFT_KEY, typeof draft === 'string' ? draft : encode(draft));
  const elements = new Map(), windowEvents = new Map(), writes = [], downloads = [], copied = [], urls = new Map();
  let focused = null, selected = null;
  function node(id = '') {
    const listeners = new Map(), attributes = new Map();
    return {
      id, name: '', value: '', textContent: '', hidden: false, disabled: false, files: [],
      addEventListener(type, callback) {
        const callbacks = listeners.get(type) || [];
        callbacks.push(callback); listeners.set(type, callbacks);
      },
      async fire(type, details = {}) {
        const event = {target: this, currentTarget: this, preventDefault() {}, ...details};
        for (const callback of listeners.get(type) || []) await callback(event);
      },
      setAttribute(name, value) {attributes.set(name, String(value));},
      getAttribute(name) {return attributes.get(name) ?? null;},
      removeAttribute(name) {attributes.delete(name);},
      focus() {focused = this;},
      select() {selected = this;},
      click() {
        if (this.download) downloads.push({name: this.download, blob: urls.get(this.href)});
        return this.fire('click');
      },
      remove() {},
    };
  }
  for (const id of pageIds) elements.set(id, node(id));
  function element(id) {
    assert.ok(elements.has(id), 'controller requested missing page ID: ' + id);
    return elements.get(id);
  }
  const fields = Object.fromEntries([['design', 'design-choice'], ['time', 'remaining-time'], ['topic', 'ticket'], ['constraints', 'task-constraints']].map(([name, id]) => {
    const field = element(id); field.name = name; return [name, field];
  }));
  fields.design.options = designs.map(value => ({value, textContent: names[value]}));
  fields.design.value = 'bloom';
  Object.defineProperty(fields.design, 'selectedOptions', {get: () => fields.design.options.filter(option => option.value === fields.design.value)});
  element('starter').elements = fields;
  for (const id of ['draft-conflict', 'undo-draft', 'ticket-error', 'remaining-time-error']) element(id).hidden = true;
  const nav = node('library-nav');
  const location = {href: 'https://azizbeksafarov.github.io/design/start/' + query};
  class FixtureURL extends URL {
    static createObjectURL(blob) {const url = 'blob:test-' + urls.size; urls.set(url, blob); return url;}
    static revokeObjectURL(url) {urls.delete(url);}
  }
  const storage = {
    getItem(key) {if (readDenied) throw Error('storage read denied'); return values.get(key) ?? null;},
    setItem(key, value) {if (writeDenied) throw Error('storage quota'); writes.push([key, value]); values.set(key, value);},
    removeItem(key) {if (writeDenied) throw Error('storage quota'); values.delete(key);},
  };
  const context = vm.createContext({
    ...model, URL: FixtureURL, Blob, location,
    history: {replaceState(_state, _title, url) {location.href = String(url);}},
    document: {getElementById: element, querySelector: () => nav, createElement: () => node(), body: {append() {}}},
    window: {addEventListener(type, callback) {windowEvents.set(type, callback);}},
    localStorage: storage,
    navigator: {clipboard: {async writeText(value) {if (clipboardDenied) throw Error('clipboard denied'); copied.push(value);}}},
    // Retain Blob URLs for inspection; no time-dependent controller behavior is tested.
    setTimeout: () => 0,
  });
  new vm.Script(source, {filename: controllerUrl.pathname}).runInContext(context);
  return {
    fields, element, values, writes, downloads, copied, location,
    get focused() {return focused;}, get selected() {return selected;},
    task() {return Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]));},
    stored() {return JSON.parse(values.get(model.DRAFT_KEY));},
    async input(name, value) {fields[name].value = value; await element('starter').fire('input', {target: fields[name]});},
    async changeDesign(value) {fields.design.value = value; await fields.design.fire('change');},
    async click(id) {const button = element(id); if (!button.disabled) await button.click();},
    async importText(text, {size = new TextEncoder().encode(text).byteLength, unreadable = false} = {}) {
      const input = element('draft-file');
      input.value = 'C:\\fakepath\\draft.json';
      input.files = [{size, async text() {if (unreadable) throw Error('file read failed'); return text;}}];
      await input.fire('change');
    },
    external(raw, key = model.DRAFT_KEY) {
      if (key === null) values.clear(); else if (raw === null) values.delete(key); else values.set(key, raw);
      windowEvents.get('storage')?.({key, newValue: raw});
    },
  };
}

test('controller restores exact draft text after reload and lets a valid URL select its design', () => {
  const app = application({draft: original, query: '?design=si'});
  assert.match(app.element('draft-status').textContent, /2026-10-17/);
  assert.match(app.element('draft-status').textContent, /eski ish bo‘lishi mumkin/);
  assert.deepEqual(app.task(), {...original, design: 'si'});
  assert.match(app.element('ai-prompt').value, /Hozirgi topshiriq — Yuksal/);
  assert.equal(app.element('selected-kit').href, 'https://azizbeksafarov.github.io/design/si/source.zip');
  assert.equal(app.element('selected-preview').href, 'https://azizbeksafarov.github.io/design/si-site/');
  assert.equal(app.writes.length, 0, 'reading or URL selection must not silently replace the stored draft');
  const reloaded = application({values: app.values});
  assert.deepEqual(reloaded.task(), original);
});

test('controller ignores unknown URL designs and persists user edits and selected design', async () => {
  const app = application({draft: original, query: '?design=unknown'});
  assert.equal(app.fields.design.value, 'bloom');
  await app.input('topic', 'Yangi bilet: mahalliy kutubxona');
  await app.input('time', '50 daqiqa');
  await app.changeDesign('ziyo');
  assert.equal(app.stored().topic, 'Yangi bilet: mahalliy kutubxona');
  assert.equal(app.stored().time, '50 daqiqa');
  assert.equal(app.stored().design, 'ziyo');
  assert.equal(new URL(app.location.href).searchParams.get('design'), 'ziyo');
  assert.deepEqual(application({values: app.values}).task(), app.task());
});

test('controller validates empty actions, focuses the first error, and clears errors while typing', async () => {
  const app = application();
  await app.click('copy-task');
  await app.click('download-task');
  assert.equal(app.copied.length, 0);
  assert.equal(app.downloads.length, 0);
  assert.equal(app.fields.topic.getAttribute('aria-invalid'), 'true');
  assert.equal(app.fields.time.getAttribute('aria-invalid'), 'true');
  assert.equal(app.focused, app.fields.time);
  assert.equal(app.element('ticket-error').hidden, false);
  await app.input('time', '35 daqiqa');
  assert.equal(app.fields.time.getAttribute('aria-invalid'), null);
  assert.equal(app.element('remaining-time-error').hidden, true);
  await app.input('topic', 'Sayt yarating');
  assert.equal(app.fields.topic.getAttribute('aria-invalid'), null);
  await app.click('copy-task');
  assert.equal(app.copied.length, 1);
  assert.equal(app.copied[0], app.element('ai-prompt').value);
});

test('corrupt, oversized and unreadable imports preserve form and persisted text', async () => {
  const app = application({draft: original});
  const before = app.values.get(model.DRAFT_KEY);
  for (const [text, options] of [['{broken', {}], [encode({...original, design: 'forma'}), {size: model.MAX_IMPORT_BYTES + 1}], ['{}', {unreadable: true}]]) {
    await app.importText(text, options);
    assert.deepEqual(app.task(), original);
    assert.equal(app.values.get(model.DRAFT_KEY), before);
    assert.equal(app.element('undo-draft').hidden, true);
    assert.match(app.element('draft-status').textContent, /Joriy topshiriq o‘zgarmadi/);
    assert.equal(app.element('draft-file').value, '');
  }
});

test('valid JSON import updates task, links and persistence; undo restores the previous task', async () => {
  const app = application({draft: original});
  const imported = {...original, design: 'forma', topic: 'Mebel do‘koni', time: '90 daqiqa'};
  await app.importText(encode(imported));
  assert.deepEqual(app.task(), imported);
  assert.equal(app.stored().topic, imported.topic);
  assert.equal(app.element('selected-kit').href, 'https://azizbeksafarov.github.io/design/forma/source.zip');
  assert.equal(app.element('undo-draft').hidden, false);
  await app.click('undo-draft');
  assert.deepEqual(app.task(), original);
  assert.equal(app.stored().topic, original.topic);
  assert.equal(app.stored().design, original.design);
  assert.equal(app.element('undo-draft').hidden, true);
});

test('cross-tab changes block silent overwrite until explicit replacement', async () => {
  const app = application({draft: original});
  const remote = encode({...original, topic: 'Boshqa tabdagi yangi bilet'});
  app.external(remote);
  assert.equal(app.element('draft-conflict').hidden, false);
  await app.input('topic', 'Ushbu tabda davom etamiz');
  assert.equal(app.values.get(model.DRAFT_KEY), remote);
  assert.match(app.element('ai-prompt').value, /Ushbu tabda davom etamiz/);
  await app.click('replace-draft');
  assert.equal(app.stored().topic, 'Ushbu tabda davom etamiz');
  assert.equal(app.element('draft-conflict').hidden, true);
  await app.input('constraints', 'Yangi qo‘shimcha talab');
  assert.equal(app.stored().constraints, 'Yangi qo‘shimcha talab');
});

test('loading the other tab draft is reversible and unrelated storage events do not block editing', async () => {
  const app = application({draft: original});
  app.external('other-setting', 'unrelated-key');
  assert.equal(app.element('draft-conflict').hidden, true);
  const remote = {...original, design: 'hisob', topic: 'Hisobot portali'};
  app.external(encode(remote));
  await app.click('load-draft');
  assert.deepEqual(app.task(), remote);
  assert.equal(app.element('draft-conflict').hidden, true);
  await app.click('undo-draft');
  assert.deepEqual(app.task(), original);
  assert.equal(app.stored().topic, original.topic);
});

test('corrupted stored draft remains untouched until explicit replacement', async () => {
  const app = application({draft: '{important broken draft'});
  assert.equal(app.element('draft-conflict').hidden, false);
  await app.input('topic', 'Yangi topshiriq');
  assert.equal(app.values.get(model.DRAFT_KEY), '{important broken draft');
  await app.click('replace-draft');
  assert.equal(app.stored().topic, 'Yangi topshiriq');
});

test('clipboard denial selects generated text, restores the button and offers manual copying', async () => {
  const app = application({draft: original, clipboardDenied: true});
  await app.click('copy-task');
  assert.equal(app.copied.length, 0);
  assert.equal(app.focused, app.element('ai-prompt'));
  assert.equal(app.selected, app.element('ai-prompt'));
  assert.equal(app.element('copy-task').disabled, false);
  assert.match(app.element('copy-status').textContent, /Ctrl\+C/);
});

test('clear retains the selected design and can restore exact prior text with undo', async () => {
  const app = application({draft: {...original, design: 'orbita'}});
  await app.click('clear-draft');
  assert.deepEqual(app.task(), model.emptyTask('orbita'));
  assert.equal(app.focused, app.fields.topic);
  assert.equal(app.stored().topic, '');
  await app.click('undo-draft');
  assert.deepEqual(app.task(), {...original, design: 'orbita'});
  assert.equal(app.stored().topic, original.topic);
});

test('unavailable storage retains in-memory edits and JSON export remains usable', async () => {
  const app = application({readDenied: true, writeDenied: true});
  await app.input('topic', 'Xotirasiz ishlash');
  await app.input('time', '20 daqiqa');
  assert.match(app.element('draft-status').textContent, /saqlab bo‘lmadi/);
  assert.equal(app.values.size, 0);
  await app.click('export-draft');
  assert.equal(app.downloads[0].name, 'topshiriq-qoralama.json');
  const exported = JSON.parse(await app.downloads[0].blob.text());
  assert.equal(exported.topic, 'Xotirasiz ishlash');
  assert.equal(exported.time, '20 daqiqa');
});

test('CURRENT-TASK download contains current ticket, selected design and handoff instructions', async () => {
  const app = application({draft: original});
  await app.click('download-task');
  assert.equal(app.downloads.length, 1);
  assert.equal(app.downloads[0].name, 'CURRENT-TASK.md');
  const output = await app.downloads[0].blob.text();
  assert.equal(output, app.element('ai-prompt').value);
  assert.ok(output.includes(original.topic));
  assert.match(output, /design\/bloom\/source.zip/);
  assert.match(output, /HANDOFF.md/);
});

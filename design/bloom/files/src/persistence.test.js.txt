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

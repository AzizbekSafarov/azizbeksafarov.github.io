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
    if (raw === null) return {projects: structuredClone(initialProjects), status: 'new', raw};
    const projects = parseProjects(raw);
    if (projects) return {projects, status: 'ready', raw};
    return {projects: structuredClone(initialProjects), status: 'invalid', raw};
  } catch {
    return {projects: structuredClone(initialProjects), status: 'unavailable'};
  }
}

export function persistProjectState(getStorage, projects, {startupStatus, expectedRaw} = {}) {
  if (!validateProjects(projects)) return {status: 'invalid-current'};
  // A failed initial read means the displayed samples may not be the user's
  // actual workspace. Keep this session in memory even if access later returns.
  if (startupStatus === 'unavailable') return {status: 'unavailable'};
  try {
    const storage = getStorage();
    const raw = storage.getItem(PROJECTS_KEY);
    if (expectedRaw !== undefined && raw !== expectedRaw) return {status: 'conflict'};
    const needsRecovery = raw !== null && !parseProjects(raw);
    // Preserve the exact original before replacement. If this backup fails,
    // the original key stays untouched and the caller keeps an in-memory copy.
    if (needsRecovery) {
      let backupKey = RECOVERY_KEY, suffix = 0;
      while (storage.getItem(backupKey) !== null && storage.getItem(backupKey) !== raw) backupKey = RECOVERY_KEY + '.' + (++suffix);
      storage.setItem(backupKey, raw);
      if (storage.getItem(backupKey) !== raw) return {status: 'unavailable'};
    }
    const written = JSON.stringify(projects);
    storage.setItem(PROJECTS_KEY, written);
    return {status: needsRecovery ? 'recovered' : 'saved', raw: written};
  } catch {
    return {status: 'unavailable'};
  }
}

export function exportProjects(projects) {
  if (!validateProjects(projects)) throw new Error('Invalid project backup');
  return JSON.stringify(projects, null, 2);
}

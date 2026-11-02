// Hash routes work on static hosting and in downloaded subdirectory previews.
export function readRoute(hash = '') {
  if (!hash || hash === '#main') return {view:'all', projectId:null, invalid:false};
  const match = /^#(all|saved|done)(?:\/(.+))?$/.exec(hash);
  if (!match) return {view:'all', projectId:null, invalid:true};
  try {
    return {view:match[1], projectId:match[2] ? decodeURIComponent(match[2]) : null, invalid:false};
  } catch { return {view:'all', projectId:null, invalid:true}; }
}
export function routeHash(view, projectId = null) {
  if (!['all','saved','done'].includes(view)) throw new Error('Unknown view');
  return '#'+view+(projectId === null ? '' : '/'+encodeURIComponent(projectId));
}

/* Pure lesson-state rules, shared by the browser and Node verification. */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.QadamLessonModel = model;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  return {
    restoreSteps(saved, ids, completed) {
      return Object.fromEntries(ids.map(id => [id, new Set(completed.has(id) ? [0, 1, 2] :
        (Array.isArray(saved?.[id]) ? saved[id].filter(value => Number.isInteger(value) && value >= 0 && value < 3) : []))]));
    },
    canComplete(steps, total, completed) {
      return !completed && steps instanceof Set && steps.size === total && Array.from({length: total}, (_, index) => index).every(index => steps.has(index));
    }
  };
});

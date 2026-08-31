(function () {
  const BASE = 'repo_link';
  const URL  = BASE + 'data.json';
  const MAX  = 3;

  function tryLoad(n) {
    fetch(URL)
      .then(r => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(txt => {
        window.__RAW_DB__ = txt;
        console.log('[load] database fetched');
      })
      .catch(err => {
        if (n < MAX) {
          console.warn('[load] retry', n + 1);
          setTimeout(() => tryLoad(n + 1), 800 * n);
        } else {
          console.error('[load] failed after', MAX, 'tries', err);
          window.__RAW_DB__ = null;
        }
      });
  }

  tryLoad(1);
})();

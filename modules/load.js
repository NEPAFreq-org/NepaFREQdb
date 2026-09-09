(function () {
  const URL = 'https://raw.githubusercontent.com/NEPAFreq-org/NepaFREQdb/main/modules/data.json';
  const MAX = 3;

  function tryLoad(n) {
    fetch(URL)
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(txt => {
        window.__RAW_DB__ = txt;
        console.log('[load] database fetched successfully');
      })
      .catch(err => {
        if (n < MAX) {
          console.warn('[load] retry', n + 1);
          setTimeout(() => tryLoad(n + 1), 600 * n);
        } else {
          console.error('[load] failed after', MAX, 'tries', err);
          window.__RAW_DB__ = null;
        }
      });
  }

  tryLoad(1);
})();

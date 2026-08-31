(function () {
  const BASE = 'https://github.com/NEPAFreq-org/NepaFREQdb';

  function inject(src, cb) {
    const s = document.createElement('script');
    s.src = BASE + src;
    s.onload = cb || null;
    s.onerror = () => console.error('[main] failed to load', src);
    document.head.appendChild(s);
  }
  inject('https://raw.githubusercontent.com/NEPAFreq-org/NepaFREQdb/refs/heads/main/modules/host.js', function () {
    if (typeof window.__HOST_OK__ === 'undefined' || !window.__HOST_OK__) {
      console.error('[main] blocked by host check');
      return;
    }
    inject('https://raw.githubusercontent.com/NEPAFreq-org/NepaFREQdb/refs/heads/main/modules/mend.js', function () {
      inject('https://raw.githubusercontent.com/NEPAFreq-org/NepaFREQdb/refs/heads/main/modules/load.js', function () {
        inject('https://raw.githubusercontent.com/NEPAFreq-org/NepaFREQdb/refs/heads/main/modules/pure.js', function () {
          console.log('[main] database ready', window.DB);
        });
      });
    });
  });
})();

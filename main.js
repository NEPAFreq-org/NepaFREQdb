(function () {
  const BASE = 'https://github.com/NEPAFreq-org/NepaFREQdb';

  function inject(src, cb) {
    const s = document.createElement('script');
    s.src = BASE + src;
    s.onload = cb || null;
    s.onerror = () => console.error('[main] failed to load', src);
    document.head.appendChild(s);
  }
  inject('host.js', function () {
    if (typeof window.__HOST_OK__ === 'undefined' || !window.__HOST_OK__) {
      console.error('[main] blocked by host check');
      return;
    }
    inject('mend.js', function () {
      inject('load.js', function () {
        inject('pure.js', function () {
          console.log('[main] database ready', window.DB);
        });
      });
    });
  });
})();

(function () {
  const BASE = "https://nepafreq-org.github.io/NepaFREQdb";

  function inject(src, cb) {
    const s = document.createElement("script");
    s.src = src;
    s.onload = cb || null;
    s.onerror = () => console.error("[main] failed to load", src);
    document.head.appendChild(s);
  }

  inject(`${BASE}/modules/host.js`, function () {
    if (typeof window.__HOST_OK__ === "undefined" || !window.__HOST_OK__) {
      console.error("[main] blocked by host check");
      return;
    }

    inject(`${BASE}/modules/mend.js`, function () {
      inject(`${BASE}/modules/load.js`, function () {
        setTimeout(function () {
          inject(`${BASE}/modules/pure.js`, function () {
            console.log("[main] database ready", window.DB);
            window.dispatchEvent(new Event("db-ready"));
          });
        }, 300);
      });
    });
  });
})();

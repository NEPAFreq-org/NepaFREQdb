(function () {
  window.addEventListener('error', function (e) {
    console.warn('[mend] caught', e.message);
    if (!window.DB && window.__RAW_DB__) {
      try {
        window.DB = JSON.parse(window.__RAW_DB__);
        console.log('[mend] recovered raw JSON');
      } catch (_) {}
    }
  });
  window.addEventListener('unhandledrejection', function (e) {
    console.warn('[mend] promise rejection', e.reason);
  });
})();

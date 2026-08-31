(function () {
  const ALLOWED = [
    'nepafreq.org',
    'neparadio.org'
  ];

  const host = location.hostname.toLowerCase();
  const ok = ALLOWED.some(d => host === d || host.endsWith('.' + d));

  window.__HOST_OK__ = ok;

  if (!ok) {
    console.error('[host] domain not allowed:', host);
  }
})();

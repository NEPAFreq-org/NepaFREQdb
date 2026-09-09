(function () {
  function parse() {
    if (!window.__RAW_DB__) {
      console.error('[pure] no raw data available yet');
      setTimeout(parse, 200);
      return;
    }

    try {
      const data = JSON.parse(window.__RAW_DB__);
      window.DB = data;
      console.log('[pure] parsed', window.DB.frequencies.length, 'frequencies');
    } catch (e) {
      console.error('[pure] JSON parse failed', e);
      window.DB = { frequencies: [] };
    }
  }

  parse();
})();

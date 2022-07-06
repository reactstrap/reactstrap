(() => {
  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

  const CustomEvent = (event, params) => {
    params = params || { bubbles: false, cancelable: false, detail: null };
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  window.CustomEvent = CustomEvent;
})();

(() => {
  if (typeof Object.values === 'function') return;

  const values = (O) => Object.keys(O).map((key) => O[key]);

  Object.values = values;
})();

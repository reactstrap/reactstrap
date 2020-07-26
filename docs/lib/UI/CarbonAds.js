import React, { useEffect, useRef } from 'react';

function CarbonAds() {
  const carbonRef = useRef(null);

  useEffect(() => {
    if (!carbonRef.current) return;

    const scriptEl = document.createElement('script');
    scriptEl.src = '//cdn.carbonads.com/carbon.js?serve=CE7IPK3E&placement=reactstrapgithubio';
    scriptEl.async = true;
    scriptEl.id = '_carbonads_js';
    carbonRef.current.appendChild(scriptEl);
  }, [carbonRef]);

  return (
    <div className="carbon-ads-wrapper" ref={carbonRef} />
  );
}

export default CarbonAds;

import 'bootstrap-css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';
import Helmet from 'react-helmet';
import routes from './routes';

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');
  browserHistory.listen(function (location) {
    window.ga('set', 'page', location.pathname);
    window.ga('send', 'pageview');
  });

  let Holder;
  window.addEventListener('DOMContentLoaded', () => {
    Holder = require('holderjs');
  });

  ReactDOM.hydrate(
    <Router
      onUpdate={() => {
        window.scrollTo(0, 0);

        if (Holder) {
          Holder.run();
        }
      }}
      history={browserHistory}
      routes={routes}
    />,
    outlet
  );
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    let url;
    if (redirectLocation && redirectLocation.pathname) {
      url = redirectLocation.pathname;
      callback(null, `<!DOCTYPE html>
      <html>
      <head><link rel="canonical" href="${url}"/>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta http-equiv="refresh" content="0;url=${url}" />
      </head>
      </html>`);
    }
    const body = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    const head = Helmet.rewind();
    let markup = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          ${head.title.toString()}
          ${head.meta.toString()}
          <link rel=icon href=/assets/favicon.ico>
          <link rel="stylesheet" href="/assets/style.css"/>
          <link rel="stylesheet" href="/assets/docs.css"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
        </head>
        <body>
          <div id="app">${body}</div>
          <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-40000603-2', 'auto');
          </script>
          <script src="/assets/prism.js" data-manual></script>
          <script src="/bundle.js"></script>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
          <script type="text/javascript">
            docsearch({
              apiKey: '2999e8cb716a50f4bd09a3addb18bf4f',
              indexName: 'reactstrap',
              inputSelector: '#algolia-doc-search',
              debug: false // Set debug to true if you want to inspect the dropdown
            });
          </script>
        </body>
      </html>`;
    callback(null, markup);
  });
};

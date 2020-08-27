import 'bootstrap-css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import routes from './routes';

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');
  browserHistory.listen(location => {
    window.ga('set', 'page', location.pathname);
    window.ga('send', 'pageview');
  });

  const handleRouterUpdate = () => {
    window.scrollTo(0, 0);

    if (window.Holder) {
      window.Holder.run();
    }
  };
  ReactDOM.hydrate(<Router onUpdate={handleRouterUpdate} history={browserHistory} routes={routes} />, outlet);
}

// Exported static site renderer:
export default (locals, callback) => {
  match({ routes, location: locals.path }, (_error, redirectLocation, renderProps) => {
    if (redirectLocation && redirectLocation.pathname) {
      const url = redirectLocation.pathname;
      callback(
        null,
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <link rel="canonical" href="${url}" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="refresh" content="0;url=${url}" />
        </head>
        </html>`
      );
    }

    const body = renderProps ? ReactDOMServer.renderToString(<RouterContext {...renderProps} />) : '';
    const head = Helmet.rewind();
    callback(
      null,
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charset="utf-8" />
        ${head.title.toString()}
        ${head.meta.toString()}
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link rel="stylesheet" href="/assets/main.css" />
        <link rel="stylesheet" href="/assets/docs.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="https://cdn.jsdelivr.net/npm/holderjs@2/holder.min.js"></script>
        <script src="/assets/prism.js" data-manual></script>
        <script src="/bundle.js"></script>
        <!-- Google Analytics -->
        <script>
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-40000603-2', 'auto');
        </script>
        <script async src="https://www.google-analytics.com/analytics.js"></script>
        <!-- DocSearch -->
        <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
        <script>
          docsearch({
            apiKey: '2999e8cb716a50f4bd09a3addb18bf4f',
            indexName: 'reactstrap',
            inputSelector: '#algolia-doc-search',
            debug: false // Set debug to true if you want to inspect the dropdown
          });
        </script>
      </body>
      </html>`
    );
  });
};

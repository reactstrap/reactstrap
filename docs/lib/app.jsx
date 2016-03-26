import 'bootstrap-css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';
import routes from './routes';

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');
  ReactDOM.render(<Router history={browserHistory} routes={routes} />, outlet)
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var url;
    if (redirectLocation && redirectLocation.pathname) {
      url = redirectLocation.pathname;
      callback(null, `<!DOCTYPE html>
      <html>
      <head><link rel="canonical" href="${url}"/>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta http-equiv="refresh" content="0;url=${url}" />
      </head>
      </html>`)
    }
    const body = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    callback(null, `<!DOCTYPE html>
      <html>
        <head>
          <title>reactstrap - React Bootstrap 4 components</title>
          <base href="/">
          <link rel=icon href=/assets/favicon.ico>
          <link rel="stylesheet" href="/assets/style.css"/>
          <link rel="stylesheet" href="/assets/docs.css"/>
        </head>
        <body>
          <div id="app">${body}</div>
          <script src="/assets/prism.js" data-manual></script>
          <script src="/bundle.js"></script>
        </body>
      </html>`)
  });
};

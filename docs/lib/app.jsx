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
    console.log(error, redirectLocation, renderProps.location.pathname);
    const body = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    callback(null, `<!DOCTYPE html>
      <html>
        <head>
          <title>reactstrap - React Bootstrap 4 components</title>
          <link rel=icon href=/assets/favicon.ico>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
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

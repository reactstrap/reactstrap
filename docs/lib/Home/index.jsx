import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import { Link } from 'react-router';
import UI from '../UI';
import Example from '../examples/import-basic';

const importBasic = require('!!raw!../examples/import-basic.jsx');

export default () => {
  return (
    <div>
      <UI.Nav/>
      <section className="jumbotron text-xs-center m-b-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">reactstrap</h1>
              <p className="lead">
                Easy to use React Bootstrap 4 components
              </p>
              <p>
                <Button color="danger" El={Link} to="/components">View Components</Button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>Getting Started</h2>
            <hr/>
            <h3>NPM</h3>
            <p>Install reactstrap via NPM</p>
            <pre>
              <PrismCode className="language-bash">npm install --save reactstrap</PrismCode>
            </pre>
            <p>ES6 - import the components you need</p>
            <div className="docs-example">
              <Example/>
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {importBasic}
              </PrismCode>
            </pre>
            <h3>CDN</h3>
            <pre>
              <PrismCode className="language-jsx">
                https://npmcdn.com/reactstrap/dist/reactstrap.min.js
              </PrismCode>
            </pre>
            <p>Check out the demo <a href="http://output.jsbin.com/dimive/latest">here</a></p>
          </div>
        </div>
      </div>
      <UI.Footer/>
    </div>
  );
};

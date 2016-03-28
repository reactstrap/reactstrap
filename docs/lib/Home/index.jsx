import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router';
import Example from '../examples/import-basic';

const importBasic = require('!!raw!../examples/import-basic.jsx');

export default () => {
  return (
    <div>
      <section className="jumbotron text-xs-center m-b-3">
        <Container fluid>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">reactstrap</h1>
              <p className="lead">
                Easy to use React Bootstrap 4 components
              </p>
              <p>
                <Button color="danger-outline" href="https://github.com/reactstrap/reactstrap">View on Github</Button>
                <Button color="danger" tag={Link} to="/components/" className="m-l-1">View Components</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Installation</h2>
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
            <h2 className="m-t-3">About the Project</h2>
            <hr/>
            <p>This library contains React Bootstrap 4 components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, <a href="http://tether.io/" target="_blank">Tether</a> is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.</p>
            <p>There are a few core concepts to understand in order to make the most out of this library.</p>
            <p>1) Your content is expected to be composed via props.children rather than using named props to pass in Components.</p>
            <pre>
              <PrismCode className="language-jsx">
{`// Content passed in via props
const Example = (props) => {
  return (
    <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
  );
}

// Content passed in as children (Preferred)
const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}`}
              </PrismCode>
            </pre>
            <p>
              2) Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like tether), or automatically include non-content based elements.
            </p>
            <p>Examples:</p>
            <ul>
              <li><code>isOpen</code> - current state for items like dropdown, popover, tooltip</li>
              <li><code>toggle</code> - callback for toggling isOpen in the controlling component</li>
              <li><code>color</code> - applies color classes, ex: <code>{'<Button color="danger"/>'}</code></li>
              <li><code>size</code> for controlling size classes. ex: <code>{'<Button size="sm"/>'}</code></li>
              <li>boolean based props (attributes) when possible for alternative style classes or sr-only content</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

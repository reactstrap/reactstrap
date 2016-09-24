import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import JumbotronExample from '../examples/Jumbotron';
import JumbotronFluidExample from "../examples/JumbotronFluid";

const JumbotronExampleSource = require('!!raw!../examples/Jumbotron');
const JumbotronFluidExampleSource = require('!!raw!../examples/JumbotronFluid');

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Jumbotron" />
        <h3>Jumbotron</h3>
        <hr />
        <div className="docs-example">
          <JumbotronExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.any
};`}
          </PrismCode>
        </pre>

        <h3>Fluid Jumbotron</h3>
        <hr />
        <div className="docs-example">
          <JumbotronFluidExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {JumbotronFluidExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

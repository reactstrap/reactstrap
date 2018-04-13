import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import SectionTitle from '../UI/SectionTitle';

import JumbotronExample from '../examples/Jumbotron';
import JumbotronFluidExample from "../examples/JumbotronFluid";

const JumbotronExampleSource = require('!!raw!../examples/Jumbotron');
const JumbotronFluidExampleSource = require('!!raw!../examples/JumbotronFluid');

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Jumbotron" />
        <SectionTitle>Jumbotron</SectionTitle>
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
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Fluid Jumbotron</SectionTitle>
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

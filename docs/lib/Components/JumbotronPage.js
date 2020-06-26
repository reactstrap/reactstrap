import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import JumbotronExample from '../examples/Jumbotron';
import JumbotronFluidExample from "../examples/JumbotronFluid";

const JumbotronExampleSource = require('!!raw-loader!../examples/Jumbotron');
const JumbotronFluidExampleSource = require('!!raw-loader!../examples/JumbotronFluid');

export default class JumbotronPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Jumbotron" />
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

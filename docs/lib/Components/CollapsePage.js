/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CollapseExample from '../examples/Collapse';
const CollapseExampleSource = require('!!raw!../examples/Collapse');

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Collapse" />

        <h3>Collapse</h3>
        <div className="docs-example">
          <CollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CollapseExampleSource}
          </PrismCode>
        </pre>

        <h3>Properties</h3>
        <pre>
          <PrismCode className="language-jsx">
{`Collapse.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.node,
  navbar: PropTypes.bool
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

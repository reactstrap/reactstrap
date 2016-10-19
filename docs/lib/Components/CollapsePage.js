/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import Helmet from 'react-helmet';

import CollapseExample from '../examples/Collapse';
const CollapseExampleSource = require('!!raw!../examples/Collapse');

export default class AlertsPage extends React.Component {
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
{`Alert.propTypes = {
  className: PropTypes.any,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // Set any of the timeouts to 0 to disable animation
  transitionAppearTimeout: PropTypes.number,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

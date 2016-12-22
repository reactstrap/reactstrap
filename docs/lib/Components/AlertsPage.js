/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import Helmet from 'react-helmet';

import AlertExample from '../examples/Alert';
const AlertExampleSource = require('!!raw!../examples/Alert');

import AlertDismissExample from '../examples/AlertDismiss';
const AlertDismissExampleSource = require('!!raw!../examples/AlertDismiss');

export default class AlertsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Alerts" />

        <h3>Alerts</h3>
        <div className="docs-example">
          <AlertExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertExampleSource}
          </PrismCode>
        </pre>

        <h3>Properties</h3>
        <pre>
          <PrismCode className="language-jsx">
{`Alert.propTypes = {
  className: PropTypes.string,
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

        <h3>Dismissing</h3>
        <div className="docs-example">
          <AlertDismissExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertDismissExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

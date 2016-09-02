/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import Helmet from 'react-helmet';
import AlertExample from '../examples/Alert';
const AlertExampleSource = require('!!raw!../examples/Alert.jsx');

export default class AlertsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Alerts"/>
        <h3>Alerts</h3>
        <div className="docs-example">
          <AlertExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`<Alert color="warning" dismiss isOpen={isOpen} toggle={toggle}>danger</Alert>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

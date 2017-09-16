/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import Helmet from 'react-helmet';

import AlertExample from '../examples/Alert';
const AlertExampleSource = require('!!raw!../examples/Alert');

import AlertLinkExample from '../examples/AlertLink';
const AlertLinkExampleSource = require('!!raw!../examples/AlertLink');

import AlertContentExample from '../examples/AlertContent';
const AlertContentExampleSource = require('!!raw!../examples/AlertContent');

import AlertDismissExample from '../examples/AlertDismiss';
const AlertDismissExampleSource = require('!!raw!../examples/AlertDismiss');

import AlertUncontrolledDismissExample from '../examples/AlertUncontrolledDismiss';
const AlertUncontrolledDismissExampleSource = require('!!raw!../examples/AlertUncontrolledDismiss');

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
  closeClassName: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the alert fading in and out
  // See [Fade](/components/fade/) for more details
  transition: PropTypes.shape(Fade.propTypes),
}`}
          </PrismCode>
        </pre>

        <h3>Link color</h3>
        <div className="docs-example">
          <AlertLinkExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertLinkExampleSource}
          </PrismCode>
        </pre>

        <h3>Additional content</h3>
        <div className="docs-example">
          <AlertContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertContentExampleSource}
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

        <h3>Uncontrolled [disable] Alerts</h3>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <AlertUncontrolledDismissExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AlertUncontrolledDismissExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

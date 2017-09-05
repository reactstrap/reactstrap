/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CollapseExample from '../examples/Collapse';
const CollapseExampleSource = require('!!raw!../examples/Collapse');

import CollapseEventsExample from '../examples/CollapseEvents';
const CollapseEventsExampleSource = require('!!raw!../examples/CollapseEvents');

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
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
};`}
          </PrismCode>
        </pre>

        <h3>Events</h3>
        <p>Use the onOpened and onClosed props for callbacks when the Collapse has finished opening or closing.</p>
        <div className="docs-example">
          <CollapseEventsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CollapseEventsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

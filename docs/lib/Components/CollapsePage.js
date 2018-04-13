/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import CollapseExample from '../examples/Collapse';
const CollapseExampleSource = require('!!raw!../examples/Collapse');

import CollapseEventsExample from '../examples/CollapseEvents';
const CollapseEventsExampleSource = require('!!raw!../examples/CollapseEvents');

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Collapse" />
        <div className="docs-example">
          <CollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CollapseExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
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

        <SectionTitle>Events</SectionTitle>
        <p>
          Use the <code>onEnter</code>, onEntering, onEntered, onExit, onExiting and onExited props for callbacks when the
          Collapse has finished opening (entering) or closing (exiting).
        </p>
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

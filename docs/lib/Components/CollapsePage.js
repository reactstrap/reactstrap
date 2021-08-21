/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import CollapseExample from '../examples/Collapse';
import CollapseHorizontalExample from '../examples/CollapseHorizontal';
import UncontrolledCollapseExample from '../examples/CollapseUncontrolled';

import CollapseEventsExample from '../examples/CollapseEvents';

const CollapseExampleSource = require('!!raw-loader!../examples/Collapse');
const CollapseHorizontalExampleSource = require('!!raw-loader!../examples/CollapseHorizontal');
const CollapseEventsExampleSource = require('!!raw-loader!../examples/CollapseEvents');

const UncontrolledCollapseExampleSource = require('!!raw-loader!../examples/CollapseUncontrolled');

export default class CollapsePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Collapse" />
        <div className="docs-example">
          <CollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{CollapseExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Collapse.propTypes = {
  ...Transition.propTypes, // see note below
  horizontal: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.object,
};`}
          </PrismCode>
        </pre>
        <p>
          Collapse is wrapped in a <code>Transition</code> component
          from <code>react-transition-group/transition</code>. Transition props are passed through to
          this wrapper. Refer to the <code>Transition</code> documentation for details: <a href="http://reactcommunity.org/react-transition-group/transition/">
          http://reactcommunity.org/react-transition-group/transition/</a>.
        </p>

        <SectionTitle>Horizontal</SectionTitle>
        <div className="docs-example">
          <CollapseHorizontalExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{CollapseHorizontalExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Events</SectionTitle>
        <p>
          Use the <code>onEnter</code>, onEntering, onEntered, onExiting and onExited props for
          callbacks when the Collapse has finished opening (entering) or closing (exiting).
        </p>
        <div className="docs-example">
          <CollapseEventsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{CollapseEventsExampleSource}</PrismCode>
        </pre>
        <SectionTitle>Uncontrolled Collapse</SectionTitle>
        <p>
          For the most basic use-case, an uncontrolled component can provide the functionality
          wanted without the need to manage/control the state of the component.{' '}
          <code>UncontrolledCollapse</code> does not require an <code>isOpen</code> prop. Instead
          pass a <code>toggler</code> prop. The <code>toggler</code> prop is a string which will run
          querySelectorAll to find dom elements which will trigger toggle. The <code>defaultOpen</code>
          prop controls the initial state.
        </p>
        <div className="docs-example">
          <UncontrolledCollapseExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{UncontrolledCollapseExampleSource}</PrismCode>
        </pre>
      </div>
    );
  }
}

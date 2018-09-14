/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import PopoverExample from '../examples/Popover';
const PopoverExampleSource = require('!!raw!../examples/Popover');
import PopoverExampleMulti from '../examples/PopoverMulti';
const PopoverExampleMultiSource = require('!!raw!../examples/PopoverMulti');
import PopoverFocusExample from '../examples/PopoverFocus';
const PopoverFocusExampleSource = require('!!raw!../examples/PopoverFocus');
import UncontrolledPopoverExample from '../examples/PopoverUncontrolled';
const UncontrolledPopoverExampleSource = require('!!raw!../examples/PopoverUncontrolled');

export default class PopoversPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Popovers" />
        <p>Popovers are built with <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a>.</p>
        <div className="docs-example">
          <PopoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Popover.propTypes = {
  // space separated list of triggers (e.g. "click hover focus")
  trigger: PropTypes.string,
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
  boundariesElement: PropTypes.string,
  target:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
  className: PropTypes.string,
  // Apply class to the inner-popover
  innerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ]),
  // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Popovers Trigger</SectionTitle>
        <div className="docs-example">
          <PopoverFocusExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverFocusExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Popovers Placements</SectionTitle>
        <div className="docs-example">
          <PopoverExampleMulti />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverExampleMultiSource}
          </PrismCode>
        </pre>
        <SectionTitle>UncontrolledPopovers</SectionTitle>
        <div className="docs-example">
          <UncontrolledPopoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {UncontrolledPopoverExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

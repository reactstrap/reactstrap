/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import PopoverExample from '../examples/Popover';
const PopoverExampleSource = require('!!raw!../examples/Popover.jsx');
import PopoverExampleMulti from '../examples/PopoverMulti';
const PopoverExampleMultiSource = require('!!raw!../examples/PopoverMulti.jsx');

export default class PopoversPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Popovers"/>
        <h3>Popovers</h3>
        <p>Popovers are built with <a href="http://tether.io/">http://tether.io</a>.</p>
        <div className="docs-example">
          <PopoverExample/>
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
  isOpen:  PropTypes.bool,
  // boolean to control the state of the popover
  toggle:  PropTypes.func,
  // callback for toggling isOpen in the controlling component
  target:  PropTypes.string.isRequired,
  // target div ID, popover is attached to this element
  tether: PropTypes.object,
  // optionally overide tether config http://tether.io/#options
  placement: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
    'top left',
    'top center',
    'top right',
    'right top',
    'right middle',
    'right bottom',
    'bottom right',
    'bottom center',
    'bottom left',
    'left top',
    'left middle',
    'left bottom'
  ])
  // convenience attachments for popover
  // examples http://github.hubspot.com/tooltip/docs/welcome/
}`}
          </PrismCode>
        </pre>
        <h3>Popovers List</h3>
        <div className="docs-example">
          <PopoverExampleMulti/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverExampleMultiSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

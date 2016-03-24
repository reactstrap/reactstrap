/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Popover } from 'reactstrap';
import { Link } from 'react-router';
import UI from '../UI';

import PopoverExample from '../examples/Popover';
const PopoverExampleSource = require('!!raw!../examples/Popover.jsx');

export default class ButtonsPage extends React.Component {
  render() {
    return (
      <div>
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
  target:  PropTypes.string.isRequired,
  // target div ID, popover is attached to this element
  isOpen:  PropTypes.bool,
  // boolean to control the state of the popover
  tether: PropTypes.object,
  // optionally overide tether config http://tether.io/
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
      </div>
    );
  }
}

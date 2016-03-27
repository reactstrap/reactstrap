/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import TooltipExample from '../examples/Tooltip';
const TooltipExampleSource = require('!!raw!../examples/Tooltip.jsx');
import TooltipExampleMulti from '../examples/TooltipMulti';
const TooltipExampleMultiSource = require('!!raw!../examples/TooltipMulti.jsx');

export default class TooltipsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tooltips"/>
        <h3>Tooltips</h3>
        <p>Tooltips are built with <a href="http://tether.io/">http://tether.io</a>.</p>
        <div className="docs-example">
          <TooltipExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Tooltip.propTypes = {
  isOpen:  PropTypes.bool,
  // boolean to control the state of the tooltip
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
        <h3>Tooltips List</h3>
        <div className="docs-example">
          <TooltipExampleMulti/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleMultiSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

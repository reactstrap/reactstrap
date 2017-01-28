/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import TooltipExample from '../examples/Tooltip';
const TooltipExampleSource = require('!!raw!../examples/Tooltip');
import TooltipAutoHideExample from '../examples/TooltipAutoHide';
const TooltipExampleAutoHideSource = require('!!raw!../examples/TooltipAutoHide');
import TooltipExampleMulti from '../examples/TooltipMulti';
const TooltipExampleMultiSource = require('!!raw!../examples/TooltipMulti');
import TooltipExampleUncontrolled from '../examples/TooltipUncontrolled';
const TooltipExampleUncontrolledSource = require('!!raw!../examples/TooltipUncontrolled');

export default class TooltipsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tooltips" />
        <h3>Tooltips</h3>
        <p>Tooltips are built with <a href="http://tether.io/">http://tether.io</a>.</p>
        <div className="docs-example">
          <TooltipExample />
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
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // optionally overide tether config http://tether.io/#options
  tetherRef: PropType.function,
  // function which is passed a reference to the instance of tether for manually \`position()\`ing
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  // optionally override show/hide delays - default { show: 0, hide: 250 }
  autohide: PropTypes.bool,
  // optionally hide tooltip when hovering over tooltip content - default true
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
        <h3>Tooltip Disable Autohide</h3>
        <div className="docs-example">
          <TooltipAutoHideExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleAutoHideSource}
          </PrismCode>
        </pre>
        <h3>Tooltips List</h3>
        <div className="docs-example">
          <TooltipExampleMulti />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleMultiSource}
          </PrismCode>
        </pre>
        <h3>Uncontrolled Tooltip</h3>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledTooltip</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <TooltipExampleUncontrolled />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleUncontrolledSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

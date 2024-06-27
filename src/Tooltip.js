import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

function Tooltip({
  placement = 'top',
  autohide = true,
  placementPrefix = 'bs-tooltip',
  trigger = 'hover focus',
  ...rest
}) {
  const arrowClasses = classNames('tooltip-arrow', rest.arrowClassName);
  const popperClasses = classNames('tooltip', 'show', rest.popperClassName);
  const classes = classNames('tooltip-inner', rest.innerClassName);

  return (
    <TooltipPopoverWrapper
      {...rest}
      placement={placement}
      autohide={autohide}
      placementPrefix={placementPrefix}
      trigger={trigger}
      arrowClassName={arrowClasses}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
}

Tooltip.propTypes = propTypes;

export default Tooltip;

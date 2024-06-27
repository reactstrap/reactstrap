import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

function Popover({
  placement = 'right',
  placementPrefix = 'bs-popover',
  trigger = 'click',
  offset = [0, 8],
  ...rest
}) {
  const arrowClasses = classNames('popover-arrow', rest.arrowClassName);
  const popperClasses = classNames('popover', 'show', rest.popperClassName);
  const classes = classNames('popover-inner', rest.innerClassName);

  return (
    <TooltipPopoverWrapper
      {...rest}
      placement={placement}
      placementPrefix={placementPrefix}
      trigger={trigger}
      offset={offset}
      arrowClassName={arrowClasses}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
}

Popover.propTypes = propTypes;

export default Popover;

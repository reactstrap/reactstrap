import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus',
};

function Tooltip(props) {
  const arrowClasses = classNames('tooltip-arrow', props.arrowClassName);
  const popperClasses = classNames('tooltip', 'show', props.popperClassName);
  const classes = classNames('tooltip-inner', props.innerClassName);

  return (
    <TooltipPopoverWrapper
      {...props}
      arrowClassName={arrowClasses}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;

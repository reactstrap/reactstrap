import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';
import { addDefaultProps } from './utils';

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

  const _props = addDefaultProps(defaultProps, props);

  return (
    <TooltipPopoverWrapper
      {..._props}
      arrowClassName={arrowClasses}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
}

Tooltip.propTypes = propTypes;

export default Tooltip;

import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';
import { addDefaultProps } from './utils';

const defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8],
};

function Popover(props) {
  const arrowClasses = classNames('popover-arrow', props.arrowClassName);
  const popperClasses = classNames('popover', 'show', props.popperClassName);
  const classes = classNames('popover-inner', props.innerClassName);

  return (
    <TooltipPopoverWrapper
      {...addDefaultProps(defaultProps, props)}
      arrowClassName={arrowClasses}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
}

Popover.propTypes = propTypes;

export default Popover;

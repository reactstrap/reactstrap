import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
};

const Popover = React.forwardRef((props, ref) => {
  const popperClasses = classNames(
    'popover',
    'show'
  );

  const classes = classNames(
    'popover-inner',
    props.innerClassName
  );


  return (
    <TooltipPopoverWrapper
      {...props}
      popperClassName={popperClasses}
      innerClassName={classes}
      ref={ref}
    />
  );
});

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;


export default Popover;

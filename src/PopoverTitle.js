import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'h3'
};

const PopoverTitle = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'popover-title'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverTitle.propTypes = propTypes;
PopoverTitle.defaultProps = defaultProps;

export default PopoverTitle;

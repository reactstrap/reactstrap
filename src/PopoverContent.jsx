import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'div'
};

const PopoverContent = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'popover-content'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverContent.propTypes = propTypes;
PopoverContent.defaultProps = defaultProps;

export default PopoverContent;

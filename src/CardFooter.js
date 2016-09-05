import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const CardFooter = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-footer'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;

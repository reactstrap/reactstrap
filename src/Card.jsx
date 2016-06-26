import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    className,
    color,
    block,
    inverse,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    block ? 'card-block' : false,
    color ? 'card-' + color : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

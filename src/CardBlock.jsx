import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const CardBlock = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-block'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardBlock.propTypes = propTypes;
CardBlock.defaultProps = defaultProps;

export default CardBlock;

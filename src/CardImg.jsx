import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'img'
};

const CardImg = (props) => {
  const {
    className,
    top,
    bottom,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-img',
    top ? 'card-img-top' : false,
    bottom ? 'card-img-bottom' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;

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

  let cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  const classes = classNames(
    className,
    cardImgClassName
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;

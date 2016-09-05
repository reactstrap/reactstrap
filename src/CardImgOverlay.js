import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const CardImgOverlay = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-img-overlay'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardImgOverlay.propTypes = propTypes;
CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;

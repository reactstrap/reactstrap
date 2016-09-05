import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'p'
};

const CardText = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-text'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

export default CardText;

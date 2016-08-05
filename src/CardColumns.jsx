import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const CardColumns = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-columns'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardColumns.PropTypes = propTypes;
CardColumns.defaultProps = defaultProps;

export default CardColumns;

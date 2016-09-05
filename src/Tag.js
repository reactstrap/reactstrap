import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.any
};

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

const Tag = (props) => {
  const {
    className,
    color,
    pill,
    tag: Component,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tag',
    'tag-' + color,
    pill ? 'tag-pill' : false
  );

  return (
    <Component {...attributes} className={classes} />
  );
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;

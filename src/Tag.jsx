import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'tag',
    'tag-' + color,
    pill ? 'tag-pill' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;

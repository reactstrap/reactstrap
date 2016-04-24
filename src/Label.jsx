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

const Label = (props) => {
  const {
    className,
    color,
    pill,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'label',
    'label-' + color,
    pill ? 'label-pill' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;

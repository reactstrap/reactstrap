import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    tag: Tag,
    size,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;

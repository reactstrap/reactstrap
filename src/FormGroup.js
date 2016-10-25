import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = (props) => {
  const {
    className,
    row,
    disabled,
    color,
    check,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    check ? 'form-check' : 'form-group',
    {
      row,
      disabled: check && disabled,
      [`has-${color}`]: color,
    }
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;

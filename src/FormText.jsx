import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'small',
};

const Form = (props) => {
  const {
    className,
    inline,
    color,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;

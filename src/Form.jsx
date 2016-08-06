import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className,
    inline,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    inline ? 'form-inline' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;

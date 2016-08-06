import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const FormFeedback = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'form-control-feedback'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

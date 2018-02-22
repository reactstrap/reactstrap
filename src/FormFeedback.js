import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool
};

const defaultProps = {
  tag: 'div',
  valid: undefined
};

const FormFeedback = (props) => {
  const {
    className,
    cssModule,
    valid,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    valid ? 'valid-feedback' : 'invalid-feedback'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

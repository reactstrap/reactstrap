import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className,
    cssModule,
    inline,
    tag: Tag,
    getRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    inline ? 'form-inline' : false
  ), cssModule);

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;

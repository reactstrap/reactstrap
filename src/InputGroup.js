import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;

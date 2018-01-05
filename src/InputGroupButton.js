import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Button from './Button';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  groupClassName: PropTypes.string,
  groupAttributes: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const InputGroupButton = (props) => {
  let {
    className,
    cssModule,
    tag: Tag,
    addonType,
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = mapToCssModules(classNames(
      groupClassName,
      'input-group-' + addonType
    ), cssModule);

    return (
      <Tag {...groupAttributes} className={groupClasses}>
        <Button {...attributes} className={className} children={children} />
      </Tag>
    );
  }

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} children={children} />
  );
};

InputGroupButton.propTypes = propTypes;
InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;

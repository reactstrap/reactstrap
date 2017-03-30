import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Button from './Button';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = mapToCssModules(classNames(
      groupClassName,
      'input-group-btn'
    ), cssModule);

    return (
      <Tag {...groupAttributes} className={groupClasses}>
        <Button {...attributes} className={className} children={children} />
      </Tag>
    );
  }

  const classes = mapToCssModules(classNames(
    className,
    'input-group-btn'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} children={children} />
  );
};

InputGroupButton.propTypes = propTypes;
InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;

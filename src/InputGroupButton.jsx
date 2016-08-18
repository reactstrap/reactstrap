import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  groupClassName: PropTypes.any,
  groupAttributes: PropTypes.object,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const InputGroupButton = (props) => {
  let {
    className,
    tag: Tag,
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = classNames(
      groupClassName,
      'input-group-btn'
    );

    return (
      <Tag {...groupAttributes} className={groupClasses}>
        <Button {...attributes} className={className} children={children} />
      </Tag>
    );
  }

  const classes = classNames(
    className,
    'input-group-btn'
  );

  return (
    <Tag {...attributes} className={classes} children={children} />
  );
};

InputGroupButton.propTypes = propTypes;
InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool
};

const defaultProps = {
  tag: 'li'
};

const ListGroupItem = (props) => {
  const {
    className,
    tag: Tag,
    active,
    disabled,
    action,
    success,
    warning,
    danger,
    info,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action ? 'list-group-item-action' : false,
    success ? 'list-group-item-success' : false,
    warning ? 'list-group-item-warning' : false,
    danger ? 'list-group-item-danger' : false,
    info ? 'list-group-item-info' : false,
    'list-group-item'
  );

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = (event) => {
      event.preventDefault();
    };
  }
  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;

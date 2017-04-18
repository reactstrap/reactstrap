import React from 'react';
import classNames from 'classnames';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any,
};

const defaultProps = {
  tag: 'li'
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

const ListGroupItem = (props) => {
  const {
    className,
    tag: Tag,
    active,
    disabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action ? 'list-group-item-action' : false,
    color ? `list-group-item-${color}` : false,
    'list-group-item'
  );

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add action prop to give effects while hovering over element */
  action: PropTypes.bool,
  /** Add active prop to make the current selection active */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add background colour to the list item */
  color: PropTypes.string,
  /** Make the list item appear disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

function ListGroupItem(props) {
  const {
    className,
    cssModule,
    tag: Tag,
    active,
    disabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(
      className,
      active ? 'active' : false,
      disabled ? 'disabled' : false,
      action ? 'list-group-item-action' : false,
      color ? `list-group-item-${color}` : false,
      'list-group-item',
    ),
    cssModule,
  );

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return <Tag {...attributes} className={classes} />;
}

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;

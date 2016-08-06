import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.any
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired
};

const DropdownMenu = (props, context) => {
  const { className, right, ...attributes } = props;
  const classes = classNames(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  );

  return (
    <div {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

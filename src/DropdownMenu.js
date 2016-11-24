import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  ), cssModule);

  return (
    <div {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

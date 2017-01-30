import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  ), cssModule);

  return (
    <Tag {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

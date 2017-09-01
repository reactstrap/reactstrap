import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag, ...attrs } = props;
  const position1 = context.dropup ? 'top' : 'bottom';
  const position2 = right ? 'end' : 'start';
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      show: context.isOpen,
    }
  ), cssModule);

  attrs.placement = `${position1}-${position2}`;

  return (
    <Popper {...attrs} component={tag} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

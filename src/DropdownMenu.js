import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
  flip: true,
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

const noFlipModifier = { flip: { enabled: false } };

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom',
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag, flip, modifiers, ...attrs } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      show: context.isOpen,
    }
  ), cssModule);

  let Tag = tag;

  if (context.isOpen && !context.inNavbar) {
    Tag = Popper;

    const position1 = directionPositionMap[context.direction] || 'bottom';
    const position2 = right ? 'end' : 'start';
    attrs.placement = `${position1}-${position2}`;
    attrs.component = tag;
    attrs.modifiers = !flip ? {
      ...modifiers,
      ...noFlipModifier,
    } : modifiers;
  }

  return (
    <Tag
      tabIndex="-1"
      role="menu"
      {...attrs}
      aria-hidden={!context.isOpen}
      className={classes}
      x-placement={attrs.placement}
    />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool,
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
  const { className, cssModule, right, tag, flip, modifiers, persist, ...attrs } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      show: context.isOpen,
    }
  ), cssModule);

  let Tag = tag;

  if (persist || (context.isOpen && !context.inNavbar)) {
    const position1 = directionPositionMap[context.direction] || 'bottom';
    const position2 = right ? 'end' : 'start';
    const placement = `${position1}-${position2}`;

    attrs.component = tag;
    
    const popperModifiers = !flip ? {
      ...modifiers,
      ...noFlipModifier,
    } : modifiers;

    return (
      <Popper modifiers={popperModifiers} placement={placement}>
        {({ ref, style, placement }) => (
          <Tag
            tabIndex="-1"
            ref={ref}
            role="menu"
            {...attrs}
            style={{ ...attrs.style, ...style }}
            aria-hidden={!context.isOpen}
            className={classes}
            x-placement={placement}
          />
        )}
      </Popper>
    )
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

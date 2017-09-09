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
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
  flip: true,
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
};

const noFlipModifier = { flip: { enabled: false } };

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag, flip, ...attrs } = props;
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
    <Popper
      tabIndex="-1"
      role="menu"
      {...attrs}
      component={tag}
      aria-hidden={!context.isOpen}
      className={classes}
      modifiers={!flip ? noFlipModifier : undefined}
    />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

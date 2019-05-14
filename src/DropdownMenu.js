import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import { mapToCssModules, tagPropType, targetPropType, getTarget } from './utils';

const propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool,
  container: targetPropType,
};

const defaultProps = {
  tag: 'div',
  flip: true,
  container: 'inline',
};

const noFlipModifier = { flip: { enabled: false } };

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom',
};

class DropdownMenu extends React.Component { 

  render() {
    const { className, cssModule, right, tag, flip, modifiers, persist, container, ...attrs } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'dropdown-menu',
      {
        'dropdown-menu-right': right,
        show: this.context.isOpen,
      }
    ), cssModule);

    const Tag = tag;

    if (persist || (this.context.isOpen && !this.context.inNavbar)) {

      const position1 = directionPositionMap[this.context.direction] || 'bottom';
      const position2 = right ? 'end' : 'start';
      const poperPlacement = `${position1}-${position2}`;
      const poperModifiers = !flip ? {
        ...modifiers,
        ...noFlipModifier,
      } : modifiers;

      const useContainer = container !== 'inline' && this.context.dropdownElement;
      const referenceElement = useContainer ? this.context.dropdownElement : undefined;

      const popper = (
        <Popper
          placement={poperPlacement}
          modifiers={poperModifiers}
          referenceElement={referenceElement}
        >
          {({ ref, style, placement }) => (
            <Tag
              tabIndex="-1"
              role="menu"
              ref={ref}
              style={style}
              {...attrs}
              aria-hidden={!this.context.isOpen}
              className={classes}
              x-placement={placement}
            />
          )}
        </Popper>
      );

      if (useContainer) {
        return ReactDOM.createPortal(popper, getTarget(container));
      } else {
        return popper;
      }
    }

    return (
      <Tag
        tabIndex="-1"
        role="menu"
        {...attrs}
        aria-hidden={!this.context.isOpen}
        className={classes}
        x-placement={attrs.placement}
      />
    );
  }
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextType = DropdownContext;

export default DropdownMenu;

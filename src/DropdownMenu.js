import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import {
  mapToCssModules,
  tagPropType,
  targetPropType,
  getTarget,
  deprecated,
} from './utils';

const propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  end: PropTypes.bool,
  /** Flips the menu to the opposite side if there is not enough space to fit */
  flip: PropTypes.bool,
  modifiers: PropTypes.array,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  style: PropTypes.object,
  persist: PropTypes.bool,
  strategy: PropTypes.string,
  container: targetPropType,
  /** Update popper layout when a click event comes up. This leverages event bubbling. */
  updateOnSelect: PropTypes.bool,
  right: deprecated(PropTypes.bool, 'Please use "end" instead.'),
};

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom',
};

class DropdownMenu extends React.Component {
  getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }
    return 'menu';
  }

  render() {
    const {
      className,
      cssModule,
      dark,
      end,
      right,
      tag = 'div',
      flip = true,
      modifiers = [],
      persist,
      strategy,
      container,
      updateOnSelect,
      ...attrs
    } = this.props;

    const classes = mapToCssModules(
      classNames(className, 'dropdown-menu', {
        'dropdown-menu-dark': dark,
        'dropdown-menu-end': end || right,
        show: this.context.isOpen,
      }),
      cssModule,
    );

    const Tag = tag;

    if (persist || (this.context.isOpen && !this.context.inNavbar)) {
      const position1 =
        directionPositionMap[this.context.direction] || 'bottom';
      const position2 = end || right ? 'end' : 'start';
      const poperPlacement = `${position1}-${position2}`;
      const poperModifiers = [
        ...modifiers,
        {
          name: 'flip',
          enabled: !!flip,
        },
      ];

      const popper = (
        <Popper
          placement={poperPlacement}
          modifiers={poperModifiers}
          strategy={strategy}
        >
          {({ ref, style, placement, update }) => {
            let combinedStyle = { ...this.props.style, ...style };

            const handleRef = (tagRef) => {
              // Send the ref to `react-popper`
              ref(tagRef);
              // Send the ref to the parent Dropdown so that clicks outside
              // it will cause it to close
              const { onMenuRef } = this.context;
              if (onMenuRef) onMenuRef(tagRef);
            };

            return (
              <Tag
                tabIndex="-1"
                role={this.getRole()}
                ref={handleRef}
                {...attrs}
                style={combinedStyle}
                aria-hidden={!this.context.isOpen}
                className={classes}
                data-popper-placement={placement}
                onClick={() => updateOnSelect && update()}
              />
            );
          }}
        </Popper>
      );

      if (container) {
        return ReactDOM.createPortal(popper, getTarget(container));
      }
      return popper;
    }
    const { onMenuRef } = this.context;

    return (
      <Tag
        tabIndex="-1"
        role={this.getRole()}
        {...attrs}
        ref={onMenuRef}
        aria-hidden={!this.context.isOpen}
        className={classes}
        data-popper-placement={attrs.placement}
      />
    );
  }
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.contextType = DropdownContext;

export default DropdownMenu;

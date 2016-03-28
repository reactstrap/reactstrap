import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  right: PropTypes.bool,
  toggle: PropTypes.func
};

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  // onClick(e) {
  //   if (this.props.onClick) {
  //     this.props.onClick(e);
  //   }
  // }

  renderChildren() {
    return React.Children.map(React.Children.toArray(this.props.children), (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child,
          {
            isOpen: this.props.isOpen,
            toggle: this.props.toggle
          }
        );
      }
      return child;
    });
  }

  render() {
    const { className, right, ...props } = omit(this.props, 'children');
    const classes = classNames(
      className,
      'dropdown-menu',
      { 'dropdown-menu-right': right }
    );

    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div {...props} tabIndex="-1" aria-hidden="false" role="menu" className={classes}>
        {this.renderChildren()}
      </div>
    );
  }
}

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;

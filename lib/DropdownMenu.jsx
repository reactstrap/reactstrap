import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node.isRequired,
  closeDropdown: PropTypes.func,
  handleContainerClick: PropTypes.func,
  isDropdownOpen: PropTypes.bool,
  onClick: PropTypes.func,
  openDropdown: PropTypes.func,
  right: PropTypes.bool,
  toggleDropdown: PropTypes.func
};

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.handleContainerClick) {
      this.props.handleContainerClick(e);
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  renderChildren() {
    return React.Children.map(React.Children.toArray(this.props.children), (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child,
          {
            closeDropdown: this.props.closeDropdown,
            handleContainerClick: this.props.handleContainerClick,
            isDropdownOpen: this.props.isDropdownOpen,
            openDropdown: this.props.openDropdown,
            toggleDropdown: this.props.toggleDropdown
          }
        );
      }
      return child;
    });
  }

  render() {
    const { className, right, ...props } = omit(this.props, 'onClick', 'children');
    const classes = classNames(
      className,
      'dropdown-menu',
      { 'dropdown-menu-right': right }
    );

    return (
      <div {...props} className={classes} onClick={this.onClick}>
        {this.renderChildren()}
      </div>
    );
  }
}

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;

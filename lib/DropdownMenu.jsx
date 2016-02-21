import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node.isRequired,
  handleContainerClick: PropTypes.func,
  isDropdownOpen: PropTypes.bool,
  onClick: PropTypes.func,
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

  render() {
    const { className, children, right, ...props } = omit(this.props, 'onClick');
    const classes = classNames(
      className,
      'dropdown-menu',
      { 'dropdown-menu-right': right }
    );

    return (
      <div {...props} className={classes} onClick={this.onClick}>
        {children}
      </div>
    );
  }
}

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;

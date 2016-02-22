import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node,
  closeDropdown: PropTypes.func,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  El: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  handleContainerClick: PropTypes.func,
  header: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.onClose();
  }

  onClose(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }

    if(this.props.closeDropdown) {
      this.props.closeDropdown();  
    }
  }

  render() {
    let Tagname = 'button';
    const {
      className,
      children,
      divider,
      El,
      header,
      ...props } = this.props;

    const classes = classNames(
      className,
      {
        'disabled': props.disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }
    );

    if (El) {
      return (
        <El {...props}
          className={classes}
          onClose={this.onClose}
          onClick={this.onClick}>
          {children}
        </El>
      );
    }

    if (header) {
      Tagname = 'h6';
    } else if (divider) {
      Tagname = 'div';
    }

    return (
      <Tagname {...props}
        className={classes}
        onClose={this.onClose}
        onClick={this.onClick}>
        {children}
      </Tagname>
    );
  }
}

DropdownItem.propTypes = propTypes;

export default DropdownItem;

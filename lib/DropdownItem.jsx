import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  El: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.props.toggle();
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  }

  render() {
    let Tagname = 'button';
    const tabIndex = this.getTabIndex();
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
          tabIndex={tabIndex}
          className={classes}
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
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}>
        {children}
      </Tagname>
    );
  }
}

DropdownItem.propTypes = propTypes;

export default DropdownItem;

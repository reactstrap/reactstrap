import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  handleContainerClick: PropTypes.func,
  isDropdownOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggleDropdown: PropTypes.func
};

const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      return e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggleDropdown) {
      this.props.toggleDropdown(e);
    }
  }

  render() {
    const { className, children, caret, color, ...props } = this.props;
    const classes = classNames(
      className,
      { 'dropdown-toggle': caret }
    );
    const buttonClasses = classNames(
      classes,
      'btn',
      'btn-' + color
    );

    if (React.isValidElement(children)) {
      return React.cloneElement(React.Children.only(children), {
        ...props,
        className: classes,
        onClick: this.onClick,
        'aria-expanded': props.isDropdownOpen
      });
    }

    return (
      <button {...props}
        className={buttonClasses}
        onClick={this.onClick}
        aria-expanded={props.isDropdownOpen}>
        {children}
      </button>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;

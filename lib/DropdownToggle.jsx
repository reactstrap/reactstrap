import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggle: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
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

    if (this.props.toggle) {
      this.props.toggle(e);
    }
  }

  render() {
    const { className, children, caret, color, ...props } = this.props;
    const classes = classNames(
      className,
      {
        'dropdown-toggle': caret,
        'active': props.isOpen
      }
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
        'aria-haspopup': true,
        'aria-expanded': props.isOpen
      });
    }

    return (
      <button {...props}
        className={buttonClasses}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={props.isOpen}>
        {children}
      </button>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;

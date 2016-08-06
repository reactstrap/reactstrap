import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.any,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary',
  tag: 'button'
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  render() {
    const { className, children, caret, color, tag: Tag, ...props } = this.props;
    const classes = classNames(
      className,
      {
        'dropdown-toggle': caret,
        active: this.context.isOpen
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
        'aria-expanded': this.context.isOpen
      });
    }

    return (
      <Tag
        {...props}
        children={children}
        className={buttonClasses}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
      />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  El: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string
};

const defaultProps = {
  color: 'primary'
};

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
    } else {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      active,
      children,
      className,
      color,
      El,
      size,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'btn',
      'btn-' + color,
      size ? 'btn-' + size : false,
      { active }
    );

    if (El) {
      return (
        <El {...attributes}
          className={classes}
          onClick={this.onClick}>
          {children}
        </El>
      );
    }

    return (
      <button {...attributes}
        className={classes}
        onClick={this.onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

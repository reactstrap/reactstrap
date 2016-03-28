import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string
};

const defaultProps = {
  color: 'primary',
  tag: 'button'
};

class Button extends React.Component {
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
  }

  render() {
    let {
      active,
      block,
      className,
      color,
      size,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'btn',
      'btn-' + color,
      size ? 'btn-' + size : false,
      block ? 'btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag {...attributes} className={classes} onClick={this.onClick}/>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

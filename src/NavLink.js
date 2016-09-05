import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.any,
  onClick: PropTypes.func,
  href: PropTypes.any
};

const defaultProps = {
  tag: 'a'
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      active,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active: active
      }
    );

    return (
      <Tag {...attributes} onClick={this.onClick} className={classes} />
    );
  }
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;

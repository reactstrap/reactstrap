import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Button from './Button';

const propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool,
  ariaLabel: PropTypes.string
};

const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary',
  tag: null,
  ariaLabel: "Dropdown"
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.Tag = Button;
  }
  
  componentWillMount() {
    if (this.props.nav) {
      this.Tag = 'a';
    }
    if (this.props.tag) {
      this.Tag = this.props.tag;
    }
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }
  
  render() {
    const classes = mapToCssModules(classNames(
      this.props.className,
      {
        'dropdown-toggle': this.props.caret || this.props.split,
        'dropdown-toggle-split': this.props.split,
        active: this.context.isOpen,
        'nav-link': this.props.nav
      }
    ), this.props.cssModule);

    return (
      <this.Tag
        href={(this.props.nav) ? '#' : false}
        className={classes}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
        children={this.props.children || <span className="sr-only">{this.props.ariaLabel}</span>}
      />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;

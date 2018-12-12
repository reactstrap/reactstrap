import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool
};

const contextTypes = {
  toggle: PropTypes.func
};

const defaultProps = {
  tag: 'button',
  toggle: true
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  }

  render() {
    const tabIndex = this.getTabIndex();
    const role = tabIndex > -1 ? 'menuitem' : undefined;
    let {
      className,
      cssModule,
      divider,
      tag: Tag,
      header,
      active,
      ...props } = omit(this.props, ['toggle']);

    const classes = mapToCssModules(classNames(
      className,
      {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }
    ), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      }
    }

    return (
      <Tag
        type={(Tag === 'button' && (props.onClick || this.props.toggle)) ? 'button' : undefined}
        {...props}
        tabIndex={tabIndex}
        role={role}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

export default DropdownItem;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  collapsed: PropTypes.bool,
  children: PropTypes.node
};

const defaultProps = {
  tag: 'div',
  collapsed: true,
};

const NavbarCollapse = (props) => {
  const {
    className,
    collapsed,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'collapse',
    !collapsed && 'in'
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

NavbarCollapse.propTypes = propTypes;
NavbarCollapse.defaultProps = defaultProps;

export default NavbarCollapse;

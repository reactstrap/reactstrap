import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  type: 'button'
};

const navbarToggleIcon = <span className="navbar-toggler-icon" />;

const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    right,
    left,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-toggler',
    right && 'navbar-toggler-right',
    left && 'navbar-toggler-left'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children || navbarToggleIcon}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;

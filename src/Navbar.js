import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'nav',
  role: 'navigation'
};

const Navbar = (props) => {
  const {
    className,
    cssModule,
    light,
    dark,
    full,
    fixed,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    {
      'navbar-light': light,
      'navbar-dark': dark,
      [`bg-${color}`]: color,
      'navbar-full': full,
      [`navbar-fixed-${fixed}`]: fixed
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;

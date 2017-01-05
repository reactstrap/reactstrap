import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggleable: PropTypes.string,
};

const defaultProps = {
  tag: 'nav',
  role: 'navigation',
  toggleable: '',
};

const Navbar = (props) => {
  const {
    toggleable,
    className,
    cssModule,
    light,
    inverse,
    full,
    fixed,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    toggleable === '' ? 'navbar-toggleable' : `navbar-toggleable-${toggleable}`,
    {
      'navbar-light': light,
      'navbar-inverse': inverse,
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

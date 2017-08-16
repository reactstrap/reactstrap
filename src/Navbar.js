import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, deprecated } from './utils';

const propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
  tag: 'nav',
  toggleable: false,
  expandable: false,
};

const getToggleableClass = (toggleable) => {
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${toggleable}`;
};

const Navbar = (props) => {
  const {
    toggleable,
    expandable,
    className,
    cssModule,
    light,
    dark,
    inverse,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    getToggleableClass(toggleable || expandable),
    {
      'navbar-light': light,
      'navbar-dark': inverse || dark,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;

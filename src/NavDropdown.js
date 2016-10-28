import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li'
};

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'nav-item'
  ), cssModule);

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;

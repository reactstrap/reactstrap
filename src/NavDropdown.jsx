import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'li'
};

const NavDropdown = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'nav-item'
  );

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;

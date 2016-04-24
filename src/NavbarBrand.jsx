import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'a'
};

const NavbarBrand = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'navbar-brand'
  );

  return (
    <Tag {...attributes} className={classes}/>
  );
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;

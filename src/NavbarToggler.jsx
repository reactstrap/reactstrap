import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

const defaultProps = {
  tag: 'button',
  type: 'button'
};

const NavbarToggler = (props) => {
  const {
    className,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'navbar-toggler'
  );

  return (
    <Tag {...attributes} className={classes}>
      {children || String.fromCharCode(9776)}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;

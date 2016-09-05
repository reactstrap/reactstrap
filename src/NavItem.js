import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'li'
};

const NavItem = (props) => {
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
    <Tag {...attributes} className={classes} />
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;

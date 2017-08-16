import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
};

const defaultProps = {
  tag: 'button',
  type: 'button'
};

const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-toggler',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;

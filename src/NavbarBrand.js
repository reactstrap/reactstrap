import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

function NavbarBrand(props) {
  const { className, cssModule, tag: Tag = 'a', ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'navbar-brand'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

NavbarBrand.propTypes = propTypes;

export default NavbarBrand;

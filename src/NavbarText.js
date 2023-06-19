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
  active: PropTypes.bool,
};

function NavbarText(props) {
  const {
    className,
    cssModule,
    active,
    tag: Tag = 'span',
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'navbar-text'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

NavbarText.propTypes = propTypes;

export default NavbarText;

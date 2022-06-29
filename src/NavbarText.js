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

const defaultProps = {
  tag: 'span'
};

const NavbarText = (props) => {
  const {
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

NavbarText.propTypes = propTypes;
NavbarText.defaultProps = defaultProps;

export default NavbarText;

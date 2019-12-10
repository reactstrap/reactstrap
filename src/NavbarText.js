import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
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

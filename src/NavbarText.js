import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  active: PropTypes.bool
};

const defaultProps = {
  tag: 'span'
};

function NavbarText(props) {
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
}

NavbarText.propTypes = propTypes;
NavbarText.defaultProps = defaultProps;

export default NavbarText;

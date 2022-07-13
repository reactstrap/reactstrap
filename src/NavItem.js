import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add active class to element */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

function NavItem(props) {
  const { className, cssModule, active, tag: Tag, ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'nav-item', active ? 'active' : false),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;

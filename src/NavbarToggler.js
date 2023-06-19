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
  type: PropTypes.string,
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
};

function NavbarToggler(props) {
  const {
    className,
    cssModule,
    children,
    tag: Tag = 'button',
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'navbar-toggler'),
    cssModule,
  );

  return (
    <Tag
      aria-label="Toggle navigation"
      {...{ type: 'button', ...attributes }}
      className={classes}
    >
      {children || (
        <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />
      )}
    </Tag>
  );
}

NavbarToggler.propTypes = propTypes;

export default NavbarToggler;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Theme the navbar by adding a background color  */
  color: PropTypes.string,
  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** This prop is passed if the background is dark, to make the text lighter */
  dark: PropTypes.bool,
  /** Determine if to show toggler button */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Make the navbar fixed at the top */
  fixed: PropTypes.string,
  full: PropTypes.bool,
  /** Add `.navbar-light` class */
  light: PropTypes.bool,
  role: PropTypes.string,
  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'nav',
  expand: false,
  container: 'fluid',
};

const getExpandClass = (expand) => {
  if (expand === false) {
    return false;
  }
  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${expand}`;
};

function Navbar(props) {
  const {
    expand,
    className,
    cssModule,
    light,
    dark,
    fixed,
    sticky,
    color,
    container,
    tag: Tag,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'navbar', getExpandClass(expand), {
      'navbar-light': light,
      'navbar-dark': dark,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }),
    cssModule,
  );

  const containerClass =
    container && container === true ? 'container' : `container-${container}`;

  return (
    <Tag {...attributes} className={classes}>
      {container ? <div className={containerClass}>{children}</div> : children}
    </Tag>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;

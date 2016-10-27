import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul'
};

const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    inline,
    stacked,
    navbar,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'nav',
    {
      'navbar-nav': navbar,
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-inline': inline,
      'nav-stacked': stacked,
      disabled: attributes.disabled
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  navbar: PropTypes.bool,
  card: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical) => {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return `flex-${vertical}-column`;
};

const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    vertical,
    horizontal,
    justified,
    fill,
    navbar,
    card,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    navbar ? 'navbar-nav' : 'nav',
    horizontal ? `justify-content-${horizontal}` : false,
    getVerticalClass(vertical),
    {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

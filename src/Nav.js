import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** fills the nav to extend to full available width */
  fill: PropTypes.bool,
  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes.oneOf(['center', 'end']),
  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes.bool,
  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes.bool,
  /** Make NavItems look like pills */
  pills: PropTypes.bool,
  /** Make NavItems look like tabs */
  tabs: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical) => {
  if (vertical === false) {
    return false;
  } if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return `flex-${vertical}-column`;
};

function Nav(props) {
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
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

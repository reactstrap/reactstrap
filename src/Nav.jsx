import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'ul'
};

const Nav = (props) => {
  const {
    className,
    tabs,
    pills,
    inline,
    stacked,
    navbar,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
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
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

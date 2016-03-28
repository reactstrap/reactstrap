import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'nav',
  role: 'navigation'
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      light,
      dark,
      full,
      fixed,
      color,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'navbar',
      {
        'navbar-light': light,
        'navbar-dark': dark,
        [`bg-${color}`]: color,
        'navbar-full': full,
        [`navbar-fixed-${fixed}`]: fixed
      }
    );

    return (
      <Tag {...attributes} className={classes}/>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'a'
};

class NavbarBrand extends React.Component {
  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'navbar-brand'
    );

    return (
      <Tag {...attributes} className={classes}/>
    );
  }
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;

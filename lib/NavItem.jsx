import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'li'
};

class NavItem extends React.Component {
  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'nav-item'
    );

    return (
      <Tag {...attributes} className={classes}/>
    );
  }
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'ul'
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      tabs,
      pills,
      inline,
      stacked,
      navbar,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'nav',
      {
        'navbar-nav': navbar,
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-inline': inline,
        'nav-stacked': stacked,
        'disabled': attributes.disabled
      }
    );

    return (
      <Tag {...attributes} className={classes}/>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  El: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool
};

class DropdownItem extends React.Component {
  render() {
    let Tagname = 'button';
    const {
      className,
      children,
      divider,
      El,
      header,
      ...props } = this.props;

    const classes = classNames(
      className,
      {
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }
    );

    if (El) {
      return (
        <El {...props}
          className={classes}
          onClick={this.onClick}>
          {children}
        </El>
      );
    }

    if (header) {
      Tagname = 'h6';
    } else if (divider) {
      Tagname = 'div';
    }

    return (
      <Tagname {...props} className={classes}>
        {children}
      </Tagname>
    );
  }
}

DropdownItem.propTypes = propTypes;

export default DropdownItem;

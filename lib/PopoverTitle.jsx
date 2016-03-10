import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {};

const defaultProps = {};

class PopoverTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'popover-title'
    );

    return (
      <h3 {...attributes}
        className={classes}>
        {children}
      </h3>
    );
  }
}

PopoverTitle.propTypes = propTypes;
PopoverTitle.defaultProps = defaultProps;

export default PopoverTitle;

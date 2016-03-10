import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {};

const defaultProps = {};

class PopoverContent extends React.Component {
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
      'popover-content'
    );

    return (
      <div {...attributes}
        className={classes}>
        {children}
      </div>
    );
  }
}

PopoverContent.propTypes = propTypes;
PopoverContent.defaultProps = defaultProps;

export default PopoverContent;

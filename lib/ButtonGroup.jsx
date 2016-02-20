import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

const defaultProps = {
  role: 'group'
};

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      size,
      vertical,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'btn-group',
      size ? 'btn-' + size : false,
      vertical ? 'btn-group-vertical' : false
    );

    return (
      <div {...attributes}
        className={classes}>
        {children}
      </div>
    );
  }
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;

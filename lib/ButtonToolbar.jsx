import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string
};

const defaultProps = {
  role: 'toolbar'
};

class ButtonToolbar extends React.Component {
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
      'btn-toolbar'
    );

    return (
      <div {...attributes}
        className={classes}>
        {children}
      </div>
    );
  }
}

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const alertTypes = ['success', 'info', 'warning', 'danger'];

const propTypes = {
  color: React.PropTypes.oneOf(alertTypes),
  dismiss: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  isOpen: true
};

class Alert extends React.Component {
  constructor(props) {
    super(props);

    //this.onClick = this.onClick.bind(this);
  }

  onClick(e) {

  }

  toggle(e) {

  }

  dismiss(e) {

  }

  render() {
    let {
      className,
      color,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'alert',
      `alert-${color}`,
    );

    return (
      <div {...attributes} className={classes} role="alert">
        {children}
      </div>
    );
  }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

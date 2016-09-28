import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
  className: PropTypes.any,
  color: PropTypes.string,
  onDismiss: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  color: 'warning',
  tag: 'div'
};

export const Alert = (props) => {
  const {
    className,
    tag: Tag,
    color,
    onDismiss,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': onDismiss }
  );

  return (
    <Tag {...attributes} className={classes} role="alert">
      { onDismiss ?
        <button type="button" className="close" aria-label="Close" onClick={onDismiss}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      {props.children}
    </Tag>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

const wrapperPropTypes = {
  dismissible: PropTypes.bool
}

const wrapperDefaultPropTypes = {
  dismissible: false
}

class AlertWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    }
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  render() {
    const { dismissible, ...props } = this.props
        , alert = <Alert {...props}
                    key="alert"
                    onDismiss={dismissible ? this.onDismiss : undefined} />

    if (dismissible) {
      return (
        <ReactCSSTransitionGroup
          transitionName={{
            leave: 'fade',
            leaveActive: 'out'
          }}
          transitionEnter={false}
          transitionLeaveTimeout={300}>
          {this.state.visible ? alert : null}
        </ReactCSSTransitionGroup>
      )
    } else {
      return alert;
    }
  }
}

AlertWrapper.propTypes = wrapperPropTypes;
AlertWrapper.defaultProps = wrapperDefaultPropTypes;

export default AlertWrapper;

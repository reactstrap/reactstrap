import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);

const propTypes = {
  className: PropTypes.any,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transitionAppearTimeout: PropTypes.number,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150
};

const Alert = (props) => {
  const {
    className,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transitionAppearTimeout,
    transitionEnterTimeout,
    transitionLeaveTimeout,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle }
  );

  const alert = (
    <Tag {...attributes} className={classes} role="alert">
      { toggle ?
        <button type="button" className="close" aria-label="Close" onClick={toggle}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      { children }
    </Tag>
  );

  return (
    <ReactCSSTransitionGroup
      component={FirstChild}
      transitionName={{
        appear: 'fade',
        appearActive: 'in',
        enter: 'fade',
        enterActive: 'in',
        leave: 'fade',
        leaveActive: 'out'
      }}
      transitionAppear={transitionAppearTimeout > 0}
      transitionAppearTimeout={transitionAppearTimeout}
      transitionEnter={transitionEnterTimeout > 0}
      transitionEnterTimeout={transitionEnterTimeout}
      transitionLeave={transitionLeaveTimeout > 0}
      transitionLeaveTimeout={transitionLeaveTimeout}
      >
      {isOpen ? alert : null}
    </ReactCSSTransitionGroup>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

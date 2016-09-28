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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div'
};

const Alert = (props) => {
  const {
    className,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
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
        leave: 'fade',
        leaveActive: 'out'
      }}
      transitionEnter={false}
      transitionLeaveTimeout={300}>
      {isOpen ? alert : null}
    </ReactCSSTransitionGroup>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

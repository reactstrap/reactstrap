import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { mapToCssModules } from './utils';

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transitionAppearTimeout: PropTypes.number,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number,
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
    cssModule,
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

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle }
  ), cssModule);

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
    <CSSTransitionGroup
      component={FirstChild}
      transitionName={{
        appear: 'fade',
        appearActive: 'show',
        enter: 'fade',
        enterActive: 'show',
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
    </CSSTransitionGroup>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

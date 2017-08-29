import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { mapToCssModules } from './utils';

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transitionAppear: PropTypes.bool,
  transitionEnterTimeout: PropTypes.number,
  transitionExitTimeout: PropTypes.number,
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppear: true,
  transitionEnterTimeout: 150,
  transitionExitTimeout: 150,
  closeAriaLabel: 'Close'
};

const Alert = (props) => {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transitionAppear,
    transitionEnterTimeout,
    transitionExitTimeout,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle }
  ), cssModule);

  const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);

  const alert = (
    <CSSTransition
      classNames={{
        appear: 'fade',
        appearActive: 'show',
        enter: 'fade',
        enterActive: 'show',
        exit: 'fade',
        exitActive: 'out'
      }}
      appear={transitionAppear}
      enter={transitionEnterTimeout > 0}
      exit={transitionExitTimeout > 0}
      timeout={{
        enter: transitionEnterTimeout,
        exit: transitionExitTimeout,
      }}
    >
      <Tag {...attributes} className={classes} role="alert">
        {toggle ?
          <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button>
          : null}
        {children}
      </Tag>
    </CSSTransition>
  );

  return (
    <TransitionGroup component={FirstChild}>
      {isOpen ? alert : null}
    </TransitionGroup>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;

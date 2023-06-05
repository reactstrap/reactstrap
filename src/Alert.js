import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Fade from './Fade';

const propTypes = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Add custom class for close button */
  closeClassName: PropTypes.string,
  /** Aria label for close button */
  closeAriaLabel: PropTypes.string,
  /** Change color of alert */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Toggle fade animation */
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** Control visibility state of Alert */
  isOpen: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function to toggle visibility */
  toggle: PropTypes.func,
  /** Props to be passed to `Fade` to modify transition */
  transition: PropTypes.shape(Fade.propTypes),
};

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel = 'Close',
    cssModule,
    tag: Tag = 'div',
    color = 'success',
    isOpen = true,
    toggle,
    children,
    transition = {
      ...Fade.defaultProps,
      unmountOnExit: true,
    },
    fade = true,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'alert', `alert-${color}`, {
      'alert-dismissible': toggle,
    }),
    cssModule,
  );

  const closeClasses = mapToCssModules(
    classNames('btn-close', closeClassName),
    cssModule,
  );

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <Fade
      {...attributes}
      {...alertTransition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
      innerRef={innerRef}
    >
      {toggle ? (
        <button
          type="button"
          className={closeClasses}
          aria-label={closeAriaLabel}
          onClick={toggle}
        />
      ) : null}
      {children}
    </Fade>
  );
}

Alert.propTypes = propTypes;

export default Alert;

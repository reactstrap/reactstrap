import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Fade from './Fade';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

function Toast(props) {
  const {
    className,
    cssModule,
    tag: Tag = 'div',
    isOpen = true,
    children,
    transition = {
      ...Fade.defaultProps,
      unmountOnExit: true,
    },
    fade = true,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(className, 'toast'), cssModule);

  const toastTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <Fade
      {...attributes}
      {...toastTransition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
      innerRef={innerRef}
    >
      {children}
    </Fade>
  );
}

Toast.propTypes = propTypes;

export default Toast;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
  mapToCssModules,
  omit,
  pick,
  TransitionPropTypeKeys,
  TransitionTimeouts,
  tagPropType,
} from './utils';

const propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tag: tagPropType,
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  ...Transition.defaultProps,
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

function Fade(props) {
  const ref = useRef(null);

  const {
    tag: Tag = 'div',
    baseClass = 'fade',
    baseClassActive = 'show',
    className,
    cssModule,
    children,
    innerRef = ref,
    ...otherProps
  } = props;

  const transitionProps = pick(
    { defaultProps, ...otherProps },
    TransitionPropTypeKeys,
  );
  const childProps = omit(otherProps, TransitionPropTypeKeys);

  return (
    <Transition nodeRef={innerRef} {...transitionProps}>
      {(status) => {
        const isActive = status === 'entered';
        const classes = mapToCssModules(
          classNames(className, baseClass, isActive && baseClassActive),
          cssModule,
        );
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;

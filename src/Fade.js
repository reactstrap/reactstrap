import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition, { ENTERING, ENTERED } from 'react-transition-group/Transition';
import { mapToCssModules, omit, TransitionTimeouts } from './utils';

const propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

function Fade(props) {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    cssModule,
    children,
    ...transitionProps
  } = props;
  const otherProps = omit(transitionProps, Object.keys(propTypes));

  return (
    <Transition {...transitionProps}>
      {(status) => {
        const isActive = status === ENTERING || status === ENTERED;
        const classes = mapToCssModules(classNames(
          className,
          baseClass,
          isActive ? baseClassActive : false
        ), cssModule);
        return (
          <Tag className={classes} {...otherProps}>
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

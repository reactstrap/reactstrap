import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TooltipPopoverWrapper from './TooltipPopoverWrapper';
import { DOMElement, mapToCssModules, PopperPlacements } from './utils';

const propTypes = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]).isRequired,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]),
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),
  trigger: PropTypes.string,
};

const defaultProps = {
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  autohide: false,
};

const Tooltip = (props) => {
  const popperClasses = mapToCssModules(classNames(
    'tooltip',
    'show',
    props.className
  ), props.cssModule);

  const classes = mapToCssModules(classNames(
    'tooltip-inner',
    props.innerClassName
  ), props.cssModule);


  return (
    <TooltipPopoverWrapper
      {...props}
      componentType="tooltip"
      popperClasses={popperClasses}
      classes={classes}
    />
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;


export default Tooltip;

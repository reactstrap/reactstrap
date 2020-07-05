import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType, toNumber } from './utils';

const propTypes = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: tagPropType,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  min: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object,
  style: PropTypes.object,
  barAriaValueText: PropTypes.string,
  barAriaLabelledBy: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  style: {},
};

const Progress = (props) => {
  const {
    children,
    className,
    barClassName,
    cssModule,
    value,
    min,
    max,
    animated,
    striped,
    color,
    bar,
    multi,
    tag: Tag,
    style,
    barAriaValueText,
    barAriaLabelledBy,
    ...attributes
  } = props;

  const percent = ((toNumber(value) / toNumber(max)) * 100);

  const progressClasses = mapToCssModules(classNames(
    className,
    'progress'
  ), cssModule);

  const progressBarClasses = mapToCssModules(classNames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  ), cssModule);

  const ProgressBar = multi ? children : (
    <div
      {...attributes}
      className={progressBarClasses}
      style={{
        ...style,
        width: `${percent}%`,
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuetext={barAriaValueText}
      aria-labelledby={barAriaLabelledBy}
      children={children}
    />
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attributes} className={progressClasses} children={ProgressBar} />
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;

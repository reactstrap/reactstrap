import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType, toNumber } from './utils';

const propTypes = {
  /** Enable animation to bar */
  animated: PropTypes.bool,
  bar: PropTypes.bool,
  barAriaLabelledBy: PropTypes.string,
  barAriaValueText: PropTypes.string,
  barClassName: PropTypes.string,
  barStyle: PropTypes.object,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom color to the placeholder */
  color: PropTypes.string,
  /** Maximum value of progress */
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Minimum value of progress, defaults to zero */
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multi: PropTypes.bool,
  /** Add stripes to progress bar */
  striped: PropTypes.bool,
  style: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Current value of progress */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function Progress(props) {
  const {
    children,
    className,
    barClassName,
    cssModule,
    value = 0,
    min = 0,
    max = 100,
    animated,
    striped,
    color,
    bar,
    multi,
    tag: Tag = 'div',
    style = {},
    barStyle = {},
    barAriaValueText,
    barAriaLabelledBy,
    ...attributes
  } = props;

  const percent = (toNumber(value) / toNumber(max)) * 100;

  const progressClasses = mapToCssModules(
    classNames(className, 'progress'),
    cssModule,
  );

  const progressBarClasses = mapToCssModules(
    classNames(
      'progress-bar',
      bar ? className || barClassName : barClassName,
      animated ? 'progress-bar-animated' : null,
      color ? `bg-${color}` : null,
      striped || animated ? 'progress-bar-striped' : null,
    ),
    cssModule,
  );

  const progressBarProps = {
    className: progressBarClasses,
    style: {
      ...(bar ? style : {}),
      ...barStyle,
      width: `${percent}%`,
    },
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': barAriaValueText,
    'aria-labelledby': barAriaLabelledBy,
    children: children,
  };

  if (bar) {
    return <Tag {...attributes} {...progressBarProps} />;
  }

  return (
    <Tag {...attributes} style={style} className={progressClasses}>
      {multi ? children : <div {...progressBarProps} />}
    </Tag>
  );
}

Progress.propTypes = propTypes;

export default Progress;

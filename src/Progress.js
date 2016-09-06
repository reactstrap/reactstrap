import React, { PropTypes } from 'react';
import classNames from 'classnames';
import toNumber from 'lodash.tonumber';

const propTypes = {
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
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
  className: PropTypes.any
};

const defaultProps = {
  tag: 'progress',
  value: 0,
  max: 100,
};

const Progress = (props) => {
  const {
    className,
    value,
    max,
    animated,
    striped,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const percent = ((toNumber(value) / toNumber(max)) * 100);

  const nonProgressClasses = classNames(
    className,
    'progress',
    animated ? 'progress-animated' : null
  );

  const progressClasses = classNames(
    nonProgressClasses,
    color ? `progress-${color}` : null,
    striped || animated ? 'progress-striped' : null
  );

  const fallbackClasses = classNames(
    'progress-bar',
    color ? `progress-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  );

  const fallbackFill = (
    <span
      className={fallbackClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    />
  );

  if (Tag === 'progress') {
    return (
      <Tag {...attributes} className={progressClasses} value={value} max={max}>
        <div className={nonProgressClasses} children={fallbackFill} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={nonProgressClasses} children={fallbackFill} />
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;

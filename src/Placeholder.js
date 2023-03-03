import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Col, { getColumnClasses } from './Col';

const propTypes = {
  ...Col.propTypes,
  /** Add custom color to the placeholder */
  color: PropTypes.string,
  /** Add custom tag. */
  tag: tagPropType,
  /** Apply either `glow` or `wave` animation. */
  animation: PropTypes.oneOf(['glow', 'wave']),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  /** Make the size larger */
  size: PropTypes.oneOf(['lg', 'sm', 'xs']),
};

const defaultProps = {
  tag: 'span',
};

function Placeholder(props) {
  let {
    className,
    cssModule,
    color,
    innerRef,
    tag: Tag,
    animation,
    size,
    widths,
    ...attributes
  } = props;

  let { modifiedAttributes, colClasses } = getColumnClasses(
    attributes,
    cssModule,
    widths,
  );

  const classes = mapToCssModules(
    classNames(
      className,
      colClasses,
      'placeholder' + (animation ? '-' + animation : ''),
      size ? 'placeholder-' + size : false,
      color ? 'bg-' + color : false,
    ),
    cssModule,
  );

  return <Tag {...modifiedAttributes} className={classes} ref={innerRef} />;
}

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;

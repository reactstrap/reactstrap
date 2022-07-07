import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of Badge */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Add rounded corners to the Badge */
  pill: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

function Badge(props) {
  let {
    className,
    cssModule,
    color,
    innerRef,
    pill,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'bg-' + color,
    pill ? 'rounded-pill' : false
  ), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, deprecated } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: deprecated(PropTypes.bool, 'Please use the props "body"'),
  body: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    block,
    body,
    inverse,
    outline,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'text-white' : false,
    block || body ? 'card-body' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

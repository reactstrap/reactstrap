import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

const Tag = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    tag: Component,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'tag',
    'tag-' + color,
    pill ? 'tag-pill' : false
  ), cssModule);

  return (
    <Component {...attributes} className={classes} />
  );
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;

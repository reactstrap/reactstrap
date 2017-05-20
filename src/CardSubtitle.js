import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'h6'
};

const CardSubtitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-subtitle'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;

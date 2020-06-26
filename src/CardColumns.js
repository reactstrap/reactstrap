import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const CardColumns = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-columns'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardColumns.propTypes = propTypes;
CardColumns.defaultProps = defaultProps;

export default CardColumns;

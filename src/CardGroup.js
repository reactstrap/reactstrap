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
  tag: 'div',
};

function CardGroup(props) {
  const { className, cssModule, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-group'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

CardGroup.propTypes = propTypes;
CardGroup.defaultProps = defaultProps;

export default CardGroup;

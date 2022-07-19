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

function CardDeck(props) {
  const { className, cssModule, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-deck'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

CardDeck.propTypes = propTypes;
CardDeck.defaultProps = defaultProps;

export default CardDeck;

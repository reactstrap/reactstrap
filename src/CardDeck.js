import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  flex: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  flex: false
};

const CardDeck = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    flex,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-deck'
  ), cssModule);

  if (flex) {
    return (
      <Tag {...attributes} className={classes} />
    );
  }

  return (
    <div className="card-deck-wrapper">
      <Tag {...attributes} className={classes} />
    </div>
  );
};

CardDeck.propTypes = propTypes;
CardDeck.defaultProps = defaultProps;

export default CardDeck;

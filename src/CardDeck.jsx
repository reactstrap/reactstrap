import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  flex: PropTypes.bool
};

const defaultProps = {
  tag: 'div',
  flex: false
};

const CardDeck = (props) => {
  const {
    className,
    tag: Tag,
    flex,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-deck'
  );

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

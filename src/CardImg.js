import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add `bottom` prop if image is at bottom of card */
  bottom: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Add `top` prop if image is at top of card */
  top: PropTypes.bool,
};

const defaultProps = {
  tag: 'img',
};

function CardImg(props) {
  const { className, cssModule, top, bottom, tag: Tag, ...attributes } = props;

  let cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  const classes = mapToCssModules(
    classNames(className, cardImgClassName),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;

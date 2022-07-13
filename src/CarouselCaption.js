import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

function CarouselCaption(props) {
  const { captionHeader, captionText, cssModule, className } = props;
  const classes = mapToCssModules(
    classNames(className, 'carousel-caption', 'd-none', 'd-md-block'),
    cssModule,
  );

  return (
    <div className={classes}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );
}

CarouselCaption.propTypes = {
  /** Heading for the caption */
  captionHeader: PropTypes.node,
  /** Text for caption */
  captionText: PropTypes.node.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
};

export default CarouselCaption;

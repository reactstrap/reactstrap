import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const CarouselCaption = React.forwardRef((props, ref) => {
  const { captionHeader, captionText, cssModule, className } = props;
  const classes = mapToCssModules(classNames(
    className,
    'carousel-caption',
    'd-none',
    'd-md-block'
  ), cssModule);

  return (
    <div className={classes} ref={ref}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );
});

CarouselCaption.propTypes = {
  captionHeader: PropTypes.string,
  captionText: PropTypes.string.isRequired,
  cssModule: PropTypes.object,
  className: PropTypes.string,
};

export default CarouselCaption;

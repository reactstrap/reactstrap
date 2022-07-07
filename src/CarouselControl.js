import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

function CarouselControl(props) {
  const {
    direction, onClickHandler, cssModule, directionText, className
  } = props;

  const anchorClasses = mapToCssModules(classNames(
    className,
    `carousel-control-${direction}`
  ), cssModule);

  const iconClasses = mapToCssModules(classNames(
    `carousel-control-${direction}-icon`
  ), cssModule);

  const screenReaderClasses = mapToCssModules(classNames(
    'visually-hidden'
  ), cssModule);

  return (
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={anchorClasses}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <span className={iconClasses} aria-hidden="true" />
      <span className={screenReaderClasses}>{directionText || direction}</span>
    </a>
  );
}

CarouselControl.propTypes = {
  /** Set the direction of control button */
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Screen reader text */
  directionText: PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
};

export default CarouselControl;

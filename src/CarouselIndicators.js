import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

function CarouselIndicators(props) {
  const {
    items, activeIndex, cssModule, onClickHandler, className
  } = props;

  const listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(classNames(
      { active: activeIndex === idx }
    ), cssModule);
    return (
      <button
        aria-label={item.caption}
        data-bs-target
        type="button"
        key={`${item.key || Object.values(item).join('')}`}
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }}
        className={indicatorClasses}
      />
    );
  });

  return (
    <div className={listClasses}>
      {indicators}
    </div>
  );
}

CarouselIndicators.propTypes = {
  /** The current active index */
  activeIndex: PropTypes.number.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Array of items to show */
  items: PropTypes.array.isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired,
};

export default CarouselIndicators;

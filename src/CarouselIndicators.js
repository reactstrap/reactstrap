import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const CarouselIndicators = (props) => {
  const { items, activeIndex, cssModule, onClickHandler, className } = props;

  const listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(classNames(
      { active: activeIndex === idx }
    ), cssModule);
    return (
      <button
        aria-label={item.caption}
        data-bs-target
        key={`${item.key || Object.values(item).join('')}`}
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }}
        className={indicatorClasses}
      >
        {item.caption}
      </button>);
  });

  return (
    <div className={listClasses}>
      {indicators}
    </div>
  );
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CarouselIndicators;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.state = { direction: 'right' };
  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.interval) {
      this.cycleInterval = setInterval(() => {
        if (!this.props.paused) {
          this.props.next();
        }
      }, parseInt(this.props.interval, 10));
    }

    if (this.props.keyboard) {
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Calculate the direction to turn
    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
      this.setState({ direction: 'left' });
    } else if (this.props.activeIndex > nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else {
      this.setState({ direction: 'left' });
    }
  }

  componentWillUnmount() {
    clearInterval(this.cycleInterval);
    document.removeEventListener('key', this.handleKeyPress);
  }

  handleKeyPress(evt) {
    if (this.props.keyboard && evt.keyCode === 37) {
      this.props.previous();
    } else if (this.props.keyboard && evt.keyCode === 39) {
      this.props.next();
    }
  }

  renderItems(carouselItems, className) {
    const { slide } = this.props;
    return (
      <div role="listbox" className={className}>
        {carouselItems.map((item, index) => {
          const isIn = (index === this.props.activeIndex);
          return React.cloneElement(item, {
            in: isIn,
            slide: slide,
          });
        })}
      </div>
    );
  }

  render() {
    const { children, cssModule, hoverStart, hoverEnd, slide } = this.props;
    const outerClasses = mapToCssModules(classNames(
      'carousel',
      slide && 'slide',
    ), cssModule);

    const innerClasses = mapToCssModules(classNames(
      'carousel-inner'
    ), cssModule);


    const slidesOnly = children.every((child) => {
      return child.type && child.type.name === 'CarouselItem';
    });

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          {this.renderItems(children, innerClasses)}
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          {this.renderItems(carouselItems, innerClasses)}
          {controlLeft}
          {controlRight}
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div
        ref={(carousel) => {
          this.carousel = carousel;
        }}
        className={outerClasses}
        onMouseEnter={hoverStart}
        onMouseLeave={hoverEnd}
      >
        {indicators}
        {this.renderItems(carouselItems, innerClasses)}
        {controlLeft}
        {controlRight}
      </div>
    );
  }
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  // controls if the carousel should not automatically cycle (default: false)
  paused: PropTypes.bool,
  // the interval at which the carousel automatically cycles (default: 5000) 
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  hoverStart: PropTypes.func,
  // called when the mouse exits the Carousel
  hoverEnd: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
};

Carousel.defaultProps = {
  interval: 5000,
  hover: false,
  paused: false,
  keyboard: true,
  slide: true,
};

Carousel.childContextTypes = {
  direction: PropTypes.string
};

export default Carousel;

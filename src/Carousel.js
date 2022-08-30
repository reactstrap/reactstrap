import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarouselItem from './CarouselItem';
import { CarouselContext } from './CarouselContext';
import { mapToCssModules, omit } from './utils';

const SWIPE_THRESHOLD = 40;

const propTypes = {
  /** the current active slide of the carousel */
  activeIndex: PropTypes.number,
  /** a function which should advance the carousel to the next slide (via activeIndex) */
  next: PropTypes.func.isRequired,
  /** a function which should advance the carousel to the previous slide (via activeIndex) */
  previous: PropTypes.func.isRequired,
  /** controls if the left and right arrow keys should control the carousel */
  keyboard: PropTypes.bool,
  /** If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause: PropTypes.oneOf(['hover', false]),
  /** Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. */
  ride: PropTypes.oneOf(['carousel']),
  /** the interval at which the carousel automatically cycles */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  /** called when the mouse enters the Carousel */
  mouseEnter: PropTypes.func,
  /** called when the mouse exits the Carousel */
  mouseLeave: PropTypes.func,
  /** controls whether the slide animation on the Carousel works or not */
  slide: PropTypes.bool,
  /** make the controls, indicators and captions dark on the Carousel */
  dark: PropTypes.bool,
  fade: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom class */
  className: PropTypes.string,
  /** Enable touch support */
  enableTouch: PropTypes.bool,
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false,
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.state = {
      activeIndex: this.props.activeIndex,
      direction: 'end',
      indicatorClicked: false,
    };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    }

    // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
    document.addEventListener('keyup', this.handleKeyPress);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = null;
    let { activeIndex, direction, indicatorClicked } = prevState;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'end';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'start';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'start' : 'end';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'end' : 'start';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction,
        indicatorClicked: false,
      };
    }

    return newState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  }

  handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }
    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  }

  handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    const currentX = e.changedTouches[0].screenX;
    const currentY = e.changedTouches[0].screenY;
    const diffX = Math.abs(this.touchStartX - currentX);
    const diffY = Math.abs(this.touchStartY - currentY);

    // Don't swipe if Y-movement is bigger than X-movement
    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  }

  getContextValue() {
    return { direction: this.state.direction };
  }

  setInterval() {
    // make sure not to have multiple intervals going...
    this.clearInterval();
    if (this.props.interval) {
      this.cycleInterval = setInterval(() => {
        this.props.next();
      }, parseInt(this.props.interval, 10));
    }
  }

  clearInterval() {
    clearInterval(this.cycleInterval);
  }

  hoverStart(...args) {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }
    if (this.props.mouseEnter) {
      this.props.mouseEnter(...args);
    }
  }

  hoverEnd(...args) {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }
    if (this.props.mouseLeave) {
      this.props.mouseLeave(...args);
    }
  }

  renderItems(carouselItems, className) {
    const { slide } = this.props;
    return (
      <div className={className}>
        {carouselItems.map((item, index) => {
          const isIn = index === this.state.activeIndex;
          return React.cloneElement(item, {
            in: isIn,
            slide: slide,
          });
        })}
      </div>
    );
  }

  render() {
    const { cssModule, slide, className, dark, fade } = this.props;
    const attributes = omit(this.props, propsToOmit);
    const outerClasses = mapToCssModules(
      classNames(
        className,
        'carousel',
        fade && 'carousel-fade',
        slide && 'slide',
        dark && 'carousel-dark',
      ),
      cssModule,
    );

    const innerClasses = mapToCssModules(
      classNames('carousel-inner'),
      cssModule,
    );

    // filter out booleans, null, or undefined
    const children = this.props.children.filter(
      (child) =>
        child !== null && child !== undefined && typeof child !== 'boolean',
    );

    const slidesOnly = children.every((child) => child.type === CarouselItem);

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div
          {...attributes}
          className={outerClasses}
          onMouseEnter={this.hoverStart}
          onMouseLeave={this.hoverEnd}
        >
          <CarouselContext.Provider value={this.getContextValue()}>
            {this.renderItems(children, innerClasses)}
          </CarouselContext.Provider>
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div
          {...attributes}
          className={outerClasses}
          onMouseEnter={this.hoverStart}
          onMouseLeave={this.hoverEnd}
        >
          <CarouselContext.Provider value={this.getContextValue()}>
            {this.renderItems(carouselItems, innerClasses)}
            {controlLeft}
            {controlRight}
          </CarouselContext.Provider>
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const wrappedOnClick = (e) => {
      if (typeof indicators.props.onClickHandler === 'function') {
        this.setState({ indicatorClicked: true }, () =>
          indicators.props.onClickHandler(e),
        );
      }
    };
    const wrappedIndicators = React.cloneElement(indicators, {
      onClickHandler: wrappedOnClick,
    });
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div
        {...attributes}
        className={outerClasses}
        onMouseEnter={this.hoverStart}
        onMouseLeave={this.hoverEnd}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <CarouselContext.Provider value={this.getContextValue()}>
          {wrappedIndicators}
          {this.renderItems(carouselItems, innerClasses)}
          {controlLeft}
          {controlRight}
        </CarouselContext.Provider>
      </div>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;

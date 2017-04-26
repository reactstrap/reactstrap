import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactTransitionGroup from 'react-addons-transition-group';
import { mapToCssModules } from './utils';
import CarouselControl from './CarouselControl';
import CarouselItem from './CarouselItem';
import CarouselIndicators from './CarouselIndicators';


class Carousel extends React.Component {

  constructor(props) {
    super(props);

    // Initial state with defaults
    this.state = {
      direction: 'right',
      cycleDirection: 'right',
      activeIndex: props.activeIndex || 0,
      cycle: props.cycle || false,
      wrap: props.wrap !== undefined ? props.wrap : true,
      interval: props.interval !== undefined ? props.interval : 5000,
      keyboard: props.keyboard || false,
      hover: props.hover || false
    };

    // Action handlers
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.number = this.number.bind(this);
    this.cycle = this.cycle.bind(this);
    this.pause = this.pause.bind(this);
  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.state.interval) {
      setInterval(() => {
        if (this.state.cycle) {
          if (this.state.activeIndex === this.props.items.length - 1 && !this.state.wrap) {
            this.setState({
              cycleDirection: 'left'
            });
            this.previous();
          } else if (this.state.activeIndex === 0 && !this.state.wrap) {
            this.setState({
              cycleDirection: 'right'
            });
            this.next();
          } else {
            if (this.state.cycleDirection === 'right') {
              this.next();
            } else {
              this.previous();
            }
          }
        }
      }, this.state.interval);
    }
  }

  cycle() {
    if (this.state.hover === 'hover') {
      this.setState({
        cycle: true
      });
    }
  }

  pause() {
    if (this.state.hover === 'hover') {
      this.setState({
        cycle: false
      });
    }
  }

  number(index) {
    this.setState({
      activeIndex: index,
      direction: 'left'
    });
  }

  previous() {
    const { activeIndex } = this.state;
    const size = this.props.items.length;

    if (activeIndex === 0) {
      this.setState({
        activeIndex: size - 1,
        direction: 'left'
      });
    } else {
      this.setState({
        activeIndex: activeIndex - 1,
        direction: 'left'
      });
    }
  }

  next() {
    const { activeIndex } = this.state;
    const size = this.props.items.length;

    if (activeIndex === size - 1) {
      this.setState({
        activeIndex: 0,
        direction: 'right'
      });
    } else {
      this.setState({
        activeIndex: activeIndex + 1,
        direction: 'right'
      });
    }
  }

  render() {
    const { items, cssModule } = this.props;
    const { activeIndex, direction, wrap } = this.state;

    const outerClasses = mapToCssModules(classNames(
          'carousel',
          'slide'
      ), cssModule);

    const innerClasses = mapToCssModules(classNames(
          'carousel-inner'
      ), cssModule);

    const carouselItems = items.map((item, idx) => {
      return (<CarouselItem
        mouseEnterHandler={this.pause}
        mouseLeaveHandler={this.cycle}
        direction={direction}
        key={idx}
        {...item}
        cssModule={cssModule}
      />);
    });


    return (
      <div className={outerClasses}>
        <CarouselIndicators {...this.props} activeIndex={activeIndex} onClickHandler={this.number} />
        <ReactTransitionGroup component="div" role="listbox" className={innerClasses}>
          {carouselItems[activeIndex]}
        </ReactTransitionGroup>
        {
          (wrap || activeIndex !== 0) ?
            <CarouselControl direction="prev" cssModule={cssModule} directionText="Previous" onClickHandler={this.previous} /> :
            false
        }
        {
         (wrap || activeIndex !== items.length - 1) ?
           <CarouselControl direction="next" cssModule={cssModule} directionText="Next" onClickHandler={this.next} /> :
           false
        }
      </div>
    );
  }

}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  cssModule: PropTypes.object,
  activeIndex: PropTypes.number,
  cycle: PropTypes.bool,
  wrap: PropTypes.bool,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]),
  hover: PropTypes.string
};

Carousel.childContextTypes = {
  direction: PropTypes.string
};

export default Carousel;

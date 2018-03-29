import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import CarouselIndicators from './CarouselIndicators';
import CarouselCaption from './CarouselCaption';

const propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func,
};

class UncontrolledCarousel extends Component {
  constructor(props) {
    super(props);
    this.animating = false;
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { autoPlay, indicators, controls, items, goToIndex, ...props } = this.props;
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        ride={autoPlay ? 'carousel' : undefined}
        {...props}
      >
        {indicators && <CarouselIndicators
          items={items}
          activeIndex={props.activeIndex || activeIndex}
          onClickHandler={goToIndex || this.goToIndex}
        />}
        {slides}
        {controls && <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={props.previous || this.previous}
        />}
        {controls && <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={props.next || this.next}
        />}
      </Carousel>
    );
  }
}

UncontrolledCarousel.propTypes = propTypes;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true,
};

export default UncontrolledCarousel;

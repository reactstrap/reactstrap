import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition, { ENTERING, ENTERED, EXITING } from 'react-transition-group/Transition';
import { mapToCssModules, TransitionTimeouts } from './utils';
import CarouselCaption from './CarouselCaption';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startAnimation: false,
    };

    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onEnter(node, isAppearing) {
    this.setState({ startAnimation: false });
    this.props.onEnter(node, isAppearing);
  }

  onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
    this.setState({ startAnimation: true });
    this.props.onEntering(node, isAppearing);
  }

  onExit(node) {
    this.setState({ startAnimation: false });
    this.props.onExit(node);
  }

  onExiting(node) {
    this.setState({ startAnimation: true });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  }

  onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  }

  render() {
    const { src, altText, in: isIn, children, cssModule, slide, ...transitionProps } = this.props;
    const imgClasses = mapToCssModules(classNames(
      'd-block',
      'img-fluid'
    ), cssModule);

    return (
      <Transition
        {...transitionProps}
        enter={slide}
        exit={slide}
        in={isIn}
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          const { direction } = this.context;
          const isActive = (status === ENTERED) || (status === EXITING);
          const directionClassName = (status === ENTERING || status === EXITING) &&
            this.state.startAnimation &&
            (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          const orderClassName = (status === ENTERING) &&
            (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          const itemClasses = mapToCssModules(classNames(
            'carousel-item',
            isActive && 'active',
            directionClassName,
            orderClassName,
          ), cssModule);

          return (
            <div className={itemClasses}>
              <img className={imgClasses} src={src} alt={altText} />
              {children}
            </div>
          );
        }}
      </Transition>
    );
  }
}

CarouselItem.propTypes = {
  ...Transition.propTypes,
  in: PropTypes.bool,
  src: PropTypes.string.isRequired,
  altText: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.shape({
    type: PropTypes.oneOf([CarouselCaption]),
  }),
  slide: PropTypes.bool,
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

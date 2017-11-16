import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import { mapToCssModules, TransitionTimeouts, TransitionStatuses } from './utils';
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
    const offsetHeight = node.offsetHeight;
    this.setState({ startAnimation: true });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
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
    const { src, altText, in: isIn, children, cssModule, slide, tag: Tag, className, ...transitionProps } = this.props;
    const imgClasses = mapToCssModules(classNames(
      className,
      'd-block',
      'img-fluid',
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
          const isActive = (status === TransitionStatuses.ENTERED) || (status === TransitionStatuses.EXITING);
          const directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) &&
            this.state.startAnimation &&
            (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          const orderClassName = (status === TransitionStatuses.ENTERING) &&
            (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          const itemClasses = mapToCssModules(classNames(
            'carousel-item',
            isActive && 'active',
            directionClassName,
            orderClassName,
          ), cssModule);

          return (
            <div className={itemClasses}>
              <Tag className={imgClasses} src={src} alt={altText} />
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  src: PropTypes.string,
  altText: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.shape({
    type: PropTypes.oneOf([CarouselCaption]),
  }),
  slide: PropTypes.bool,
  className: PropTypes.string,
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  tag: 'img',
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

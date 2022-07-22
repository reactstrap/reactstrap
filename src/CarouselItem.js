import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
  mapToCssModules,
  TransitionTimeouts,
  TransitionStatuses,
  tagPropType,
} from './utils';

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
    const { offsetHeight } = node;
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
    const {
      in: isIn,
      children,
      cssModule,
      slide,
      tag: Tag,
      className,
      ...transitionProps
    } = this.props;

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
          const isActive =
            status === TransitionStatuses.ENTERED ||
            status === TransitionStatuses.EXITING;
          const directionClassName =
            (status === TransitionStatuses.ENTERING ||
              status === TransitionStatuses.EXITING) &&
            this.state.startAnimation &&
            (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
          const orderClassName =
            status === TransitionStatuses.ENTERING &&
            (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
          const itemClasses = mapToCssModules(
            classNames(
              className,
              'carousel-item',
              isActive && 'active',
              directionClassName,
              orderClassName,
            ),
            cssModule,
          );

          return <Tag className={itemClasses}>{children}</Tag>;
        }}
      </Transition>
    );
  }
}

CarouselItem.propTypes = {
  ...Transition.propTypes,
  /** Set a custom element for this component */
  tag: tagPropType,
  in: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  children: PropTypes.node,
  /** Enable/disable animation */
  slide: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string,
};

export default CarouselItem;

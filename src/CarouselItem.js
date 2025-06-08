import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { CarouselContext } from './CarouselContext';
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
    this.nodeRef = props.innerRef || React.createRef();
  }

  onEnter(_, isAppearing) {
    const node = this.getNode();
    this.setState({ startAnimation: false });
    this.props.onEnter(node, isAppearing);
  }

  onEntering(_, isAppearing) {
    const node = this.getNode();
    // getting this variable triggers a reflow
    const { offsetHeight } = node;
    this.setState({ startAnimation: true });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  }

  onExit(_) {
    const node = this.getNode();
    this.setState({ startAnimation: false });
    this.props.onExit(node);
  }

  onExiting(_) {
    const node = this.getNode();
    this.setState({ startAnimation: true });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  }

  onExited(_) {
    const node = this.getNode();
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  }

  getNode() {
    return this.nodeRef.current;
  }

  render() {
    const {
      in: isIn,
      children,
      cssModule,
      slide = true,
      tag: Tag = 'div',
      className,
      ...transitionProps
    } = this.props;

    return (
      <Transition
        {...transitionProps}
        nodeRef={this.nodeRef}
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

          return <Tag ref={this.nodeRef} className={itemClasses}>{children}</Tag>;
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
  innerRef: PropTypes.shape({ current: PropTypes.object }),
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  timeout: TransitionTimeouts.Carousel,
};

CarouselItem.contextType = CarouselContext;

export default CarouselItem;

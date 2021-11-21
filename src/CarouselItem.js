import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { mapToCssModules, TransitionTimeouts, TransitionStatuses, tagPropType, mergeRefs } from './utils';

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

  onEnter(isAppearing) {
    this.setState({ startAnimation: false });
    this.props.onEnter(this.nodeRef.current, isAppearing);
  }

  onEntering(isAppearing) {
    // getting this variable triggers a reflow
    const offsetHeight = this.nodeRef.current.offsetHeight;
    this.setState({ startAnimation: true });
    this.props.onEntering(this.nodeRef.current, isAppearing);
    return offsetHeight;
  }

  onExit() {
    this.setState({ startAnimation: false });
    this.props.onExit(this.nodeRef.current);
  }

  onExiting() {
    this.setState({ startAnimation: true });
    this.nodeRef.current.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(this.nodeRef.current);
  }

  onExited() {
    this.nodeRef.current.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(this.nodeRef.current);
  }

  nodeRef = React.createRef()

  render() {
    const { in: isIn, children, cssModule, slide, tag: Tag, className, ...transitionProps } = this.props;
    const mergedRefs = mergeRefs(this.nodeRef, this.props.nodeRef)

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
        nodeRef={this.nodeRef}
      >
        {(status) => {
          const { direction } = this.context;
          const isActive = (status === TransitionStatuses.ENTERED) || (status === TransitionStatuses.EXITING);
          const directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) &&
            this.state.startAnimation &&
            (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
          const orderClassName = (status === TransitionStatuses.ENTERING) &&
            (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
          const itemClasses = mapToCssModules(classNames(
            className,
            'carousel-item',
            isActive && 'active',
            directionClassName,
            orderClassName,
          ), cssModule);

          return (
            <Tag className={itemClasses} ref={mergedRefs}>
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }
}

CarouselItem.propTypes = {
  ...Transition.propTypes,
  tag: tagPropType,
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
  className: PropTypes.string,
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition, { EXITED, ENTERING, ENTERED, EXITING } from 'react-transition-group/Transition';
import { mapToCssModules } from './utils';
import CarouselCaption from './CarouselCaption';

function noop() { }

// to match bootstrap $carousel-transition
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L790
const DEFAULT_TIMEOUT = 600;

class CarouselItem extends React.Component {
  constructor(props) {
    super(props)

    this.status = null;
    this.state = {
      startAnimation: false,
    };

    this.onEntering = this.onEntering.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onEntering(node, appearing) {
    this.slide = node;
    this.setState({
      startAnimation: false
    });
    this.props.onEntering(node, appearing);
  }

  onExiting(node) {
    this.setState({
      startAnimation: false
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  }

  onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  }

  componentDidUpdate() {
    if (this.status === ENTERING && !this.state.startAnimation) {
      // getting this variable triggers a reflow
      this.slide.offsetHeight;
      this.setState({
        startAnimation: true,
      });
    } else if (this.status === EXITING && !this.state.startAnimation) {
      this.setState({
        startAnimation: true,
      });
    }
  }

  render() {
    const { src, altText, in: isIn, children, cssModule, slide, ...transitionProps } = this.props;
    const imgClasses = mapToCssModules(classNames(
      'd-block',
      'img-fluid'
    ), cssModule);

    console.log("carouselitem: ", altText, ", slide:", slide);

    return (
      <Transition
        {...transitionProps}
        enter={slide}
        exit={slide}
        in={isIn}
        onEntering={this.onEntering}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          this.status = status;
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
  timeout: DEFAULT_TIMEOUT,
  onEntering: noop, onExiting: noop, onExited: noop,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

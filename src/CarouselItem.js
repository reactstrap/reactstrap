import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group'
import { mapToCssModules } from './utils';
import CarouselCaption from './CarouselCaption';

// to match bootstrap $carousel-transition
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L790
const DEFAULT_TIMEOUT = 600;

class CarouselItem extends React.Component {
  constructor(props) {
    super(props)

    this.componentWillExit = this.componentWillExit.bind(this);
    this.componentDidExit = this.componentDidExit.bind(this);
    this.doReflow = false;
  }

  componentWillExit() {
    this.slide.dispatchEvent(new CustomEvent('slide.bs.carousel'));
  }

  componentDidExit() {
    this.slide.dispatchEvent(new CustomEvent('slid.bs.carousel'));
  }

  componentDidUpdate() {
    if (this.doReflow) {
      // getting this variable triggers a reflow
      this.slide.offsetHeight;
      console.log("altText:", this.props.altText, ", reflowed carousel")
      this.doReflow = false;
    }
  }

  render() {
    const { src, altText, in: isIn, children, cssModule } = this.props;
    const imgClasses = mapToCssModules(classNames(
      'd-block',
      'img-fluid'
    ), cssModule);

    return (
      <Transition
        in={isIn}
        onExiting={this.componentWillExit}
        onExited={this.componentDidExit}
        timeout={DEFAULT_TIMEOUT}
      >
        {(status) => {
          const { direction } = this.context;
          console.log("altText:", altText, ", status:", status, ", direction:", direction);
          const isActive = (status === 'entered') || (status === 'exiting');
          const directionClassName = (status === 'entering' || status === 'exiting') &&
            (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          const orderClassName = (status === 'entering') &&
            (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          if (status === 'entering') {
            this.doReflow = true;
          } 
          const itemClasses = mapToCssModules(classNames(
            'carousel-item',
            isActive && 'active',
            directionClassName,
            orderClassName,
          ), cssModule);

          return (
            <div className={itemClasses} ref={(slide) => { this.slide = slide; }}>
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
  in: PropTypes.bool,
  src: PropTypes.string.isRequired,
  altText: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.shape({
    type: PropTypes.oneOf([CarouselCaption]),
  }),
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

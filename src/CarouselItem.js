import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import CarouselCaption from './CarouselCaption';

class CarouselItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { animation: [] };
  }

  componentWillUnmount() {
    clearTimeout(this.willEnterTimeout);
    clearTimeout(this.willLeaveTimeout);
  }

  componentWillAppear(callBack) {
    this.setState({
      animation: ['active']
    });
    callBack();
  }

  componentWillEnter(callBack) {
    const classes = this.context.direction === 'right' ?
      ['carousel-item-next', 'carousel-item-left'] :
      ['carousel-item-prev', 'carousel-item-right'];
    this.setState({
      animation: classes
    });

    this.willEnterTimeout = setTimeout(() => {
      callBack();
    }, 500);
  }

  componentDidEnter() {
    this.setState({
      animation: ['active']
    });
  }

  componentWillLeave(callBack) {
    const classes = this.context.direction === 'right' ?
      ['carousel-item-left', 'active'] :
      ['carousel-item-right', 'active'];
    this.setState({
      animation: classes
    });

    this.slide.dispatchEvent(new CustomEvent('slide.bs.carousel'));

    this.willLeaveTimeout = setTimeout(() => {
      callBack();
    }, 500);
  }

  componentDidLeave() {
    this.setState({
      animation: []
    });
    this.slide.dispatchEvent(new CustomEvent('slid.bs.carousel'));
  }


  render() {
    const { src, altText, children, cssModule } = this.props;
    const classes = mapToCssModules(classNames(
        'd-block',
        'img-fluid'
    ), cssModule);

    const itemClasses = mapToCssModules(classNames('carousel-item', ...this.state.animation), cssModule);

    return (
      <div className={itemClasses} ref={(slide) => { this.slide = slide; }}>
        <img className={classes} src={src} alt={altText} />
        {children}
      </div>
    );
  }
}

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.instanceOf(CarouselCaption)
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

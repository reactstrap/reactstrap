import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import CarouselCaption from './CarouselCaption';

class CarouselItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { animation: [] };
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

    setTimeout(() => {
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
    setTimeout(() => {
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
    const { src, altText, captionText, cssModule, mouseEnterHandler, mouseLeaveHandler } = this.props;
    const classes = mapToCssModules(classNames(
        'd-block',
        'img-fluid'
    ), cssModule);



    const itemClasses = mapToCssModules(classNames('carousel-item', ...this.state.animation), cssModule);

    return (
      <div className={itemClasses} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} ref={(slide) => { this.slide = slide; }}>
        <img className={classes} src={src} alt={altText} />
        {
              captionText ? (
                <CarouselCaption {...this.props} />
              ) :
              false
          }
      </div>
    );
  }
}

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string,
  captionHeader: PropTypes.string,
  cssModule: PropTypes.object,
  captionText: PropTypes.string,
  direction: PropTypes.string,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired
};

CarouselItem.contextTypes = {
  direction: PropTypes.string
};

export default CarouselItem;

import React from 'react';
import { mount } from 'enzyme';
import { Carousel } from '../';
import CarouselItem from '../CarouselItem';
import CarouselIndicators from '../CarouselIndicators';
import CarouselControl from '../CarouselControl';
import CarouselCaption from '../CarouselCaption';

describe('Carousel', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  const items = [
      { src: '', altText: 'a', caption: 'caption 1' },
      { src: '', altText: 'b', caption: 'caption 2' },
      { src: '', altText: 'c', caption: 'caption 3' }
  ];

  describe('captions', () => {
    it('should render a header and a caption', () => {
      const wrapper = mount(<CarouselCaption captionHeader="abc" captionText="def" />);
      expect(wrapper.find('h3').length).toEqual(1);
      expect(wrapper.find('p').length).toEqual(1);
    });
  });

  describe('items', () => {
    it('should render an img tag', () => {
      const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />);
      expect(wrapper.find('img').length).toEqual(1);
    });

    it('should render a caption if one is passed in', () => {
      const wrapper = mount(
        <CarouselItem src={items[0].src} altText={items[0].src}>
          <CarouselCaption captionHeader="text" captionText="text" />
        </CarouselItem>
      );
      expect(wrapper.find(CarouselCaption).length).toEqual(1);
    });

    describe('transitions', () => {
      it('should add the appropriate classes when componentWillEnter is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-next', 'carousel-item-left']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-prev', 'carousel-item-right']);
      });

      it('should call the callback after 500 when componentWillEnter is called', () => {
        const callback = jasmine.createSpy('callback');
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter(callback);
        jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidEnter is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidEnter();
        expect(wrapper.state('animation')).toEqual(['active']);
      });

      it('should add the appropriate classes when componentWillLeave is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-left', 'active']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-right', 'active']);
      });

      it('should call the callback after 500 when componentWillLeave is called', () => {
        const callback = jasmine.createSpy('callback');
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave(callback);
        jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidLeave is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidLeave();
        expect(wrapper.state('animation')).toEqual([]);
      });

      it('should add the appropriate classes when componentWillAppear is fired', () => {
        const wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillAppear(() => {});
        expect(wrapper.state('animation')).toEqual(['active']);
      });
    });
  });

  describe('indicators', () => {
    it('should render a list with the right number of items', () => {
      const wrapper = mount(<CarouselIndicators items={items} />);
      expect(wrapper.find('ol').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(3);
    });

    it('should append the correct active class', () => {
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} />);
      expect(wrapper.find('.active').length).toEqual(1);
    });

    it('should call the click hanlder', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={onClick} />);
      wrapper.find('li').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('controls', () => {
    it('should render an anchor tag', () => {
      const wrapper = mount(<CarouselControl />);
      expect(wrapper.find('a').length).toEqual(1);
    });

    it('should call the onClickHandler', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<CarouselControl onClickHandler={onClick} />);
      wrapper.find('a').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    it('should show the carousel indicators', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0}>
          <CarouselIndicators items={slides} activeIndex={0} />
          {slides}
        </Carousel>
      );

      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });

    it('should show controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" />
          <CarouselControl direction="next" directionText="Next" />
        </Carousel>
      );

      expect(wrapper.find(CarouselControl).length).toEqual(2);
    });

    it('should show a single slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0}>
          {slides}
        </Carousel>
      );
      expect(wrapper.find(CarouselItem).length).toEqual(1);
    });

    it('should show indicators and controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel activeIndex={0}>
          <CarouselIndicators items={slides} activeIndex={0} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" />
          <CarouselControl direction="next" directionText="Next" />
        </Carousel>
      );

      expect(wrapper.find(CarouselControl).length).toEqual(2);
      expect(wrapper.find(CarouselIndicators).length).toEqual(1);
    });
  });

  describe('carouseling', () => {
    it('should go right when the index increases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 1 });
      expect(wrapper.state().direction).toEqual('right');
    });

    it('should go left when the index decreases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={1}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('left');
    });

    it('should go right if transitioning from the last to first slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={2}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('right');
    });

    it('should go left if transitioning from the first to last slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 2 });
      expect(wrapper.state().direction).toEqual('left');
    });
  });

  describe('interval', () => {
    it('should not cycle when paused', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} interval={1000} activeIndex={0} paused>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a number', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a boolean', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} activeIndex={0} interval={false}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(5000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should default to 5000', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const wrapper = mount(
        <Carousel next={next} activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(5000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('it should accept a string', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
      const wrapper = mount(
        <Carousel next={next} interval="1000" activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Carousel, UncontrolledCarousel } from '../';

const items = [
  { src: '', altText: 'a', caption: 'caption 1' },
  { src: '', altText: 'b', caption: 'caption 2' },
  { src: '', altText: 'c', caption: 'caption 3' }
];

describe('UncontrolledCarousel', () => {
  it('should be an Carousel', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    expect(carousel.type()).toBe(Carousel);
  });

  it('should have activeIndex default to 0', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    expect(carousel.prop('activeIndex')).toBe(0);
  });

  it('should have next function', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    expect(carousel.prop('next')).toEqual(expect.any(Function));
  });

  it('should have prev function', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    expect(carousel.prop('previous')).toEqual(expect.any(Function));
  });

  it('should have ride set to "carousel" by default', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    expect(carousel.prop('ride')).toBe('carousel');
  });

  it('should have ride set to undefined when autoPlay is false', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} autoPlay={false} />);
    expect(carousel.prop('ride')).toBe(undefined);
  });

  it('should have ride set to "carousel" when autoPlay is true', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} autoPlay />);
    expect(carousel.prop('ride')).toBe('carousel');
  });

  it('should increase the activeIndex when next is called', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
  });

  it('should not increase the activeIndex when next is called while animating', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.animating = true;
    instance.next();
    expect(carousel.prop('activeIndex')).toBe(0);
  });

  it('should wrap the activeIndex when next is called on the last item', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(2);
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(0);
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
  });

  it('should decrease the activeIndex when previous is called', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
    instance.previous();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(0);
  });

  it('should not decrease the activeIndex when previous is called while animating', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.next();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
    instance.animating = true;
    instance.previous();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(1);
  });

  it('should wrap the activeIndex when previous is called on the first item', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.previous();
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(2);
  });

  it('should set the activeIndex when goToIndex is called with a value', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.goToIndex(2);
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(2);
  });

  it('should not set the activeIndex when goToIndex is called with a value when animating', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    instance.animating = true;
    instance.goToIndex(2);
    carousel.update();
    expect(carousel.prop('activeIndex')).toBe(0);
  });

  it('should track animating of the slides', () => {
    const carousel = shallow(<UncontrolledCarousel items={items} />);
    const instance = carousel.instance();
    expect(instance.animating).toBe(false);
    instance.onExiting();
    expect(instance.animating).toBe(true);
    instance.onExited();
    expect(instance.animating).toBe(false);
  });
});

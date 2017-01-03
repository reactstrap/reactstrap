import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../';

describe('Progress', () => {
  it('should render with "div" tag by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "progress" class', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should render with "value" 0 by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.instance().props['value']).toBe(0);
  });

  it('should render with "max" 100 by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.instance().props['max']).toBe(100);
  });

  it('should render with the given "value" when passed as string prop', () => {
    const wrapper = shallow(<Progress value="10" />);

    expect(wrapper.instance().props['value']).toBe('10');
  });

  it('should render with the given "value" when passed as number prop', () => {
    const wrapper = shallow(<Progress value={10} />);

    expect(wrapper.instance().props['value']).toBe(10);
  });

  it('should render with the given "max" when passed as string prop', () => {
    const wrapper = shallow(<Progress max="10" />);

    expect(wrapper.instance().props['max']).toBe('10');
  });

  it('should render with the given "max" when passed as number prop', () => {
    const wrapper = shallow(<Progress max={10} />);

    expect(wrapper.instance().props['max']).toBe(10);
  });

  it('should render with "progress-bar-striped" class when striped prop is truthy', () => {
    const wrapper = shallow(<Progress striped />);

    expect(wrapper.find('.progress-bar').hasClass('progress-bar-striped')).toBe(true);
  });

  it('should render with "progress-bar-striped" and "progress-bar-animated" classes when animated prop is truthy', () => {
    const wrapper = shallow(<Progress animated />);

    expect(wrapper.find('.progress-bar').hasClass('progress-bar-striped')).toBe(true);
    expect(wrapper.find('.progress-bar').hasClass('progress-bar-animated')).toBe(true);
  });

  it('should render with "bg-${color}" class when color prop is defined', () => {
    const wrapper = shallow(<Progress color="yo" />);

    expect(wrapper.find('.progress-bar').hasClass('bg-yo')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Progress className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Progress tag="main" />);

    expect(wrapper.type()).toBe('main');
  });
});

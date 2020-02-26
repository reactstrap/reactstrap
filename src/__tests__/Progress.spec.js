import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const wrapper = mount(<Progress />);

    expect(wrapper.prop('value')).toBe(0);
  });

  it('should render with "max" 100 by default', () => {
    const wrapper = mount(<Progress />);

    expect(wrapper.prop('max')).toBe(100);
  });

  it('should render with "style" empty object by default', () => {
    const wrapper = mount(<Progress />);

    expect(wrapper.prop('style')).toEqual({});
  });

  it('should render with the given "value" when passed as string prop', () => {
    const wrapper = mount(<Progress value="10" />);

    expect(wrapper.prop('value')).toBe('10');
  });

  it('should render with the given "value" when passed as number prop', () => {
    const wrapper = mount(<Progress value={10} />);

    expect(wrapper.prop('value')).toBe(10);
  });

  it('should render with the given "max" when passed as string prop', () => {
    const wrapper = mount(<Progress max="10" />);

    expect(wrapper.prop('max')).toBe('10');
  });

  it('should render with the given "max" when passed as number prop', () => {
    const wrapper = mount(<Progress max={10} />);

    expect(wrapper.prop('max')).toBe(10);
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

  it('should render additional classes on the inner progress bar', () => {
    const wrapper = shallow(<Progress barClassName="other" />);

    expect(wrapper.hasClass('other')).toBe(false);
    expect(wrapper.hasClass('progress')).toBe(true);
    expect(wrapper.find('.progress-bar').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Progress tag="main" />);

    expect(wrapper.type()).toBe('main');
  });

  it('should render only the .progress when "multi" is passed', () => {
    const wrapper = shallow(<Progress multi />);

    expect(wrapper.type()).toBe('div');
    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should render only the .progress-bar when "bar" is passed', () => {
    const wrapper = shallow(<Progress bar />);

    expect(wrapper.type()).toBe('div');
    expect(wrapper.hasClass('progress-bar')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Progress bar className="yo" />);

    expect(wrapper.type()).toBe('div');
    expect(wrapper.hasClass('progress-bar')).toBe(true);
    expect(wrapper.hasClass('yo')).toBe(true);
  });

  it('should render additional classes using the barClassName', () => {
    const wrapper = shallow(<Progress bar barClassName="yo" />);

    expect(wrapper.type()).toBe('div');
    expect(wrapper.hasClass('progress-bar')).toBe(true);
    expect(wrapper.hasClass('yo')).toBe(true);
  });

  it('should render the children (label)', () => {
    const wrapper = shallow(<Progress>0%</Progress>);

    expect(wrapper.text()).toBe('0%');
  });

  it('should render the children (label) (multi)', () => {
    const wrapper = mount(
      <Progress multi>
        <Progress bar value="15">15%</Progress>
        <Progress bar color="success" value="30">30%</Progress>
        <Progress bar color="info" value="25">25%</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">5%</Progress>
      </Progress>
    );

    expect(wrapper.text()).toBe('15%30%25%20%5%');
  });

  it('should render nested progress bars', () => {
    const wrapper = mount(
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    );

    expect(wrapper.find('.progress').hostNodes().length).toBe(1);
    expect(wrapper.find('.progress-bar').hostNodes().length).toBe(5);
  });
});

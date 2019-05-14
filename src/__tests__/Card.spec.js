import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';

describe('Card', () => {
  it('should render with "card" class', () => {
    const wrapper = shallow(<Card>Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card')).toBe(true);
  });

  it('should render with "modal-header" class', () => {
    const wrapper = shallow(<Card inverse body color="primary">Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card')).toBe(true);
    expect(wrapper.hasClass('card-body')).toBe(true);
    expect(wrapper.hasClass('bg-primary')).toBe(true);
    expect(wrapper.hasClass('text-white')).toBe(true);
  });

  it('should render with "outline" class when a color is provided', () => {
    const wrapper = shallow(<Card outline body color="primary">Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card')).toBe(true);
    expect(wrapper.hasClass('card-body')).toBe(true);
    expect(wrapper.hasClass('border-primary')).toBe(true);
  });

  it('should not render with "outline" class when a color is not provided (no default)', () => {
    const wrapper = shallow(<Card outline body>Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card')).toBe(true);
    expect(wrapper.hasClass('card-body')).toBe(true);
    expect(wrapper.html()).not.toContain('border');
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Card className="other">Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Card tag="main">Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

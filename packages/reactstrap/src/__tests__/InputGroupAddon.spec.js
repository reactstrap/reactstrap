import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupAddon } from '../';

describe('InputGroupAddon', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "input-group-addon" class', () => {
    const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(wrapper.hasClass('input-group-addon')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroupAddon className="other">Yo!</InputGroupAddon>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('input-group-addon')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroupAddon tag="main">Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('main');
  });
});

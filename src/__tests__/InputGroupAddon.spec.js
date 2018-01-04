import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupAddon } from '../';

describe('InputGroupAddon', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapper.text()).toBe('<InputGroupText />');
  });

  it('should render with "input-group-*" classes', () => {
    const wrapperPrepend = shallow(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
    const wrapperAppend = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(wrapperPrepend.hasClass('input-group-prepend')).toBe(true);
    expect(wrapperAppend.hasClass('input-group-append')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroupAddon addonType="append" tag="main">Yo!</InputGroupAddon>);

    expect(wrapper.type()).toBe('main');
  });
});

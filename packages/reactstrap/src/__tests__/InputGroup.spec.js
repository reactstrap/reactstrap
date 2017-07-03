import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from '../';

describe('InputGroup', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "input-group" class', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.hasClass('input-group')).toBe(true);
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    const wrapper = shallow(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(wrapper.hasClass('input-group-whatever')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroup className="other">Yo!</InputGroup>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('input-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroup tag="main">Yo!</InputGroup>);

    expect(wrapper.type()).toBe('main');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { CardTitle } from '../';

describe('CardTitle', () => {
  it('should render with "card-title" class', () => {
    const wrapper = shallow(<CardTitle>Yo!</CardTitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-title')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardTitle className="other">Yo!</CardTitle>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-title')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardTitle tag="h1">Yo!</CardTitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-title')).toBe(true);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render a "h5" tag by default', () => {
    const wrapper = shallow(<CardTitle>Yo!</CardTitle>);

    expect(wrapper.find('h5').length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { CardSubtitle } from '../';

describe('CardSubtitle', () => {
  it('should render with "card-subtitle" class', () => {
    const wrapper = shallow(<CardSubtitle>Yo!</CardSubtitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardSubtitle className="other">Yo!</CardSubtitle>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardSubtitle tag="h3">Yo!</CardSubtitle>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-subtitle')).toBe(true);
    expect(wrapper.find('h3').length).toBe(1);
  });
});

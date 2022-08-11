import React from 'react';
import { shallow } from 'enzyme';
import { CardDeck } from '..';

describe('CardDeck', () => {
  it('should render with "card-deck" class', () => {
    const wrapper = shallow(<CardDeck>Yo!</CardDeck>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.find('.card-deck').length).toBe(1);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardDeck className="other">Yo!</CardDeck>);

    expect(wrapper.find('.card-deck').hasClass('other')).toBe(true);
    expect(wrapper.find('.card-deck').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardDeck tag="main">Yo!</CardDeck>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.find('.card-deck').length).toBe(1);
    expect(wrapper.find('main').length).toBe(1);
  });
});

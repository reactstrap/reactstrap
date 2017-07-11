import React from 'react';
import { shallow } from 'enzyme';
import { CardBlock } from '../';

describe('CardBlock', () => {
  it('should render with "card-block" class', () => {
    const wrapper = shallow(<CardBlock>Yo!</CardBlock>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-block')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardBlock className="other">Yo!</CardBlock>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-block')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardBlock tag="main">Yo!</CardBlock>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-block')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

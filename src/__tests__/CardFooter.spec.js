import React from 'react';
import { shallow } from 'enzyme';
import { CardFooter } from '..';

describe('CardFooter', () => {
  it('should render with "card-footer" class', () => {
    const wrapper = shallow(<CardFooter>Yo!</CardFooter>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardFooter className="other">Yo!</CardFooter>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-footer')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardFooter tag="main">Yo!</CardFooter>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-footer')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

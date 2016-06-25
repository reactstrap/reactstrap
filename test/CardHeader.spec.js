import React from 'react';
import { shallow } from 'enzyme';
import { CardHeader } from 'reactstrap';

describe('CardHeader', () => {
  it('should render with "card-header" class', () => {
    const wrapper = shallow(<CardHeader>Yo!</CardHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<CardHeader className="other">Yo!</CardHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('card-header')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<CardHeader tag="main">Yo!</CardHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('card-header')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

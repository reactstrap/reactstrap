import React from 'react';
import { shallow } from 'enzyme';
import { ListInline } from '../';

describe('ListInline', () => {
  it('should render with "list-inline" class', () => {
    const wrapper = shallow(<ListInline>Yo!</ListInline>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-inline')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ListInline className="other">Yo!</ListInline>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('list-inline')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ListInline tag="main">Yo!</ListInline>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-inline')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

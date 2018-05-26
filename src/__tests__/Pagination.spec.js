import React from 'react';
import { shallow, mount } from 'enzyme';
import { Pagination } from '../';

describe('Pagination', () => {
  it('should render "nav" tag by default', () => {
    const wrapper = mount(<Pagination />);

    expect(wrapper.find('nav').hostNodes().length).toBe(1);
  });

  it('should render default list tag', () => {
    const wrapper = mount(<Pagination />);

    expect(wrapper.children().find('ul').hostNodes().length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<Pagination tag="main" />);

    expect(wrapper.find('main').hostNodes().length).toBe(1);
  });

  it('should render with "pagination" class', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper.children().hasClass('pagination')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Pagination>Ello world</Pagination>);

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should render pagination at different sizes', () => {
    const small = shallow(<Pagination size="sm" />);
    const large = shallow(<Pagination size="lg" />);

    expect(small.children().hasClass('pagination-sm')).toBe(true);
    expect(large.children().hasClass('pagination-lg')).toBe(true);
  });
});

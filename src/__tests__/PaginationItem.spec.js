import React from 'react';
import { shallow, mount } from 'enzyme';
import { PaginationItem } from '..';

describe('PaginationItem', () => {
  it('should render default tag', () => {
    const wrapper = mount(<PaginationItem />);

    expect(wrapper.find('li').hostNodes().length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<PaginationItem tag="main" />);

    expect(wrapper.find('main').hostNodes().length).toBe(1);
  });

  it('should render with "page-item" class', () => {
    const wrapper = shallow(<PaginationItem />);

    expect(wrapper.hasClass('page-item')).toBe(true);
  });

  it('should render active state', () => {
    const wrapper = shallow(<PaginationItem active />);

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render disabled state', () => {
    const wrapper = shallow(<PaginationItem disabled />);

    expect(wrapper.hasClass('disabled')).toBe(true);
  });
});

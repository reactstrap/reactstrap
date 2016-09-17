import React from 'react';
import { shallow, mount } from 'enzyme';
import { Pagination } from 'reactstrap';

describe('Pagination', () => {
  it('should render default tag', () => {
    const wrapper = mount(<Pagination />);

    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<Pagination tag="main" />);

    expect(wrapper.find('main').length).toBe(1);
  });

  it('should render with "pagination" class', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper.hasClass('pagination')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Pagination>Ello world</Pagination>);

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should render pagination at different sizes', () => {
    const small = shallow(<Pagination size="sm" />);
    const large = shallow(<Pagination size="lg" />);

    expect(small.hasClass('pagination-sm')).toBe(true);
    expect(large.hasClass('pagination-lg')).toBe(true);
  });
});

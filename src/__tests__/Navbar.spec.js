import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../';

describe('Navbar', () => {
  it('should render .navbar markup', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar"></nav>');
  });

  it('should render default .navbar-toggleable class', () => {
    const wrapper = shallow(<Navbar toggleable />);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar navbar-toggleable"></nav>');
  });

  it('should render size based .navbar-toggleable-* classes', () => {
    const wrapper = shallow(<Navbar toggleable="md" />);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar navbar-toggleable-md"></nav>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Navbar tag="div" />);

    expect(wrapper.html()).toBe('<div role="navigation" class="navbar"></div>');
  });

  it('sholid render children', () => {
    const wrapper = shallow(<Navbar>Children</Navbar>);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar">Children</nav>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Navbar className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar')).toBe(true);
  });

  it('should render prop based classes', () => {
    const wrapper = shallow(<Navbar light inverse toggleable="sm" color="success" full fixed="top" />);

    expect(wrapper.hasClass('bg-success')).toBe(true);
    expect(wrapper.hasClass('navbar')).toBe(true);
    expect(wrapper.hasClass('navbar-toggleable-sm')).toBe(true);
    expect(wrapper.hasClass('navbar-light')).toBe(true);
    expect(wrapper.hasClass('navbar-inverse')).toBe(true);
    expect(wrapper.hasClass('navbar-fixed-top')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '..';

describe('Navbar', () => {
  it('should render .navbar markup', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-fluid"></div></nav>');
  });

  it('should render default .navbar-expand class', () => {
    const wrapper = shallow(<Navbar expand />);

    expect(wrapper.html()).toBe('<nav class="navbar navbar-expand"><div class="container-fluid"></div></nav>');
  });

  it('should render size based .navbar-expand-* classes', () => {
    const wrapper = shallow(<Navbar expand="md" />);

    expect(wrapper.html()).toBe('<nav class="navbar navbar-expand-md"><div class="container-fluid"></div></nav>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Navbar tag="div" />);

    expect(wrapper.html()).toBe('<div class="navbar"><div class="container-fluid"></div></div>');
  });

  it('should render role', () => {
    const wrapper = shallow(<Navbar role="navigation" />);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar"><div class="container-fluid"></div></nav>');
  });

  it('should support container options', () => {
    let wrapper = shallow(<Navbar container={false} />);
    expect(wrapper.html()).toBe('<nav class="navbar"></nav>');

    wrapper = shallow(<Navbar container />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container"></div></nav>');

    wrapper = shallow(<Navbar container="xs" />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-xs"></div></nav>');

    wrapper = shallow(<Navbar container="sm" />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-sm"></div></nav>');

    wrapper = shallow(<Navbar container="md" />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-md"></div></nav>');

    wrapper = shallow(<Navbar container="lg" />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-lg"></div></nav>');

    wrapper = shallow(<Navbar container="xl" />);
    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-xl"></div></nav>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Navbar>Children</Navbar>);

    expect(wrapper.html()).toBe('<nav class="navbar"><div class="container-fluid">Children</div></nav>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Navbar className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar')).toBe(true);
  });

  it('should render prop based classes', () => {
    const wrapper = shallow(<Navbar light dark expand="sm" color="success" full sticky="top" fixed="top" />);

    expect(wrapper.hasClass('bg-success')).toBe(true);
    expect(wrapper.hasClass('navbar')).toBe(true);
    expect(wrapper.hasClass('navbar-expand-sm')).toBe(true);
    expect(wrapper.hasClass('navbar-light')).toBe(true);
    expect(wrapper.hasClass('navbar-dark')).toBe(true);
    expect(wrapper.hasClass('fixed-top')).toBe(true);
    expect(wrapper.hasClass('sticky-top')).toBe(true);
  });
});

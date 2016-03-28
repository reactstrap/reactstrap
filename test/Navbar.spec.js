/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from 'reactstrap';

describe('Navbar', () => {
  it('should render .navbar markup', () => {
    const wrapper = shallow(<Navbar/>);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar"></nav>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Navbar tag="div"/>);

    expect(wrapper.html()).toBe('<div role="navigation" class="navbar"></div>');
  });

  it('sholid render children', () => {
    const wrapper = shallow(<Navbar>Children</Navbar>);

    expect(wrapper.html()).toBe('<nav role="navigation" class="navbar">Children</nav>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Navbar className="extra"/>);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar')).toBe(true);
  });
});

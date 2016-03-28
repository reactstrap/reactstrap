/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { NavbarToggler } from 'reactstrap';

describe('NavbarToggler', () => {
  it('should render .navbar-toggler markup', () => {
    const wrapper = shallow(<NavbarToggler/>);

    expect(wrapper.html()).toBe('<button type="button" class="navbar-toggler">☰</button>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavbarToggler tag="div"/>);

    expect(wrapper.html()).toBe('<div type="button" class="navbar-toggler">☰</div>');
  });

  it('sholid render children', () => {
    const wrapper = shallow(<NavbarToggler>Children</NavbarToggler>);

    expect(wrapper.html()).toBe('<button type="button" class="navbar-toggler">Children</button>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavbarToggler className="extra"/>);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar-toggler')).toBe(true);
  });
});

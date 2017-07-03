import React from 'react';
import { shallow } from 'enzyme';
import { NavbarBrand } from '../';

describe('NavbarBrand', () => {
  it('should render .navbar-brand markup', () => {
    const wrapper = shallow(<NavbarBrand />);

    expect(wrapper.html()).toBe('<a class="navbar-brand"></a>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavbarBrand tag="div" />);

    expect(wrapper.html()).toBe('<div class="navbar-brand"></div>');
  });

  it('sholid render children', () => {
    const wrapper = shallow(<NavbarBrand>Children</NavbarBrand>);

    expect(wrapper.html()).toBe('<a class="navbar-brand">Children</a>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavbarBrand className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar-brand')).toBe(true);
  });
});

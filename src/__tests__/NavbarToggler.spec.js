import React from 'react';
import { shallow } from 'enzyme';
import { NavbarToggler } from '../';

describe('NavbarToggler', () => {
  it('should render .navbar-toggler markup', () => {
    const wrapper = shallow(<NavbarToggler />);

    expect(wrapper.html()).toBe('<button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavbarToggler tag="div" />);

    expect(wrapper.html()).toBe('<div type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></div>');
  });

  it('should render children instead of navbar-toggler-icon ', () => {
    const wrapper = shallow(<NavbarToggler>Children</NavbarToggler>);

    expect(wrapper.html()).toBe('<button type="button" class="navbar-toggler">Children</button>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavbarToggler className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar-toggler')).toBe(true);
  });

  it('should apply .navbar-toggler-right when right prop is true', () => {
    const wrapper = shallow(<NavbarToggler right />);

    expect(wrapper.hasClass('navbar-toggler-right')).toBe(true);
  });

  it('should apply .navbar-toggler-left when left prop is true', () => {
    const wrapper = shallow(<NavbarToggler left />);

    expect(wrapper.hasClass('navbar-toggler-left')).toBe(true);
  });
});

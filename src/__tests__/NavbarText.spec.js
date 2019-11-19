import React from 'react';
import { shallow } from 'enzyme';
import { NavbarText } from '..';

describe('NavbarText', () => {
  it('should render .navbar-text markup', () => {
    const wrapper = shallow(<NavbarText />);

    expect(wrapper.html()).toBe('<span class="navbar-text"></span>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavbarText tag="div" />);

    expect(wrapper.html()).toBe('<div class="navbar-text"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<NavbarText>Children</NavbarText>);

    expect(wrapper.html()).toBe('<span class="navbar-text">Children</span>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavbarText className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar-text')).toBe(true);
  });
});

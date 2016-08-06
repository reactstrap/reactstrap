/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from 'reactstrap';

describe('NavItem', () => {
  it('should render .nav-item markup', () => {
    const wrapper = shallow(<NavItem />);

    expect(wrapper.html()).toBe('<li class="nav-item"></li>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavItem tag="div" />);

    expect(wrapper.html()).toBe('<div class="nav-item"></div>');
  });

  it('sholid render children', () => {
    const wrapper = shallow(<NavItem>Children</NavItem>);

    expect(wrapper.html()).toBe('<li class="nav-item">Children</li>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavItem className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('nav-item')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '..';

describe('Nav', () => {
  it('should render .nav markup', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper.html()).toBe('<ul class="nav"></ul>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Nav tag="nav" />);

    expect(wrapper.html()).toBe('<nav class="nav"></nav>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Nav>Children</Nav>);

    expect(wrapper.html()).toBe('<ul class="nav">Children</ul>');
  });

  it('should handle justified prop', () => {
    const wrapper = shallow(<Nav justified />);

    expect(wrapper.html()).toBe('<ul class="nav nav-justified"></ul>');
  });

  it('should handle fill prop', () => {
    const wrapper = shallow(<Nav fill />);

    expect(wrapper.html()).toBe('<ul class="nav nav-fill"></ul>');
  });

  it('should handle pills prop', () => {
    const wrapper = shallow(<Nav pills />);

    expect(wrapper.html()).toBe('<ul class="nav nav-pills"></ul>');
  });

  it('should handle pills prop with card prop', () => {
    const wrapper = shallow(<Nav pills card />);

    expect(wrapper.html()).toBe('<ul class="nav nav-pills card-header-pills"></ul>');
  });

  it('should handle tabs prop', () => {
    const wrapper = shallow(<Nav tabs />);

    expect(wrapper.html()).toBe('<ul class="nav nav-tabs"></ul>');
  });

  it('should handle tabs prop with card prop', () => {
    const wrapper = shallow(<Nav tabs card />);

    expect(wrapper.html()).toBe('<ul class="nav nav-tabs card-header-tabs"></ul>');
  });

  it('should handle vertical prop', () => {
    const wrapper = shallow(<Nav vertical />);

    expect(wrapper.html()).toBe('<ul class="nav flex-column"></ul>');
  });

  it('should handle vertical prop with string', () => {
    const wrapper = shallow(<Nav vertical="sm" />);

    expect(wrapper.html()).toBe('<ul class="nav flex-sm-column"></ul>');
  });

  it('should handle horizontal prop with string', () => {
    const wrapper = shallow(<Nav horizontal="end" />);

    expect(wrapper.html()).toBe('<ul class="nav justify-content-end"></ul>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Nav className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('nav')).toBe(true);
  });

  it('should render .navbar-nav class only', () => {
    const wrapper = shallow(<Nav navbar>Children</Nav>);

    expect(wrapper.html()).toBe('<ul class="navbar-nav">Children</ul>');
  });
});

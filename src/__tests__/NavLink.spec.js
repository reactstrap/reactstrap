import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from '../';

describe('NavLink', () => {
  it('should render .nav-link markup', () => {
    const wrapper = shallow(<NavLink />);

    expect(wrapper.html()).toBe('<a class="nav-link"></a>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavLink tag="div" />);

    expect(wrapper.html()).toBe('<div class="nav-link"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<NavLink>Children</NavLink>);

    expect(wrapper.html()).toBe('<a class="nav-link">Children</a>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavLink className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('nav-link')).toBe(true);
  });

  it('should render active class', () => {
    const wrapper = shallow(<NavLink active />);

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render disabled markup', () => {
    const wrapper = shallow(<NavLink disabled />);

    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('handles onClick prop', () => {
    const onClick = jasmine.createSpy('onClick');
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    const wrapper = shallow(
      <NavLink onClick={onClick} />
    );

    wrapper.find('a').simulate('click', e);
    expect(onClick).toHaveBeenCalled();
    expect(e.preventDefault).not.toHaveBeenCalled();
  });

  it('handles onClick events', () => {
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    const wrapper = shallow(
      <NavLink />
    );

    wrapper.find('a').simulate('click', e);
    expect(e.preventDefault).not.toHaveBeenCalled();
  });

  it('prevents link clicks via onClick for dropdown nav-items', () => {
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    const wrapper = shallow(
      <NavLink href="#" />
    );

    wrapper.find('a').simulate('click', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('is not called when disabled', () => {
    const onClick = jasmine.createSpy('onClick');
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    const wrapper = shallow(
      <NavLink disabled onClick={onClick} />
    );

    wrapper.find('a').simulate('click', e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });
});

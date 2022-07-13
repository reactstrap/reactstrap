import React from 'react';
import { shallow } from 'enzyme';
import { NavbarToggler } from '..';

describe('NavbarToggler', () => {
  it('should render .navbar-toggler markup', () => {
    const wrapper = shallow(<NavbarToggler />);

    expect(wrapper.prop('aria-label')).toBe('Toggle navigation');
    expect(wrapper.html()).toBe(
      '<button aria-label="Toggle navigation" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>',
    );
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavbarToggler tag="div" />);

    expect(wrapper.html()).toBe(
      '<div aria-label="Toggle navigation" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></div>',
    );
  });

  it('should render children instead of navbar-toggler-icon ', () => {
    const wrapper = shallow(<NavbarToggler>Children</NavbarToggler>);

    expect(wrapper.html()).toBe(
      '<button aria-label="Toggle navigation" type="button" class="navbar-toggler">Children</button>',
    );
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavbarToggler className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('navbar-toggler')).toBe(true);
  });
});

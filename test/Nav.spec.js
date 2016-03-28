/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from 'reactstrap';

describe('Nav', () => {
  it('should render .nav markup', () => {
    const wrapper = shallow(<Nav/>);

    expect(wrapper.html()).toBe('<ul class="nav"></ul>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Nav tag="nav"/>);

    expect(wrapper.html()).toBe('<nav class="nav"></nav>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Nav>Children</Nav>);

    expect(wrapper.html()).toBe('<ul class="nav">Children</ul>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Nav className="extra"/>);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('nav')).toBe(true);
  });
});

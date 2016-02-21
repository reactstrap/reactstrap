/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownItem } from '../lib';

describe('DropdownItem', () => {
  it('should render a single child', () => {
    const wrapper = mount(<DropdownItem>Ello world</DropdownItem>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('button').hasClass('dropdown-item')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render custom element', () => {
    const Link = (props) => <a href="/home" {...props}>{props.children}</a>;
    const wrapper = mount(<DropdownItem El={Link}>Home</DropdownItem>);

    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').hasClass('dropdown-item')).toBe(true);
    expect(wrapper.text()).toBe('Home');
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      const wrapper = mount(<DropdownItem header>Heading</DropdownItem>);

      expect(wrapper.find('h6').length).toBe(1);
      expect(wrapper.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(wrapper.text()).toBe('Heading');
    });
  });

  describe('divider', () => {
    it('should render a divider element', () => {
      const wrapper = mount(<DropdownItem divider/>);

      expect(wrapper.find('.dropdown-divider').length).toBe(1);
    });
  });
});

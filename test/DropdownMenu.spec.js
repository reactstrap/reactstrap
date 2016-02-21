/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownMenu } from '../lib';

describe('DropdownMenu', () => {
  it('should renders children', () => {
    const wrapper = mount(<DropdownMenu>Ello world</DropdownMenu>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('.dropdown-menu').length).toBe(1);
  });

  it('should renders right aligned menus', () => {
    const wrapper = mount(<DropdownMenu right>Ello world</DropdownMenu>);

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<DropdownMenu onClick={onClick.bind(this)}>Ello world</DropdownMenu>);
      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });
  });
});

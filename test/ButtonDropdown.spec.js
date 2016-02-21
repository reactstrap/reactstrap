/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../lib';


describe('ButtonDropdown', () => {
  it('should render a single child', () => {
    const wrapper = mount(<ButtonDropdown>Ello world</ButtonDropdown>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('.btn-group').length).toBe(1);
  });

  it('should render multiple children', () => {
    const wrapper = mount(
      <ButtonDropdown>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );

    expect(wrapper.find('.btn').text()).toBe('Toggle');
    expect(wrapper.find('.btn-group').length).toBe(1);
    expect(wrapper.find('.dropdown-item').length).toBe(1);
    expect(wrapper.children().length).toBe(2);
  });
});

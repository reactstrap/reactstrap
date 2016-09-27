import React from 'react';
import { mount } from 'enzyme';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../';


describe('NavDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const wrapper = mount(<NavDropdown isOpen={isOpen} toggle={toggle}>Ello world</NavDropdown>);

    expect(wrapper.find('.nav-item').text()).toBe('Ello world');
    expect(wrapper.find('.nav-item').length).toBe(1);
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    const wrapper = mount(
      <NavDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );

    expect(wrapper.find('.btn').text()).toBe('Toggle');
    expect(wrapper.find('.nav-item').length).toBe(1);
    expect(wrapper.find('.dropdown-item').length).toBe(1);
    expect(wrapper.children().length).toBe(2);
  });
});

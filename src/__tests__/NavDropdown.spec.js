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

    expect(wrapper.find('.nav-item').hostNodes().text()).toBe('Ello world');
    expect(wrapper.find('.nav-item').hostNodes().length).toBe(1);
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

    expect(wrapper.find('.btn').hostNodes().text()).toBe('Toggle');
    expect(wrapper.find('.nav-item').hostNodes().length).toBe(1);
    expect(wrapper.find('.dropdown-item').hostNodes().length).toBe(1);
    expect(wrapper.childAt(0).childAt(0).childAt(0).children().length).toBe(2);
  });
});

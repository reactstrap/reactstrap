import React from 'react';
import { mount } from 'enzyme';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from '..';

describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const wrapper = mount(<ButtonDropdown isOpen={isOpen} toggle={toggle}>Ello world</ButtonDropdown>);

    expect(wrapper.find('.btn-group').hostNodes().text()).toBe('Ello world');
    expect(wrapper.find('.btn-group').hostNodes().length).toBe(1);
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    const wrapper = mount(
      <ButtonDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );

    expect(wrapper.find('.btn').hostNodes().text()).toBe('Toggle');
    expect(wrapper.find('.btn-group').hostNodes().length).toBe(1);
    expect(wrapper.find('.dropdown-item').hostNodes().length).toBe(1);
    expect(wrapper.childAt(0).childAt(0).childAt(0).children().length).toBe(2);
  });
});

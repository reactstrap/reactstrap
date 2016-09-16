import React from 'react';
import { mount } from 'enzyme';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const wrapper = mount(<ButtonDropdown isOpen={isOpen} toggle={toggle}>Ello world</ButtonDropdown>);

    expect(wrapper.find('.btn-group').text()).toBe('Ello world');
    expect(wrapper.find('.btn-group').length).toBe(1);
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

    expect(wrapper.find('.btn').text()).toBe('Toggle');
    expect(wrapper.find('.btn-group').length).toBe(1);
    expect(wrapper.find('.dropdown-item').length).toBe(1);
    expect(wrapper.children().length).toBe(2);
  });
});

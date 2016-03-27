/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownMenu } from 'reactstrap';;

describe('DropdownMenu', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => isOpen = !isOpen;
  });

  it('should renders children', () => {
    isOpen = true;
    const wrapper = mount(<DropdownMenu isOpen={isOpen} toggle={toggle}><p>Content</p></DropdownMenu>);

    expect(wrapper.text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').length).toBe(1);
  });

  it('should renders right aligned menus', () => {
    isOpen = true;
    const wrapper = mount(<DropdownMenu isOpen={isOpen} toggle={toggle} right>Ello world</DropdownMenu>);

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should not render multiple children when isOpen is false', () => {
    const wrapper = mount(<DropdownMenu isOpen={isOpen} toggle={toggle} right>Ello world</DropdownMenu>);
    expect(wrapper.children().length).toBe(0);
  });
});

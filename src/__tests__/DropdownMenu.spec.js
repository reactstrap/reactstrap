import React from 'react';
import { shallow, mount } from 'enzyme';
import { DropdownMenu } from '../';

describe('DropdownMenu', () => {
  let isOpen;

  beforeEach(() => {
    isOpen = false;
  });

  it('should render children', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: {
          isOpen: isOpen
        }
      }
    );

    expect(wrapper.find('.dropdown-menu').text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').length).toBe(1);
  });

  it('should render right aligned menus', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: {
          isOpen: isOpen
        }
      }
    );

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should not render multiple children when isOpen is false', () => {
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: {
          isOpen: isOpen
        }
      }
    );

    expect(wrapper.children().length).toBe(0);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<DropdownMenu tag="main">Yo!</DropdownMenu>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });
});

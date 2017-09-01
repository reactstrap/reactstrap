import React from 'react';
import { mount } from 'enzyme';
import { DropdownMenu } from '../';

describe('DropdownMenu', () => {
  let isOpen;
  let dropup;
  let popperManager;

  beforeEach(() => {
    isOpen = false;
    dropup = false;
    popperManager = {
      getTargetNode: () => ({}),
    };
  });

  it('should render children', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').length).toBe(1);
  });

  it('should not have the class "show" when isOpen context is false', () => {
    isOpen = false;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hasClass('show')).toBe(false);
    expect(wrapper.find('.show').length).toBe(0);
  });

  it('should have the class "show" when isOpen context is true', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hasClass('show')).toBe(true);
    expect(wrapper.find('.show').length).toBe(1);
  });

  it('should render right aligned menus', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should not render multiple children when isOpen is false', () => {
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.children().length).toBe(0);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<DropdownMenu tag="main">Yo!</DropdownMenu>,
      {
        context: { isOpen, dropup, popperManager },
        childContextTypes: { popperManager }
      });

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });
});

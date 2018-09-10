import React from 'react';
import { mount, shallow } from 'enzyme';
import { Popper } from 'react-popper';
import { DropdownMenu } from '../';

describe('DropdownMenu', () => {
  let isOpen;
  let direction;
  let inNavbar;
  let popperManager;

  beforeEach(() => {
    isOpen = false;
    direction = 'down';
    inNavbar = false;
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
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').hostNodes().length).toBe(1);
  });

  it('should not have the class "show" when isOpen context is false', () => {
    isOpen = false;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(false);
    expect(wrapper.find('.show').hostNodes().length).toBe(0);
  });

  it('should have the class "show" when isOpen context is true', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu>
        <p>Content</p>
      </DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(true);
    expect(wrapper.find('.show').hostNodes().length).toBe(1);
  });

  it('should render left aligned menus by default', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-right')).toBe(false);
  });

  it('should render right aligned menus', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should render down when direction is unknown on the context', () => {
    isOpen = true;
    direction = 'unknown';
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render down when direction is "down" on the context', () => {
    isOpen = true;
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render up when direction is "up" on the context', () => {
    isOpen = true;
    direction = 'up';
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('top-start');
  });

  it('should render left when direction is "left" on the context', () => {
    isOpen = true;
    direction = 'left';
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('left-start');
  });

  it('should render right when direction is "right" on the context', () => {
    isOpen = true;
    direction = 'right';
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('right-start');
  });

  it('should not disable flip modifier by default', () => {
    isOpen = true;
    const wrapper = shallow(
      <DropdownMenu>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('modifiers')).toBe(undefined);
  });

  it('should disable flip modifier when flip is false', () => {
    isOpen = true;
    const wrapper = shallow(
      <DropdownMenu flip={false}>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.find(Popper).prop('modifiers')).toEqual({ flip: { enabled: false } });
  });

  it('should not render multiple children when isOpen is false', () => {
    const wrapper = mount(
      <DropdownMenu right>Ello world</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.childAt(0).children().length).toBe(0);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<DropdownMenu tag="main">Yo!</DropdownMenu>,
      {
        context: { isOpen, direction, inNavbar, popperManager },
        childContextTypes: { popperManager }
      });

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.childAt(0).hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });
});

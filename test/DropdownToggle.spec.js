/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle, Button } from 'reactstrap';

describe('DropdownToggle', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => isOpen = !isOpen;
  });

  it('should wrap text', () => {
    const wrapper = mount(
      <DropdownToggle>Ello world</DropdownToggle>,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('[data-toggle="dropdown"]').length).toBe(1);
  });

  it('should add default sr-only content', () => {
    const wrapper = mount(
      <DropdownToggle />,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.text()).toBe('Toggle Dropdown');
    expect(wrapper.find('.sr-only').length).toBe(1);
  });

  it('should add default sr-only content', () => {
    const wrapper = mount(
      <DropdownToggle aria-label="Dropup Toggle" />,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.text()).toBe('Dropup Toggle');
    expect(wrapper.find('.sr-only').length).toBe(1);
  });

  it('should render elements', () => {
    const wrapper = mount(
      <DropdownToggle>Click Me</DropdownToggle>,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render a caret', () => {
    const wrapper = mount(
      <DropdownToggle caret>Ello world</DropdownToggle>,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', () => {
    const wrapper = mount(
      <DropdownToggle split>Ello world</DropdownToggle>,
      {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      }
    );

    expect(wrapper.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(
        <DropdownToggle onClick={onClick.bind(this)}>Ello world</DropdownToggle>,
        {
          context: {
            isOpen: isOpen,
            toggle: toggle
          }
        }
      );
      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', () => {
      toggle = jasmine.createSpy('toggle');
      const wrapper = mount(
        <DropdownToggle>Ello world</DropdownToggle>,
        {
          context: {
            isOpen: isOpen,
            toggle: toggle
          }
        }
      );
      const instance = wrapper.instance();

      instance.onClick({ preventDefault: () => { } });
      expect(toggle).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('should preventDefault when disabled', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const wrapper = mount(
        <DropdownToggle disabled>Ello world</DropdownToggle>,
        {
          context: {
            isOpen: isOpen,
            toggle: toggle
          }
        }
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});

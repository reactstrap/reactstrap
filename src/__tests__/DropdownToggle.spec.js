import React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle } from '../';

describe('DropdownToggle', () => {
  let isOpen;
  let popperManager;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    popperManager = {
      setTargetNode: () => {}
    };
    toggle = () => {
      isOpen = !isOpen;
    };
  });

  it('should wrap text', () => {
    const wrapper = mount(
      <DropdownToggle>Ello world</DropdownToggle>,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should add default sr-only content', () => {
    const wrapper = mount(
      <DropdownToggle />,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.text()).toBe('Toggle Dropdown');
    expect(wrapper.find('.sr-only').length).toBe(1);
  });

  it('should add default sr-only content', () => {
    const wrapper = mount(
      <DropdownToggle aria-label="Dropup Toggle" />,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.text()).toBe('Dropup Toggle');
    expect(wrapper.find('.sr-only').length).toBe(1);
  });

  it('should render elements', () => {
    const wrapper = mount(
      <DropdownToggle>Click Me</DropdownToggle>,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render a caret', () => {
    const wrapper = mount(
      <DropdownToggle caret>Ello world</DropdownToggle>,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.hasClass('dropdown-toggle')).toBe(true);
  });

  describe('color', () => {
    it('should render the dropdown as a BUTTON element with default color secondary', () => {
      const wrapper = mount(
        <DropdownToggle />,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.find('button').length).toBe(1);
      expect(wrapper.find('button').hasClass('btn-secondary')).toBe(true);
    });

    it('should render the dropdown as a BUTTON element with explicit color success', () => {
      const wrapper = mount(
        <DropdownToggle color="success" />,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.find('button').length).toBe(1);
      expect(wrapper.find('button').hasClass('btn-success')).toBe(true);
    });

    it('should render the dropdown as an A element with no color attribute', () => {
      const wrapper = mount(
        <DropdownToggle tag="a" />,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.find('a').length).toBe(1);
      expect(wrapper.find('a[color]').length).toBe(0);
    });

    it('should render the dropdown as a DIV element with no color attribute', () => {
      const wrapper = mount(
        <DropdownToggle tag="div" color="success" />,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.find('div').length).toBe(1);
      expect(wrapper.find('div[color]').length).toBe(0);
    });
  });

  it('should render a split', () => {
    const wrapper = mount(
      <DropdownToggle split>Ello world</DropdownToggle>,
      {
        context: { isOpen, toggle, popperManager },
        childContextTypes: { popperManager }
      }
    );

    expect(wrapper.hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mount(
        <DropdownToggle onClick={() => onClick()}>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );
      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', () => {
      toggle = jest.fn();
      const wrapper = mount(
        <DropdownToggle>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );
      const instance = wrapper.instance();

      instance.onClick({
        preventDefault: () => {
        }
      });
      expect(toggle).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('should preventDefault when disabled', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(
        <DropdownToggle disabled>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });

  describe('nav', () => {
    it('should add .nav-link class', () => {
      const wrapper = mount(
        <DropdownToggle nav>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.find('a').length).toBe(1);
      expect(wrapper.find('.nav-link').length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', () => {
      const wrapper = mount(
        <DropdownToggle nav>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );

      expect(wrapper.prop('tag')).toBe(undefined);
    });

    it('should preventDefault', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(
        <DropdownToggle nav>Ello world</DropdownToggle>,
        {
          context: { isOpen, toggle, popperManager },
          childContextTypes: { popperManager }
        }
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});

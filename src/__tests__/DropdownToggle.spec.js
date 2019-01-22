import React from 'react';
import { mount } from 'enzyme';
import { Manager } from 'react-popper';
import { Dropdown, DropdownToggle } from '../';
import { omit } from './../utils';

class ContextDefineWrapper extends React.Component {
  static childContextTypes = Dropdown.childContextTypes;

  getChildContext = () => ({
    isOpen: false,
    inNavbar: false,
    toggle: () => {
      this.isOpen = !this.isOpen;
    },
    ...omit(this.props, ['children'])
  })

  render = () => <Manager>{this.props.children}</Manager>
}

const mountWithContext = (node, context) => {
  return mount(
    <ContextDefineWrapper {...context}>{node}</ContextDefineWrapper>
  ).find(node.type);
};

describe('DropdownToggle', () => {
  it('should wrap text', () => {
    const wrapper = mountWithContext(
      <DropdownToggle>Ello world</DropdownToggle>
    );

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should add default sr-only content', () => {
    const wrapper = mountWithContext(<DropdownToggle />);

    expect(wrapper.text()).toBe('Toggle Dropdown');
    expect(wrapper.find('.sr-only').hostNodes().length).toBe(1);
  });

  it('should add default sr-only content', () => {
    const wrapper = mountWithContext(
      <DropdownToggle aria-label="Dropup Toggle" />
    );

    expect(wrapper.text()).toBe('Dropup Toggle');
    expect(wrapper.find('.sr-only').hostNodes().length).toBe(1);
  });

  it('should render elements', () => {
    const wrapper = mountWithContext(
      <DropdownToggle>Click Me</DropdownToggle>
    );

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').hostNodes().length).toBe(1);
  });

  it('should render a caret', () => {
    const wrapper = mountWithContext(
      <DropdownToggle caret>Ello world</DropdownToggle>
    );

    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('dropdown-toggle')).toBe(true);
  });

  describe('color', () => {
    it("should render the dropdown as a BUTTON element with default color secondary", () => {
      const wrapper = mountWithContext(<DropdownToggle />);

      expect(wrapper.find("button").hostNodes().length).toBe(1);
      expect(wrapper
          .find("button")
          .hostNodes()
          .hasClass("btn-secondary")).toBe(true);
    });

    it("should render the dropdown as a BUTTON element with explicit color success", () => {
      const wrapper = mountWithContext(<DropdownToggle color="success" />);

      expect(wrapper.find("button").hostNodes().length).toBe(1);
      expect(wrapper
          .find("button")
          .hostNodes()
          .hasClass("btn-success")).toBe(true);
    });

    it("should render the dropdown as an A element with no color attribute", () => {
      const wrapper = mountWithContext(<DropdownToggle tag="a" />);

      expect(wrapper.find("a").hostNodes().length).toBe(1);
      expect(wrapper.find("a[color]").hostNodes().length).toBe(0);
    });

    it('should render the dropdown as a DIV element with no color attribute', () => {
      const wrapper = mountWithContext(
        <DropdownToggle tag="div" color="success" />
      );

      expect(wrapper.find('div').hostNodes().length).toBe(1);
      expect(wrapper.find('div[color]').hostNodes().length).toBe(0);
    });
  });

  it('should render a split', () => {
    const wrapper = mountWithContext(
      <DropdownToggle split>Ello world</DropdownToggle>
    );

    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mountWithContext(
        <DropdownToggle onClick={() => onClick()}>Ello world</DropdownToggle>
      );
      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', () => {
      const toggle = jest.fn();
      const wrapper = mountWithContext(
        <DropdownToggle>Ello world</DropdownToggle>,
        { toggle }
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
      const wrapper = mountWithContext(
        <DropdownToggle disabled>Ello world</DropdownToggle>
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });

  describe('nav', () => {
    it('should add .nav-link class', () => {
      const wrapper = mountWithContext(
        <DropdownToggle nav>Ello world</DropdownToggle>
      );

      expect(wrapper.find('a').hostNodes().length).toBe(1);
      expect(wrapper.find('.nav-link').hostNodes().length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', () => {
      const wrapper = mountWithContext(
        <DropdownToggle nav>Ello world</DropdownToggle>
      );

      expect(wrapper.prop('tag')).toBe(undefined);
    });

    it('should preventDefault', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mountWithContext(
        <DropdownToggle nav>Ello world</DropdownToggle>
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});

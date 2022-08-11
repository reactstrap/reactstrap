import React from 'react';
import { mount } from 'enzyme';
import { DropdownItem } from '..';
import { DropdownContext } from '../DropdownContext';

describe('DropdownItem', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => {
      isOpen = !isOpen;
    };
  });

  it('should render a single child', () => {
    const wrapper = mount(<DropdownItem>Ello world</DropdownItem>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('button').hostNodes().hasClass('dropdown-item')).toBe(
      true,
    );
    expect(wrapper.find('button').hostNodes().length).toBe(1);
  });

  it('should render type as "button" by default when tag is "button"', () => {
    const wrapper = mount(<DropdownItem>Home</DropdownItem>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('button');
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as undefined by default when tag is "button" and toggle is false', () => {
    const wrapper = mount(<DropdownItem toggle={false}>Home</DropdownItem>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe(undefined);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as "button" by default when tag is "button" and onClick is provided', () => {
    const wrapper = mount(<DropdownItem onClick={() => {}}>Home</DropdownItem>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('button');
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as user defined when defined by the user', () => {
    const wrapper = mount(<DropdownItem type="submit">Home</DropdownItem>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('submit');
    expect(wrapper.text()).toBe('Home');
  });

  it('should not render type by default when the type is not defined and the tag is not "button"', () => {
    const wrapper = mount(<DropdownItem tag="a">Home</DropdownItem>);

    expect(wrapper.find('a').hostNodes().prop('type')).toBe(undefined);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render custom element', () => {
    function Link(props) {
      return (
        <a href="/home" {...props}>
          {props.children}
        </a>
      );
    }
    const wrapper = mount(<DropdownItem tag={Link}>Home</DropdownItem>);

    expect(wrapper.find('a').hostNodes().length).toBe(1);
    expect(wrapper.find('a').hostNodes().hasClass('dropdown-item')).toBe(true);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render dropdown item text', () => {
    const wrapper = mount(<DropdownItem text>text</DropdownItem>);

    expect(wrapper.find('span').hostNodes().length).toBe(1);
    expect(
      wrapper.find('span').hostNodes().hasClass('dropdown-item-text'),
    ).toBe(true);
    expect(wrapper.text()).toBe('text');
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      const wrapper = mount(<DropdownItem header>Heading</DropdownItem>);

      expect(wrapper.find('h6').hostNodes().length).toBe(1);
      expect(wrapper.find('h6').hostNodes().hasClass('dropdown-header')).toBe(
        true,
      );
      expect(wrapper.text()).toBe('Heading');
    });
  });

  describe('active', () => {
    it('should render an active class', () => {
      const wrapper = mount(<DropdownItem active />);

      expect(wrapper.find('.active').hostNodes().length).toBe(1);
    });
  });

  describe('divider', () => {
    it('should render a divider element', () => {
      const wrapper = mount(<DropdownItem divider />);

      expect(wrapper.find('.dropdown-divider').hostNodes().length).toBe(1);
    });
  });

  describe('link (with href)', () => {
    it('should render an anchor tag', () => {
      const wrapper = mount(<DropdownItem href="#">GO!</DropdownItem>);

      expect(wrapper.find('a').hostNodes().length).toBe(1);
      expect(wrapper.find('a').hostNodes().hasClass('dropdown-item')).toBe(
        true,
      );
      expect(wrapper.text()).toBe('GO!');
    });
  });

  describe('onClick', () => {
    it('should not be called when disabled', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(<DropdownItem disabled>Item</DropdownItem>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should not be called when divider is set', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(<DropdownItem divider />);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should not be called when header item', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(<DropdownItem header>Header</DropdownItem>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should be called when not disabled, heading, or divider', () => {
      const e = { preventDefault: jest.fn() };
      const onClick = jest.fn();
      const wrapper = mount(
        <DropdownContext.Provider value={{ toggle: toggle }}>
          <DropdownItem onClick={() => onClick()}>Click me</DropdownItem>
        </DropdownContext.Provider>,
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(onClick).toHaveBeenCalled();
    });

    it('should call onClick prop', () => {
      toggle = jest.fn();
      const clickHandler = jest.fn();
      const wrapper = mount(
        <DropdownContext.Provider value={{ toggle: toggle }}>
          <DropdownItem onClick={clickHandler}>Click me</DropdownItem>
        </DropdownContext.Provider>,
      );

      wrapper.simulate('click');
      expect(clickHandler).toHaveBeenCalled();
      expect(toggle).toHaveBeenCalled();
    });

    it('should call toggle', () => {
      toggle = jest.fn();
      const wrapper = mount(
        <DropdownContext.Provider value={{ toggle: toggle }}>
          <DropdownItem>Click me</DropdownItem>
        </DropdownContext.Provider>,
      );

      wrapper.simulate('click');
      expect(toggle).toHaveBeenCalled();
    });
  });
});

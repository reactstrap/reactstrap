/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { DropdownItem } from 'reactstrap';

describe('DropdownItem', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => isOpen = !isOpen;
  });

  it('should render a single child', () => {
    const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle}>Ello world</DropdownItem>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('button').hasClass('dropdown-item')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render custom element', () => {
    const Link = (props) => <a href="/home" {...props}>{props.children}</a>;
    const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} tag={Link}>Home</DropdownItem>);

    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').hasClass('dropdown-item')).toBe(true);
    expect(wrapper.text()).toBe('Home');
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} header>Heading</DropdownItem>);

      expect(wrapper.find('h6').length).toBe(1);
      expect(wrapper.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(wrapper.text()).toBe('Heading');
    });
  });

  describe('divider', () => {
    it('should render a divider element', () => {
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} divider/>);

      expect(wrapper.find('.dropdown-divider').length).toBe(1);
    });
  });

  describe('onClick', () => {
    it('should not be called when disabled', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} disabled>Item</DropdownItem>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should not be called when divider is set', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} divider/>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should not be called when header item', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} header>Header</DropdownItem>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('should be called when not disabled, heading, or divider', () => {
      const e = { preventDefault: jasmine.createSpy('preventDefault') };
      const onClick = jasmine.createSpy('onClick');
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={toggle} onClick={onClick.bind(this)}>Click me</DropdownItem>);
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(onClick).toHaveBeenCalled();
    });

    it('should call toggle', () => {
      isOpen = true;
      let props = jasmine.createSpyObj('props', ['toggle']);
      const wrapper = mount(<DropdownItem isOpen={isOpen} toggle={props.toggle}>Click me</DropdownItem>);

      wrapper.simulate('click');
      expect(props.toggle).toHaveBeenCalled();
    });
  });
});

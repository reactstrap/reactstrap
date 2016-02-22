/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../lib';


describe('Dropdown', () => {
  it('should render a single child', () => {
    const wrapper = mount(<Dropdown>Ello world</Dropdown>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('.dropdown').length).toBe(1);
  });

  it('should render multiple children', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(wrapper.find('.btn').text()).toBe('Toggle');
    expect(wrapper.find('.dropdown').length).toBe(1);
    expect(wrapper.find('.dropdown-item').length).toBe(1);
    expect(wrapper.children().length).toBe(2);
  });

  it('toggles state', () => {
    const wrapper = mount(
      <Dropdown>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(wrapper.state('open')).toBe(false);
    wrapper.find('[data-toggle="dropdown"]').simulate('click');
    expect(wrapper.state('open')).toBe(true);
    wrapper.find('.dropdown-menu').simulate('click');
    expect(wrapper.state('open')).toBe(true);
    wrapper.find('[data-toggle="dropdown"]').simulate('click');
    expect(wrapper.state('open')).toBe(false);
  });

  describe('disabled', () => {
    it('does not toggle state', () => {
      const wrapper = mount(
        <Dropdown disabled>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Item</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.state('open')).toBe(false);
      wrapper.find('[data-toggle="dropdown"]').simulate('click');
      expect(wrapper.state('open')).toBe(false);
    });
  });

  describe('closeDropdown', () => {
    it('sets open state to false when already open', () => {
      const wrapper = mount(
        <Dropdown open>
          <DropdownToggle>Toggle</DropdownToggle>
        </Dropdown>
      );
      const instance = wrapper.instance();

      expect(wrapper.state('open')).toBe(true);
      instance.closeDropdown();
      expect(wrapper.state('open')).toBe(false);
    });

    it('does nothing when not open', () => {
      const wrapper = mount(
        <Dropdown>
          <DropdownToggle>Toggle</DropdownToggle>
        </Dropdown>
      );
      const instance = wrapper.instance();

      expect(wrapper.state('open')).toBe(false);
      instance.closeDropdown();
      expect(wrapper.state('open')).toBe(false);
    });
  });

  describe('componentWillUnmount', () => {
    it('should call closeDropdown', () => {
      const wrapper = mount(
        <Dropdown>
          <DropdownToggle>Toggle</DropdownToggle>
        </Dropdown>
      );
      const instance = wrapper.instance();

      spyOn(instance, 'componentWillUnmount').and.callThrough();
      spyOn(instance, 'closeDropdown').and.callThrough();

      expect(instance.componentWillUnmount).not.toHaveBeenCalled();
      expect(instance.closeDropdown).not.toHaveBeenCalled();

      wrapper.unmount();

      expect(instance.componentWillUnmount).toHaveBeenCalled();
      expect(instance.closeDropdown).toHaveBeenCalled();
    });
  });

  describe('handleDocumentClick', () => {
    it('should call closeDropdown', () => {
      const wrapper = mount(
        <Dropdown open>
          <DropdownToggle>Toggle</DropdownToggle>
        </Dropdown>
      );
      const instance = wrapper.instance();
      spyOn(instance, 'closeDropdown').and.callThrough();
      instance.handleDocumentClick();

      expect(instance.closeDropdown).toHaveBeenCalled();
      expect(wrapper.state('open')).toBe(false);
    });
  });

  describe('handleContainerClick', () => {
    it('calls e.nativeEvent.stopImmediatePropagation', () => {
      const wrapper = mount(
        <Dropdown>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Item</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
      const instance = wrapper.instance();
      const eventData = {
        nativeEvent: {
          stopImmediatePropagation: jasmine.createSpy('stopImmediatePropagation')
        }
      };
      spyOn(instance, 'handleContainerClick').and.callThrough();

      expect(wrapper.state('open')).toBe(false);
      wrapper.find('[data-toggle="dropdown"]').simulate('click');
      expect(wrapper.state('open')).toBe(true);
      expect(instance.handleContainerClick).not.toHaveBeenCalled();
      wrapper.find('.dropdown-menu').simulate('click', eventData);
      expect(wrapper.state('open')).toBe(true);
      expect(instance.handleContainerClick).toHaveBeenCalled();
      expect(eventData.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();
    });
  });
});

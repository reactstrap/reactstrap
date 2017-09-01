import React from 'react';
import { mount } from 'enzyme';
import { Popover, PopoverHeader, PopoverBody } from '../';

describe('Popover', () => {
  let element;
  let isOpen;
  let toggle;
  let placement;

  beforeEach(() => {
    element = document.createElement('div');
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    placement = 'top';

    element.setAttribute('id', 'popover-target');

    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });

  it('should render inner popper when isOpen', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(wrapper.find('.popover').length).toBe(1);
    expect(wrapper.find('.popover-inner').length).toBe(1);
    expect(wrapper.find('.popover-header').length).toBe(1);
    expect(wrapper.find('.popover-body').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render inner popper when not isOpen', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(wrapper.find('.popover').length).toBe(0);
    expect(wrapper.find('.popover-inner').length).toBe(0);
    expect(wrapper.find('.popover-header').length).toBe(0);
    expect(wrapper.find('.popover-body').length).toBe(0);
    wrapper.unmount();
  });

  it('should be able to show the popover', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(isOpen).toBe(false);

    expect(wrapper.find('.popover.show').length).toBe(0);
    expect(wrapper.find('.popover').length).toBe(0);
    expect(wrapper.find('.popover-inner').length).toBe(0);
    expect(wrapper.find('.popover-header').length).toBe(0);
    expect(wrapper.find('.popover-body').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    expect(isOpen).toBe(true);
    expect(wrapper.find('.popover.show').length).toBe(1);
    expect(wrapper.find('.popover').length).toBe(1);
    expect(wrapper.find('.popover-inner').length).toBe(1);
    expect(wrapper.find('.popover-header').length).toBe(1);
    expect(wrapper.find('.popover-body').length).toBe(1);

    wrapper.unmount();
  });

  it('should be able to hide the popover', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(isOpen).toBe(true);
    expect(wrapper.find('.popover').length).toBe(1);
    expect(wrapper.find('.popover-inner').length).toBe(1);
    expect(wrapper.find('.popover-header').length).toBe(1);
    expect(wrapper.find('.popover-body').length).toBe(1);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    expect(isOpen).toBe(false);
    expect(wrapper.find('.popover').length).toBe(0);
    expect(wrapper.find('.popover-inner').length).toBe(0);
    expect(wrapper.find('.popover-header').length).toBe(0);
    expect(wrapper.find('.popover-body').length).toBe(0);

    wrapper.unmount();
  });

  it('default toggle prop does nothing', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} placement={placement} target="popover-target">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.props.toggle();
    expect(isOpen).toBe(false);

    wrapper.unmount();
  });

  it('should allow custom classes to be added to the popover-inner', () => {
    const wrapper = mount(
      <Popover isOpen placement={placement} target="popover-target" className="popover-special">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(wrapper.find('.popover-inner').hasClass('popover-special')).toBe(true);

    wrapper.unmount();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { Popover, PopoverTitle, PopoverContent, TetherContent } from 'reactstrap';

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

  it('should render inner TetherContent when isOpen', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverTitle>Title</PopoverTitle>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(wrapper.find(TetherContent).length).toBe(1);
    expect(document.getElementsByClassName('popover').length).toBe(1);
    expect(document.getElementsByClassName('popover-inner').length).toBe(1);
    expect(document.getElementsByClassName('popover-title').length).toBe(1);
    expect(document.getElementsByClassName('popover-content').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render inner TetherContent when not isOpen', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverTitle>Title</PopoverTitle>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(wrapper.find(TetherContent).length).toBe(0);
    expect(document.getElementsByClassName('popover').length).toBe(0);
    expect(document.getElementsByClassName('popover-inner').length).toBe(0);
    expect(document.getElementsByClassName('popover-title').length).toBe(0);
    expect(document.getElementsByClassName('popover-content').length).toBe(0);
    wrapper.unmount();
  });

  it('should be able to show the popover', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverTitle>Title</PopoverTitle>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(isOpen).toBe(false);

    expect(wrapper.find(TetherContent).length).toBe(0);
    expect(document.getElementsByClassName('popover').length).toBe(0);
    expect(document.getElementsByClassName('popover-inner').length).toBe(0);
    expect(document.getElementsByClassName('popover-title').length).toBe(0);
    expect(document.getElementsByClassName('popover-content').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    expect(isOpen).toBe(true);
    expect(wrapper.find(TetherContent).length).toBe(1);
    expect(document.getElementsByClassName('popover').length).toBe(1);
    expect(document.getElementsByClassName('popover-inner').length).toBe(1);
    expect(document.getElementsByClassName('popover-title').length).toBe(1);
    expect(document.getElementsByClassName('popover-content').length).toBe(1);

    wrapper.unmount();
  });

  it('should be able to hide the popover', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="popover-target">
        <PopoverTitle>Title</PopoverTitle>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(isOpen).toBe(true);
    expect(wrapper.find(TetherContent).length).toBe(1);
    expect(document.getElementsByClassName('popover').length).toBe(1);
    expect(document.getElementsByClassName('popover-inner').length).toBe(1);
    expect(document.getElementsByClassName('popover-title').length).toBe(1);
    expect(document.getElementsByClassName('popover-content').length).toBe(1);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    expect(isOpen).toBe(false);
    expect(wrapper.find(TetherContent).length).toBe(0);
    expect(document.getElementsByClassName('popover').length).toBe(0);
    expect(document.getElementsByClassName('popover-inner').length).toBe(0);
    expect(document.getElementsByClassName('popover-title').length).toBe(0);
    expect(document.getElementsByClassName('popover-content').length).toBe(0);

    wrapper.unmount();
  });

  it('default toggle prop does nothing', () => {
    const wrapper = mount(
      <Popover isOpen={isOpen} placement={placement} target="popover-target">
        <PopoverTitle>Title</PopoverTitle>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.props.toggle();
    expect(isOpen).toBe(false);

    wrapper.unmount();
  });
});

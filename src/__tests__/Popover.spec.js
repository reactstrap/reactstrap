import React from 'react';
import { mount } from 'enzyme';
import { Popover, PopoverHeader, PopoverBody } from '../';

describe('Popover', () => {
  let element;
  let container;
  let outerTarget;
  let innerTarget;
  let isOpen;
  let toggle;
  let placement;

  beforeEach(() => {
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="outerTarget">This is the popover <span id="innerTarget">target</span>.</p>';
    container.setAttribute('id', 'container');
    outerTarget = document.getElementById('outerTarget');
    innerTarget = document.getElementById('innerTarget');
    element.appendChild(container);
    document.body.appendChild(element);
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    placement = 'top';

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    element = null;
  });

  it('should render inner popper when isOpen', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
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
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
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
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
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
      <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
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
      <Popover isOpen={isOpen} placement={placement} target="innerTarget">
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
      <Popover isOpen placement={placement} target="innerTarget" className="popover-special">
        <PopoverHeader>Title</PopoverHeader>
        <PopoverBody>Content</PopoverBody>
      </Popover>
    );

    expect(wrapper.find('.popover-inner').hasClass('popover-special')).toBe(true);

    wrapper.unmount();
  });

  it('should not handle outside of target clicks when isOpen is false', () => {
    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: outerTarget });
    jest.runTimersToTime(0); // toggle is still async
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should handle outside of target clicks when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(true);
    instance.handleDocumentClick({ target: outerTarget });
    jest.runTimersToTime(0); // toggle is still async
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear the hide timeout when handling outside of target clicks when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(true);
    instance._hideTimeout = 1;
    instance.handleDocumentClick({ target: outerTarget });
    jest.runTimersToTime(0); // toggle is still async
    expect(instance._hideTimeout).toBeUndefined();
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should NOT handle inner target clicks', () => {
    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    jest.runTimersToTime(0); // toggle is still async
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should not do anything when document click outside of target', () => {
    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should not call props.toggle when disabled ', () => {
    const props = createSpyObj('props', ['toggle']);
    const event = createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <Popover target="innerTarget" disabled isOpen={isOpen} toggle={props.toggle}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.toggle(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.toggle).not.toHaveBeenCalled();

    wrapper.detach();
  });

  it('should not throw when props.toggle is not provided ', () => {
    const event = createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <Popover target="innerTarget" isOpen={isOpen}>
        Popover Content
      </Popover>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.toggle(event);

    wrapper.detach();
  });

  describe('delay', () => {
    it('should accept a number', () => {
      isOpen = true;
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={200}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hide();
      jest.runTimersToTime(0); // toggle is still async
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should accept an object', () => {
      isOpen = true;
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hide();
      jest.runTimersToTime(0); // toggle is still async
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should use default value if value is missing from object', () => {
      isOpen = true;
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={{ hide: 250 }}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hide();
      jest.runTimersToTime(0); // toggle is still async
      expect(isOpen).toBe(true);
      jest.runTimersToTime(250); // Default hide value: 250
      expect(isOpen).toBe(false);
    });
  });

  describe('hide', () => {
    it('should call toggle when isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();
      jest.runTimersToTime(0); // toggle is still async

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();
      jest.runTimersToTime(0); // toggle is still async

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('show', () => {
    it('should call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();
      jest.runTimersToTime(0); // toggle is still async

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
          Popover Content
        </Popover>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();
      jest.runTimersToTime(0); // toggle is still async

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });
});

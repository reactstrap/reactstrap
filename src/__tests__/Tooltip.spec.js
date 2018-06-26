import React from 'react';
import { mount } from 'enzyme';
import { Tooltip, PopperContent } from '../';

describe('Tooltip', () => {
  let isOpen;
  let toggle;
  let element;
  let container;
  let target;
  let innerTarget;
  let synthEvent;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="target">This is the tooltip <span id="innerTarget">target</span>.</p>';
    element.setAttribute('id', 'testContainer');
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);
    target = document.getElementById('target');
    innerTarget = document.getElementById('innerTarget');
    synthEvent = { persist: () => {} };

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    document.body.innerHTML = '';
    element = null;
    container = null;
    target = null;
    innerTarget = null;
  });

  it('should render with "hideArrow" false by default', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>);

    expect(wrapper.prop('hideArrow')).toBe(false);
  });

  it('should render with "hideArrow" true when "hideArrow" prop is truthy', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle} hideArrow>
        Tooltip Content
      </Tooltip>);

    expect(wrapper.prop('hideArrow')).toBe(true);
  });

  it('should not render children if isOpen is false', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );

    const tooltips = document.getElementsByClassName('tooltip');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(0);
    expect(target.className).toBe('');
    expect(tooltips.length).toBe(0);
    wrapper.detach();
  });

  it('should render if isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );

    const tooltips = document.getElementsByClassName('tooltip');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(0);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should render with target object', () => {
    isOpen = true;
    const wrapper = mount(
      <Tooltip target={document.getElementById('target')} isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );

    const tooltips = document.getElementsByClassName('tooltip');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(0);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should toggle isOpen', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );

    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.setProps({ isOpen: true });
    expect(document.getElementsByClassName('tooltip').length).toBe(1);
    wrapper.setProps({ isOpen: false });
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should handle target clicks', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should handle inner target clicks', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    expect(isOpen).toBe(true);
    wrapper.detach();
  });

  it('should not do anything when document click outside of target', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear hide timeout if it exists on target click', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.onMouseLeaveTooltip();
    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    jest.runTimersToTime(200);
    expect(isOpen).toBe(true);
    wrapper.setProps({ isOpen: isOpen });
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should allow custom classes to be added to the tooltip-inner', () => {
    const wrapper = mount(
      <Tooltip isOpen target="target" innerClassName="tooltip-special">
        Tooltip Content
      </Tooltip>
    );

    expect(document.getElementsByClassName('tooltip-inner')[0].className.indexOf('tooltip-special') > -1).toBe(true);

    wrapper.unmount();
  });

  it('should allow custom classes to be added to the tooltip', () => {
    const wrapper = mount(
      <Tooltip isOpen target="target" className="tooltip-special">
        Tooltip Content
      </Tooltip>
    );

    expect(document.getElementsByClassName('tooltip')[0].className.indexOf('tooltip-special') > -1).toBe(true);

    wrapper.unmount();
  });

  it('should pass down custom modifiers', () => {
    const wrapper = mount(
      <Tooltip
        isOpen
        target="target"
        modifiers={{
          preventOverflow: { boundariesElement: 'viewport' },
          offset: { offset: 2 },
        }}
      >
        Tooltip Content
      </Tooltip>
    );

    expect(wrapper.find(PopperContent).props().modifiers).toEqual({
      preventOverflow: { boundariesElement: 'viewport' },
      offset: { offset: 2 },
    });

    wrapper.unmount();
  });

  it('should pass down cssModule', () => {
    const cssModule = {};
    const wrapper = mount(
      <Tooltip
        isOpen
        target="target"
        cssModule={cssModule}
      >
        Tooltip Content
      </Tooltip>
    );
    expect(wrapper.find(PopperContent).props().cssModule).toBe(cssModule);
    wrapper.unmount();
  });

  it('should pass down offset', () => {
    const wrapper = mount(
      <Tooltip isOpen target="target" offset="100">
        Tooltip content
      </Tooltip>
    );

    expect(wrapper.find(PopperContent).props().offset).toEqual('100');
    wrapper.unmount();
  });

  it('should not call props.toggle when disabled ', () => {
    const props = createSpyObj('props', ['toggle']);
    const event = createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <Tooltip target="target" disabled isOpen={isOpen} toggle={props.toggle}>
        Tooltip Content
      </Tooltip>,
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
      <Tooltip target="target" isOpen={isOpen}>
        Tooltip Content
      </Tooltip>,
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
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should accept an object', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should use default value if value is missing from object', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 0 }}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
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
        <Tooltip target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('show', () => {
    it('should call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseOverTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();

      expect(isOpen).toBe(false);
      expect(spy).not.toHaveBeenCalled();

      instance.onMouseOverTooltip();
      jest.runTimersToTime(200);

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={0}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();
      jest.runTimersToTime(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseLeaveTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltip();
      jest.runTimersToTime(200);

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen is false', () => {
      const spy = jest.fn(toggle);
      isOpen = false;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={0}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      jest.runTimersToTime(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(false);
      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('autohide', () => {
    it('should keep tooltip around when false and onmouseleave from tooltip content', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(100);
      expect(spy).not.toHaveBeenCalled();
      jest.runTimersToTime(200);
      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('clears showTimeout in onMouseLeaveTooltipContent', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();
      expect(instance._showTimeout).toBeTruthy();
      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(300);
      expect(instance._showTimeout).toBeFalsy();
      wrapper.detach();
    });

    it('clears hide timeout in onMouseOverTooltipContent', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(100);
      expect(instance._hideTimeout).toBeTruthy();
      instance.onMouseOverTooltipContent();
      expect(instance._hideTimeout).toBeFalsy();
      instance.onMouseOverTooltipContent();
      wrapper.detach();
    });

    it('should not keep tooltip around when autohide is true and tooltip content is hovered over', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();
      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();
      instance.onMouseLeaveTooltip();
      jest.runTimersToTime(100);
      instance.onMouseOverTooltipContent();
      jest.runTimersToTime(200);
      expect(spy).toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent(synthEvent);
      expect(instance._hideTimeout).toBeFalsy();
      wrapper.detach();
    });
  });
});

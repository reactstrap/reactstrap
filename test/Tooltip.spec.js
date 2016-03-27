/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Tooltip } from 'reactstrap';;


describe('Tooltip', () => {
  let isOpen;
  let toggle;
  let element;
  let container;
  let target;
  let innerTarget;

  beforeEach(() => {
    isOpen = false;
    toggle = () => isOpen = !isOpen;
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="target">This is the tooltip <span id="innerTarget">target</span>.</p>';
    element.setAttribute('id', 'testContainer');
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);
    target = document.getElementById('target');
    innerTarget = document.getElementById('innerTarget');

    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
    document.body.removeChild(element);
    element = null;
    container = null;
    target = null;
    innerTarget = null;
  });

  it('should not render children if isOpen is false', () => {
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();
    const tooltips = document.getElementsByClassName('tooltip');

    expect(ReactDOM.findDOMNode(instance)).toBe(null);
    expect(target.className).toBe('');
    expect(tooltips.length).toBe(0);
    wrapper.detach();
  });

  it('should render if isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();
    const tooltips = document.getElementsByClassName('tooltip');

    expect(ReactDOM.findDOMNode(instance)).toBe(null);
    expect(target.className.indexOf('bs-tether-target') > -1).toBe(true);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should toggle isOpen', () => {
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });

    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.setProps({ isOpen: true });
    expect(document.getElementsByClassName('tooltip').length).toBe(1);
    wrapper.setProps({ isOpen: false });
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should handle target clicks', () => {
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
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
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    expect(isOpen).toBe(true);
    wrapper.detach();
  });

  it('should not do anything when document click outside of target', () => {
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear timeout if it exists on target click', () => {
    const wrapper = mount(
      (
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();

    instance.onMouseLeaveTooltip();
    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    jasmine.clock().tick(250);
    expect(isOpen).toBe(true);
    wrapper.setProps({ isOpen: isOpen });
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should not call props.toggle when disabled ', () => {
    const props = jasmine.createSpyObj('props', ['toggle']);
    const event = jasmine.createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      (
        <Tooltip target="target" disabled isOpen={isOpen} toggle={props.toggle}>
          Tooltip Content
        </Tooltip>
    ), { attachTo: container });
    const instance = wrapper.instance();

    instance.toggle(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.toggle).not.toHaveBeenCalled();

    wrapper.detach();
  });

  describe('onTimeout', () => {
    it('should call toggle when isOpen', () => {
      spyOn(Tooltip.prototype, 'toggle').and.callThrough();
      isOpen = true;
      const wrapper = mount(
        (
          <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
            Tooltip Content
          </Tooltip>
      ), { attachTo: container });
      const instance = wrapper.instance();

      expect(Tooltip.prototype.toggle).not.toHaveBeenCalled();

      instance.onTimeout();

      expect(Tooltip.prototype.toggle).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', () => {
      spyOn(Tooltip.prototype, 'toggle').and.callThrough();
      const wrapper = mount(
        (
          <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
            Tooltip Content
          </Tooltip>
      ), { attachTo: container });
      const instance = wrapper.instance();

      expect(Tooltip.prototype.toggle).not.toHaveBeenCalled();

      instance.onTimeout();

      expect(Tooltip.prototype.toggle).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseOverTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      spyOn(Tooltip.prototype, 'toggle').and.callThrough();
      const wrapper = mount(
        (
          <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
            Tooltip Content
          </Tooltip>
      ), { attachTo: container });
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();

      expect(isOpen).toBe(false);
      expect(Tooltip.prototype.toggle).not.toHaveBeenCalled();

      instance.onMouseOverTooltip();

      expect(Tooltip.prototype.toggle).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen', () => {
      spyOn(Tooltip.prototype, 'toggle').and.callThrough();
      isOpen = true;
      const wrapper = mount(
        (
          <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
            Tooltip Content
          </Tooltip>
      ), { attachTo: container });
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();

      expect(isOpen).toBe(true);
      expect(Tooltip.prototype.toggle).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });
});

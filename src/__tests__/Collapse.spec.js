import React from 'react';
import { shallow, mount } from 'enzyme';
import Collapse from '../Collapse';

describe('Collapse', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    jasmine.clock().install();
  });

  afterEach(() => {
    // fast forward time for collapse to fade out
    jasmine.clock().tick(400);
    jasmine.clock().uninstall();
  });

  describe('delay', () => {
    it('should accept a number', () => {
      const wrapper = mount(<Collapse isOpen={isOpen} delay={200} />);
      toggle();
      wrapper.setProps({ isOpen: isOpen });
      jasmine.clock().tick(200);
      expect(wrapper.state('collapse')).toEqual('SHOWN');
      wrapper.unmount();
    });

    it('should accept an object', () => {
      const wrapper = mount(<Collapse isOpen={isOpen} delay={{ show: 110, hide: 120 }} />);
      toggle();
      wrapper.setProps({ isOpen: isOpen });
      jasmine.clock().tick(110);
      expect(wrapper.state('collapse')).toEqual('SHOWN');

      toggle();
      wrapper.setProps({ isOpen: isOpen });
      jasmine.clock().tick(120);
      expect(wrapper.state('collapse')).toEqual('HIDDEN');
    });

    it('should use default value if value is missing from object', () => {
      const wrapper = mount(<Collapse isOpen={isOpen} delay={{ show: 110 }} />);
      toggle();
      wrapper.setProps({ isOpen: isOpen });
      jasmine.clock().tick(110);
      expect(wrapper.state('collapse')).toEqual('SHOWN');

      toggle();
      wrapper.setProps({ isOpen: isOpen });
      jasmine.clock().tick(350);
      expect(wrapper.state('collapse')).toEqual('HIDDEN');
    });
  });

  it('should render children', () => {
    const wrapper = shallow(<Collapse><p>hello</p></Collapse>).find('p');
    expect(wrapper.text()).toBe('hello');
  });

  it('should have default isOpen value', () => {
    const wrapper = shallow(<Collapse />);
    expect(wrapper.instance().props.isOpen).toEqual(false);
  });

  it('should render with class "collapse"', () => {
    const wrapper = shallow(<Collapse />);
    expect(wrapper.hasClass('collapse')).toEqual(true);
  });

  it('should render with class "navbar"', () => {
    const wrapper = shallow(<Collapse navbar />);
    expect(wrapper.hasClass('navbar-collapse')).toEqual(true);
  });

  it('should render with class "show" when isOpen is true', () => {
    const wrapper = shallow(<Collapse isOpen />);
    expect(wrapper.hasClass('show')).toEqual(true);
  });

  it('should set height to null when isOpen is true', () => {
    isOpen = true;
    const wrapper = shallow(<Collapse isOpen={isOpen} />);
    expect(wrapper.state('height')).toBe(null);
  });

  it('should not set height when isOpen is false', () => {
    const wrapper = shallow(<Collapse isOpen={isOpen} />);
    expect(wrapper.state('height')).toBe(null);
  });

  it('should render with class "collapse" with default collapse state', () => {
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    wrapper.setState({ collapse: null });
    jasmine.clock().tick(360);
    wrapper.update();
    expect(wrapper.find('.collapse').length).toBe(1);
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to true before transition', () => {
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('collapse')).toEqual('SHOW');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to true after transition', () => {
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(350);
    expect(wrapper.state('collapse')).toEqual('SHOWN');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to false before transition', () => {
    isOpen = true;
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('collapse')).toEqual('HIDE');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to false after transition', () => {
    isOpen = true;
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(360);
    expect(wrapper.state('collapse')).toEqual('HIDDEN');
    wrapper.unmount();
  });

  it('should set inline style to 0 when isOpen change to false', () => {
    isOpen = true;
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('height')).toBe(0);
    wrapper.unmount();
  });

  it('should remove inline style when isOpen change to true after transition', () => {
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(380);
    expect(wrapper.state('height')).toBe(null);
    wrapper.unmount();
  });

  it('should remove timeout tag after unmount', () => {
    spyOn(Collapse.prototype, 'componentWillUnmount').and.callThrough();
    const wrapper = mount(<Collapse isOpen={isOpen} />);
    wrapper.unmount();
    expect(Collapse.prototype.componentWillUnmount).toHaveBeenCalled();
  });

  it('should call onOpened after opening', () => {
    const onOpened = jasmine.createSpy('onOpenedSpy');
    const onClosed = jasmine.createSpy('onClosedSpy');
    const wrapper = mount(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({ isOpen });
    jasmine.clock().tick(380);
    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClosed after closing', () => {
    const onOpened = jasmine.createSpy('onOpenedSpy');
    const onClosed = jasmine.createSpy('onClosedSpy');
    toggle();
    const wrapper = mount(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

    jasmine.clock().tick(380);
    expect(isOpen).toBe(true);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({ isOpen });
    jasmine.clock().tick(380);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Arrow, Popper } from 'react-popper';
import { PopperContent, PopperTargetHelper } from '../';

describe('PopperContent', () => {
  let element;
  let container;

  beforeEach(() => {
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="outerTarget">This is the popover <span id="target">target</span>.</p>';
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    element = null;
  });

  it('should render a null by default', () => {
    const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

    expect(wrapper.type()).toBe(null);
  });

  it('should NOT render children when isOpen is false', () => {
    const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

    expect(wrapper.type()).toBe(null);
  });

  it('should render children when isOpen is true and container is inline', () => {
    const wrapper = mount(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render an Arrow in the Popper when isOpen is true and container is inline', () => {
    const wrapper = mount(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.containsMatchingElement(<Arrow />)).toBe(true);
  });

  it('should not render children', () => {
    const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

    expect(wrapper.type()).toBe(null);
  });

  it('should pass additional classNames to the popper', () => {
    const wrapper = shallow(<PopperContent className="extra" target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should have placement class of top by default', () => {
    const wrapper = shallow(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.find('.auto').exists()).toBe(true);
  });

  it('should override placement class', () => {
    const wrapper = shallow(<PopperContent placement="top" target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.find('.auto').exists()).toBe(false);
    expect(wrapper.find('.top').exists()).toBe(true);
  });

  it('should allow for a placement prefix', () => {
    const wrapper = shallow(<PopperContent placementPrefix="dropdown" target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.find('.dropdown-auto').exists()).toBe(true);
  });

  it('should allow for a placement prefix with custom placement', () => {
    const wrapper = shallow(<PopperContent placementPrefix="dropdown" placement="top" target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.find('.dropdown-auto').exists()).toBe(false);
    expect(wrapper.find('.dropdown-top').exists()).toBe(true);
  });

  it('should render custom tag for the popper', () => {
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });

  it('should handle placement changes from popperjs', () => {
    jest.spyOn(PopperContent.prototype, 'setState');
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

    const instance = wrapper.instance();
    const placement = 'top';
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).toHaveBeenCalled();
    expect(wrapper.state('placement')).toBe(placement);

    PopperContent.prototype.setState.mockRestore();
  });

  it('should not update when placement does not change', () => {
    jest.spyOn(PopperContent.prototype, 'setState');
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

    const instance = wrapper.instance();
    const placement = 'top';
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).toHaveBeenCalled();
    PopperContent.prototype.setState.mockClear();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    expect(wrapper.state('placement')).toBe(placement);

    PopperContent.prototype.setState.mockRestore();
  });

  it('should return data from handle placement changes', () => {
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

    const instance = wrapper.instance();
    const data = { placement: 'top' };
    const result = instance.handlePlacementChange(data);
    expect(result).toEqual(data);
  });
});

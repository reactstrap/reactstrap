import React from 'react';
import { mount, shallow } from 'enzyme';
import { Collapse, UncontrolledCollapse } from '..';

describe('UncontrolledCollapse', () => {
  let toggler;
  let togglers;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <button id="toggler">Click Me</button>
        <button class="toggler">Toggler 1</button>
        <button class="toggler">Toggler 2</button>
      </div>`;
    toggler = document.getElementById('toggler');
    togglers = document.getElementsByClassName('toggler');
  });

  afterEach(() => {
    // if (jest.isMockFunction(UncontrolledCollapse.prototype.toggle)) {
    //   UncontrolledCollapse.prototype.toggle.mockRestore();
    // }
    document.body.innerHTML = '';
    toggler = null;
    togglers = null;
  });

  it('should be a Collapse', () => {
    const collapse = shallow(
      <UncontrolledCollapse toggler="#toggler">Yo!</UncontrolledCollapse>,
    ).dive();

    expect(collapse.type()).toBe(Collapse);
  });

  it('should have isOpen default to false', () => {
    const collapse = shallow(
      <UncontrolledCollapse toggler="#toggler">Yo!</UncontrolledCollapse>,
    ).dive();

    expect(collapse.prop('isOpen')).toBe(false);
  });

  it('should toggle isOpen when toggle is called', () => {
    const collapse = shallow(
      <UncontrolledCollapse toggler="#toggler">Yo!</UncontrolledCollapse>,
    ).dive();

    toggler.click();
    collapse.update();

    expect(collapse.prop('isOpen')).toBe(true);
  });

  // Come back here!!!!!! Convert to RTL!
  it('should call toggle when toggler is clicked', () => {
    const component = mount(<UncontrolledCollapse toggler="#toggler">Yo!</UncontrolledCollapse>).childAt(0);
    console.log(component.type());
    const toggleStub = jest.spyOn(component.instance(), 'toggle');

    expect(toggleStub.mock.calls.length).toBe(0);

    toggler.click();

    expect(toggleStub.mock.calls.length).toBe(1);
  });

  it('should toggle for multiple togglers', () => {
    const collapse = shallow(
      <UncontrolledCollapse toggler=".toggler">Yo!</UncontrolledCollapse>,
    ).dive();

    expect(collapse.prop('isOpen')).toBe(false);

    togglers[0].click();
    collapse.update();

    expect(collapse.prop('isOpen')).toBe(true);

    togglers[1].click();
    collapse.update();

    expect(collapse.prop('isOpen')).toBe(false);
  });

  it('should remove eventListeners when unmounted', () => {
    jest.spyOn(UncontrolledCollapse.prototype, 'componentWillUnmount');
    jest.spyOn(UncontrolledCollapse.prototype, 'toggle');

    const wrapper = mount(
      <UncontrolledCollapse toggler="#toggler">Yo!</UncontrolledCollapse>,
    );

    expect(UncontrolledCollapse.prototype.toggle.mock.calls.length).toBe(0);
    expect(
      UncontrolledCollapse.prototype.componentWillUnmount.mock.calls.length,
    ).toBe(0);

    toggler.click();

    expect(UncontrolledCollapse.prototype.toggle.mock.calls.length).toBe(1);

    wrapper.unmount();

    expect(
      UncontrolledCollapse.prototype.componentWillUnmount.mock.calls.length,
    ).toBe(1);

    toggler.click();

    expect(UncontrolledCollapse.prototype.toggle.mock.calls.length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { UncontrolledNavDropdown, NavDropdown } from '../';

describe('UncontrolledNavDropdown', () => {
  it('should render NavDropdown', () => {
    const wrapper = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);

    expect(wrapper.type()).toBe(NavDropdown);
  });

  it('should have isOpen default to false', () => {
    const dropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
    expect(dropdown.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const dropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
    expect(dropdown.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const dropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
    const instance = dropdown.instance();
    instance.toggle();
    dropdown.update();
    expect(dropdown.prop('isOpen')).toBe(true);
  });
});

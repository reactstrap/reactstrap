import React from 'react';
import { shallow } from 'enzyme';
import {
  Alert,
  ButtonDropdown,
  Dropdown,
  Tooltip,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from '../';

describe('UncontrolledAlert', () => {
  it('should be an Alert', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.type()).toBe(Alert);
  });

  it('should have isOpen default to true', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.prop('isOpen')).toBe(true);
  });

  it('should have toggle function', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    expect(alert.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
    const instance = alert.instance();
    instance.toggle();
    expect(alert.prop('isOpen')).toBe(false);
  });
});

describe('UncontrolledButtonDropdown', () => {
  it('should be an ButtonDropdown', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.type()).toBe(ButtonDropdown);
  });

  it('should have isOpen default to false', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    expect(buttonDropdown.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
    const instance = buttonDropdown.instance();
    instance.toggle();
    expect(buttonDropdown.prop('isOpen')).toBe(true);
  });
});

describe('UncontrolledDropdown', () => {
  it('should be an Dropdown', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.type()).toBe(Dropdown);
  });

  it('should have isOpen default to false', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    expect(dropdown.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
    const instance = dropdown.instance();
    instance.toggle();
    expect(dropdown.prop('isOpen')).toBe(true);
  });
});

describe('UncontrolledTooltip', () => {
  it('should be an Tooltip', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.type()).toBe(Tooltip);
  });

  it('should have isOpen default to false', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.prop('isOpen')).toBe(false);
  });

  it('should have toggle function', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    expect(tooltip.prop('toggle')).toEqual(expect.any(Function));
  });

  it('should toggle isOpen when toggle is called', () => {
    const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
    const instance = tooltip.instance();
    instance.toggle();
    expect(tooltip.prop('isOpen')).toBe(true);
  });
});

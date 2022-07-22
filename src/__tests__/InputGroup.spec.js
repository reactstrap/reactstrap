import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  InputGroup,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
} from '..';
import Dropdown from '../Dropdown';

describe('InputGroup', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.childAt(0).type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "input-group" class', () => {
    const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

    expect(wrapper.childAt(0).hasClass('input-group')).toBe(true);
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    const wrapper = shallow(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(wrapper.childAt(0).hasClass('input-group-whatever')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<InputGroup className="other">Yo!</InputGroup>);

    expect(wrapper.childAt(0).hasClass('other')).toBe(true);
    expect(wrapper.childAt(0).hasClass('input-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<InputGroup tag="main">Yo!</InputGroup>);

    expect(wrapper.childAt(0).type()).toBe('main');
  });

  describe('When type="dropdown"', () => {
    it('should render Dropdown', () => {
      const wrapper = shallow(<InputGroup type="dropdown" />);

      expect(wrapper.type()).toBe(Dropdown);
    });

    it('should call toggle when input is clicked', () => {
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <InputGroup type="dropdown" isOpen toggle={() => { }}>
          <Input />
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </InputGroup>
        , { attachTo: document.body });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      document.querySelector('input.form-control').click();

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });
  });
});

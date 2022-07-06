import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button, ButtonToggle } from '..';

describe('ButtonToggle', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonToggle>Ello world</ButtonToggle>);

    expect(wrapper.type()).toEqual(Button);
    expect(wrapper.first(Button).shallow().text()).toBe('Ello world');
  });

  it('should have button already toggled for defaultValue true', () => {
    const wrapper = shallow(<ButtonToggle defaultValue>Ello world</ButtonToggle>);

    expect(wrapper.find(Button).props().active).toBe(true);
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mount(<ButtonToggle onClick={onClick}>Testing Click</ButtonToggle>);

      wrapper.find('button').hostNodes().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    it('should not call props.onClick if it exists and button is disabled', () => {
      const onClick = jest.fn();
      const wrapper = mount(<ButtonToggle onClick={onClick} disabled>Testing Click</ButtonToggle>);

      wrapper.find('button').hostNodes().simulate('click');
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('onFocus', () => {
    it('calls props.onFocus if it exists', () => {
      const onFocus = jest.fn();
      const wrapper = mount(<ButtonToggle onFocus={onFocus}>Testing Click</ButtonToggle>);

      wrapper.find('button').hostNodes().simulate('focus');
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('onBlur', () => {
    it('calls props.onBlur if it exists', () => {
      const onBlur = jest.fn();
      const wrapper = mount(<ButtonToggle onBlur={onBlur}>Testing Click</ButtonToggle>);

      wrapper.find('button').hostNodes().simulate('blur');
      expect(onBlur).toHaveBeenCalled();
    });
  });
});

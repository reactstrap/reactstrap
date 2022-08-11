import React from 'react';
import { shallow, mount } from 'enzyme';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render a close button', () => {
    const wrapper = shallow(<CloseButton />);
    expect(wrapper.hasClass('btn-close')).toBe(true);
  });

  it('should render white variant', () => {
    const wrapper = shallow(<CloseButton variant="white" />);
    expect(wrapper.hasClass('btn-close-white')).toBe(true);
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mount(<CloseButton onClick={onClick} />);

      wrapper.find('button').hostNodes().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    it('returns the value returned by props.onClick', () => {
      const onClick = jest.fn(() => 1234);
      const wrapper = mount(<CloseButton onClick={onClick} />);

      const result = wrapper.find('button').props().onClick();
      expect(onClick).toHaveBeenCalled();
      expect(result).toEqual(1234);
    });

    it('is not called when disabled', () => {
      const onClick = jest.fn();
      const wrapper = mount(<CloseButton onClick={onClick} disabled />);

      wrapper.find('button').hostNodes().simulate('click');
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

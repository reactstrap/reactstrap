import React from 'react';
import { shallow, mount } from 'enzyme';
import Collapse from '../Collapse';

describe('Collapse', () => {
  it('should render children', () => {
    const wrapper = shallow(<Collapse><p>hello</p></Collapse>).find('p');
    expect(wrapper.text()).toBe('hello');
  });

  it('should have default isOpen value', () => {
    const wrapper = shallow(<Collapse />);
    expect(wrapper.instance().props.isOpen).toEqual(false);
  });

  it('should render with calss "collapse"', () => {
    const wrapper = shallow(<Collapse />);
    expect(wrapper.hasClass('collapse')).toEqual(true);
  });

  it('should render with calss "in" when isOpen is true', () => {
    const wrapper = shallow(<Collapse isOpen />);
    expect(wrapper.hasClass('in')).toEqual(true);
  });

  it('should change state with { collapse: ${State} } when isOpen change to false', () => {
    const wrapper = mount(<Collapse isOpen />);
    wrapper.setProps({ isOpen: false });
    expect(wrapper.state('collapse')).toEqual('HIDE');
  });
});

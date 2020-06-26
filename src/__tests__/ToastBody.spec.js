import React from 'react';
import { shallow } from 'enzyme';
import { ToastBody } from '../';

describe('ToastBody', () => {
  it('should render with "toast-body" class', () => {
    const wrapper = shallow(<ToastBody>Yo!</ToastBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('toast-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ToastBody className="other">Yo!</ToastBody>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('toast-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ToastBody tag="main">Yo!</ToastBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('toast-body')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });
});

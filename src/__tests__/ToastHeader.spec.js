import React from 'react';
import { shallow } from 'enzyme';
import { ToastHeader } from '../';

describe('ToastHeader', () => {
  it('should render with "toast-header" class', () => {
    const wrapper = shallow(<ToastHeader>Yo!</ToastHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('toast-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ToastHeader className="other">Yo!</ToastHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('toast-header')).toBe(true);
  });

  it('should render close button', () => {
    const wrapper = shallow(<ToastHeader toggle={() => { }} className="other">Yo!</ToastHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('toast-header')).toBe(true);
    expect(wrapper.find('button.close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ToastHeader tag="p">Yo!</ToastHeader>).childAt(0);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('p');
  });

  it('should render custom wrapping tag', () => {
    const wrapper = shallow(<ToastHeader wrapTag="main">Yo!</ToastHeader>);

    expect(wrapper.type()).toBe('main');
  });

  it('should render close button with custom aria-label', () => {
    const wrapper = shallow(<ToastHeader toggle={() => { }} className="other" closeAriaLabel="oseclay">Yo!</ToastHeader>);

    const closeButton = wrapper.find('button.close').first();
    expect(closeButton.prop('aria-label')).toBe('oseclay');
  });

  it('should render close button with default icon', () => {
    const wrapper = shallow(<ToastHeader toggle={() => { }}>Yo!</ToastHeader>);

    const closeButtonIcon = wrapper.find('button.close span');
    const defaultIcon = String.fromCharCode(215);
    expect(closeButtonIcon.text()).toEqual(defaultIcon);
  });

  it('should render close button with custom icon', () => {
    const wrapper = shallow(<ToastHeader toggle={() => { }} charCode={'X'}>Yo!</ToastHeader>);

    const closeButtonIcon = wrapper.find('button.close span');
    expect(closeButtonIcon.text()).toEqual('X');
  });

  it('should render icon with a color', () => {
    const wrapper = shallow(<ToastHeader icon="primary">Yo!</ToastHeader>);

    const closeButtonIcon = wrapper.find('svg');
    expect(closeButtonIcon.hasClass('text-primary')).toBe(true);
  });

  it('should render a custom icon', () => {
    const wrapper = shallow(<ToastHeader icon={<span className="my-header">icon</span>}>Yo!</ToastHeader>);

    const closeButtonIcon = wrapper.find('span.my-header');
    expect(closeButtonIcon.text()).toEqual("icon");
  });
});

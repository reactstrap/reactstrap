import React from 'react';
import { shallow, mount } from 'enzyme';
import { ModalBody } from '../';

describe('ModalBody', () => {
  it('should render with "modal-body" class', () => {
    const wrapper = shallow(<ModalBody>Yo!</ModalBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ModalBody className="other">Yo!</ModalBody>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalBody tag="main">Yo!</ModalBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-body')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><ModalBody ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});

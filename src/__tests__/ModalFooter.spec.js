import React from 'react';
import { shallow, mount } from 'enzyme';
import { ModalFooter } from '../';

describe('ModalFooter', () => {
  it('should render with "modal-footer" class', () => {
    const wrapper = shallow(<ModalFooter>Yo!</ModalFooter>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ModalFooter className="other">Yo!</ModalFooter>);

    expect(wrapper.hasClass('modal-footer')).toBe(true);
    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalFooter tag="main">Yo!</ModalFooter>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-footer')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><ModalFooter ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

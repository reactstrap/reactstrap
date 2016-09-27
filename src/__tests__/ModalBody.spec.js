import React from 'react';
import { shallow } from 'enzyme';
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
});

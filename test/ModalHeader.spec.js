import React from 'react';
import { shallow } from 'enzyme';
import { ModalHeader } from 'reactstrap';

describe('ModalHeader', () => {
  it('should render with "modal-header" class', () => {
    const wrapper = shallow(<ModalHeader>Yo!</ModalHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ModalHeader className="other">Yo!</ModalHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-header')).toBe(true);
  });

  it('should render close button', () => {
    const wrapper = shallow(<ModalHeader toggle={() => {}} className="other">Yo!</ModalHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-header')).toBe(true);
    expect(wrapper.find('button.close').length).toBe(1);
  });
});

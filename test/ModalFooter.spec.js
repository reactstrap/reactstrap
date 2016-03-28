import React from 'react';
import { shallow } from 'enzyme';
import { ModalFooter } from 'reactstrap';

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
});

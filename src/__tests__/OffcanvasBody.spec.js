import React from 'react';
import { shallow } from 'enzyme';
import { OffcanvasBody } from '../';

describe('OffcanvasBody', () => {
  it('should render with "offcanvas-body" class', () => {
    const wrapper = shallow(<OffcanvasBody>Yo!</OffcanvasBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('offcanvas-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<OffcanvasBody className="other">Yo!</OffcanvasBody>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('offcanvas-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<OffcanvasBody tag="main">Yo!</OffcanvasBody>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('offcanvas-body')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });
});

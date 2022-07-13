import React from 'react';
import { shallow } from 'enzyme';
import { OffcanvasHeader } from '..';

describe('OffcanvasHeader', () => {
  it('should render with "offcanvas-header" class', () => {
    const wrapper = shallow(<OffcanvasHeader>Yo!</OffcanvasHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('offcanvas-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(
      <OffcanvasHeader className="other">Yo!</OffcanvasHeader>,
    );

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('offcanvas-header')).toBe(true);
  });

  it('should render close button', () => {
    const wrapper = shallow(
      <OffcanvasHeader toggle={() => {}} className="other">
        Yo!
      </OffcanvasHeader>,
    );

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('offcanvas-header')).toBe(true);
    expect(wrapper.find('button.btn-close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(
      <OffcanvasHeader tag="p">Yo!</OffcanvasHeader>,
    ).childAt(0);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('p');
  });

  it('should render custom wrapping tag', () => {
    const wrapper = shallow(
      <OffcanvasHeader wrapTag="main">Yo!</OffcanvasHeader>,
    );

    expect(wrapper.type()).toBe('main');
  });
});

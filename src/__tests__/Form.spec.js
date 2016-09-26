import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../';

describe('Form', () => {
  it('should render with "form" tag', () => {
    const wrapper = shallow(<Form>Yo!</Form>);

    expect(wrapper.type()).toBe('form');
  });

  it('should render children', () => {
    const wrapper = shallow(<Form>Yo!</Form>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "form-inline" class', () => {
    const wrapper = shallow(<Form inline>Yo!</Form>);

    expect(wrapper.hasClass('form-inline')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Form className="other">Yo!</Form>);

    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Form tag="main">Yo!</Form>);

    expect(wrapper.type()).toBe('main');
  });
});

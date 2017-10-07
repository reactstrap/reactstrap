import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from '../';

describe('FormGroup', () => {
  it('should render with "form" tag by default', () => {
    const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render children', () => {
    const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "form-group" class by default', () => {
    const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-group')).toBe(true);
  });

  it('should not render with "form-check" nor "form-check-inline"  class by default', () => {
    const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-check')).toBe(false);
    expect(wrapper.hasClass('form-check-inline')).toBe(false);
  });

  it('should render with "form-check" class when check prop is truthy', () => {
    const wrapper = shallow(<FormGroup check>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-check')).toBe(true);
  });

  it('should not render with "form-check-inline" class when check prop is truthy and inline prop is falsy', () => {
    const wrapper = shallow(<FormGroup check>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-check-inline')).toBe(false);
  });

  it('should render with "form-check" and "form-check-inline" classes when check prop and inline prop are both truthy', () => {
    const wrapper = shallow(<FormGroup check inline>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-check')).toBe(true);
    expect(wrapper.hasClass('form-check-inline')).toBe(true);
  });

  it('should not render with "form-check-inline" class when check prop is falsy and inline prop is truthy', () => {
    const wrapper = shallow(<FormGroup inline>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-check-inline')).toBe(false);
  });

  it('should not render with "form-group" class when check prop is truthy', () => {
    const wrapper = shallow(<FormGroup check>Yo!</FormGroup>);

    expect(wrapper.hasClass('form-group')).toBe(false);
  });

  it('should not render with "disabled" class when disabled prop is truthy but check is not', () => {
    const wrapper = shallow(<FormGroup disabled>Yo!</FormGroup>);

    expect(wrapper.hasClass('disabled')).toBe(false);
  });

  it('should render with "disabled" class when both check disabled props are truthy', () => {
    const wrapper = shallow(<FormGroup check disabled>Yo!</FormGroup>);

    expect(wrapper.hasClass('disabled')).toBe(true);
    expect(wrapper.hasClass('form-check')).toBe(true);
  });

  it('should render with "row" class when row prop is truthy', () => {
    const wrapper = shallow(<FormGroup row>Yo!</FormGroup>);

    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('should not render with "row" class when row prop is not truthy', () => {
    const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

    expect(wrapper.hasClass('row')).toBe(false);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<FormGroup className="other">Yo!</FormGroup>);

    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<FormGroup tag="main">Yo!</FormGroup>);

    expect(wrapper.type()).toBe('main');
  });
});

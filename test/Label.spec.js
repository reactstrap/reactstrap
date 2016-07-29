/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'reactstrap';

describe('Label', () => {
  it('should render a label tag by default', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper.type()).toBe('label');
  });

  it('should render children', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Label className="extra">Yo!</Label>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render with "col-form-label" class when a col is provided', () => {
    const wrapper = shallow(<Label sm="6">Yo!</Label>);

    expect(wrapper.hasClass('col-form-label')).toBe(true);
  });

  it('should not render with "col-form-label" class when a col is not provided', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.hasClass('col-form-label')).toBe(false);
  });

  it('should pass col size specific classes as Strings', () => {
    const wrapper = shallow(<Label sm="6">Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should render with "sr-only" class when hidden prop is truthy', () => {
    const wrapper = shallow(<Label hidden>Yo!</Label>);

    expect(wrapper.hasClass('sr-only')).toBe(true);
  });

  it('should render with "form-check-label" class when check prop is truthy and inline is not', () => {
    const wrapper = shallow(<Label check>Yo!</Label>);

    expect(wrapper.hasClass('form-check-label')).toBe(true);
  });

  it('should not render with "form-check-inline" class when check prop is truthy and inline is not', () => {
    const wrapper = shallow(<Label check>Yo!</Label>);

    expect(wrapper.hasClass('form-check-inline')).toBe(false);
  });

  it('should render with "form-check-inline" class when check and inline props are truthy', () => {
    const wrapper = shallow(<Label check inline>Yo!</Label>);

    expect(wrapper.hasClass('form-check-inline')).toBe(true);
  });

  it('should not render with "form-check-inline" class when check and inline props are truthy', () => {
    const wrapper = shallow(<Label check inline>Yo!</Label>);

    expect(wrapper.hasClass('form-check-label')).toBe(false);
  });

  it('should not render with "form-check-inline" class when inline prop is truthy and check is not', () => {
    const wrapper = shallow(<Label inline>Yo!</Label>);

    expect(wrapper.hasClass('form-check-inline')).toBe(false);
  });

  it('should not render with "form-check-inline" nor "form-check-label" by default', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.hasClass('form-check-inline')).toBe(false);
    expect(wrapper.hasClass('form-check-label')).toBe(false);
  });

  it('should render with "col-form-label-${size}" class when size is provided', () => {
    const wrapper = shallow(<Label size="lg">Yo!</Label>);

    expect(wrapper.hasClass('col-form-label-lg')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const wrapper = shallow(<Label sm={6}>Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const wrapper = shallow(<Label sm={{ size: 6, push: 2, pull: 2, offset: 2 }}>Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('push-sm-2')).toBe(true);
    expect(wrapper.hasClass('pull-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass multiple col size specific classes via Objects', () => {
    const wrapper = shallow(<Label sm={{ size: 6, push: 2, pull: 2, offset: 2 }} md={{ size: 7, push: 1, pull: 1, offset: 1 }}>Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('push-sm-2')).toBe(true);
    expect(wrapper.hasClass('pull-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
    expect(wrapper.hasClass('col-md-7')).toBe(true);
    expect(wrapper.hasClass('push-md-1')).toBe(true);
    expect(wrapper.hasClass('pull-md-1')).toBe(true);
    expect(wrapper.hasClass('offset-md-1')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Label tag="main">Yo!</Label>);

    expect(wrapper.type()).toBe('main');
  });
});

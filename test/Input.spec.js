import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'reactstrap';

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const wrapper = shallow(<Input>Yo!</Input>);

    expect(wrapper.type()).toBe('input');
  });

  it('should render with "select" tag when type is "select"', () => {
    const wrapper = shallow(<Input type="select">Yo!</Input>);

    expect(wrapper.type()).toBe('select');
  });

  it('should render with "textarea" tag when type is "textarea"', () => {
    const wrapper = shallow(<Input type="textarea">Yo!</Input>);

    expect(wrapper.type()).toBe('textarea');
  });

  it('should render with "p" tag when static prop is truthy', () => {
    const wrapper = shallow(<Input type="select" static />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render with "form-control-static" class when static prop is truthy', () => {
    const wrapper = shallow(<Input type="select" static />);

    expect(wrapper.hasClass('form-control-static')).toBe(true);
  });

  it('should not render with "form-control" class when static prop is truthy', () => {
    const wrapper = shallow(<Input type="select" static />);

    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with custom tag when static prop is truthy and tag is provided', () => {
    const wrapper = shallow(<Input type="select" static tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should not render with custom tag when static prop is not truthy and tag is provided', () => {
    const wrapper = shallow(<Input type="select" tag="div" />);

    expect(wrapper.type()).toBe('select');
  });

  it('should render with "input" tag when type is not a special case', () => {
    const wrapper = shallow(<Input type="email" />);

    expect(wrapper.type()).toBe('input');
  });

  it('should render children', () => {
    const wrapper = shallow(<Input>Yo!</Input>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "form-control-${state}" class when state is provided', () => {
    const wrapper = shallow(<Input state="danger" />);

    expect(wrapper.hasClass('form-control-danger')).toBe(true);
  });

  it('should render with "form-control-${size}" class when size is provided', () => {
    const wrapper = shallow(<Input size="lg" />);

    expect(wrapper.hasClass('form-control-lg')).toBe(true);
  });

  it('should render with "form-control" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control')).toBe(true);
  });

  it('should not render with "form-control-file" nor "form-control-static" nor "form-check-input" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-static')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control" nor "form-control-static" nor "form-check-input" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-control-static')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when static prop is truthy', () => {
    const wrapper = shallow(<Input type="file" static />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control-static" nor "form-control" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-static')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control-static" nor "form-control" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-static')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-check-input" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should render with "form-check-input" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-control-file" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control-file')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Input className="other">Yo!</Input>);

    expect(wrapper.hasClass('other')).toBe(true);
  });
});

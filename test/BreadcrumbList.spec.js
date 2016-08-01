/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { BreadcrumbItem } from 'reactstrap';

describe('BreadcrumbItem', () => {
  it('should render children', () => {
    const wrapper = shallow(<BreadcrumbItem>Yo!</BreadcrumbItem>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render "li" by default', () => {
    const wrapper = shallow(<BreadcrumbItem>Yo!</BreadcrumbItem>);

    expect(wrapper.type()).toBe('li');
  });

  it('should render with the "breadcrumb-item" class', () => {
    const wrapper = shallow(<BreadcrumbItem>Default BreadcrumbItem</BreadcrumbItem>);

    expect(wrapper.hasClass('breadcrumb-item')).toBe(true);
  });

  it('should not render with the "active" class by default', () => {
    const wrapper = shallow(<BreadcrumbItem>Default BreadcrumbItem</BreadcrumbItem>);

    expect(wrapper.hasClass('active')).toBe(false);
  });

  it('should render with the "active" class when the avtive prop is truthy', () => {
    const wrapper = shallow(<BreadcrumbItem active>Default BreadcrumbItem</BreadcrumbItem>);

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<BreadcrumbItem tag="main">Yo!</BreadcrumbItem>);

    expect(wrapper.type()).toBe('main');
  });
});

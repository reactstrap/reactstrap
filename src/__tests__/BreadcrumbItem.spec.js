import React from 'react';
import { shallow, mount } from 'enzyme';
import { BreadcrumbItem } from '..';

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

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><BreadcrumbItem ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '..';

describe('Container', () => {
  it('should render .container markup', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.html()).toBe('<div class="container"></div>');
  });

  it('should render .container-fluid markup', () => {
    const wrapper = shallow(<Container fluid />);

    expect(wrapper.html()).toBe('<div class="container-fluid"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Container>Children</Container>);

    expect(wrapper.html()).toBe('<div class="container">Children</div>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Container className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Container tag="main">Yo!</Container>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });

  it('should render responsive breakpoints with string fluid props', () => {
    const wrapper = shallow(<Container fluid="md" />);

    expect(wrapper.hasClass('container')).toBe(false);
    expect(wrapper.hasClass('container-md')).toBe(true);
  });
});

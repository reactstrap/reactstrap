import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../';

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
});

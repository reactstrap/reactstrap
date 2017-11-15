import React from 'react';
import { shallow, mount } from 'enzyme';
import { Jumbotron } from '../';

describe('Jumbotron', () => {
  it('should render children', () => {
    const wrapper = shallow(<Jumbotron>Hello World</Jumbotron>);

    expect(wrapper.text()).toBe('Hello World');
  });

  it('should render elements as children', () => {
    const wrapper = mount(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

    expect(wrapper.find('h1').hostNodes().length).toBe(1);
    expect(wrapper.find('h1').hostNodes().text()).toBe('Hello from h1');
  });

  it('should have class jumbotron', () => {
    const wrapper = shallow(<Jumbotron>Hello</Jumbotron>);

    expect(wrapper.hasClass('jumbotron')).toBe(true);
  });

  it('should render fluid jumbotron', () => {
    const wrapper = shallow(<Jumbotron fluid>Hello</Jumbotron>);

    expect(wrapper.hasClass('jumbotron')).toBe(true);
    expect(wrapper.hasClass('jumbotron-fluid')).toBe(true);
  });

  it('should render custom class', () => {
    const wrapper = shallow(<Jumbotron className="custom-class">Hello</Jumbotron>);

    expect(wrapper.hasClass('custom-class')).toBe(true);
  });
});

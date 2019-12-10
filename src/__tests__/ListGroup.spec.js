import React from 'react';
import { shallow } from 'enzyme';
import { ListGroup } from '../';

describe('ListGroup', () => {
  it('should render with "list-group" class', () => {
    const wrapper = shallow(<ListGroup>Yo!</ListGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-group')).toBe(true);
  });

  it('should render with "flush"', () => {
    const wrapper = shallow(<ListGroup flush>Yo!</ListGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-group')).toBe(true);
    expect(wrapper.hasClass('list-group-flush')).toBe(true);
  });

  it('should render with "horizontal"', () => {
    const wrapper = shallow(<ListGroup horizontal>Yo!</ListGroup>);

    expect(wrapper.text()).toBe("Yo!");
    expect(wrapper.hasClass("list-group")).toBe(true);
    expect(wrapper.hasClass("list-group-horizontal")).toBe(true);
  });

  it('should not render with "horizontal" if flush is true', () => {
    const wrapper = shallow(<ListGroup flush horizontal>Yo!</ListGroup>);

    expect(wrapper.text()).toBe("Yo!");
    expect(wrapper.hasClass("list-group")).toBe(true);
    expect(wrapper.hasClass("list-group-flush")).toBe(true);
    expect(wrapper.hasClass("list-group-horizontal")).toBe(false);
  });

  it('should render with "horizontal-{breakpoint}"', () => {
    const wrapper = shallow(<ListGroup horizontal="lg">Yo!</ListGroup>);

    expect(wrapper.text()).toBe("Yo!");
    expect(wrapper.hasClass("list-group")).toBe(true);
    expect(wrapper.hasClass("list-group-horizontal-lg")).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ListGroup className="other">Yo!</ListGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('list-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ListGroup tag="main">Yo!</ListGroup>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-group')).toBe(true);
    expect(wrapper.find('main').length).toBe(1);
  });
});

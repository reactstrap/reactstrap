import React from 'react';
import { shallow } from 'enzyme';
import { ListGroup } from 'reactstrap';

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

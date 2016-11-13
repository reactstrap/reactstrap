import React from 'react';
import { shallow } from 'enzyme';
import ListGroupItem from '../ListGroupItem';

describe('ListGroupItem', () => {
  it('should render children', () => {
    const listGroupItem = shallow(<ListGroupItem>Yo!</ListGroupItem>).find('li');
    expect(listGroupItem.text()).toBe('Yo!');
  });

  it('should render with "list-group-item" class', () => {
    const wrapper = shallow(<ListGroupItem>Yo!</ListGroupItem>);
    expect(wrapper.hasClass('list-group-item')).toBe(true);
  });

  it('should render with "active" class when active is passed', () => {
    const wrapper = shallow(<ListGroupItem active>Yo!</ListGroupItem>);
    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render with "disabled" class when disabled is passed', () => {
    const wrapper = shallow(<ListGroupItem disabled>Yo!</ListGroupItem>);
    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should render with "list-group-item-action" class when action is passed', () => {
    const wrapper = shallow(<ListGroupItem action>Yo!</ListGroupItem>);
    expect(wrapper.hasClass('list-group-item-action')).toBe(true);
  });

  it('should render with "list-group-item-${color}" class when color is passed', () => {
    const wrapper = shallow(<ListGroupItem color="success">Yo!</ListGroupItem>);
    expect(wrapper.hasClass('list-group-item-success')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ListGroupItemText from '../ListGroupItemText';

describe('ListGroupItem', () => {
  it('should render children', () => {
    const listGroupItem = shallow(<ListGroupItemText>Yo!</ListGroupItemText>).find('p');
    expect(listGroupItem.text()).toBe('Yo!');
  });

  it('should render with "list-group-item-text" class', () => {
    const wrapper = shallow(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(wrapper.hasClass('list-group-item-text')).toBe(true);
  });
});

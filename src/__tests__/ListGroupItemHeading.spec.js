import React from 'react';
import { shallow } from 'enzyme';
import ListGroupItemHeading from '../ListGroupItemHeading';

describe('ListGroupItem', () => {
  it('should render children', () => {
    const listGroupItem = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>).find('h5');
    expect(listGroupItem.text()).toBe('Yo!');
  });

  it('should render with "list-group-item-heading" class', () => {
    const wrapper = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(wrapper.hasClass('list-group-item-heading')).toBe(true);
  });
});

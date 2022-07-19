import React from 'react';
import { shallow } from 'enzyme';
import { ListInlineItem } from '..';

describe('ListInlineItem', () => {
  it('should render children', () => {
    const listInlineItem = shallow(<ListInlineItem>Yo!</ListInlineItem>).find(
      'li',
    );
    expect(listInlineItem.text()).toBe('Yo!');
  });

  it('should render with "list-inline-item" class', () => {
    const wrapper = shallow(<ListInlineItem>Yo!</ListInlineItem>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-inline-item')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(
      <ListInlineItem className="other">Yo!</ListInlineItem>,
    );

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('list-inline-item')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ListInlineItem tag="span">Yo!</ListInlineItem>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-inline-item')).toBe(true);
    expect(wrapper.find('span').length).toBe(1);
  });
});

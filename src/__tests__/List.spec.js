import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../';

describe('List', () => {
  it('should render with "ul" tag', () => {
    const wrapper = shallow(<List>Yo!</List>);

    expect(wrapper.type()).toBe('ul');
  })

  it('should render with "list-inline" class when type is "inline"', () => {
    const wrapper = shallow(<List type="inline">Yo!</List>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-inline')).toBe(true);
  });

  it('should render with "list-unstyled" class when type is "unstyled"', () => {
    const wrapper = shallow(<List type="unstyled">Yo!</List>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('list-unstyled')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<List className="other">Yo!</List>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<List tag="main">Yo!</List>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.find('main').length).toBe(1);
  });
});

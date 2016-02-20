/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonGroup } from '../lib';

describe('ButtonGroup', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonGroup>Ello world</ButtonGroup>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('btn-group')).toBe(true);
  });

  it('should render different size classes', () => {
    const small = shallow(<ButtonGroup size="sm">Small Button</ButtonGroup>);
    const large = shallow(<ButtonGroup size="lg">Large Button</ButtonGroup>);

    expect(small.hasClass('btn-sm')).toBe(true);
    expect(large.hasClass('btn-lg')).toBe(true);
  });

  it('should render vetical class', () => {
    const wrapper = shallow(<ButtonGroup vertical>Vertical Group</ButtonGroup>);

    expect(wrapper.hasClass('btn-group-vertical')).toBe(true);
  });
});

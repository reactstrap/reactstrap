import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '../';

describe('Badge', () => {
  it('should render children', () => {
    const wrapper = shallow(<Badge>Yo!</Badge>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render badges with default color', () => {
    const wrapper = shallow(<Badge>Default Badge</Badge>);

    expect(wrapper.hasClass('badge-default')).toBe(true);
  });

  it('should render Badges with other colors', () => {
    const wrapper = shallow(<Badge color="danger">Danger Badge</Badge>);

    expect(wrapper.hasClass('badge-danger')).toBe(true);
  });

  it('should render Badges as pills', () => {
    const wrapper = shallow(<Badge pill>Pill Badge</Badge>);

    expect(wrapper.hasClass('badge-pill')).toBe(true);
  });
});

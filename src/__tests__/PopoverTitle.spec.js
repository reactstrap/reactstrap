import React from 'react';
import { shallow } from 'enzyme';
import { PopoverTitle } from '../';

describe('PopoverTitle', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverTitle>Ello world</PopoverTitle>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-title')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PopoverHeader } from '..';

describe('PopoverHeader', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverHeader>Ello world</PopoverHeader>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-header')).toBe(true);
  });
});

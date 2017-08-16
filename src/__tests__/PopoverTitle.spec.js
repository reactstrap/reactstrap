import React from 'react';
import { shallow } from 'enzyme';
import { PopoverTitle, PopoverHeader } from '../';

describe('PopoverTitle', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverTitle>Ello world</PopoverTitle>);

    expect(wrapper.type()).toBe(PopoverHeader);
  });
});

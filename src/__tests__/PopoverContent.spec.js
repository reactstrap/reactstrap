import React from 'react';
import { shallow } from 'enzyme';
import { PopoverContent, PopoverBody } from '../';

describe('PopoverContent', () => {
  it('should render PopoverBody', () => {
    const wrapper = shallow(<PopoverContent>Ello world</PopoverContent>);

    expect(wrapper.type()).toBe(PopoverBody);
  });
});

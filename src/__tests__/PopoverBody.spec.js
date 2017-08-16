import React from 'react';
import { shallow } from 'enzyme';
import { PopoverBody } from '../';

describe('PopoverBody', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverBody>Ello world</PopoverBody>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-body')).toBe(true);
  });
});

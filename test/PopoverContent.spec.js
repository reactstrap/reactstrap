/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { PopoverContent } from '../lib';

describe('PopoverContent', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverContent>Ello world</PopoverContent>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-content')).toBe(true);
  });
});

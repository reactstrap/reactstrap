/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { PopoverTitle } from 'reactstrap';;

describe('PopoverTitle', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverTitle>Ello world</PopoverTitle>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-title')).toBe(true);
  });
});

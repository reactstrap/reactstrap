import React from 'react';
import { shallow } from 'enzyme';
import { PopoverContent } from 'reactstrap';

describe('PopoverContent', () => {
  it('should render children', () => {
    const wrapper = shallow(<PopoverContent>Ello world</PopoverContent>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('popover-content')).toBe(true);
  });
});

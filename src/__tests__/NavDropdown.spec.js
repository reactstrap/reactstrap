import React from 'react';
import { shallow } from 'enzyme';
import { NavDropdown, Dropdown } from '../';

describe('NavDropdown', () => {
  it('should render Dropdown', () => {
    const wrapper = shallow(<NavDropdown>Yo!</NavDropdown>);

    expect(wrapper.type()).toBe(Dropdown);
  });
});

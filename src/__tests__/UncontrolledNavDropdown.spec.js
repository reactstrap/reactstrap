import React from 'react';
import { shallow } from 'enzyme';
import {
  UncontrolledNavDropdown,
  UncontrolledDropdown,
} from '../';

describe('UncontrolledNavDropdown', () => {
  it('should be an UncontrolledDropdown', () => {
    const dropdown = shallow(<UncontrolledNavDropdown>Yo</UncontrolledNavDropdown>);
    expect(dropdown.type()).toBe(UncontrolledDropdown);
  });
});

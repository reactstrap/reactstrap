import React from 'react';
import { shallow } from 'enzyme';
import { PlaceholderButton } from '../'

describe('PlaceholderButton', () => {
  it('should render a placeholder', () => {
    const wrapper = shallow(<PlaceholderButton />);
    expect(wrapper.hasClass('placeholder')).toBe(true);
  })

  it('should render size', () => {
    const wrapper = shallow(<PlaceholderButton xs={6} />);
    expect(wrapper.hasClass('col-6')).toBe(true);
  })
})
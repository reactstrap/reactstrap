/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'reactstrap';

describe('Label', () => {
  it('should render children', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render labels with default color', () => {
    const wrapper = shallow(<Label>Default Label</Label>);

    expect(wrapper.hasClass('label-default')).toBe(true);
  });

  it('should render Labels with other colors', () => {
    const wrapper = shallow(<Label color="danger">Danger Label</Label>);

    expect(wrapper.hasClass('label-danger')).toBe(true);
  });

  it('should render Labels as pills', () => {
    const wrapper = shallow(<Label pill>Pill Label</Label>);

    expect(wrapper.hasClass('label-pill')).toBe(true);
  });
});

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb } from 'reactstrap';

describe('Breadcrumb', () => {
  it('should render children', () => {
    const wrapper = shallow(<Breadcrumb>Yo!</Breadcrumb>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render "ol" by default', () => {
    const wrapper = shallow(<Breadcrumb>Yo!</Breadcrumb>);

    expect(wrapper.type()).toBe('ol');
  });

  it('should render with the "breadcrumb" class', () => {
    const wrapper = shallow(<Breadcrumb>Default Breadcrumb</Breadcrumb>);

    expect(wrapper.hasClass('breadcrumb')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Breadcrumb tag="main">Yo!</Breadcrumb>);

    expect(wrapper.type()).toBe('main');
  });
});

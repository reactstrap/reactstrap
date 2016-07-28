/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from 'reactstrap';

describe('Tag', () => {
  it('should render children', () => {
    const wrapper = shallow(<Tag>Yo!</Tag>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render tags with default color', () => {
    const wrapper = shallow(<Tag>Default Tag</Tag>);

    expect(wrapper.hasClass('tag-default')).toBe(true);
  });

  it('should render Tags with other colors', () => {
    const wrapper = shallow(<Tag color="danger">Danger Tag</Tag>);

    expect(wrapper.hasClass('tag-danger')).toBe(true);
  });

  it('should render Tags as pills', () => {
    const wrapper = shallow(<Tag pill>Pill Tag</Tag>);

    expect(wrapper.hasClass('tag-pill')).toBe(true);
  });
});

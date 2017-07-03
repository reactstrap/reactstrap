import React from 'react';
import { shallow } from 'enzyme';
import { ButtonToolbar } from '../';

describe('ButtonToolbar', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonToolbar>Ello world</ButtonToolbar>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('btn-toolbar')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ButtonToolbar tag="main">Yo!</ButtonToolbar>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('btn-toolbar')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });
});

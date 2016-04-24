/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { ButtonToolbar } from 'reactstrap';

describe('ButtonToolbar', () => {
  it('should render children', () => {
    const wrapper = shallow(<ButtonToolbar>Ello world</ButtonToolbar>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.hasClass('btn-toolbar')).toBe(true);
  });
});

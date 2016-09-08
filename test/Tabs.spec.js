/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
// Not sure if this is correct but didn't want to repeat a whole bunch of code.
import TabsExample from '../docs/lib/examples/Tabs';

describe('Tabs', () => {
  it('should render', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-tabs').length).toBe(1);
    expect(tab1.find('.nav .nav-item').length).toBe(2);
    expect(tab1.find('.tab-content-wrapper').length).toBe(2);
  });
  it('should have tab1 as active', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
  });
  it('should switch to tab2 as active when clicked', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    tab1.find('.nav .nav-item .nav-link').at(1).simulate('click');
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(false);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(true);
  });
  // FIXME: Need to add a test for checking for #of hidden tabs. For some reason enzyme doesn't
  // give hidden as the element's props() (or prop('hidden'))
});

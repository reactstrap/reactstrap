import React from 'react';
import { mount } from 'enzyme';
import { TabContent } from 'reactstrap';
// Not sure if this is correct but didn't want to repeat a whole bunch of code.
import TabsExample from '../docs/lib/examples/Tabs';

describe('Tabs', () => {
  it('should render', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-tabs').length).toBe(1);
    expect(tab1.find('.nav .nav-item').length).toBe(2);
    expect(tab1.find('.tab-content').length).toBe(1);
    expect(tab1.find('.tab-pane').length).toBe(2);
  });

  it('should have tab1 as active', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(true);
  });

  it('should switch to tab2 as active when clicked', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(true);
    tab1.find('.nav .nav-item .nav-link').at(1).simulate('click');
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(false);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(true);
    expect(tab1.find('.tab-content .tab-pane').at(1).hasClass('active')).toBe(true);
    tab1.find('.nav .nav-item .nav-link').at(0).simulate('click');
  });

  it('should not setState when the active tab does not change during a prop update', () => {
    const tab1 = mount(<TabContent activeTab={1} />);
    const instance = tab1.instance();
    spyOn(instance, 'setState').and.callThrough();
    tab1.setProps({ style: { textAlign: 'left' } });
    expect(instance.setState).not.toHaveBeenCalled();
  });

  it('should show no active tabs if active tab id is unknown', () => {
    let tab1 = mount(<TabsExample />);
    const instance = tab1.instance();
    expect(instance instanceof TabsExample).toBe(true);
    instance.toggle('3');
    /* Not sure if this is what we want. Toggling to an unknown tab id should
      render all tabs as inactive and should show no content.
      This could be a warning during development that the user is not having a proper tab ids.
      NOTE: Should this be different?
    */
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(false);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(false);
  });

  it('should do nothing clicking on the same tab', () => {
    let tab1 = mount(<TabsExample />);
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(true);
    tab1.find('.nav .nav-item .nav-link').at(0).simulate('click');
    expect(tab1.find('.nav .nav-item .nav-link').at(0).hasClass('active')).toBe(true);
    expect(tab1.find('.nav .nav-item .nav-link').at(1).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(true);
  });
});

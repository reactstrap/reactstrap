import React from 'react';
import { mount } from 'enzyme';
import { TabContent, TabPane } from 'reactstrap';

let activeTab = '1';
describe('Tabs', () => {
  it('should render', () => {
    activeTab = '1';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content').length).toBe(1);
    expect(tab1.find('.tab-pane').length).toBe(2);
  });

  it('should have tab1 as active', () => {
    activeTab = '1';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(true);
  });

  it('should switch to tab2 as active when clicked', () => {
    activeTab = '2';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    expect(tab1.find('.tab-content .tab-pane').at(1).hasClass('active')).toBe(true);
  });

  it('should not setState when the active tab does not change during a prop update', () => {
    const tab1 = mount(<TabContent activeTab={1} />);
    const instance = tab1.instance();
    spyOn(instance, 'setState').and.callThrough();
    tab1.setProps({ style: { textAlign: 'left' } });
    expect(instance.setState).not.toHaveBeenCalled();
  });

  it('should show no active tabs if active tab id is unknown', () => {
    activeTab = '3';
    let tab1 = mount(
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          Tab Content 1
        </TabPane>
        <TabPane tabId="2">
          TabContent 2
        </TabPane>
      </TabContent>
    );
    /* Not sure if this is what we want. Toggling to an unknown tab id should
      render all tabs as inactive and should show no content.
      This could be a warning during development that the user is not having a proper tab ids.
      NOTE: Should this be different?
    */
    expect(tab1.find('.tab-content .tab-pane').at(0).hasClass('active')).toBe(false);
    expect(tab1.find('.tab-content .tab-pane').at(1).hasClass('active')).toBe(false);
  });
  it('should call setState when the active tab does change during a prop update', () => {
    const tab1 = mount(<TabContent activeTab={1} />);
    const instance = tab1.instance();
    spyOn(instance, 'setState').and.callThrough();
    expect(instance.setState).not.toHaveBeenCalled();
    tab1.setProps({ activeTab: 2 });
    expect(instance.setState).toHaveBeenCalled();
  });
});

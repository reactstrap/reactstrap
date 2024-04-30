import React from 'react';
import { screen, render } from '@testing-library/react';
import { TabContent, TabPane } from '..';
import '@testing-library/jest-dom';

let activeTab = '1';
describe('Tabs', () => {
  it('should render', () => {
    render(
      <TabContent activeTab="1">
        <TabPane tabId="1">Destiny</TabPane>
        <TabPane tabId="2">Death</TabPane>
      </TabContent>,
    );
    expect(screen.getByText('Destiny')).toBeInTheDocument();
    expect(screen.getByText('Death')).toBeInTheDocument();
  });

  it('should have tab1 as active', () => {
    render(
      <TabContent activeTab="1">
        <TabPane tabId="1">Dream</TabPane>
        <TabPane tabId="2">Destruction</TabPane>
      </TabContent>,
    );
    expect(screen.getByText('Dream')).toHaveClass('active');
    expect(screen.getByText('Destruction')).not.toHaveClass('active');
  });

  it('should switch to tab2 as active', () => {
    render(
      <TabContent activeTab="2">
        <TabPane tabId="1">Desire</TabPane>
        <TabPane tabId="2">Despair</TabPane>
      </TabContent>,
    );
    expect(screen.getByText('Desire')).not.toHaveClass('active');
    expect(screen.getByText('Despair')).toHaveClass('active');
  });

  it('should show no active tabs if active tab id is unknown', () => {
    render(
      <TabContent activeTab="3">
        <TabPane tabId="1">Delirium</TabPane>
        <TabPane tabId="2">Delight</TabPane>
      </TabContent>,
    );
    expect(screen.getByText('Delirium')).not.toHaveClass('active');
    expect(screen.getByText('Delight')).not.toHaveClass('active');
    /* Not sure if this is what we want. Toggling to an unknown tab id should
      render all tabs as inactive and should show no content.
      This could be a warning during development that the user is not having a proper tab ids.
      NOTE: Should this be different?
    */
  });

  it('should render custom TabContent tag', () => {
    render(
      <TabContent tag="main" activeTab={activeTab} data-testid="endless">
        <TabPane tabId="1">Tab Content 1</TabPane>
        <TabPane tabId="2">TabContent 2</TabPane>
      </TabContent>,
    );

    expect(screen.getByTestId('endless').tagName).toBe('MAIN');
  });

  it('should render custom TabPane tag', () => {
    render(
      <TabPane tag="main" tabId="1">
        Tab Content 1
      </TabPane>,
    );

    expect(screen.getByText('Tab Content 1').tagName).toBe('MAIN');
  });
});

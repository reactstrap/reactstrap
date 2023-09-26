import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavItem } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('NavItem', () => {
  it('should render .nav-item class', () => {
    testForDefaultClass(NavItem, 'nav-item');
  });

  it('should render custom tag', () => {
    testForCustomTag(NavItem);
  });

  it('should render children', () => {
    testForChildrenInComponent(NavItem);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(NavItem);
  });

  it('should render active class', () => {
    render(<NavItem active data-testid="test" />);
    expect(screen.getByTestId('test')).toHaveClass('active');
  });
});

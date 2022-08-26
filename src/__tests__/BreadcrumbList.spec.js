import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BreadcrumbItem } from '..';
import {
  testForChildrenInComponent,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('BreadcrumbItem', () => {
  it('should render children', () => {
    testForChildrenInComponent(BreadcrumbItem);
  });

  it('should render "li" by default', () => {
    testForDefaultTag(BreadcrumbItem, 'li');
  });

  it('should render with the "breadcrumb-item" class', () => {
    testForDefaultClass(BreadcrumbItem, 'breadcrumb-item');
  });

  it('should not render with the "active" class by default', () => {
    render(<BreadcrumbItem>Yo!</BreadcrumbItem>);
    expect(screen.getByText('Yo!')).not.toHaveClass('active');
  });

  it('should render with the "active" class when the avtive prop is truthy', () => {
    render(<BreadcrumbItem active>Yo!</BreadcrumbItem>);
    expect(screen.getByText('Yo!')).toHaveClass('active');
  });

  it('should render custom tag', () => {
    testForCustomTag(BreadcrumbItem);
  });
});

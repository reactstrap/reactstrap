import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaginationItem } from '..';
import {
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('PaginationItem', () => {
  it('should render default tag', () => {
    testForDefaultTag(PaginationItem, 'li');
  });

  it('should render custom tag', () => {
    testForCustomTag(PaginationItem);
  });

  it('should render with "page-item" class', () => {
    testForDefaultClass(PaginationItem, 'page-item');
  });

  it('should render active state', () => {
    render(<PaginationItem active>hello</PaginationItem>);
    expect(screen.getByText('hello')).toHaveClass('active');
  });

  it('should render disabled state', () => {
    render(<PaginationItem disabled>hello</PaginationItem>);
    expect(screen.getByText('hello')).toHaveClass('disabled');
  });
});

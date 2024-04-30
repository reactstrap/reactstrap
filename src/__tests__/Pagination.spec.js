import React from 'react';
import { screen, render } from '@testing-library/react';
import { Pagination } from '..';
import { testForChildrenInComponent } from '../testUtils';

describe('Pagination', () => {
  it('should render "nav" tag by default', () => {
    render(<Pagination data-testid="test" />);
    const node = screen.getByLabelText('pagination');
    expect(node.tagName.toLowerCase()).toMatch('nav');
  });

  it('should render default list tag', () => {
    render(<Pagination />);
    expect(
      screen.getByLabelText('pagination').querySelector('ul'),
    ).toBeInTheDocument();
  });

  it('should render custom tag', () => {
    render(<Pagination tag="main" />);
    expect(screen.getByLabelText('pagination').tagName.toLowerCase()).toBe(
      'main',
    );
  });

  it('should render with "pagination" class', () => {
    render(<Pagination data-testid="pagination" />);
    expect(screen.getByTestId('pagination')).toHaveClass('pagination');
  });

  it('should render children', () => {
    testForChildrenInComponent(Pagination);
  });

  describe('should render pagination at different sizes', () => {
    it('should render with sm', () => {
      render(<Pagination size="sm" data-testid="pagination" />);
      expect(screen.getByTestId('pagination')).toHaveClass('pagination-sm');
    });

    it('should render lg', () => {
      render(<Pagination size="lg" data-testid="pagination" />);
      expect(screen.getByTestId('pagination')).toHaveClass('pagination-lg');
    });
  });
});

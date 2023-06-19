import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Table } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('Table', () => {
  it('should render with "table" class', () => {
    testForDefaultClass(Table, 'table');
  });

  it('should render additional classes', () => {
    testForCustomClass(Table);
  });

  it('should render custom tag', () => {
    testForCustomTag(Table);
  });

  it('should render modifier classes', () => {
    render(<Table data-testid="table" size="sm" bordered striped dark hover />);
    const node = screen.getByTestId('table');
    expect(node).toHaveClass('table');
    expect(node).toHaveClass('table-sm');
    expect(node).toHaveClass('table-bordered');
    expect(node).toHaveClass('table-striped');
    expect(node).toHaveClass('table-hover');
    expect(node).toHaveClass('table-dark');
  });

  it('should render a borderless table', () => {
    render(<Table data-testid="table" borderless />);
    expect(screen.getByTestId('table')).toHaveClass('table');
    expect(screen.getByTestId('table')).toHaveClass('table-borderless');
  });

  it('should render responsive wrapper class', () => {
    render(<Table data-testid="table" responsive />);
    expect(screen.getByTestId('table')).toHaveClass('table');
    expect(screen.getByTestId('table').parentNode).toHaveClass(
      'table-responsive',
    );
  });

  it('should render responsive wrapper class for md', () => {
    render(<Table data-testid="table" responsive="md" />);
    expect(screen.getByTestId('table')).toHaveClass('table');
    expect(screen.getByTestId('table').parentNode).toHaveClass(
      'table-responsive-md',
    );
  });

  it('should render responsive wrapper cssModule', () => {
    const cssModule = {
      table: 'scopedTable',
      'table-responsive': 'scopedResponsive',
    };
    render(<Table data-testid="table" responsive cssModule={cssModule} />);
    expect(screen.getByTestId('table')).toHaveClass('scopedTable');
    expect(screen.getByTestId('table').parentNode).toHaveClass(
      'scopedResponsive',
    );
  });
});

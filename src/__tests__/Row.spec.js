import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForDefaultClass,
} from '../testUtils';

describe('Row', () => {
  it('should render .row markup', () => {
    testForDefaultClass(Row, 'row');
  });

  it('should render children', () => {
    testForChildrenInComponent(Row);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(Row);
  });

  it('show render noGutters class as gx-0', () => {
    render(<Row noGutters data-testid="row" />);
    expect(screen.getByTestId('row')).toHaveClass('gx-0 row');
  });

  it('should pass row col size specific classes as strings', () => {
    render(<Row sm="6" data-testid="row" />);
    expect(screen.getByTestId('row')).toHaveClass('row-cols-sm-6');
  });

  it('should pass row col size specific classes as numbers', () => {
    render(<Row sm={6} data-testid="row" />);
    expect(screen.getByTestId('row')).toHaveClass('row-cols-sm-6');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
} from '../testUtils';

describe('Container', () => {
  it('should render .container markup', () => {
    render(<Container data-testid="container" />);
    expect(screen.getByTestId('container')).toHaveClass('container');
  });

  it('should render .container-fluid markup', () => {
    render(<Container fluid data-testid="container" />);
    expect(screen.getByTestId('container')).toHaveClass('container-fluid');
  });

  it('should render children', () => {
    testForChildrenInComponent(Container);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(Container);
  });

  it('should render custom tag', () => {
    testForCustomTag(Container);
  });

  it('should render responsive breakpoints with string fluid props', () => {
    render(<Container fluid="md" data-testid="container" />);
    expect(screen.getByTestId('container')).toHaveClass('container-md');
    expect(screen.getByTestId('container')).not.toHaveClass('container-fluid');
  });
});

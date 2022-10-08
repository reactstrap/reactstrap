import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Spinner } from '..';
import { testForChildrenInComponent, testForCustomTag } from '../testUtils';

describe('Spinner', () => {
  it('should render a span by default', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading...').tagName.toLowerCase()).toMatch(
      'span',
    );
  });

  it('should render a custom tag when provided', () => {
    testForCustomTag(Spinner, {}, 'main');
  });

  it('should default render "Loading..." children', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render children', () => {
    testForChildrenInComponent(Spinner);
  });

  it('should render visually-hidden children', () => {
    render(<Spinner>Yo!</Spinner>);
    expect(screen.getByText('Yo!')).toHaveClass('visually-hidden');
  });

  it('should render default type of border', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveClass('spinner-border');
  });

  it('should render type if specified', () => {
    render(<Spinner type="grow" />);
    expect(screen.getByRole('status')).toHaveClass('spinner-grow');
  });

  it('should render size if specified', () => {
    render(<Spinner size="sm" />);
    expect(screen.getByRole('status')).toHaveClass('spinner-border-sm');
    expect(screen.getByRole('status')).toHaveClass('spinner-border');
  });

  it('should render color if specified', () => {
    render(<Spinner color="primary" />);
    expect(screen.getByRole('status')).toHaveClass('text-primary');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlaceholderButton } from '..';
import '@testing-library/jest-dom';

describe('PlaceholderButton', () => {
  it('should render a placeholder', () => {
    render(<PlaceholderButton data-testid="endless" />);
    expect(screen.getByTestId('endless')).toBeInTheDocument();
  });

  it('should render size', () => {
    render(<PlaceholderButton data-testid="endless" xs={6} />);
    expect(screen.getByTestId('endless')).toHaveClass('col-6');
  });
});

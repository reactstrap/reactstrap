import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Placeholder } from '..';
import { testForDefaultClass } from '../testUtils';

describe('Placeholder', () => {
  it('should render with "placeholder" class', () => {
    testForDefaultClass(Placeholder, 'placeholder');
  });

  it('should render column size', () => {
    render(<Placeholder data-testid="test" xs={7} />);
    expect(screen.getByTestId('test')).toHaveClass('col-7');
  });

  it('should render animation', () => {
    render(<Placeholder data-testid="test" tag="p" animation="glow" />);
    expect(screen.getByTestId('test')).toHaveClass('placeholder-glow');
  });

  it('should render color', () => {
    render(<Placeholder data-testid="test" xs={12} color="primary" />);
    expect(screen.getByTestId('test')).toHaveClass('bg-primary');
  });

  it('should render size', () => {
    render(<Placeholder data-testid="test" size="lg" xs={12} />);
    expect(screen.getByTestId('test')).toHaveClass('placeholder-lg');
  });

  it('should render different widths for different breakpoints', () => {
    render(<Placeholder data-testid="test" size="lg" xs={12} lg={8} />);
    const node = screen.getByTestId('test');
    expect(node).toHaveClass('col-lg-8');
    expect(node).toHaveClass('col-12');
  });

  it('should allow custom columns to be defined', () => {
    render(
      <Placeholder
        data-testid="test"
        widths={['base', 'jumbo']}
        base="4"
        jumbo="6"
      />,
    );
    const node = screen.getByTestId('test');
    expect(node).toHaveClass('col-4');
    expect(node).toHaveClass('col-jumbo-6');
  });

  it('should allow custom columns to be defined with objects', () => {
    render(
      <Placeholder
        data-testid="test"
        widths={['base', 'jumbo', 'custom']}
        custom={{ size: 1, order: 2, offset: 4 }}
      />,
    );
    const node = screen.getByTestId('test');
    expect(node).toHaveClass('col-custom-1');
    expect(node).toHaveClass('order-custom-2');
    expect(node).toHaveClass('offset-custom-4');
    expect(node).not.toHaveClass('col');
  });
});

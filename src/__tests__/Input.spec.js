import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '..';
import { testForDefaultTag } from '../testUtils';

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    testForDefaultTag(Input, 'input');
  });

  it('should render with "type" tag when type is "select"', () => {
    const { container } = render(<Input type="select">Yo!</Input>);
    expect(container.querySelector('select')).toBeInTheDocument();
  });

  it('should render with "textarea" tag when type is "textarea"', () => {
    render(<Input type="textarea" data-testid="input" />);

    expect(screen.getByTestId('input').tagName.toLowerCase()).toMatch(
      'textarea',
    );
  });

  it('should render with "input" tag when plaintext prop is truthy', () => {
    render(<Input type="select" plaintext data-testid="input" />);

    expect(screen.getByTestId('input').tagName.toLowerCase()).toMatch('input');
  });

  it('should render with "form-control-plaintext" class when plaintext prop is truthy', () => {
    render(<Input type="select" plaintext data-testid="input" />);

    expect(screen.getByTestId('input')).toHaveClass('form-control-plaintext');
  });

  it('should not render with "form-control" class when plaintext prop is truthy', () => {
    render(<Input type="select" plaintext data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
  });

  it('should render with custom tag when plaintext prop is truthy and tag is provided', () => {
    render(<Input type="select" plaintext tag="div" data-testid="input" />);
    expect(screen.getByTestId('input').tagName.toLowerCase()).toMatch('div');
  });

  it('should render with custom tag when plaintext prop is not truthy and tag is provided', () => {
    render(<Input tag="div" data-testid="input" />);
    expect(screen.getByTestId('input').tagName.toLowerCase()).toMatch('div');
  });

  it('should render with "input" tag when type is not a special case', () => {
    render(<Input type="email" data-testid="input" />);
    expect(screen.getByTestId('input').tagName.toLowerCase()).toMatch('input');
  });

  it('should not render children', () => {
    render(<Input>Yo!</Input>);
    expect(screen.queryByText('Yo!')).not.toBeInTheDocument();
  });

  it('should render without children when type is "textarea"', () => {
    render(<Input type="textarea">Yo!</Input>);
    expect(screen.queryByText('Yo!')).not.toBeInTheDocument();
  });

  it('should render children when type is select', () => {
    render(<Input type="select">Yo!</Input>);
    expect(screen.getByText('Yo!')).toBeInTheDocument();
  });

  it('should render children when tag is select', () => {
    render(<Input tag="select">Yo!</Input>);
    expect(screen.getByText('Yo!')).toBeInTheDocument();
  });

  it('should pass children when tag is a custom component', () => {
    render(<Input tag={(props) => props.children}>Yo!</Input>);
    expect(screen.getByText('Yo!')).toBeInTheDocument();
  });

  it('should not render with "is-invalid" class when valid is false', () => {
    render(<Input valid={false} data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('is-invalid');
  });

  it('should not render with "is-valid" class when invalid is false', () => {
    render(<Input invalid={false} data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('is-valid');
  });

  it('should render with "is-invalid" class when invalid is true', () => {
    render(<Input invalid data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('is-invalid');
  });

  it('should render with "is-valid" class when valid is true', () => {
    render(<Input valid data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('is-valid');
  });

  it('should render with "form-control-${bsSize}" class when bsSize is "lg" or "sm"', () => {
    render(<Input bsSize="lg" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-control-lg');
  });

  it('should render with "form-select-${bsSize}" class when bsSize is "lg" or "sm" and type is select', () => {
    render(<Input type="select" bsSize="lg" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-select-lg');
  });

  it('should render with "form-control" class when size is nor "lg" nor "sm"', () => {
    render(<Input bsSize="5" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-control');
    expect(screen.getByTestId('input')).not.toHaveClass('form-control-sm');
    expect(screen.getByTestId('input')).not.toHaveClass('form-control-lg');
  });

  it('should render with "form-select" class when size is nor "lg" nor "sm" and type is select', () => {
    render(<Input type="select" bsSize="5" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-select');
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-select-sm form-select-lg',
    );
  });

  it('should render with "form-control-${bsSize}" class when bsSize is provided', () => {
    render(<Input bsSize="sm" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-control-sm');
  });

  it('should render with "form-select-${bsSize}" class when bsSize is provided and type is select', () => {
    render(<Input type="select" bsSize="sm" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-select-sm');
  });

  it('should render with "form-control" class by default', () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-control');
  });

  it('should not render with "form-control-plaintext" nor "form-check-input" class by default', () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-control-plaintext',
    );
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
  });

  it('should not render with "form-control-plaintext" nor "form-check-input" class when type is file', () => {
    render(<Input type="file" data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-control-plaintext',
    );
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
  });

  it('should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is select', () => {
    render(<Input type="select" data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-control-plaintext',
    );
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
  });

  it('should not render with "form-control" nor "form-check-input" class when plaintext prop is truthy', () => {
    render(<Input type="file" plaintext data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
  });
  it('should not render nor "form-control-plaintext" nor "form-control" class when type is radio', () => {
    render(<Input type="radio" data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-control-plaintext',
    );
  });

  it('should not render nor "form-control-plaintext" nor "form-control" class when type is checkbox', () => {
    render(<Input type="checkbox" data-testid="input" />);

    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
    expect(screen.getByTestId('input')).not.toHaveClass(
      'form-control-plaintext',
    );
  });

  it('should render with "form-check-input" class when type is checkbox', () => {
    render(<Input type="checkbox" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-check-input');
  });

  it('should render with "form-check-input" class when type is radio', () => {
    render(<Input type="radio" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-check-input');
  });

  it('should render with "form-check-input" class when type is switch', () => {
    render(<Input type="switch" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-check-input');
  });

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    render(<Input addon type="checkbox" data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    render(<Input addon type="radio" data-testid="input" />);
    expect(screen.getByTestId('input')).not.toHaveClass('form-check-input');
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
  });

  it('should render with "form-select" class when type is select', () => {
    render(<Input type="select" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-select');
  });

  it('should render with "form-control" class when type is file', () => {
    render(<Input type="file" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('form-control');
  });

  it('should render additional classes', () => {
    render(<Input className="other" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('other');
  });

  it('should render checkbox type when type is switch', () => {
    render(<Input type="switch" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'checkbox');
  });

  it('should render "select" and "textarea" without type property', () => {
    render(<Input type="select">Yo!</Input>);
    render(<Input type="textarea" data-testid="input" />);

    expect(screen.getByTestId('input')).not.toHaveAttribute('type');
    expect(screen.getByText('Yo!')).not.toHaveAttribute('type');
  });

  it('should render with "form-range" not "form-control" class when type is range', () => {
    render(<Input type="range" data-testid="input" />);

    expect(screen.getByTestId('input')).toHaveClass('form-range');
    expect(screen.getByTestId('input')).not.toHaveClass('form-control');
  });
});

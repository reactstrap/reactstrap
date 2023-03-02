import React from 'react';
import { screen, render } from '@testing-library/react';
import { Label } from '..';
import {
  testForDefaultTag,
  testForCustomClass,
  testForChildrenInComponent,
  testForCustomTag,
} from '../testUtils';

describe('Label', () => {
  it('should render a label tag by default', () => {
    testForDefaultTag(Label, 'label');
  });

  it('should render children', () => {
    testForChildrenInComponent(Label);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(Label);
  });

  it('should render with "col-form-label" class when a col is provided', () => {
    render(<Label sm="6">Yo!</Label>);
    expect(screen.getByText(/yo/i)).toHaveClass('col-form-label');
  });

  it('should not render with "form-label" class when a col is provided', () => {
    render(<Label sm="6">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).not.toHaveClass('form-label');
  });

  it('should render with "form-label" class when a col is not provided', () => {
    render(<Label>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('form-label');
  });

  it('should render with "form-check-label" class when check is specified', () => {
    render(<Label check>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('form-check-label');
  });

  it('should not render with "form-label" class when check is specified', () => {
    render(<Label check>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).not.toHaveClass('form-label');
  });

  it('should pass col size specific classes as Strings', () => {
    render(<Label sm="6">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');
  });

  it('should pass col size specific classes as Strings (auto)', () => {
    render(<Label sm="auto">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-auto');
  });

  it('should pass col size specific classes as Strings ("")', () => {
    render(<Label sm="">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm');
  });

  it('should pass col size specific classes as Strings (true)', () => {
    render(<Label sm>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm');
  });

  it('should pass col size specific classes as Strings (xs)', () => {
    render(<Label xs="6">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6');
  });

  it('should pass col size specific classes as Strings (xs="")', () => {
    render(<Label xs="">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col');
  });

  it('should pass col size specific classes as Strings (xs (true))', () => {
    render(<Label xs>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col');
  });

  it('should pass col size specific classes as Strings (xs="auto")', () => {
    render(<Label xs="auto">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-auto');
  });

  it('should render with "visually-hidden" class when hidden prop is truthy', () => {
    render(<Label hidden>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('visually-hidden');
  });

  it('should render with "col-form-label-${size}" class when size is provided', () => {
    render(<Label size="lg">Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-form-label-lg');
  });

  it('should pass col size specific classes as Numbers', () => {
    render(<Label sm={6}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');
  });

  it('should pass col size specific classes as Numbers (xs)', () => {
    render(<Label xs={6}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6');
  });

  it('should pass col size specific classes via Objects', () => {
    render(<Label sm={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-sm-6');
    expect(screen.getByText(/yo!/i)).toHaveClass('order-sm-2');
    expect(screen.getByText(/yo!/i)).toHaveClass('offset-sm-2');
  });

  it('should pass col size specific classes via Objects (xs)', () => {
    render(<Label xs={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);
    expect(screen.getByText(/yo!/i)).toHaveClass('col-6');
    expect(screen.getByText(/yo!/i)).toHaveClass('order-2');
    expect(screen.getByText(/yo!/i)).toHaveClass('offset-2');
  });

  it('should pass multiple col size specific classes via Objects', () => {
    render(
      <Label
        xs={{ size: 4, order: 3, offset: 3 }}
        sm={{ size: 6, order: 2, offset: 2 }}
        md={{ size: 7, order: 1, offset: 1 }}
      >
        Yo!
      </Label>,
    );
    expect(screen.getByText(/yo/i)).toHaveClass('col-4');
    expect(screen.getByText(/yo/i)).toHaveClass('order-3');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-3');
    expect(screen.getByText(/yo/i)).toHaveClass('col-sm-6');
    expect(screen.getByText(/yo/i)).toHaveClass('order-sm-2');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-sm-2');
    expect(screen.getByText(/yo/i)).toHaveClass('col-md-7');
    expect(screen.getByText(/yo/i)).toHaveClass('order-md-1');
    expect(screen.getByText(/yo/i)).toHaveClass('offset-md-1');
  });

  it('should render custom tag', () => {
    render(<Label tag="main">Yo!</Label>);
    testForCustomTag(Label, {}, 'main');
  });
});

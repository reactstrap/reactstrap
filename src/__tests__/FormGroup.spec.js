import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormGroup } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('FormGroup', () => {
  it('should render with "div" tag by default', () => {
    testForDefaultTag(FormGroup, 'div');
  });

  it('should render children', () => {
    testForChildrenInComponent(FormGroup);
  });

  it('should render with "mb-3" class by default', () => {
    testForDefaultClass(FormGroup, 'mb-3');
  });

  it('should not render with "form-check" nor "form-check-inline"  class by default', () => {
    render(<FormGroup>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('form-check');
    expect(screen.getByText('Yo!')).not.toHaveClass('form-check-inline');
  });

  it('should render with "form-check" class when check prop is truthy', () => {
    render(<FormGroup check>Yo!</FormGroup>);
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
  });

  it('should render with "form-check" and "form-switch" class when switch prop is truthy', () => {
    render(<FormGroup switch>Yo!</FormGroup>);
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
    expect(screen.getByText('Yo!')).toHaveClass('form-switch');
  });

  it('should not render with "form-check-inline" class when check prop is truthy and inline prop is falsy', () => {
    render(<FormGroup check>Yo!</FormGroup>);
    expect(screen.getByText('Yo!')).not.toHaveClass('form-check-inline');
  });

  it('should not render with "form-check-inline" class when switch prop is truthy and inline prop is falsy', () => {
    render(<FormGroup switch>Yo!</FormGroup>);
    expect(screen.getByText('Yo!')).not.toHaveClass('form-check-inline');
  });

  it('should render with "form-check" and "form-check-inline" classes when check prop and inline prop are both truthy', () => {
    render(
      <FormGroup check inline>
        Yo!
      </FormGroup>,
    );
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
    expect(screen.getByText('Yo!')).toHaveClass('form-check-inline');
  });

  it('should render with "form-check" and "form-switch" and "form-check-inline" classes when check prop and inline prop are both truthy', () => {
    render(
      <FormGroup switch inline>
        Yo!
      </FormGroup>,
    );
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
    expect(screen.getByText('Yo!')).toHaveClass('form-switch');
    expect(screen.getByText('Yo!')).toHaveClass('form-check-inline');
  });

  it('should not render with "form-check-inline" class when check and switch prop are falsy and inline prop is truthy', () => {
    render(<FormGroup inline>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('form-check');
  });

  it('should not render with "mb-3" class when noMargin prop is truthy', () => {
    render(<FormGroup noMargin>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('mb-3');
  });

  it('should not render with "mb-3" class when check prop is truthy', () => {
    render(<FormGroup check>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('mb-3');
  });

  it('should not render with "mb-3" class when switch prop is truthy', () => {
    render(<FormGroup switch>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('mb-3');
  });

  it('should not render with "disabled" class when disabled prop is truthy but check and switch are not', () => {
    render(<FormGroup disabled>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('disabled');
  });

  it('should render with "disabled" class when both check disabled props are truthy', () => {
    render(
      <FormGroup check disabled>
        Yo!
      </FormGroup>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('disabled');
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
  });

  it('should render with "disabled" class when both switch and disabled props are truthy', () => {
    render(
      <FormGroup switch disabled>
        Yo!
      </FormGroup>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('disabled');
    expect(screen.getByText('Yo!')).toHaveClass('form-check');
  });

  it('should render with "row" class when row prop is truthy', () => {
    render(<FormGroup row>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('row');
  });

  it('should not render with "row" class when row prop is not truthy', () => {
    render(<FormGroup>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('row');
  });

  it('should render with "form-floating" class when floating prop is truthy', () => {
    render(<FormGroup floating>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('form-floating');
  });

  it('should not render with "form-floating" class when floating prop is falsey', () => {
    render(<FormGroup>Yo!</FormGroup>);

    expect(screen.getByText('Yo!')).not.toHaveClass('form-floating');
  });

  it('should render additional classes', () => {
    testForCustomClass(FormGroup);
  });

  it('should render custom tag', () => {
    testForCustomTag(FormGroup);
  });
});

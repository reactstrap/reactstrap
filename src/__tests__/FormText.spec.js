import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormText } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('FormText', () => {
  it('should render with "form" tag', () => {
    testForDefaultTag(FormText, 'small');
  });

  it('should render children', () => {
    testForChildrenInComponent(FormText);
  });

  it('should render with "form-text" class when not inline', () => {
    testForDefaultClass(FormText, 'form-text');
  });

  it('should not render with "form-text" class when inline', () => {
    render(<FormText inline>Yo!</FormText>);

    expect(screen.getByText('Yo!')).not.toHaveClass('form-text');
  });

  it('should render with "text-muted" class by default', () => {
    render(<FormText>Yo!</FormText>);

    expect(screen.getByText('Yo!')).toHaveClass('text-muted');
  });

  it('should render without "text-*" class when color is and empty string', () => {
    render(<FormText color="">Yo!</FormText>);

    expect(screen.getByText('Yo!')).not.toHaveClass('text-*');
  });

  it('should render with "text-${color}" class when color is provided', () => {
    render(<FormText color="yoyo">Yo!</FormText>);

    expect(screen.getByText('Yo!')).toHaveClass('text-yoyo');
  });

  it('should render additional classes', () => {
    testForCustomClass(FormText);
  });

  it('should render custom tag', () => {
    testForCustomTag(FormText);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '..';
import {
  testForChildrenInComponent,
  testForCustomTag,
  testForDefaultTag,
} from '../testUtils';

describe('Breadcrumb', () => {
  it('should render children', () => {
    testForChildrenInComponent(Breadcrumb);
  });

  it('should render "nav" by default', () => {
    testForDefaultTag(Breadcrumb, 'nav');
  });

  it('should render "ol" by default', () => {
    render(<Breadcrumb>Yo!</Breadcrumb>);
    expect(screen.getByText('Yo!').tagName.toLowerCase()).toMatch('ol');
  });

  it('should render with the "breadcrumb" class', () => {
    render(<Breadcrumb data-testid="test">Yo!</Breadcrumb>);
    expect(screen.getByText('Yo!')).toHaveClass('breadcrumb');
  });

  it('should render custom tag', () => {
    testForCustomTag(Breadcrumb);
  });
});

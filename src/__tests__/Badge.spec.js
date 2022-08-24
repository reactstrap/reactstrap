import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '..';
import {
  testForChildrenInComponent,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('Badge', () => {
  it('should render a span by default', () => {
    testForDefaultTag(Badge, 'span');
  });

  it('should render an anchor when when href is provided', () => {
    render(
      <Badge href="#" data-testid="badge">
        Yo!
      </Badge>,
    );
    expect(screen.getByTestId('badge').tagName.toLowerCase()).toBe('a');
  });

  it('should render a custom tag when provided', () => {
    testForCustomTag(Badge);
  });

  it('should render children', () => {
    testForChildrenInComponent(Badge);
  });

  it('should render badges with secondary color', () => {
    testForDefaultClass(Badge, 'bg-secondary');
  });

  it('should render Badges with other colors', () => {
    render(
      <Badge color="danger" data-testid="badge">
        Danger Badge
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-danger');
  });

  it('should render Badges as pills', () => {
    render(
      <Badge pill data-testid="badge">
        Pill Badge
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('rounded-pill');
  });
});

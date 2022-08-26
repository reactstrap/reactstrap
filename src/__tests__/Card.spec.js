import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('Card', () => {
  it('should render with "card" class', () => {
    testForDefaultClass(Card, 'card');
  });

  it('should render with "bg-primary" class', () => {
    render(
      <Card inverse body color="primary">
        Yo!
      </Card>,
    );

    expect(screen.getByText('Yo!')).toHaveClass(
      'card card-body bg-primary text-white',
    );
  });

  it('should render with "outline" class when a color is provided', () => {
    render(
      <Card outline body color="primary">
        Yo!
      </Card>,
    );

    expect(screen.getByText('Yo!')).toHaveClass(
      'card card-body border-primary',
    );
  });

  it('should not render with "outline" class when a color is not provided (no default)', () => {
    render(
      <Card outline body>
        Yo!
      </Card>,
    );

    expect(screen.getByText('Yo!').className).not.toMatch(/border/i);
  });

  it('should render additional classes', () => {
    testForCustomClass(Card);
  });

  it('should render custom tag', () => {
    testForCustomTag(Card);
  });
});

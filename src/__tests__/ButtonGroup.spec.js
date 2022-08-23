import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from '..';
import { testForChildrenInComponent, testForCustomTag } from '../testUtils';

describe('ButtonGroup', () => {
  it('should render children', () => {
    testForChildrenInComponent(ButtonGroup);
  });

  it('should render different size classes', () => {
    render(
      <>
        <ButtonGroup size="sm">Small Button</ButtonGroup>
        <ButtonGroup size="lg">Large Button</ButtonGroup>
      </>,
    );

    expect(screen.getByText(/small/i)).toHaveClass('btn-group-sm');
    expect(screen.getByText(/large/i)).toHaveClass('btn-group-lg');
  });

  it('should render vertical class', () => {
    render(<ButtonGroup vertical>Vertical Group</ButtonGroup>);

    expect(screen.getByText(/vertical/i)).toHaveClass('btn-group-vertical');
  });

  it('should render custom tag', () => {
    testForCustomTag(ButtonGroup);
  });
});

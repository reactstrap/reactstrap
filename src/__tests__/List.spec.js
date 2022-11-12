import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultTag,
} from '../testUtils';

describe('List', () => {
  it('should render with "ul" tag', () => {
    testForDefaultTag(List, 'ul');
  });

  it('should render with "list-inline" class when type is "inline"', () => {
    render(<List type="inline">Yo!</List>);

    expect(screen.getByText('Yo!')).toHaveClass('list-inline');
  });

  it('should render with "list-unstyled" class when type is "unstyled"', () => {
    render(<List type="unstyled">Yo!</List>);

    expect(screen.getByText('Yo!')).toHaveClass('list-unstyled');
  });

  it('should render additional classes', () => {
    testForCustomClass(List);
  });

  it('should render custom tag', () => {
    testForCustomTag(List);
  });
});

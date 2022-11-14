import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListGroup } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('ListGroup', () => {
  it('should render with "list-group" class', () => {
    testForDefaultClass(ListGroup, 'list-group');
  });

  it('should render with "flush"', () => {
    render(<ListGroup flush>Yo!</ListGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('list-group-flush');
    expect(screen.getByText('Yo!')).toHaveClass('list-group');
  });

  it('should render with "horizontal"', () => {
    render(<ListGroup horizontal>Yo!</ListGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('list-group-horizontal');
  });

  it('should not render with "horizontal" if flush is true', () => {
    render(
      <ListGroup flush horizontal>
        Yo!
      </ListGroup>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('list-group');
    expect(screen.getByText('Yo!')).toHaveClass('list-group-flush');
    expect(screen.getByText('Yo!')).not.toHaveClass('list-group-horizontal');
  });

  it('should render with "horizontal-{breakpoint}"', () => {
    render(<ListGroup horizontal="lg">Yo!</ListGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('list-group');
    expect(screen.getByText('Yo!')).toHaveClass('list-group-horizontal-lg');
  });

  it('should render with "numbered"', () => {
    render(<ListGroup numbered>Yo!</ListGroup>);

    expect(screen.getByText('Yo!')).toHaveClass('list-group-numbered');
  });

  it('should render additional classes', () => {
    testForCustomClass(ListGroup);
  });

  it('should render custom tag', () => {
    testForCustomTag(ListGroup);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ListGroupItem } from '..';
import { testForChildrenInComponent, testForDefaultClass } from '../testUtils';

describe('ListGroupItem', () => {
  it('should render children', () => {
    testForChildrenInComponent(ListGroupItem);
  });

  it('should render with "list-group-item" class', () => {
    testForDefaultClass(ListGroupItem, 'list-group-item');
  });

  it('should render with "active" class when active is passed', () => {
    render(<ListGroupItem active>Yo!</ListGroupItem>);
    expect(screen.getByText('Yo!')).toHaveClass('active');
  });

  it('should render with "disabled" class when disabled is passed', () => {
    render(<ListGroupItem disabled>Yo!</ListGroupItem>);
    expect(screen.getByText('Yo!')).toHaveClass('disabled');
  });

  it('should render with "list-group-item-action" class when action is passed', () => {
    render(<ListGroupItem action>Yo!</ListGroupItem>);
    expect(screen.getByText('Yo!')).toHaveClass('list-group-item-action');
  });

  it('should render with "list-group-item-${color}" class when color is passed', () => {
    render(<ListGroupItem color="success">Yo!</ListGroupItem>);
    expect(screen.getByText('Yo!')).toHaveClass('list-group-item-success');
  });

  it('should prevent click event when disabled is passed', () => {
    const onDisableClick = jest.fn();
    render(
      <ListGroupItem disabled onClick={onDisableClick}>
        Yo!
      </ListGroupItem>,
    );

    user.click(screen.getByText('Yo!'));
    expect(onDisableClick).not.toHaveBeenCalled();
  });
});

import React from 'react';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { NavLink } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('NavLink', () => {
  it('should render .nav-link markup', () => {
    testForDefaultClass(NavLink, 'nav-link');
  });

  it('should render custom tag', () => {
    testForCustomTag(NavLink);
  });

  it('should render children', () => {
    testForChildrenInComponent(NavLink);
  });

  it('should pass additional classNames', () => {
    testForCustomClass(NavLink);
  });

  it('should render active class', () => {
    render(<NavLink active>Yo!</NavLink>);
    expect(screen.getByText('Yo!')).toHaveClass('active');
  });

  it('should render disabled markup', () => {
    render(<NavLink disabled>Yo!</NavLink>);
    expect(screen.getByText('Yo!')).toHaveAttribute('disabled');
  });

  it('handles onClick prop', () => {
    const onClick = jest.fn();
    render(<NavLink onClick={onClick}>testing click</NavLink>);

    user.click(screen.getByText(/testing click/i));
    expect(onClick).toHaveBeenCalled();
  });

  it('handles onClick events', () => {
    render(<NavLink>hello</NavLink>);
    const node = screen.getByText(/hello/i);
    const click = createEvent.click(node);
    fireEvent(node, click);

    expect(click.defaultPrevented).toBeFalsy();
  });

  it('prevents link clicks via onClick for dropdown nav-items', () => {
    render(<NavLink href="#">hello</NavLink>);
    const node = screen.getByText(/hello/i);
    const click = createEvent.click(node);
    fireEvent(node, click);

    expect(click.defaultPrevented).toBeTruthy();
  });

  it('is not called when disabled', () => {
    const onClick = jest.fn();
    render(
      <NavLink onClick={onClick} disabled>
        testing click
      </NavLink>,
    );

    user.click(screen.getByText(/testing click/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});

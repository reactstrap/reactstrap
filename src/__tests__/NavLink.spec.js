import React from 'react';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { NavLink } from '..';

describe('NavLink', () => {
  it('should render .nav-link markup', () => {
    const { container } = render(<NavLink />);

    expect(container.innerHTML).toBe('<a class="nav-link"></a>');
  });

  it('should render custom tag', () => {
    const { container } = render(<NavLink tag="div" />);

    expect(container.innerHTML).toBe('<div class="nav-link"></div>');
  });

  it('should render children', () => {
    const { container } = render(<NavLink>Children</NavLink>);

    expect(container.innerHTML).toBe('<a class="nav-link">Children</a>');
  });

  it('should pass additional classNames', () => {
    render(<NavLink className="extra" />);

    expect(document.querySelector('.extra')).toBeTruthy();
    expect(document.querySelector('.nav-link')).toBeTruthy();
  });

  it('should render active class', () => {
    render(<NavLink active />);

    expect(document.querySelector('.active')).toBeTruthy();
  });

  it('should render disabled markup', () => {
    render(<NavLink disabled />);

    expect(document.querySelector('.disabled')).toBeTruthy();
  });

  it('handles onClick prop', () => {
    const onClick = jest.fn();
    render(<NavLink data-testid="link" onClick={onClick} />);

    const node = screen.getByTestId('link');
    const clickEvent = createEvent.click(node)
    fireEvent(node, clickEvent);
    expect(onClick).toHaveBeenCalled();
    expect(clickEvent.defaultPrevented).toBe(false);
  });

  it('handles onClick events', () => {
    render(<NavLink data-testid="link" />);

    const node = screen.getByTestId('link');
    const clickEvent = createEvent.click(node)
    fireEvent(node, clickEvent);
    expect(clickEvent.defaultPrevented).toBe(false);
  });

  it('prevents link clicks via onClick for dropdown nav-items', async () => {
    render(<NavLink href="#" data-testid="link" />);

    const node = screen.getByTestId('link');
    const clickEvent = createEvent.click(node)
    fireEvent(node, clickEvent);
    expect(clickEvent.defaultPrevented).toBe(true);
  });

  it('is not called when disabled', () => {
    const onClick = jest.fn();
    render(<NavLink disabled onClick={onClick} data-testid="link" />);

    const node = screen.getByTestId('link');
    const clickEvent = createEvent.click(node);
    fireEvent(node, clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
    expect(onClick).not.toHaveBeenCalled();
  });
});

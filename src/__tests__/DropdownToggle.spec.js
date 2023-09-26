import React from 'react';
import { createEvent, fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { DropdownToggle } from '..';
import { customDropdownRender } from '../testUtils';

describe('DropdownToggle', () => {
  const contextProps = {
    isOpen: false,
    direction: 'down',
    inNavbar: false,
    toggle: jest.fn(),
  };

  beforeEach(() => {
    contextProps.isOpen = false;
    contextProps.direction = 'down';
    contextProps.inNavbar = false;
    contextProps.toggle.mockClear();
  });

  it('should wrap text', () => {
    customDropdownRender(
      <DropdownToggle>Ello world</DropdownToggle>,
      contextProps,
    );

    expect(screen.getByText(/ello world/i)).toBeInTheDocument();
  });

  it('should add default visually-hidden content', () => {
    customDropdownRender(<DropdownToggle />, contextProps);

    expect(screen.getByText(/toggle dropdown/i)).toHaveClass('visually-hidden');
  });

  it('should add default visually-hidden content', () => {
    customDropdownRender(
      <DropdownToggle aria-label="Dropup Toggle" />,
      contextProps,
    );

    expect(screen.getByText(/dropup toggle/i)).toHaveClass('visually-hidden');
  });

  it('should render elements', () => {
    customDropdownRender(
      <DropdownToggle>Click Me</DropdownToggle>,
      contextProps,
    );

    expect(screen.getByText(/click me/i).tagName).toBe('BUTTON');
  });

  it('should render a caret', () => {
    customDropdownRender(
      <DropdownToggle caret>Ello world</DropdownToggle>,
      contextProps,
    );

    expect(screen.getByText(/ello world/i)).toHaveClass('dropdown-toggle');
  });

  describe('color', () => {
    it('should render the dropdown as a BUTTON element with default color secondary', () => {
      customDropdownRender(<DropdownToggle data-testid="rick" />, contextProps);
      expect(screen.getByTestId(/rick/i)).toHaveClass('btn-secondary');
    });

    it('should render the dropdown as a BUTTON element with explicit color success', () => {
      customDropdownRender(
        <DropdownToggle color="success" data-testid="morty" />,
        contextProps,
      );

      expect(screen.getByTestId(/morty/i)).toHaveClass('btn-success');
    });

    it('should render the dropdown as an A element with no color attribute', () => {
      customDropdownRender(
        <DropdownToggle tag="a" data-testid="pickle-rick" />,
        contextProps,
      );

      expect(screen.getByTestId(/pickle-rick/i).tagName).toBe('A');
      expect(screen.getByTestId(/pickle-rick/i)).not.toHaveAttribute('color');
    });

    it('should render the dropdown as a DIV element with no color attribute', () => {
      customDropdownRender(
        <DropdownToggle tag="div" color="success" data-testid="tiny-rick" />,
        contextProps,
      );

      expect(screen.getByTestId(/tiny-rick/i).tagName).toBe('DIV');
      expect(screen.getByTestId(/tiny-rick/i)).not.toHaveAttribute('color');
    });
  });

  it('should render a split', () => {
    customDropdownRender(
      <DropdownToggle split>Ello world</DropdownToggle>,
      contextProps,
    );

    expect(screen.getByText(/ello world/i)).toHaveClass(
      'dropdown-toggle-split',
    );
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jest.fn();
      customDropdownRender(
        <DropdownToggle onClick={onClick}>Ello world</DropdownToggle>,
        contextProps,
      );

      user.click(screen.getByText(/ello world/i));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should call context.toggle when present ', () => {
      contextProps.toggle = jest.fn();
      const { container } = customDropdownRender(
        <DropdownToggle>Ello world</DropdownToggle>,
        contextProps,
      );

      user.click(screen.getByText(/ello world/i));

      expect(contextProps.toggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('disabled', () => {
    it('should not call onClick when disabled', () => {
      const onClick = jest.fn();
      customDropdownRender(
        <DropdownToggle disabled onClick={onClick}>
          Ello world
        </DropdownToggle>,
        contextProps,
      );

      user.click(screen.getByText(/ello world/i));

      expect(onClick).not.toBeCalled();
    });
  });

  describe('nav', () => {
    it('should add .nav-link class', () => {
      customDropdownRender(
        <DropdownToggle nav>Ello world</DropdownToggle>,
        contextProps,
      );

      expect(screen.getByText(/ello world/i)).toHaveClass('nav-link');
      expect(screen.getByText(/ello world/i).tagName).toBe('A');
    });

    it('should preventDefault', () => {
      customDropdownRender(
        <DropdownToggle nav>Ello world</DropdownToggle>,
        contextProps,
      );

      const node = screen.getByText(/ello world/i);
      const click = createEvent.click(node);
      fireEvent(node, click);

      expect(click.defaultPrevented).toBeTruthy();
    });
  });
});

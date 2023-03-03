import React from 'react';
import { screen } from '@testing-library/react';
import { Popper } from 'react-popper';
import '@testing-library/jest-dom';
import { DropdownMenu } from '..';
import { customDropdownRender } from '../testUtils';

describe('DropdownMenu', () => {
  const contextProps = {
    isOpen: false,
    direction: 'down',
    inNavbar: false,
  };

  beforeEach(() => {
    contextProps.isOpen = false;
    contextProps.direction = 'down';
    contextProps.inNavbar = false;
    Popper.mockClear();
  });

  it('should render children', () => {
    customDropdownRender(<DropdownMenu>Content</DropdownMenu>, contextProps);

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('should not have the class "show" when isOpen context is false', () => {
    customDropdownRender(<DropdownMenu>Content</DropdownMenu>, contextProps);

    expect(screen.getByText(/content/i)).not.toHaveClass('show');
  });

  it('should have the class "show" when isOpen context is true', () => {
    contextProps.isOpen = true;
    customDropdownRender(<DropdownMenu>Content</DropdownMenu>, contextProps);
    expect(screen.getByText(/content/i)).toHaveClass('show');
  });

  it('should render left aligned menus by default', () => {
    contextProps.isOpen = true;
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);

    expect(screen.getByText(/ello world/i)).not.toHaveClass(
      'dropdown-menu-end',
    );
  });

  it('should render right aligned menus', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu end>Ello world</DropdownMenu>,
      contextProps,
    );

    expect(screen.getByText(/ello world/i)).toHaveClass('dropdown-menu-end');
  });

  it('should render down when direction is unknown on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'unknown';
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);

    expect(screen.getByText(/ello world/i)).toHaveAttribute(
      'data-popper-placement',
      'bottom-start',
    );
  });

  it('should render down when direction is "down" on the context', () => {
    contextProps.isOpen = true;
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);

    expect(screen.getByText(/ello world/i)).toHaveAttribute(
      'data-popper-placement',
      'bottom-start',
    );
  });

  it('should render up when direction is "up" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'up';
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);
    expect(screen.getByText(/ello world/i)).toHaveAttribute(
      'data-popper-placement',
      'top-start',
    );
    // expect(wrapper.find(Popper).prop('placement')).toBe('top-start');
  });

  it('should render left when direction is "start" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'start';
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);
    expect(screen.getByText(/ello world/i)).toHaveAttribute(
      'data-popper-placement',
      'left-start',
    );
    // expect(wrapper.find(Popper).prop('placement')).toBe('left-start');
  });

  it('should render right when direction is "end" on the context', () => {
    contextProps.isOpen = true;
    contextProps.direction = 'end';
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);
    expect(screen.getByText(/ello world/i)).toHaveAttribute(
      'data-popper-placement',
      'right-start',
    );
    // expect(wrapper.find(Popper).prop('placement')).toBe('right-start');
  });

  it('should not disable flip modifier by default', () => {
    contextProps.isOpen = true;
    customDropdownRender(<DropdownMenu>Ello world</DropdownMenu>, contextProps);

    expect(Popper.mock.calls[0][0].modifiers[0]).toMatchObject({
      name: 'flip',
      enabled: true,
    });
  });

  it('should disable flip modifier when flip is false', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu flip={false}>Ello world</DropdownMenu>,
      contextProps,
    );

    expect(Popper.mock.calls.length).toBe(1);
    expect(Popper.mock.calls[0][0].modifiers[0]).toMatchObject({
      name: 'flip',
      enabled: false,
    });
  });

  it('should position using fixed mode', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu strategy="fixed">Ello world</DropdownMenu>,
      contextProps,
    );
    expect(Popper.mock.calls[0][0].strategy).toBe('fixed');
  });

  it('should not render Popper when isOpen is false', () => {
    customDropdownRender(
      <DropdownMenu end>Ello world</DropdownMenu>,
      contextProps,
    );

    expect(Popper).not.toBeCalled();
  });

  it('should render custom tag', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu tag="main">Yo!</DropdownMenu>,
      contextProps,
    );

    expect(screen.getByText(/yo/i).tagName).toBe('MAIN');
  });

  describe('using container', () => {
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      document.body.appendChild(element);
    });

    afterEach(() => {
      document.body.removeChild(element);
      element = null;
    });

    it('should render inside container', () => {
      contextProps.isOpen = true;
      element.innerHTML = '<div id="anotherContainer"></div>';
      customDropdownRender(
        <DropdownMenu container="#anotherContainer">My body</DropdownMenu>,
        contextProps,
      );

      expect(document.getElementById('anotherContainer').innerHTML).toContain(
        'My body',
      );
    });
  });

  it('should not have the class "dropdown-menu-dark" by default', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu>Keep it light</DropdownMenu>,
      contextProps,
    );

    expect(screen.getByText(/keep it light/i)).not.toHaveClass(
      'dropdown-menu-dark',
    );
  });

  it('should have the class "dropdown-menu-dark" when dark is true', () => {
    contextProps.isOpen = true;
    customDropdownRender(
      <DropdownMenu dark data-testid="dark-menu">
        Let&apos;s go dark
      </DropdownMenu>,
      contextProps,
    );

    expect(screen.getByTestId('dark-menu')).toHaveClass('dropdown-menu-dark');
  });
});

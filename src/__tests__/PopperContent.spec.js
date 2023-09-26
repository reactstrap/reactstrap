import React from 'react';
import { Popper } from 'react-popper';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PopperContent } from '..';

describe('PopperContent', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.innerHTML =
      '<p id="outerTarget">This is the popover <span id="target">target</span>.</p>';
    document.body.appendChild(element);

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    element = null;
  });

  it('should NOT render children when isOpen is false', () => {
    render(<PopperContent target="target">Yo!</PopperContent>);

    expect(screen.queryByText('Yo!')).not.toBeInTheDocument();
  });

  it('should render children when isOpen is true and container is inline', () => {
    render(
      <PopperContent target="target" isOpen>
        Yo!
      </PopperContent>,
    );

    expect(screen.queryByText('Yo!')).toBeInTheDocument();
  });

  it('should render children when isOpen is true and container is inline and DOM node passed directly for target', () => {
    const targetElement = element.querySelector('#target');

    render(
      <PopperContent target={targetElement} isOpen container="inline">
        Yo!
      </PopperContent>,
    );

    expect(screen.queryByText('Yo!')).toBeInTheDocument();
  });

  it('should render an Arrow in the Popper when isOpen is true and container is inline', () => {
    const { container } = render(
      <PopperContent
        target="target"
        isOpen
        container="inline"
        arrowClassName="custom-arrow"
      >
        Yo!
      </PopperContent>,
    );

    expect(container.querySelector('.arrow.custom-arrow')).toBeInTheDocument();
  });

  it('should NOT render an Arrow in the Popper when "hideArrow" is truthy', () => {
    const { container } = render(
      <PopperContent
        target="target"
        isOpen
        container="inline"
        arrowClassName="custom-arrow"
        hideArrow
      >
        Yo!
      </PopperContent>,
    );

    expect(
      container.querySelector('.arrow.custom-arrow'),
    ).not.toBeInTheDocument();
  });

  it('should pass additional classNames to the popper', () => {
    render(
      <PopperContent
        className="extra"
        target="target"
        isOpen
        container="inline"
        data-testid="rick"
      >
        Yo!
      </PopperContent>,
    );

    expect(screen.getByTestId('rick')).toHaveClass('extra');
  });

  it('should allow custom modifiers and even allow overriding of default modifiers', () => {
    render(
      <PopperContent
        className="extra"
        target="target"
        isOpen
        container="inline"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [2, 2],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
        ]}
      >
        Yo!
      </PopperContent>,
    );

    expect(Popper).toHaveBeenCalledWith(
      expect.objectContaining({
        modifiers: expect.arrayContaining([
          expect.objectContaining({
            name: 'offset',
            options: {
              offset: [2, 2],
            },
          }),
          expect.objectContaining({
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          }),
        ]),
      }),
      {},
    );
  });

  it('should have data-popper-placement of auto by default', () => {
    const { container } = render(
      <PopperContent target="target" isOpen container="inline">
        Yo!
      </PopperContent>,
    );

    expect(
      container.querySelector('div[data-popper-placement="auto"]'),
    ).toBeInTheDocument();
  });

  it('should override data-popper-placement', () => {
    const { container } = render(
      <PopperContent placement="top" target="target" isOpen container="inline">
        Yo!
      </PopperContent>,
    );

    expect(
      container.querySelector('div[data-popper-placement="auto"]'),
    ).not.toBeInTheDocument();

    expect(
      container.querySelector('div[data-popper-placement="top"]'),
    ).toBeInTheDocument();
  });

  it('should allow for a placement prefix', () => {
    render(
      <PopperContent
        placementPrefix="dropdown"
        target="target"
        isOpen
        container="inline"
      >
        Yo!
      </PopperContent>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('dropdown-auto');
  });

  it('should allow for a placement prefix with custom placement', () => {
    const { container } = render(
      <PopperContent
        placementPrefix="dropdown"
        placement="top"
        target="target"
        isOpen
        container="inline"
      >
        Yo!
      </PopperContent>,
    );

    expect(screen.getByText('Yo!')).toHaveClass('dropdown-auto');
    expect(
      container.querySelector('div[data-popper-placement="top"]'),
    ).toBeInTheDocument();
  });

  it('should render custom tag for the popper', () => {
    render(
      <PopperContent
        tag="main"
        target="target"
        isOpen
        container="inline"
        data-testid="morty"
      >
        Yo!
      </PopperContent>,
    );

    expect(screen.getByTestId('morty').tagName.toLowerCase()).toBe('main');
  });

  it('should allow a function to be used as children', () => {
    const renderChildren = jest.fn();
    render(
      <PopperContent target="target" isOpen>
        {renderChildren}
      </PopperContent>,
    );
    expect(renderChildren).toHaveBeenCalled();
  });

  it('should render children properly when children is a function', () => {
    render(
      <PopperContent target="target" isOpen>
        {() => 'Yo!'}
      </PopperContent>,
    );

    expect(screen.queryByText('Yo!')).toBeInTheDocument();
  });
});

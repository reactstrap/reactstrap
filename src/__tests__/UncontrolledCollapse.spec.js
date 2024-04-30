import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { UncontrolledCollapse } from '..';

describe('UncontrolledCollapse', () => {
  let toggler;
  let togglers;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <button id="toggler">Click Me</button>
        <button class="toggler">Toggler 1</button>
        <button class="toggler">Toggler 2</button>
      </div>`;
    toggler = document.getElementById('toggler');
    togglers = document.getElementsByClassName('toggler');

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.innerHTML = '';
    toggler = null;
    togglers = null;
  });

  it('should be a Collapse', () => {
    render(
      <UncontrolledCollapse data-testid="collapse" toggler="#toggler">
        Yo!
      </UncontrolledCollapse>,
    );

    expect(screen.getByTestId('collapse')).toHaveClass('collapse');
  });

  it('should toggle isOpen when toggle is called', async () => {
    render(
      <UncontrolledCollapse data-testid="collapse" toggler="#toggler">
        Yo!
      </UncontrolledCollapse>,
    );

    await user.click(screen.getByText(/click me/i));
    jest.advanceTimersByTime(1000);

    expect(screen.getByTestId('collapse')).toHaveClass('show');
  });

  it('should toggle for multiple togglers', async () => {
    render(
      <UncontrolledCollapse data-testid="collapse" toggler=".toggler">
        Yo!
      </UncontrolledCollapse>,
    );

    expect(screen.getByTestId('collapse')).not.toHaveClass('show');

    await user.click(screen.getByText(/toggler 1/i));
    jest.advanceTimersByTime(1000);
    expect(screen.getByTestId('collapse')).toHaveClass('show');

    await user.click(screen.getByText(/toggler 2/i));
    jest.advanceTimersByTime(1000);
    expect(screen.getByTestId('collapse')).not.toHaveClass('show');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '..';

describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    toggle = () => {};
  });

  it('should render a single child', () => {
    render(
      <ButtonDropdown isOpen toggle={toggle}>
        Ello world
      </ButtonDropdown>,
    );

    expect(screen.getByText('Ello world')).toBeInTheDocument();
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    render(
      <ButtonDropdown isOpen toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>,
    );

    expect(screen.getByText(/toggle/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

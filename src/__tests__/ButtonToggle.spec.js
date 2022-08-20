import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ButtonToggle } from '..';
import { testForChildrenInComponent } from '../testUtils';

describe('ButtonToggle', () => {
  it('should render children', () => {
    testForChildrenInComponent(ButtonToggle);
  });

  it('should have button already toggled for defaultValue true', () => {
    render(<ButtonToggle defaultValue>Ello world</ButtonToggle>);

    expect(screen.getByText(/world/i)).toHaveClass('active');
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      render(<ButtonToggle onClick={onClick}>Testing Click</ButtonToggle>);

      user.click(screen.getByText(/testing click/i));
      expect(onClick).toHaveBeenCalled();
    });

    it('should not call props.onClick if it exists and button is disabled', () => {
      const onClick = jest.fn();
      render(
        <ButtonToggle onClick={onClick} disabled>
          Testing Click
        </ButtonToggle>,
      );

      user.click(screen.getByText(/testing click/i));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('onFocus', () => {
    it('calls props.onFocus if it exists', () => {
      const onFocus = jest.fn();
      render(<ButtonToggle onFocus={onFocus}>Testing Click</ButtonToggle>);

      screen.getByText(/testing click/i).focus();
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('onBlur', () => {
    it('calls props.onBlur if it exists', () => {
      const onBlur = jest.fn();
      render(<ButtonToggle onBlur={onBlur}>Testing Click</ButtonToggle>);
      screen.getByText(/testing click/i).focus();
      screen.getByText(/testing click/i).blur();
      expect(onBlur).toHaveBeenCalled();
    });
  });
});

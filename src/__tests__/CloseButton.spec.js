import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render a close button', () => {
    render(<CloseButton data-testid="close-btn" />);
    expect(screen.getByTestId('close-btn')).toHaveClass('btn-close');
  });

  it('should render white variant', () => {
    render(<CloseButton variant="white" data-testid="close-btn" />);
    expect(screen.getByTestId('close-btn')).toHaveClass('btn-close-white');
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      render(<CloseButton onClick={onClick} data-testid="btn-close" />);

      user.click(screen.getByTestId('btn-close'));
      expect(onClick).toHaveBeenCalled();
    });

    it('returns the value returned by props.onClick', () => {
      const onClick = jest.fn(() => 1234);
      render(<CloseButton onClick={onClick} data-testid="btn-close" />);

      user.click(screen.getByTestId('btn-close'));

      expect(onClick.mock.results[0].value).toBe(1234);
    });

    it('is not called when disabled', () => {
      const onClick = jest.fn();
      render(
        <CloseButton onClick={onClick} disabled data-testid="btn-close" />,
      );
      user.click(screen.getByTestId('btn-close'));

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

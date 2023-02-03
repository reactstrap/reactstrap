import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToastBody } from '..';

describe('ToastBody', () => {
  it('should render with "toast-body" class', () => {
    render(<ToastBody>Yo!</ToastBody>);

    screen.getByText('Yo!');
    expect(document.querySelector('.toast-body')).toBeTruthy();
  });

  it('should render additional classes', () => {
    render(<ToastBody className="other">Yo!</ToastBody>);

    expect(document.querySelector('.other')).toBeTruthy();
    expect(document.querySelector('.toast-body')).toBeTruthy();
  });

  it('should render custom tag', () => {
    render(<ToastBody tag="main">Yo!</ToastBody>);

    screen.getByText('Yo!');
    expect(document.querySelector('.toast-body')).toBeTruthy();
    expect(document.querySelector('main')).toBeTruthy();
  });
});

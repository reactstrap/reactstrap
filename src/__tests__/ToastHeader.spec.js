import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToastHeader } from '..';
import { testForCustomClass, testForDefaultClass } from '../testUtils';

describe('ToastHeader', () => {
  it('should render with "toast-header" class', () => {
    testForDefaultClass(ToastHeader, 'toast-header');
  });

  it('should render additional classes', () => {
    testForCustomClass(ToastHeader);
  });

  it('should render close button', () => {
    render(<ToastHeader toggle={() => {}}>Yo!</ToastHeader>);

    expect(screen.getByLabelText(/close/i)).toBeInTheDocument();
  });

  it('should render custom tag', () => {
    render(<ToastHeader tag="p">Yo!</ToastHeader>);
    expect(screen.getByText(/yo!/i).tagName.toLowerCase()).toMatch('p');
  });

  it('should render custom wrapping tag', () => {
    render(<ToastHeader wrapTag="main">Yo!</ToastHeader>);
    expect(screen.getByText(/yo/i).parentElement.tagName).toMatch(/main/i);
  });
});

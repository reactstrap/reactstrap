import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalHeader } from '..';
import { testForCustomClass, testForDefaultClass } from '../testUtils';

describe('ModalHeader', () => {
  it('should render with "modal-header" class', () => {
    testForDefaultClass(ModalHeader, 'modal-header');
  });

  it('should render additional classes', () => {
    testForCustomClass(ModalHeader);
  });

  it('should render close button', () => {
    render(
      <ModalHeader toggle={() => {}} data-testid="test" className="other">
        Yo!
      </ModalHeader>,
    );
    const node = screen.getByTestId('test').querySelector('button');
    expect(node.tagName.toLowerCase()).toBe('button');
    expect(node).toHaveClass('btn-close');
  });

  it('should render custom tag', () => {
    render(<ModalHeader tag="main">hello</ModalHeader>);
    expect(screen.getByText(/hello/i).tagName.toLowerCase()).toBe('main');
  });

  it('should render custom wrapping tag', () => {
    render(<ModalHeader data-testid="test" wrapTag="main" />);
    expect(screen.getByTestId('test').tagName.toLowerCase()).toMatch('main');
  });
});

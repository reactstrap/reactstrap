import React from 'react';
import { render, screen } from '@testing-library/react';
import { OffcanvasHeader } from '..';
import { testForCustomClass, testForDefaultClass } from '../testUtils';

describe('OffcanvasHeader', () => {
  it('should render with "offcanvas-header" class', () => {
    testForDefaultClass(OffcanvasHeader, 'offcanvas-header');
  });

  it('should render additional classes', () => {
    testForCustomClass(OffcanvasHeader);
  });

  it('should render close button', () => {
    render(
      <OffcanvasHeader toggle={() => {}} data-testid="test" className="other">
        Yo!
      </OffcanvasHeader>,
    );
    const node = screen.getByTestId('test').querySelector('button');
    expect(node.tagName.toLowerCase()).toBe('button');
    expect(node).toHaveClass('btn-close');
  });

  it('should render custom tag', () => {
    render(<OffcanvasHeader tag="h1">Yo!</OffcanvasHeader>);
    expect(screen.getByText(/yo!/i).tagName.toLowerCase()).toMatch('h1');
  });

  it('should render custom wrapping tag', () => {
    render(<OffcanvasHeader wrapTag="main">Yo!</OffcanvasHeader>);
    expect(screen.getByText(/yo/i).parentElement.tagName).toMatch(/main/i);
  });
});

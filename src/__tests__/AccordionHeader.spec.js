import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { AccordionHeader, AccordionContext } from '..';
import { testForCustomClass, testForCustomTag } from '../testUtils';

describe('AccordionHeader', () => {
  it('should render with "accordion-header" class', () => {
    render(
      <AccordionHeader targetId="cool-accordion" data-testid="accordion-header">
        Heading
      </AccordionHeader>,
    );

    expect(screen.getByTestId('accordion-header')).toHaveClass(
      'accordion-header',
    );
    expect(screen.getByText(/heading/i)).toHaveClass(
      'accordion-button collapsed',
    );
  });

  it('should render additional classes', () => {
    testForCustomClass(AccordionHeader, { targetId: 'cool-accordion' });
  });

  it('should render custom tag', () => {
    testForCustomTag(AccordionHeader, { targetId: 'cool-accordion' });
  });

  it('should be open if open == targetId', () => {
    render(
      <AccordionContext.Provider value={{ open: 'open-accordion' }}>
        <AccordionHeader targetId="open-accordion">Header open</AccordionHeader>
        <AccordionHeader targetId="closed-accordion">
          Header close
        </AccordionHeader>
      </AccordionContext.Provider>,
    );

    expect(screen.getByText(/header open/i)).not.toHaveClass('collapsed');
    expect(screen.getByText(/header close/i)).toHaveClass('collapsed');
  });

  it('should toggle collapse if accordion-button is clicked', async () => {
    const toggle = jest.fn();

    render(
      <AccordionContext.Provider value={{ toggle }}>
        <AccordionHeader data-testid="accordion-body" targetId="cool-accordion">
          Heading
        </AccordionHeader>
      </AccordionContext.Provider>,
    );

    await user.click(screen.getByText(/heading/i));
    expect(toggle.mock.calls[0][0]).toBe('cool-accordion');
  });
});

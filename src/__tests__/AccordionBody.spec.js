import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionBody, AccordionContext } from '..';
import { testForCustomClass } from '../testUtils';

describe('AccordionBody', () => {
  it('should render with "accordion-body" class within "accordion-collapse', () => {
    render(
      <AccordionBody accordionId="cool-accordion" data-testid="accordion-body">
        accordion body
      </AccordionBody>,
    );

    expect(screen.getByTestId('accordion-body')).toHaveClass(
      'accordion-collapse',
    );
    expect(screen.getByText(/accordion body/i)).toHaveClass('accordion-body');
  });

  it('should render additional classes', () => {
    testForCustomClass(AccordionBody, { accordionId: '1' });
  });

  it('should render custom tag', () => {
    render(
      <AccordionBody accordionId="cool-accordion" tag="h1">
        accordion body
      </AccordionBody>,
    );

    expect(screen.getByText(/accordion body/i).tagName).toMatch(/h1/i);
  });

  it('should be open if open == id', () => {
    render(
      <AccordionContext.Provider value={{ open: 'cool-accordion' }}>
        <AccordionBody
          accordionId="cool-accordion"
          data-testid="accordion-body-1"
        />
        <AccordionBody
          accordionId="not-cool-accordion"
          data-testid="accordion-body-2"
        />
      </AccordionContext.Provider>,
    );

    expect(screen.getByTestId('accordion-body-1')).toHaveClass('show');
    expect(screen.getByTestId('accordion-body-2')).not.toHaveClass('show');
  });
});

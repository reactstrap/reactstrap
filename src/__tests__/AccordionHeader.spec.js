import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionHeader, AccordionContext } from '..';
import { testForCustomClass, testForCustomTag } from '../testUtils';

describe('AccordionHeader', () => {
  it('should render with "accordion-header" class', () => {
    const { getByTestId, getByText } = render(
      <AccordionHeader targetId="cool-accordion" data-testid="accordion-header">
        Heading
      </AccordionHeader>,
    );

    expect(getByTestId('accordion-header')).toHaveClass('accordion-header');
    expect(getByText(/heading/i)).toHaveClass('accordion-button collapsed');
  });

  it('should render additional classes', () => {
    testForCustomClass(AccordionHeader, { targetId: 'cool-accordion' });
  });

  it('should render custom tag', () => {
    testForCustomTag(AccordionHeader, { targetId: 'cool-accordion' });
  });

  it('should be open if open == targetId', () => {
    const { getByText } = render(
      <AccordionContext.Provider value={{ open: 'open-accordion' }}>
        <AccordionHeader targetId="open-accordion">Header open</AccordionHeader>
        <AccordionHeader targetId="closed-accordion">
          Header close
        </AccordionHeader>
      </AccordionContext.Provider>,
    );

    expect(getByText(/header open/i)).not.toHaveClass('collapsed');
    expect(getByText(/header close/i)).toHaveClass('collapsed');
  });

  it('should toggle collapse if accordion-button is clicked', () => {
    const toggle = jest.fn();

    const { getByText } = render(
      <AccordionContext.Provider value={{ toggle }}>
        <AccordionHeader targetId="cool-accordion">Heading</AccordionHeader>
      </AccordionContext.Provider>,
    );

    fireEvent.click(getByText(/heading/i));

    expect(toggle.mock.calls[0][0]).toBe('cool-accordion');
  });
});

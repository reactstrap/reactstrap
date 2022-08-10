import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '..';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('UncontrolledAccordion', () => {
  const accordionItems = [
    <AccordionItem data-testid="item-1" key="1">
      <AccordionHeader targetId="1" data-testid="head-1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionBody accordionId="1" data-testid="body-1">
        This is the body of first item.{' '}
      </AccordionBody>
    </AccordionItem>,
    <AccordionItem data-testid="item-2" key="2">
      <AccordionHeader targetId="2" data-testid="head-2">
        Accordion Item 2
      </AccordionHeader>
      <AccordionBody accordionId="2" data-testid="body-2">
        This is the body of second item.{' '}
      </AccordionBody>
    </AccordionItem>,
  ];

  it('should open and close on click', async () => {
    render(
      <UncontrolledAccordion
        data-testid="accordion"
        defaultOpen="1"
        className="other-class"
      >
        {accordionItems}
      </UncontrolledAccordion>,
    );

    const accordion1 = screen.getByTestId('item-1');
    const accordion2 = screen.getByTestId('item-2');

    expect(screen.getByTestId('accordion')).toHaveClass('accordion');
    expect(screen.getByTestId('accordion')).toHaveClass('other-class');

    expect(accordion1.querySelector('.accordion-collapse')).toHaveClass('show');
    expect(accordion2.querySelector('.accordion-collapse')).not.toHaveClass(
      'show',
    );

    user.click(screen.getByText(/accordion item 2/i));

    expect(accordion2.querySelector('.accordion-collapse')).toHaveClass(
      'collapsing',
    );

    await waitFor(() => {
      expect(accordion1.querySelector('.accordion-collapse')).not.toHaveClass(
        'show',
      );
      expect(accordion2.querySelector('.accordion-collapse')).toHaveClass(
        'show',
      );
    });
  });

  it('should allow multiple items to open', async () => {
    render(
      <UncontrolledAccordion
        data-testid="accordion"
        defaultOpen="1"
        className="other-class"
        stayOpen
      >
        {accordionItems}
      </UncontrolledAccordion>,
    );

    const accordion1 = screen.getByTestId('item-1');
    const accordion2 = screen.getByTestId('item-2');

    expect(screen.getByTestId('accordion')).toHaveClass('accordion');
    expect(screen.getByTestId('accordion')).toHaveClass('other-class');

    expect(accordion1.querySelector('.accordion-collapse')).toHaveClass('show');
    expect(accordion2.querySelector('.accordion-collapse')).not.toHaveClass(
      'show',
    );

    user.click(screen.getByText(/accordion item 2/i));

    expect(accordion2.querySelector('.accordion-collapse')).toHaveClass(
      'collapsing',
    );

    await waitFor(() => {
      expect(accordion1.querySelector('.accordion-collapse')).toHaveClass(
        'show',
      );
      expect(accordion2.querySelector('.accordion-collapse')).toHaveClass(
        'show',
      );
    });
  });
});

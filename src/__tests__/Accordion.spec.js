import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from '..';
import { testForCustomClass, testForCustomTag } from '../testUtils';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('Accordion', () => {
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
    <AccordionItem data-testid="item-3" key="3">
      <AccordionHeader targetId="3" data-testid="head-3">
        Accordion Item 3
      </AccordionHeader>
      <AccordionBody accordionId="3" data-testid="body-3">
        This is the body of third item.{' '}
      </AccordionBody>
    </AccordionItem>,
  ];

  it('should render a div with "accordion" class', () => {
    render(
      <Accordion open="this accordion" toggle={() => {}} data-testid="test" />,
    );
    const node = screen.getByTestId('test');
    expect(node.tagName).toMatch(/div/i);
    expect(node).toHaveClass('accordion');
  });

  it('should render flush prop', () => {
    render(
      <Accordion
        open="this accordion"
        flush
        toggle={() => {}}
        data-testid="test"
      />,
    );
    const node = screen.getByTestId('test');
    expect(node).toHaveClass('accordion');
    expect(node).toHaveClass('accordion-flush');
  });

  it('should render custom tag', () => {
    testForCustomTag(Accordion, {
      open: 'this accordion',
      flush: true,
      toggle: () => {},
    });
  });

  it('should render custom classes', () => {
    testForCustomClass(Accordion, {
      open: 'this accordion',
      toggle: () => {},
    });
  });

  it('should have second item showing and others collapsed', () => {
    render(
      <Accordion open="2" toggle={() => {}} data-testid="accordion">
        {accordionItems}
      </Accordion>,
    );

    expect(screen.getByTestId('body-1')).not.toHaveClass('show');
    expect(screen.getByTestId('body-2')).toHaveClass('show');
    expect(screen.getByTestId('body-3')).not.toHaveClass('show');
  });

  it('should call toggle with clicked item id', () => {
    const mockFn = jest.fn(() => {});
    render(
      <Accordion open="1" toggle={mockFn} data-testid="accordion">
        {accordionItems}
      </Accordion>,
    );

    fireEvent.click(screen.getByText(/accordion item 2/i));

    expect(mockFn.mock.calls[0][0]).toBe('2');
  });

  it('should collapse current item and open new item on prop change', async () => {
    const { rerender } = render(
      <Accordion open="1" toggle={() => {}} data-testid="accordion">
        {accordionItems}
      </Accordion>,
    );

    expect(screen.getByTestId('body-1')).toHaveClass('show');

    rerender(
      <Accordion open="2" toggle={() => {}} data-testid="accordion">
        {accordionItems}
      </Accordion>,
    );

    expect(
      screen.getByTestId('item-1').querySelector('.accordion-collapse'),
    ).toHaveClass('collapsing');

    await waitFor(() => {
      expect(
        screen.getByTestId('item-1').querySelector('.accordion-collapse'),
      ).not.toHaveClass('show');
      expect(
        screen.getByTestId('item-2').querySelector('.accordion-collapse'),
      ).toHaveClass('show');
    });
  });

  it('should allow multiple items to open', async () => {
    render(
      <Accordion open={['1', '2']} toggle={() => {}} data-testid="accordion">
        {accordionItems}
      </Accordion>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('body-1')).toHaveClass('show');
      expect(screen.getByTestId('body-2')).toHaveClass('show');
    });
  });
});

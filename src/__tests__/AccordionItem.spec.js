import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionItem } from '..';
import { testForCustomClass, testForCustomTag } from '../testUtils';

describe('AccordionItem', () => {
  it('should render with "accordion-item" class', () => {
    const { getByTestId } = render(
      <AccordionItem data-testid="accordion-item" />,
    );

    expect(getByTestId('accordion-item')).toHaveClass('accordion-item');
  });

  it('should render additional classes', () => {
    testForCustomClass(AccordionItem);
  });

  it('should render custom tag', () => {
    testForCustomTag(AccordionItem);
  });
});

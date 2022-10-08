import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormFeedback } from '..';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('FormFeedback', () => {
  it('should render with "div" tag by default', () => {
    testForDefaultTag(FormFeedback, 'div');
  });

  it('should render children', () => {
    testForChildrenInComponent(FormFeedback);
  });

  it('should render with "invalid-feedback" class', () => {
    testForDefaultClass(FormFeedback, 'invalid-feedback');
  });

  it('should render with "valid-feedback" class', () => {
    render(<FormFeedback valid>Yo!</FormFeedback>);

    expect(screen.getByText(/yo/i)).toHaveClass('valid-feedback');
  });

  it('should render with "valid-tooltip" class', () => {
    render(
      <FormFeedback valid tooltip>
        Yo!
      </FormFeedback>,
    );

    expect(screen.getByText(/yo/i)).toHaveClass('valid-tooltip');
  });

  it('should render additional classes', () => {
    testForCustomClass(FormFeedback);
  });

  it('should render custom tag', () => {
    testForCustomTag(FormFeedback);
  });
});

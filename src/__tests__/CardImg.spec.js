import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardImg } from '..';
import {
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
} from '../testUtils';

describe('CardImg', () => {
  it('should render with "card-img" class', () => {
    testForDefaultClass(CardImg, 'card-img');
  });

  it('should render top class name', () => {
    render(<CardImg top alt="awesome poster" src="/path/image.png" />);

    expect(screen.getByAltText(/awesome poster/i)).toHaveClass('card-img-top');
  });

  it('should render bottom class name', () => {
    render(<CardImg bottom alt="awesome poster" src="/path/image.png" />);

    expect(screen.getByAltText(/awesome poster/i)).toHaveClass(
      'card-img-bottom',
    );
  });

  it('should render custom tag', () => {
    testForCustomTag(CardImg);
  });

  it('should render additional classes', () => {
    testForCustomClass(CardImg);
  });
});

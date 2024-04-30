import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaginationLink } from '..';
import {
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('PaginationLink', () => {
  it('should render default `a` tag when `href` is present', () => {
    render(<PaginationLink href="#" data-testid="endless" />);
    expect(screen.getByTestId('endless').tagName).toBe('A');
  });

  it('should render default `button` tag when no `href` is present', () => {
    testForDefaultTag(PaginationLink, 'button');
  });

  it('should render custom tag', () => {
    testForCustomTag(PaginationLink, {}, 'span');
  });

  it('should render with "page-link" class', () => {
    testForDefaultClass(PaginationLink, 'page-link');
  });

  it('should render previous', () => {
    render(<PaginationLink previous />);

    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u2039')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render next', () => {
    render(<PaginationLink next />);

    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByText('Next')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u203A')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render default previous caret with children as an empty array', () => {
    render(<PaginationLink previous children={[]} />);

    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u2039')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render default next caret with children as an empty array', () => {
    render(<PaginationLink next children={[]} />);

    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByText('Next')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u203A')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render custom aria label', () => {
    render(<PaginationLink next aria-label="Yo" />);
    expect(screen.getByLabelText('Yo')).toBeInTheDocument();
    expect(screen.getByText('Yo')).toHaveClass('visually-hidden');
  });

  it('should render custom caret specified as a string', () => {
    render(<PaginationLink next>Yo</PaginationLink>);

    expect(screen.getByText('Yo')).toBeInTheDocument();
  });

  it('should render custom caret specified as a component', () => {
    render(
      <PaginationLink next>
        <span>Yo</span>
      </PaginationLink>,
    );

    expect(screen.getByText('Yo')).toBeInTheDocument();
    expect(screen.getByText('Yo').tagName).toBe('SPAN');
  });

  it('should render first', () => {
    render(<PaginationLink first />);

    expect(screen.getByLabelText('First')).toBeInTheDocument();
    expect(screen.getByText('First')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u00ab')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render last', () => {
    render(<PaginationLink last />);

    expect(screen.getByLabelText('Last')).toBeInTheDocument();
    expect(screen.getByText('Last')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u00bb')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render default first caret with children as an empty array', () => {
    render(<PaginationLink first children={[]} />);

    expect(screen.getByLabelText('First')).toBeInTheDocument();
    expect(screen.getByText('First')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u00ab')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should render default last caret with children as an empty array', () => {
    render(<PaginationLink last children={[]} />);

    expect(screen.getByLabelText('Last')).toBeInTheDocument();
    expect(screen.getByText('Last')).toHaveClass('visually-hidden');
    expect(screen.getByText('\u00bb')).toHaveAttribute('aria-hidden', 'true');
  });
});

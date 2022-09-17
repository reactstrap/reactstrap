import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Col } from '..';

describe('Col', () => {
  it('should render default .col markup', () => {
    render(<Col data-testid="col" />);

    expect(screen.getByTestId('col')).toHaveClass('col');
  });

  it('should render children', () => {
    render(<Col data-testid="col">Children</Col>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('should pass additional classNames', () => {
    render(<Col className="extra" data-testid="col" />);

    expect(screen.getByTestId('col')).toHaveClass('extra');
  });

  it('should allow custom columns to be defined', () => {
    render(
      <Col widths={['base', 'jumbo']} base="4" jumbo="6" data-testid="col" />,
    );

    expect(screen.getByTestId('col')).toHaveClass('col-4');
    expect(screen.getByTestId('col')).toHaveClass('col-jumbo-6');
    expect(screen.getByTestId('col')).not.toHaveClass('col');
  });

  it('should allow custom columns to be defined with objects', () => {
    render(
      <Col
        widths={['base', 'jumbo', 'spaceship']}
        spaceship={{ size: 1, order: 2, offset: 4 }}
        data-testid="col"
      />,
    );

    expect(screen.getByTestId('col')).toHaveClass('col-spaceship-1');
    expect(screen.getByTestId('col')).toHaveClass('order-spaceship-2');
    expect(screen.getByTestId('col')).toHaveClass('offset-spaceship-4');
    expect(screen.getByTestId('col')).not.toHaveClass('col');
  });

  it('should pass col size specific classes as Strings', () => {
    render(<Col sm="6" data-testid="col" />);

    expect(screen.getByTestId('col')).toHaveClass('col-sm-6');
    expect(screen.getByTestId('col')).not.toHaveClass('col');
  });

  it('should pass col size specific classes as Numbers', () => {
    render(<Col sm={6} data-testid="col" />);

    expect(screen.getByTestId('col')).toHaveClass('col-sm-6');
    expect(screen.getByTestId('col')).not.toHaveClass('col');
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    render(<Col xs="auto" sm data-testid="col" />);

    expect(screen.getByTestId('col')).not.toHaveClass('col');
    expect(screen.getByTestId('col')).toHaveClass('col-auto');
    expect(screen.getByTestId('col')).toHaveClass('col-sm');
  });

  it('should pass col size specific classes via Objects', () => {
    render(<Col sm={{ size: 6, order: 2, offset: 2 }} data-testid="col" />);

    expect(screen.getByTestId('col')).not.toHaveClass('col');
    expect(screen.getByTestId('col')).toHaveClass('col-sm-6');
    expect(screen.getByTestId('col')).toHaveClass('order-sm-2');
    expect(screen.getByTestId('col')).toHaveClass('offset-sm-2');
  });

  it('should pass col size specific classes via Objects including 0', () => {
    render(<Col sm={{ size: 6, order: 0, offset: 0 }} data-testid="col" />);

    expect(screen.getByTestId('col')).not.toHaveClass('col');
    expect(screen.getByTestId('col')).toHaveClass('col-sm-6');
    expect(screen.getByTestId('col')).toHaveClass('order-sm-0');
    expect(screen.getByTestId('col')).toHaveClass('offset-sm-0');
  });

  it('should pass col size when passing via object with size "auto"', () => {
    render(<Col sm={{ size: 'auto', offset: 2 }} data-testid="col" />);

    expect(screen.getByTestId('col')).toHaveClass('col-sm-auto');
    expect(screen.getByTestId('col')).not.toHaveClass('col');
  });

  it('should render custom tag', () => {
    render(<Col tag="main">Yo!</Col>);

    expect(screen.getByText(/yo!/i).tagName.toLowerCase()).toBe('main');
  });
});

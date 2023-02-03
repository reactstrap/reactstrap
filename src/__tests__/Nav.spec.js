import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Nav } from '..';

describe('Nav', () => {
  it('should render .nav markup', () => {
    render(
      <div data-testid="nav">
        <Nav />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML('<ul class="nav"></ul>');
  });

  it('should render custom tag', () => {
    render(
      <div data-testid="nav">
        <Nav tag="nav" />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML('<nav class="nav"></nav>');
  });

  it('should render children', () => {
    render(
      <div data-testid="nav">
        <Nav>Children</Nav>
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav">Children</ul>',
    );
  });

  it('should handle justified prop', () => {
    render(
      <div data-testid="nav">
        <Nav justified />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-justified"></ul>',
    );
  });

  it('should handle fill prop', () => {
    render(
      <div data-testid="nav">
        <Nav fill />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-fill"></ul>',
    );
  });

  it('should handle pills prop', () => {
    render(
      <div data-testid="nav">
        <Nav pills />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-pills"></ul>',
    );
  });

  it('should handle pills prop with card prop', () => {
    render(
      <div data-testid="nav">
        <Nav pills card />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-pills card-header-pills"></ul>',
    );
  });

  it('should handle tabs prop', () => {
    render(
      <div data-testid="nav">
        <Nav tabs />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-tabs"></ul>',
    );
  });

  it('should handle tabs prop with card prop', () => {
    render(
      <div data-testid="nav">
        <Nav tabs card />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav nav-tabs card-header-tabs"></ul>',
    );
  });

  it('should handle vertical prop', () => {
    render(
      <div data-testid="nav">
        <Nav vertical />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav flex-column"></ul>',
    );
  });

  it('should handle vertical prop with string', () => {
    render(
      <div data-testid="nav">
        <Nav vertical="sm" />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav flex-sm-column"></ul>',
    );
  });

  it('should handle horizontal prop with string', () => {
    render(
      <div data-testid="nav">
        <Nav horizontal="end" />
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="nav justify-content-end"></ul>',
    );
  });

  it('should pass additional classNames', () => {
    render(<Nav data-testid="nav" className="extra" />);
    expect(screen.getByTestId('nav')).toHaveClass('extra');
    expect(screen.getByTestId('nav')).toHaveClass('nav');
  });

  it('should render .navbar-nav class only', () => {
    render(
      <div data-testid="nav">
        <Nav navbar>Children</Nav>
      </div>,
    );
    expect(screen.getByTestId('nav')).toContainHTML(
      '<ul class="navbar-nav">Children</ul>',
    );
  });
});

import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from '..';

describe('Navbar', () => {
  it('should render .navbar markup', () => {
    render(
      <div data-testid="navBar">
        <Navbar />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav class="navbar" ><div class="container-fluid" /></nav>',
    );
  });

  it('should render default .navbar-expand class', () => {
    render(
      <div data-testid="navBar">
        <Navbar expand />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav class="navbar navbar-expand"><div class="container-fluid"></div></nav>',
    );
  });

  it('should render size based .navbar-expand-* classes', () => {
    render(
      <div data-testid="navBar">
        <Navbar expand="md" />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav class="navbar navbar-expand-md"><div class="container-fluid"></div></nav>',
    );
  });

  it('should render custom tag', () => {
    render(
      <div data-testid="navBar">
        <Navbar tag="div" />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<div class="navbar"><div class="container-fluid"></div></div>',
    );
  });

  it('should render role', () => {
    render(
      <div data-testid="navBar">
        <Navbar role="navigation" />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav role="navigation" class="navbar"><div class="container-fluid"></div></nav>',
    );
  });

  it('should support container options', () => {
    render(
      <div data-testid="navBarFalse">
        <Navbar container={false} />
      </div>,
    );
    expect(screen.getByTestId('navBarFalse')).toContainHTML(
      '<nav class="navbar"></nav>',
    );

    render(
      <div data-testid="navBar">
        <Navbar container />
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav class="navbar"><div class="container"></div></nav>',
    );

    render(
      <div data-testid="navBarXs">
        <Navbar container="xs" />
      </div>,
    );
    expect(screen.getByTestId('navBarXs')).toContainHTML(
      '<nav class="navbar"><div class="container-xs"></div></nav>',
    );

    render(
      <div data-testid="navBarSm">
        <Navbar container="sm" />
      </div>,
    );
    expect(screen.getByTestId('navBarSm')).toContainHTML(
      '<nav class="navbar"><div class="container-sm"></div></nav>',
    );

    render(
      <div data-testid="navBarMd">
        <Navbar container="md" />
      </div>,
    );
    expect(screen.getByTestId('navBarMd')).toContainHTML(
      '<nav class="navbar"><div class="container-md"></div></nav>',
    );

    render(
      <div data-testid="navBarLg">
        <Navbar container="lg" />
      </div>,
    );
    expect(screen.getByTestId('navBarLg')).toContainHTML(
      '<nav class="navbar"><div class="container-lg"></div></nav>',
    );

    render(
      <div data-testid="navBarXl">
        <Navbar container="xl" />
      </div>,
    );
    expect(screen.getByTestId('navBarXl')).toContainHTML(
      '<nav class="navbar"><div class="container-xl"></div></nav>',
    );
  });

  it('should render children', () => {
    render(
      <div data-testid="navBar">
        <Navbar>Children</Navbar>
      </div>,
    );
    expect(screen.getByTestId('navBar')).toContainHTML(
      '<nav class="navbar"><div class="container-fluid">Children</div></nav>',
    );
  });

  it('should pass additional classNames', () => {
    render(<Navbar data-testid="navBar" className="extra" />);
    expect(screen.getByTestId('navBar')).toHaveClass('extra navbar');
  });

  it('should render prop based classes', () => {
    render(
      <Navbar
        data-testid="navBar"
        light
        dark
        expand="sm"
        color="success"
        full
        sticky="top"
        fixed="top"
      />,
    );
    const node = screen.getByTestId('navBar');
    expect(node).toHaveClass('bg-success');
    expect(node).toHaveClass('navbar');
    expect(node).toHaveClass('navbar-expand-sm');
    expect(node).toHaveClass('navbar-light');
    expect(node).toHaveClass('navbar-dark');
    expect(node).toHaveClass('fixed-top');
    expect(node).toHaveClass('sticky-top');
  });
});

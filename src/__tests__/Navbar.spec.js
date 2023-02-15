import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from '..';
import { testForCustomTag } from '../testUtils';

describe('Navbar', () => {
  it('should render .navbar markup', () => {
    let {container} = render(
        <Navbar />
    );
    expect(container).toContainHTML(
      '<nav class="navbar" ><div class="container-fluid" /></nav>',
    );
  });

  it('should render default .navbar-expand class', () => {
    render(<Navbar data-testid="navBar" expand/>);
    expect(screen.getByTestId('navBar')).toHaveClass('navbar-expand');
  });

  it('should render size based .navbar-expand-* classes', () => {
    render(<Navbar data-testid="navBar" expand = "md"/>);
    expect(screen.getByTestId('navBar')).toHaveClass('navbar-expand-md');
  });

  it('should render custom tag', () => {
    testForCustomTag(Navbar, {}, 'div')
  });

  it('should render role', () => {
    let {container} = render(
        <Navbar role="navigation" />
    );
    expect(container).toContainHTML(
      '<nav role="navigation" class="navbar"><div class="container-fluid"></div></nav>',
    );
  });

  it('should support container options', () => {
    const {rerender, container } = render(
      <Navbar container={false} />
  );

    expect(container).toContainHTML(
      '<nav class="navbar"></nav>', 
    );

        rerender(
      <Navbar container />
  );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container"></div></nav>',
    );

    rerender(
        <Navbar container="xs" />
    );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container-xs"></div></nav>',
    );

    rerender(
        <Navbar container="sm" />
    );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container-sm"></div></nav>',
    );

    rerender(
        <Navbar container="md" />
    );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container-md"></div></nav>',
    );

    rerender(
      <div data-testid="navBarLg">
        <Navbar container="lg" />
      </div>,
    );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container-lg"></div></nav>',
    );

    rerender(
        <Navbar container="xl" />
    );
    expect(container).toContainHTML(
      '<nav class="navbar"><div class="container-xl"></div></nav>',
    );
  });

  it('should render children', () => {
    let { }render(
        <Navbar>Children</Navbar>
    );
    expect(container).toContainHTML(
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

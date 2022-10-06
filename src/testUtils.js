import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

export function testForCustomClass(Component, props = {}) {
  render(<Component {...props} data-testid="test" className="custom-class" />);
  const node = screen.getByTestId('test');
  expect(node).toHaveClass('custom-class');
}

export function testForCustomTag(Component, props = {}, tag = 'h1') {
  render(<Component {...props} tag={tag} data-testid="test" />);
  const node = screen.getByTestId('test');
  expect(node.tagName.toLowerCase()).toMatch(tag);
}

export function testForCustomAttribute(Component, props = {}) {
  render(
    <Component {...props} data-testid="test" custom-attribute="custom-value" />,
  );
  const node = screen.getByTestId('test');
  expect(node).toHaveAttribute('custom-attribute', 'custom-value');
}

export function testForDefaultTag(Component, tag) {
  render(<Component data-testid="test" />);
  const node = screen.getByTestId('test');
  expect(node.tagName.toLowerCase()).toMatch(tag);
}

export function testForDefaultClass(Component, className) {
  render(<Component data-testid="test" />);
  const node = screen.getByTestId('test');
  expect(node).toHaveClass(className);
}

export function testForChildrenInComponent(Component) {
  render(<Component>Yo!</Component>);
  expect(screen.getByText('Yo!')).toBeInTheDocument();
}

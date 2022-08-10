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

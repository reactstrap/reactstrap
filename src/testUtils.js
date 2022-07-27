import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

export function testForCustomClass(Component, props = {}) {
  const { getByTestId } = render(
    <Component {...props} data-testid="test" className="custom-class" />,
  );
  const node = getByTestId('test');
  expect(node).toHaveClass('custom-class');
}

export function testForCustomTag(Component, props = {}, tag = 'h1') {
  const { getByTestId } = render(
    <Component {...props} tag={tag} data-testid="test" />,
  );
  const node = getByTestId('test');
  expect(node.tagName.toLowerCase()).toMatch(tag);
}

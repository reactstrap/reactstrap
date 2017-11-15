import React from 'react';

export function Manager({ tag: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}

export function Popper({ component: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}

export function Arrow({ component: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}

export function Target({ component: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}

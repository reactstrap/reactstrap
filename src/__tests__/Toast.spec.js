import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toast } from '..';
import {
  testForChildrenInComponent,
  testForCustomAttribute,
  testForCustomClass,
  testForCustomTag,
  testForDefaultTag,
} from '../testUtils';

describe('Toast', () => {
  it('should render children', () => {
    testForChildrenInComponent(Toast);
  });

  it('should pass className down', () => {
    testForCustomClass(Toast);
  });

  it('should pass other props down', () => {
    testForCustomAttribute(Toast);
  });

  it('should have support configurable transitionTimeouts', () => {
    const transitionProps = (
      <Toast
        transition={{
          timeout: 0,
          appear: false,
          enter: false,
          exit: false,
        }}
      >
        Yo!
      </Toast>
    ).props.transition;

    expect(transitionProps.timeout).toEqual(0);
    expect(transitionProps.appear).toBe(false);
    expect(transitionProps.enter).toBe(false);
    expect(transitionProps.exit).toBe(false);
  });

  it('should use a div tag by default', () => {
    testForDefaultTag(Toast, 'div');
  });

  it('should support custom tag', () => {
    testForCustomTag(Toast, 'p');
  });

  it('should be empty if not isOpen', () => {
    const { container } = render(<Toast isOpen={false}>Yo!</Toast>);
    expect(container.children).toHaveLength(0);
  });
});

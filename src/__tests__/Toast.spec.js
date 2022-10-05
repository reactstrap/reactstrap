import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toast } from '..';

describe('Toast', () => {
  it('should render children', () => {
    render(<Toast>Yo!</Toast>);
    expect(screen.getByText('Yo!')).toBeVisible();
  });

  it('should pass className down', () => {
    render(<Toast className="test-class-name">Yo!</Toast>);
    expect(screen.getByText('Yo!')).toHaveClass('test-class-name');
  });

  it('should pass other props down', () => {
    render(<Toast data-testprop="testvalue">Yo!</Toast>);
    expect(screen.getByText('Yo!')).toHaveAttribute(
      'data-testprop',
      'testvalue',
    );
  });

  it('should have default transitionTimeouts', () => {
    const transitionProps = (<Toast>Yo!</Toast>).props.transition;

    expect(transitionProps.timeout).toEqual(150);
    expect(transitionProps.appear).toBe(true);
    expect(transitionProps.enter).toBe(true);
    expect(transitionProps.exit).toBe(true);
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
    render(<Toast>Yo!</Toast>);
    expect(screen.getByText('Yo!')).toBeInstanceOf(HTMLDivElement);
  });

  it('should support custom tag', () => {
    render(<Toast tag="p">Yo!</Toast>);
    expect(screen.getByText('Yo!')).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should be empty if not isOpen', () => {
    const { container } = render(<Toast isOpen={false}>Yo!</Toast>);
    expect(container.children).toHaveLength(0);
  });
});

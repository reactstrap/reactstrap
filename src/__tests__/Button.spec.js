import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Button } from '..';
import {
  testForChildrenInComponent,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('Button', () => {
  it('should render children', () => {
    testForChildrenInComponent(Button);
  });

  it('should render custom element', () => {
    function Link(props) {
      return (
        <a href="/home" {...props}>
          {props.children}
        </a>
      );
    }
    render(<Button tag={Link}>Home</Button>);
    expect(screen.getByText(/home/i).tagName.toLowerCase()).toBe('a');
  });

  it('should render a button by default', () => {
    testForDefaultTag(Button, 'button');
  });

  it('should render an anchor element if href exists', () => {
    render(<Button href="/home">Home</Button>);
    expect(screen.getByText(/home/i).tagName.toLowerCase()).toBe('a');
  });

  it('should render type as undefined by default when tag is "button"', () => {
    render(<Button>Home</Button>);
    expect(screen.getByText(/home/i)).not.toHaveAttribute('type');
  });

  it('should render type as "button" by default when tag is "button" and onClick is provided', () => {
    render(<Button onClick={() => {}}>Home</Button>);
    expect(screen.getByText(/home/i)).toHaveAttribute('type', 'button');
  });

  it('should render type as user defined when defined by the user', () => {
    const TYPE = 'submit';
    render(<Button type={TYPE}>Home</Button>);
    expect(screen.getByText(/home/i)).toHaveAttribute('type', TYPE);
  });

  it('should not render type by default when the type is not defined and the tag is not "button"', () => {
    render(<Button tag="a">Home</Button>);
    expect(screen.getByText(/home/i)).not.toHaveAttribute('type');
  });

  it('should not render type by default when the type is not defined and the href is defined', () => {
    render(<Button href="#">Home</Button>);
    expect(screen.getByText(/home/i)).not.toHaveAttribute('type');
  });

  it('should render buttons with default color', () => {
    testForDefaultClass(Button, 'btn-secondary');
  });

  it('should render buttons with other colors', () => {
    render(<Button color="danger">Home</Button>);
    expect(screen.getByText(/home/i)).toHaveClass('btn-danger');
  });

  it('should render buttons with outline variant', () => {
    render(<Button outline>Home</Button>);
    expect(screen.getByText(/home/i)).toHaveClass('btn-outline-secondary');
  });

  it('should render buttons with outline variant with different colors', () => {
    render(
      <Button outline color="info">
        Home
      </Button>,
    );
    expect(screen.getByText(/home/i)).toHaveClass('btn-outline-info');
  });

  it('should render buttons at different sizes', () => {
    render(
      <>
        <Button size="sm">Small Button</Button>
        <Button size="lg">Large Button</Button>
      </>,
    );

    expect(screen.getByText(/small/i)).toHaveClass('btn-sm');
    expect(screen.getByText(/large/i)).toHaveClass('btn-lg');
  });

  it('should render block level buttons', () => {
    render(<Button block>Block Level Button</Button>);
    expect(screen.getByText(/block/i)).toHaveClass('d-block w-100');
  });

  it('should render close icon with custom child and props', () => {
    const testChild = 'close this thing';
    render(<Button close>{testChild}</Button>);
    expect(screen.getByText(testChild)).toHaveClass('btn-close');
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Testing Click</Button>);
      user.click(screen.getByText(/testing click/i));
      expect(onClick).toHaveBeenCalled();
    });

    it('is not called when disabled', () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick} disabled>
          Testing Click
        </Button>,
      );

      user.click(screen.getByText(/testing click/i));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { DropdownItem } from '..';
import {
  testForChildrenInComponent,
  testForDefaultTag,
  customDropdownRender,
} from '../testUtils';

describe('DropdownItem', () => {
  it('should render a single child', () => {
    testForChildrenInComponent(DropdownItem);
  });

  it('should render type as "button" by default', () => {
    testForDefaultTag(DropdownItem, 'button');
  });

  it('should not render type when tag is "button" and toggle is false', () => {
    render(<DropdownItem toggle={false}>Home</DropdownItem>);
    expect(screen.getByText('Home')).not.toHaveAttribute('type');
  });

  it('should render type as user defined when defined by the user', () => {
    render(<DropdownItem type="submit">Home</DropdownItem>);
    expect(screen.getByText('Home')).toHaveAttribute('type', 'submit');
  });

  it('should not render type by default when the type is not defined and the tag is not "button"', () => {
    render(<DropdownItem tag="a">Home</DropdownItem>);
    expect(screen.getByText('Home')).not.toHaveAttribute('type');
  });

  it('should render custom element', () => {
    function Link(props) {
      return (
        <a href="/home" {...props}>
          {props.children}
        </a>
      );
    }
    render(<DropdownItem tag={Link}>Home</DropdownItem>);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/home');
    expect(screen.getByText('Home').tagName.toLowerCase()).toMatch('a');
  });

  it('should render dropdown item text', () => {
    render(<DropdownItem text>text</DropdownItem>);
    expect(screen.getByText('text')).toHaveClass('dropdown-item-text');
    expect(screen.getByText('text').tagName.toLowerCase()).toMatch('span');
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      render(<DropdownItem header>Heading</DropdownItem>);
      expect(screen.getByText('Heading')).toHaveClass('dropdown-header');
      expect(screen.getByText('Heading').tagName.toLowerCase()).toMatch('h6');
    });
  });

  describe('active', () => {
    it('should render an active class', () => {
      render(<DropdownItem active data-testid="divider" />);
      expect(screen.getByTestId('divider')).toHaveClass('active');
    });
  });

  describe('divider', () => {
    it('should render a divider element', () => {
      render(<DropdownItem divider data-testid="divider" />);
      expect(screen.getByTestId('divider')).toHaveClass('dropdown-divider');
    });
  });

  describe('link (with href)', () => {
    it('should render an anchor tag', () => {
      render(<DropdownItem href="#">GO!</DropdownItem>);
      expect(screen.getByText('GO!')).toHaveClass('dropdown-item');
      expect(screen.getByText('GO!').tagName.toLowerCase()).toMatch('a');
    });
  });

  describe('onClick', () => {
    it('should not be called when disabled', () => {
      const onClick = jest.fn();
      render(
        <DropdownItem disabled onClick={onClick}>
          Item
        </DropdownItem>,
      );
      user.click(screen.getByText('Item'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('should not be called when divider is set', () => {
      const onClick = jest.fn();
      render(
        <DropdownItem divider onClick={onClick}>
          Item
        </DropdownItem>,
      );
      user.click(screen.getByText('Item'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('should not be called when header item', () => {
      const onClick = jest.fn();
      render(
        <DropdownItem header onClick={onClick}>
          Item
        </DropdownItem>,
      );
      user.click(screen.getByText('Item'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('should be called when not disabled, heading, or divider', () => {
      const onClick = jest.fn();
      customDropdownRender(
        <DropdownItem onClick={onClick}>Item</DropdownItem>,
        {
          toggle: () => {},
        },
      );
      user.click(screen.getByText(/item/i));
      expect(onClick).toBeCalled();
    });

    it('should call toggle', () => {
      const toggle = jest.fn();
      customDropdownRender(
        <DropdownItem onClick={() => {}}>Item</DropdownItem>,
        {
          toggle,
        },
      );
      user.click(screen.getByText(/item/i));
      expect(toggle).toHaveBeenCalled();
    });
  });
});

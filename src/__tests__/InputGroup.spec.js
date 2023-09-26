import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  InputGroup,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
} from '..';
import Dropdown from '../Dropdown';
import {
  testForChildrenInComponent,
  testForCustomClass,
  testForCustomTag,
  testForDefaultClass,
  testForDefaultTag,
} from '../testUtils';

describe('InputGroup', () => {
  it('should render with "div" tag', () => {
    testForDefaultTag(InputGroup, 'div');
  });

  it('should render children', () => {
    testForChildrenInComponent(InputGroup);
  });

  it('should render with "input-group" class', () => {
    testForDefaultClass(InputGroup, 'input-group');
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    render(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(screen.getByText(/yo!/i)).toHaveClass('input-group-whatever');
  });

  it('should render additional classes', () => {
    testForCustomClass(InputGroup);
  });

  it('should render custom tag', () => {
    testForCustomTag(InputGroup);
  });

  describe('When type="dropdown"', () => {
    it('should render Dropdown', () => {
      render(<InputGroup type="dropdown" data-testid="drpdwn" />);
      expect(screen.getByTestId('drpdwn')).toHaveClass('dropdown');
    });

    it('should call toggle when input is clicked', () => {
      const toggle = jest.fn();

      render(
        <InputGroup type="dropdown" isOpen toggle={toggle}>
          <Input />
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </InputGroup>,
      );

      expect(toggle).not.toBeCalled();
      user.click(document.querySelector('input.form-control'));
      expect(toggle).toBeCalled();
    });
  });
});

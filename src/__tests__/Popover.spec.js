import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popover from '../Popover';

describe('Popover', () => {
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('id', 'popover-target');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should apply popperClassName to popper component', () => {
    render(
      <Popover target="popover-target" popperClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Popover>,
    );

    expect(screen.queryByText('Bo-Katan Kryze')?.parentElement).toHaveClass(
      'popover show boba-was-here',
    );
  });

  it('should apply arrowClassName to arrow', () => {
    render(
      <Popover target="popover-target" arrowClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Popover>,
    );

    expect(document.querySelector('.arrow')).toHaveClass('boba-was-here');
  });
});

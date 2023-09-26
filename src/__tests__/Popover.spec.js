import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popover from '../Popover';

describe('Popover', () => {
  it('should apply popperClassName to popper component', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'popover-target');
    document.body.appendChild(div);

    render(
      <Popover target="popover-target" popperClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Popover>,
    );

    expect(screen.queryByText('Bo-Katan Kryze')?.parentElement).toHaveClass(
      'popover show boba-was-here',
    );
  });
});

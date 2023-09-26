import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  it('should apply popperClassName to popper component', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'tooltip-target');
    document.body.appendChild(div);

    render(
      <Tooltip target="tooltip-target" popperClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Tooltip>,
    );

    expect(screen.queryByText('Bo-Katan Kryze')?.parentElement).toHaveClass(
      'tooltip show boba-was-here',
    );
  });
});

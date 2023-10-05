import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('id', 'tooltip-target');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should apply popperClassName to popper component', () => {
    render(
      <Tooltip target="tooltip-target" popperClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Tooltip>,
    );

    expect(screen.queryByText('Bo-Katan Kryze')?.parentElement).toHaveClass(
      'tooltip show boba-was-here',
    );
  });

  it('should apply arrowClassName to arrow', () => {
    const { debug } = render(
      <Tooltip target="tooltip-target" arrowClassName="boba-was-here" isOpen>
        Bo-Katan Kryze
      </Tooltip>,
    );
    debug();
    expect(document.querySelector('.arrow')).toHaveClass('boba-was-here');
  });
});

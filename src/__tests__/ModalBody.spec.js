import React from 'react';
import { render, screen } from '@testing-library/react';
import { ModalBody } from '..';
import {
  testForCustomTag
} from '../testUtils';

describe('ModalBody', () => {

  it('should render with "modal-body" class', () => {
    render(<ModalBody data-testid="modalbody-id">Yo!</ModalBody>);
    expect(screen.getByTestId('modalbody-id')).toHaveTextContent('Yo!');
    expect(screen.getByTestId('modalbody-id')).toHaveClass('modal-body');
  });

  it('should render additional classes', () => {
    render(<ModalBody className="other" data-testid="modalbody-id">Yo!</ModalBody>);
    expect(screen.getByTestId('modalbody-id')).toHaveClass('modal-body');
    expect(screen.getByTestId('modalbody-id')).toHaveClass('other');
  });

  it('should render custom tag', () => {
    testForCustomTag(ModalBody);
  });

});

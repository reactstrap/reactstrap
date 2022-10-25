import React from 'react';
import { render, screen } from '@testing-library/react';
import { ModalFooter } from '..';
import {
  testForCustomTag
} from '../testUtils';

describe('ModalFooter', () => {

  it('should render with "modal-footer" class', () => {
    render(<ModalFooter data-testid="modalfooter-id">Yo!</ModalFooter>);
    expect(screen.getByTestId('modalfooter-id')).toHaveTextContent('Yo!');
    expect(screen.getByTestId('modalfooter-id')).toHaveClass('modal-footer');
  });

  it('should render additional classes', () => {
    render(<ModalFooter className="other" data-testid="modalfooter-id">Yo!</ModalFooter>);
    expect(screen.getByTestId('modalfooter-id')).toHaveClass('modal-footer');
    expect(screen.getByTestId('modalfooter-id')).toHaveClass('other');
  });

  it('should render custom tag', () => {
    testForCustomTag(ModalFooter);
  });

});

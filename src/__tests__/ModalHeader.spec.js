import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalHeader } from '..';

describe('ModalHeader', () => {

  it('should render with "modal-header" class', () => {
    render(
      <ModalHeader data-testid="modalheader-id">
        Yo!
      </ModalHeader>
    );
    expect(screen.getByTestId('modalheader-id')).toHaveTextContent('Yo!');
    expect(screen.getByTestId('modalheader-id')).toHaveClass('modal-header');
  });

  it('should render additional classes', () => {
      render(
        <ModalHeader className="other" data-testid="modalheader-id">
          Yo!
        </ModalHeader>
      );
      expect(screen.getByTestId('modalheader-id')).toHaveClass('modal-header');
      expect(screen.getByTestId('modalheader-id')).toHaveClass('other');
  });

  it('should render close button', () => {
    const {container} = render(
      <ModalHeader toggle={() => {}} className="other" data-testid="modalheader-id">
        Yo!
      </ModalHeader>
    );
    expect(container.getElementsByClassName('btn-close')).toHaveLength(1);
    expect(screen.getByTestId('modalheader-id')).toHaveClass('modal-header');
    expect(screen.getByTestId('modalheader-id')).toHaveClass('other');
  });

  it('should render custom tag', () => {
    render(<ModalHeader tag="p" data-testid="modalheader-id">Yo!</ModalHeader>);
    expect(screen.getByTestId('modalheader-id')).toHaveTextContent('Yo!');
    expect(screen.getByTestId('modalheader-id').firstChild.tagName.toLowerCase()).toMatch('p');

  });

  it('should render custom wrapping tag', () => {
    render(
      <ModalHeader wrapTag="main" data-testid="modalheader-id">
        Yo!
      </ModalHeader>
    );
    expect(screen.getByTestId('modalheader-id').tagName.toLowerCase()).toMatch('main');
  });

});

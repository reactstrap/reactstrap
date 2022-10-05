import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '..';
import '@testing-library/jest-dom';

describe('Table', () => {
  it('should render with "table" class', () => {
    render(<Table>Yo!</Table>);

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
  });

  it('should render additional classes', () => {
    render(<Table className="other">Yo!</Table>);

    expect(screen.getByRole('table')).toHaveClass('table');
    expect(screen.getByRole('table')).toHaveClass('other');
  });

  it('should render custom tag', () => {
    render(<Table tag="div">Yo!</Table>);

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByText('Yo!')).toHaveClass('table');
    expect(screen.getByText('Yo!')).toBeInstanceOf(HTMLDivElement);
  });

  it('should render modifier classes', () => {
    render(
      <Table size="sm" bordered striped dark hover>
        Yo!
      </Table>,
    );

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(screen.getByRole('table')).toHaveClass('table-sm');
    expect(screen.getByRole('table')).toHaveClass('table-bordered');
    expect(screen.getByRole('table')).toHaveClass('table-striped');
    expect(screen.getByRole('table')).toHaveClass('table-hover');
    expect(screen.getByRole('table')).toHaveClass('table-dark');
  });

  it('should render a borderless table', () => {
    render(<Table borderless>Yo!</Table>);

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(screen.getByRole('table')).toHaveClass('table-borderless');
  });

  it('should render responsive wrapper class', () => {
    const { container } = render(<Table responsive>Yo!</Table>);

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(container.querySelector('.table-responsive')).toBeInTheDocument();
  });

  it('should render responsive wrapper class for md', () => {
    const { container } = render(<Table responsive="md">Yo!</Table>);

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(container.querySelector('.table-responsive-md')).toBeInTheDocument();
  });

  it('should render responsive wrapper cssModule', () => {
    const cssModule = {
      table: 'scopedTable',
      'table-responsive': 'scopedResponsive',
    };
    const { container } = render(
      <Table responsive cssModule={cssModule}>
        Yo!
      </Table>,
    );

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(container.querySelector('.scopedResponsive')).toBeInTheDocument();
    expect(container.querySelector('.scopedTable')).toBeInTheDocument();
  });
});

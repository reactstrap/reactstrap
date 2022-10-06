import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '..';
import '@testing-library/jest-dom';

function renderTable(props = {}) {
  const { items = [['Yo!']], ...resetProps } = props;

  return render(
    <Table {...resetProps}>
      <tbody>
        {items.map((row, i) => (
          <tr key={i}>
            {row.map((gridCell) => (
              <td key={gridCell}>{gridCell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>,
  );
}

describe('Table', () => {
  it('should render with "table" class', () => {
    renderTable();

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
  });

  it('should render additional classes', () => {
    renderTable({ className: 'other' });

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
    renderTable({
      size: 'sm',
      bordered: true,
      striped: true,
      dark: true,
      hover: true,
    });

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(screen.getByRole('table')).toHaveClass('table-sm');
    expect(screen.getByRole('table')).toHaveClass('table-bordered');
    expect(screen.getByRole('table')).toHaveClass('table-striped');
    expect(screen.getByRole('table')).toHaveClass('table-hover');
    expect(screen.getByRole('table')).toHaveClass('table-dark');
  });

  it('should render a borderless table', () => {
    renderTable({ borderless: true });

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(screen.getByRole('table')).toHaveClass('table-borderless');
  });

  it('should render responsive wrapper class', () => {
    const { container } = renderTable({ responsive: true });

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(container.querySelector('.table-responsive')).toBeInTheDocument();
  });

  it('should render responsive wrapper class for md', () => {
    const { container } = renderTable({ responsive: 'md' });

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(screen.getByRole('table')).toHaveClass('table');
    expect(container.querySelector('.table-responsive-md')).toBeInTheDocument();
  });

  it('should render responsive wrapper cssModule', () => {
    const cssModule = {
      table: 'scopedTable',
      'table-responsive': 'scopedResponsive',
    };
    const { container } = renderTable({ responsive: true, cssModule });

    expect(screen.getByText('Yo!')).toBeInTheDocument();
    expect(container.querySelector('.scopedResponsive')).toBeInTheDocument();
    expect(container.querySelector('.scopedTable')).toBeInTheDocument();
  });
});

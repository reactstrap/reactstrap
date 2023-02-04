import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '..';

describe('Table', () => {
  it('should render with "table" class', () => {
    render(<Table>Yo!</Table>);

    screen.getByText('Yo!');
    expect(document.querySelector('.table')).toBeTruthy();
  });

  it('should render additional classes', () => {
    render(<Table className="other">Yo!</Table>);

    expect(document.querySelector('.other')).toBeTruthy();
    expect(document.querySelector('.table')).toBeTruthy();
  });

  it('should render custom tag', () => {
    // RTL adds a div ot the body, so we should query from the container for this test
    const { container } = render(<Table tag="div">Yo!</Table>);
    screen.getByText('Yo!');
    expect(document.querySelector('.table')).toBeTruthy();
    expect(container.querySelectorAll('div').length).toBe(1);
  });

  it('should render modifier classes', () => {
    render(
      <Table size="sm" bordered striped dark hover>
        Yo!
      </Table>,
    );

    screen.getByText('Yo!');
    expect(document.querySelector('.table')).toBeTruthy();
    expect(document.querySelector('.table-sm')).toBeTruthy();
    expect(document.querySelector('.table-bordered')).toBeTruthy();
    expect(document.querySelector('.table-striped')).toBeTruthy();
    expect(document.querySelector('.table-hover')).toBeTruthy();
    expect(document.querySelector('.table-dark')).toBeTruthy();
  });

  it('should render a borderless table', () => {
    render(<Table borderless>Yo!</Table>);

    screen.getByText('Yo!');
    expect(document.querySelector('.table')).toBeTruthy();
    expect(document.querySelector('.table-borderless')).toBeTruthy();
  });

  it('should render responsive wrapper class', () => {
    render(<Table responsive>Yo!</Table>);

    screen.getByText('Yo!');
    expect(document.querySelector('.table-responsive')).toBeTruthy();
    expect(document.querySelectorAll('.table').length).toBe(1);
  });

  it('should render responsive wrapper class for md', () => {
    render(<Table responsive="md">Yo!</Table>);

    screen.getByText('Yo!');
    expect(document.querySelector('.table-responsive-md')).toBeTruthy();
    expect(document.querySelectorAll('.table').length).toBe(1);
  });

  it('should render responsive wrapper cssModule', () => {
    const cssModule = {
      table: 'scopedTable',
      'table-responsive': 'scopedResponsive',
    };
    render(
      <Table responsive cssModule={cssModule}>
        Yo!
      </Table>,
    );

    screen.getByText('Yo!');
    expect(document.querySelector('.scopedResponsive')).toBeTruthy();
    expect(document.querySelectorAll('.scopedTable').length).toBe(1);
  });
});

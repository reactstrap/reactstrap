import React from 'react';
import { Table } from 'reactstrap';
import { colors } from '../options';

const Example = (args) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color) => (
          <tr class={`table-${color}`}>
            <td>{color}</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Use contextual classes to color tables, table rows or individual cells.',
    },
  },
};

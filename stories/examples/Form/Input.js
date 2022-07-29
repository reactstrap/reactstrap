import React from 'react';
import { Input } from 'reactstrap';

function Example({ ...args }) {
  return (
    <div>
      <Input {...args} />
    </div>
  );
}

Example.args = {
  type: 'text',
  valid: false,
  invalid: false,
};

Example.argTypes = {
  valid: {
    control: { type: 'boolean' },
  },
  invalid: {
    control: { type: 'boolean' },
  },
  type: {
    control: { type: 'select' },
    options: [
      'button',
      'checkbox',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'month',
      'number',
      'password',
      'radio',
      'range',
      'reset',
      'search',
      'select',
      'submit',
      'switch',
      'tel',
      'text',
      'textarea',
      'time',
      'url',
      'week',
    ],
  },
  bsSize: {
    control: { type: 'select' },
    options: ['', 'sm', 'lg'],
  },
};

export default Example;

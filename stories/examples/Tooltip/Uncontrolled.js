/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export default function Example(props) {
  return (
    <div>
      <p>
        Somewhere in here is a{' '}
        <span
          style={{ textDecoration: 'underline', color: 'blue' }}
          href="#"
          id="UncontrolledTooltipExample"
        >
          tooltip
        </span>
        .
      </p>
      <UncontrolledTooltip
        placement="right"
        target="UncontrolledTooltipExample"
      >
        Hello world!
      </UncontrolledTooltip>
    </div>
  );
}

Example.parameters = {
  docs: {
    description: {
      story: 'Not a fan of handling state? We got `UncontrolledTooltip`.',
    },
  },
};

import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

function Example(args) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p>
        Somewhere in here is a{' '}
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          id="TooltipExample"
        >
          tooltip
        </a>
        .
      </p>
      <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target="TooltipExample"
        toggle={toggle}
      >
        Hello world!
      </Tooltip>
    </div>
  );
}

Example.args = {
  autohide: true,
  flip: true,
};

Example.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Example;

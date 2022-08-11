/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function Example(args) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover {...args} isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </div>
  );
}

Example.args = {
  flip: true,
};

Example.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Example;

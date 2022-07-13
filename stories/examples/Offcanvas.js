import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

const Example = (args) => {
  const [open, setOpen] = useState();
  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Offcanvas {...args} isOpen={open} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

Example.args = {
  backdrop: true,
  fade: true,
  scrollable: false,
};

Example.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['top', 'start', 'end', 'bottom'],
  },
};

export default Example;

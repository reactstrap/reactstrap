import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

const Example = (props) => {
  const [open, setOpen] = useState();
  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Offcanvas isOpen={open} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>
          Offcanvas Item 1
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the first item's accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Example;

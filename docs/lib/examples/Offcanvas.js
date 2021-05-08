import React, { useState } from 'react';
import { Button, ButtonToolbar, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

const Example = () => {
  const [direction, setDirection] = useState();
  const [open, setOpen] = useState();
  const toggle = () => setOpen(!open);

  return (
    <div>
      <ButtonToolbar>
        <Button
          color="primary"
          onClick={() => {
            setDirection('start');
            setOpen(true);
          }}
        >
          Open Start (default)
        </Button>
        <Button
          onClick={() => {
            setDirection('end');
            setOpen(true);
          }}
        >
          Open End
        </Button>
        <Button
          color="success"
          onClick={() => {
            setDirection('top');
            setOpen(true);
          }}
        >
          Open Top
        </Button>
        <Button
          color="danger"
          onClick={() => {
            setDirection('bottom');
            setOpen(true);
          }}
        >
          Open Bottom
        </Button>
      </ButtonToolbar>
      <Offcanvas isOpen={open} direction={direction} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>
          Offcanvas {direction}
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Example;

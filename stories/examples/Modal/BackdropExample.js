import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const Example = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  }

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="backdrop">Backdrop value</Label>{' '}
          <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">"static"</option>
          </Input>
        </FormGroup>
        <FormGroup className="mx-2" check>
          <Label check>
            <Input type="checkbox" checked={keyboard} onChange={changeKeyboard} /> Keyboard
          </Label>
        </FormGroup>
        {' '}
        <Button color="danger" onClick={toggle}>Click Me</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
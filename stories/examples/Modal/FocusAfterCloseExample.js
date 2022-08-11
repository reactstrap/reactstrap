import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
} from 'reactstrap';

function ModalFocusAfterClose(props) {
  const [open, setOpen] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const toggle = () => setOpen(!open);
  const handleSelectChange = ({ target: { value } }) => {
    setFocusAfterClose(JSON.parse(value));
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="focusAfterClose">Focus After Close</Label>
          <Input
            className="mx-2"
            type="select"
            id="focusAfterClose"
            onChange={handleSelectChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormGroup>
        <Button color="danger" onClick={toggle}>
          Open
        </Button>
      </Form>
      <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
        <ModalBody>
          Observe the &ldquo;Open&ldquo; button. It will be focused after close
          when &ldquo;returnFocusAfterClose&ldquo; is true and will not be
          focused if &ldquo;returnFocusAfterClose&ldquo; is false.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFocusAfterClose;

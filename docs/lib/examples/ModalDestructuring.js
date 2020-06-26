/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const ModalExample = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    <Label for="unmountOnClose">UnmountOnClose value</Label>{' '}
                    <Input type="select" name="unmountOnClose" id="unmountOnClose" onChange={changeUnmountOnClose}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </Input>
                </FormGroup>
                {' '}
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;

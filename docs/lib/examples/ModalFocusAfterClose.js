/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';

class ModalFocusAfterClose extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            focusAfterClose: true
        };
        this.toggle = this.toggle.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    toggle() {
        this.setState(({ open }) => ({ open: !open }));
    }

    handleSelectChange({target: { value }}) {
        this.setState({ focusAfterClose: JSON.parse(value) });
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Label for="focusAfterClose">Focus After Close</Label>
                        <Input className="mx-2" type="select" id="focusAfterClose" onChange={this.handleSelectChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Input>
                    </FormGroup>
                    <Button color="danger" onClick={this.toggle}>Open</Button>
                </Form>
                <Modal returnFocusAfterClose={this.state.focusAfterClose} isOpen={this.state.open}>
                    <ModalBody>
                        Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be focused if "returnFocusAfterClose" is false.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalFocusAfterClose;

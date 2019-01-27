/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            destroyOnClose: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeDestroyOnClose = this.changeDestroyOnClose.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    changeDestroyOnClose(e) {
        let value = e.target.value;
        this.setState({ destroyOnClose: JSON.parse(value) });
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Label for="destroyOnClose">DestroyOnClose value</Label>{' '}
                        <Input type="select" name="destroyOnClose" id="destroyOnClose" onChange={this.changeDestroyOnClose}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </Input>
                    </FormGroup>
                    {' '}
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} destroyOnClose={this.state.destroyOnClose}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Input type="textarea" placeholder="Write something (data should remain in modal if destroyOnClose is set to false)" rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Frame, { FrameContextConsumer } from "react-frame-component";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((state) => ({
            modal: !state.modal
        }));
    }

    componentDidMount() {
        this.configureIframe();
    }

    configureIframe() {
        setTimeout(function () {
            const iframe = document.getElementById('rsDocumentAsPropIframe'),
                iframeDoc = iframe.contentWindow.document,
                iframehead = iframeDoc.getElementsByTagName("head")[0];
            Array.from(document.getElementsByTagName('head')[0].querySelectorAll('link'))
                .forEach(link => {
                    iframehead.appendChild(link.cloneNode(true));
                });
        }, 500);
    }

    render() {
        return (
            <div>
                <Frame id="rsDocumentAsPropIframe" style={{ width: "100%", height: "400px" }}>
                    <FrameContextConsumer>
                        {({ document }) => {
                            return (
                                <div style={{ height: "600px" }}>
                                    <Button color="danger" onClick={this.toggle}>Open iframe modal</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} document={document}>
                                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                        <ModalBody>
                                            This is iframe modal.
                                            <br />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            );
                        }}
                    </FrameContextConsumer>
                </Frame>
            </div>
        );
    }
}

export default ModalExample;

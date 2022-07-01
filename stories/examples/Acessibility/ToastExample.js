
import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastExample = () => {
    return (
        <div className="p-3 my-2 rounded">
            <Toast role="alert" aria-labelledby="This is a toast on a white background — check it out!" aria-describedby="Example">
                <ToastHeader tabindex="0">
                    Reactstrap
                </ToastHeader>
                <ToastBody tabindex="0">
                    This is a toast on a white background — check it out!
                </ToastBody>
            </Toast>
        </div>
    );
}

export default ToastExample;


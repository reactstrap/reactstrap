import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Props from './Props';

function Example() {
  return <Props components={[Toast, ToastBody, ToastHeader]} />;
}

export default Example;

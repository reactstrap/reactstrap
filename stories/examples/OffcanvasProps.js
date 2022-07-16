import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import Props from './Props';

function Example() {
  return <Props components={[Offcanvas, OffcanvasBody, OffcanvasHeader]} />;
}

export default Example;

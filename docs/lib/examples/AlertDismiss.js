import React, { useRef, useState } from 'react';
import { Alert } from 'reactstrap';

const AlertExample = (props) => {
  const [visible, setVisible] = useState(true);
  const alertRef = useRef(null);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss} innerRef={alertRef}>
      I am an alert and I can be dismissed!
    </Alert>
  );
}

export default AlertExample;

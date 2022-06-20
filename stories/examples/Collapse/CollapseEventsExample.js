import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Opened');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('Closed');
  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <h5>Current state: {status}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;

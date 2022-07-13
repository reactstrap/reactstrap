import React, { useState } from 'react';
import { Alert, Collapse, Button } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen} horizontal>
        <Alert style={{ width: '500px' }}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Alert>
      </Collapse>
    </div>
  );
};

export default Example;

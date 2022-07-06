import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const Example = (props) => {
  return (
    <ButtonToolbar>
      <ButtonGroup className="me-2">
        <Button color="primary">1</Button>
        <Button color="primary">2</Button>
        <Button color="primary">3</Button>
        <Button color="primary">4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2">
        <Button color="secondary">5</Button>
        <Button color="secondary">6</Button>
        <Button color="secondary">7</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color="info">8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.'
    }
  },
}
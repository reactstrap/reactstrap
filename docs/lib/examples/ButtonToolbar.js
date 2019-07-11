import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const Example = (props) => {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Example;

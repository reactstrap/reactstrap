import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card body style={{ width: "18rem" }} className="my-2">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </Card>
      <Card body className="text-center" style={{ width: "18rem" }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </Card>
      <Card body className="text-end my-2" style={{ width: "18rem" }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </Card>
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'You can quickly change the text alignment of any card—in its entirety or specific parts.'
    }
  }
}
import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

const Example = (props) => {
  return (
    <Card className="my-2" style={{ width: "18rem" }}>
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Add an optional header and/or footer within a card.'
    }
  }
}
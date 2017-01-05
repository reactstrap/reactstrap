import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card block>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card block className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card block className="text-right">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  );
};

export default Example;

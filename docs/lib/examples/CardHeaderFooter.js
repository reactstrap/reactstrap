import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBlock,
  CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBlock>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBlock>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBlock>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBlock>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;

import React from 'react';
import { Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap';
import { colors } from '../options';

const Example = (props) => {
  return (
    <>
      {colors.map((color) => (
        <Card inverse={color !== 'light'} color={color} key={color} className='my-2' style={{ width: '18rem' }}>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Cards include various options for customizing their backgrounds.'
    }
  }
}
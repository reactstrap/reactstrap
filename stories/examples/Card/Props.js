import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardFooter,
  CardText,
} from 'reactstrap';
import Props from '../Props';

function Example() {
  return (
    <Props
      components={[
        Card,
        CardBody,
        CardHeader,
        CardFooter,
        CardImg,
        CardSubtitle,
        CardTitle,
        CardText,
      ]}
    />
  );
}

export default Example;

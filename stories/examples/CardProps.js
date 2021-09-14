import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import Props from './Props';

const Example = () => (
  <Props components={[Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle]} />
);

export default Example;

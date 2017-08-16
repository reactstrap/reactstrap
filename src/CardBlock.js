import React from 'react';
import CardBody from './CardBody';
import { warnOnce } from './utils';

export default function CardBlock(props) {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return <CardBody {...props} />;
}

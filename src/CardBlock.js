import React from 'react';
import CardBody from './CardBody';
import { warnOnce } from './utils';

const CardBlock = (props) => {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return <CardBody {...props} />;
};

export default CardBlock;

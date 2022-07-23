import React from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Props from '../Props';

function Example() {
  return (
    <Props
      components={[Accordion, AccordionBody, AccordionHeader, AccordionItem]}
    />
  );
}

export default Example;

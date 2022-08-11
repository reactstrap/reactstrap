import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Example(props) {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem tag="a" href="#">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">
        Library
      </BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">
        Data
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        Bootstrap
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Example;

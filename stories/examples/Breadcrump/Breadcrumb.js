import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Example(props) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Example;

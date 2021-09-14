import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText
} from 'reactstrap';
import Props from './Props';

const Example = () => (
  <Props components={[Navbar, NavbarToggler, NavbarBrand, NavbarText]} />
);

export default Example;

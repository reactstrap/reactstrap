import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Navbar color="dark" className="my-2" dark>
        <NavbarBrand href="/">
          <img
            src="/logo-white.svg"
            alt="logo"
            style={{ height: 40, width: 40 }}
          />
        </NavbarBrand>
      </Navbar>
      <Navbar color="secondary" className="my-2" dark>
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
      </Navbar>
      <Navbar color="dark" className="my-2" dark>
        <NavbarBrand href="/">
          <img
            src="/logo-white.svg"
            alt="logo"
            style={{ height: 40, width: 40 }}
          />
          Reactstrap
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        '`NavbarBrand` can be applied to most elements, be it text or images or both images and text.',
    },
  },
};

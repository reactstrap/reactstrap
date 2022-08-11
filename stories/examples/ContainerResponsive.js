import React from 'react';
import { Container } from 'reactstrap';

function Example(props) {
  return (
    <>
      <Container className="bg-light border">.container</Container>
      <Container className="bg-light border" fluid="sm">
        .container-sm
      </Container>
      <Container className="bg-light border" fluid="md">
        .container-md
      </Container>
      <Container className="bg-light border" fluid="lg">
        .container-lg
      </Container>
      <Container className="bg-light border" fluid="xl">
        .container-xl
      </Container>
      <Container className="bg-light border" fluid>
        .container-fluid
      </Container>
    </>
  );
}

export default Example;

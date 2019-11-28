import React from "react";
import { ButtonToggle } from "reactstrap";

class Example extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        <ButtonToggle color="success">success</ButtonToggle>{' '}
        <ButtonToggle color="info">info</ButtonToggle>{' '}
        <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        <ButtonToggle color="danger">danger</ButtonToggle>{' '}
      </div>
    );
  }
}

export default Example;
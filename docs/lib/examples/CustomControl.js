import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomControl } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomControl id="exampleCheckbox" type="checkbox" description="Check this custom checkbox" />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleRadio">Radios</Label>
          <div>
            <CustomControl id="exampleRadio" type="radio" description="Toggle this custom radio" />
            <CustomControl id="exampleRadio" type="radio" description="Or toggle this other custom radio" />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleRadioStacked">Radios Stacked</Label>
          <CustomControl id="exampleRadioStacked" type="stacked">
            <CustomControl type="radio" description="Toggle this custom radio" name="radio-stacked" />
            <CustomControl type="radio" description="Or toggle this other custom radio" name="radio-stacked" />
          </CustomControl>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomInputDisabled">Disabled Custom Input</Label>
          <div>
            <CustomControl id="exampleCustomInputDisabled" type="checkbox" description="Check this custom checkbox" disabled />
            <CustomControl id="exampleCustomInputDisabled" type="radio" description="Toggle this custom radio" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <div>
            <CustomControl id="exampleSelect" type="select">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CustomControl>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectDisabled">Disabled Select</Label>
          <div>
            <CustomControl id="exampleSelectDisabled" type="select" disabled>
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CustomControl>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File browser</Label>
          <div>
            <CustomControl id="exampleFile" type="file"/>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFileDisabled">Disabled File</Label>
          <div>
            <CustomControl id="exampleFileDisabled" type="file" disabled/>
          </div>
        </FormGroup>

      </Form>
    );
  }
}

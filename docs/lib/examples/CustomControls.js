import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!" htmlFor="exampleCustomCheckbox4_X" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Radios</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
            <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
            <CustomInput type="radio" id="exampleCustomRadio4" label="Can't click this label to select!" htmlFor="exampleCustomRadio4_X" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Switches</Label>
          <div>
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
            <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" />
            <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
            <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Inline</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
            <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelect">Custom Select</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
          <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
          <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
          <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
        </FormGroup>
      </Form>
    );
  }
}

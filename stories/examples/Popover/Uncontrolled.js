/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';

function Example(props) {
  return (
    <div>
      <Button id="UncontrolledPopover" type="button">
        Launch Popover
      </Button>
      <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'If handling state is too much, you can always use `UncontrolledPopover`.',
    },
  },
};

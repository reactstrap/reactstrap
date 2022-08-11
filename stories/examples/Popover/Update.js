import React, { useState } from 'react';
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Collapse,
} from 'reactstrap';
import PropTypes from 'prop-types';

function PopoverContent({ scheduleUpdate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopoverHeader>Schedule Update</PopoverHeader>
      <PopoverBody>
        <Button onClick={() => setIsOpen(!isOpen)}>Click me</Button>
        <Collapse
          isOpen={isOpen}
          onEntered={scheduleUpdate}
          onExited={scheduleUpdate}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Collapse>
      </PopoverBody>
    </>
  );
}

function Example(props) {
  return (
    <div className="text-center">
      <Button id="ScheduleUpdateButton" type="button">
        Open Popover
      </Button>
      <UncontrolledPopover
        trigger="click"
        placement="top"
        target="ScheduleUpdateButton"
      >
        {({ scheduleUpdate }) => (
          <PopoverContent scheduleUpdate={scheduleUpdate} />
        )}
      </UncontrolledPopover>
    </div>
  );
}

PopoverContent.propTypes = {
  scheduleUpdate: PropTypes.func,
};

export default Example;

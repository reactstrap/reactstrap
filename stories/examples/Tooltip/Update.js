import React, { useState, useEffect } from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';
import PropTypes from 'prop-types';

const shortText = 'Hi';
const longText = 'Long tooltip content to test scheduleUpdate';

function TooltipContent({ scheduleUpdate }) {
  const [text, setText] = useState(shortText);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(text === shortText ? longText : shortText);
      scheduleUpdate();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return <div>{text}</div>;
}

function Example(props) {
  return (
    <div className="text-center">
      <Button id="ScheduleUpdateTooltip">Click me</Button>
      <UncontrolledTooltip
        placement="top"
        target="ScheduleUpdateTooltip"
        trigger="click"
      >
        {({ scheduleUpdate }) => (
          <TooltipContent scheduleUpdate={scheduleUpdate} />
        )}
      </UncontrolledTooltip>
    </div>
  );
}

TooltipContent.propTypes = {
  scheduleUpdate: PropTypes.func,
};

export default Example;

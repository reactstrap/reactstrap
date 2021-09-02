import React, { useState, useEffect } from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';

const shortText = 'Hi';
const longText = 'Long tooltip content to test scheduleUpdate';

const TooltipContent = ({ scheduleUpdate }) => {
  const [text, setText] = useState(shortText);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(text === shortText ? longText : shortText);
      scheduleUpdate();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <>{text}</>
  );
}

const Example = (props) => {
  return (
    <div className="text-center">
      <Button id="ScheduleUpdateTooltip">Click me</Button>
      <UncontrolledTooltip placement="top" target="ScheduleUpdateTooltip" trigger="click">
        {({ scheduleUpdate }) => (
          <TooltipContent scheduleUpdate={scheduleUpdate} />
        )}
      </UncontrolledTooltip>
    </div>
  );
}

export default Example;
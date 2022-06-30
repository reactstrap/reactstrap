/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Button
        className="me-1"
        color="secondary"
        id={"Popover-" + id}
        type="button"
      >
        {item.text}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </>
  );
};

const PopoverExampleMulti = props => {
  return (
    <>
      {[
        {
          placement: "top",
          text: "Popover on Top"
        },
        {
          placement: "bottom",
          text: "Popover on Bottom"
        },
        {
          placement: "left",
          text: "Popover on Left"
        },
        {
          placement: "right",
          text: "Popover on Right"
        }
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />;
      })}
    </>
  );
};

export default PopoverExampleMulti;

PopoverExampleMulti.parameters = {
  docs: {
    description: {
      story: 'Four options are available: top, right, bottom, and left.'
    }
  }
}
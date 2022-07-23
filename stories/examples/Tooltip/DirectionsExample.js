import React, { useState } from 'react';
import { Button, Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

function TooltipItem(props) {
  const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <Button className="me-1" color="secondary" id={'Tooltip-' + id}>
        {item.text}
      </Button>
      <Tooltip
        placement={item.placement}
        isOpen={tooltipOpen}
        target={'Tooltip-' + id}
        toggle={toggle}
      >
        Tooltip Content!
      </Tooltip>
    </span>
  );
}

TooltipItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.string,
};

function TooltipExampleMulti(props) {
  return (
    <>
      {[
        {
          placement: 'top',
          text: 'Tooltip on Top',
        },
        {
          placement: 'bottom',
          text: 'Tooltip on Bottom',
        },
        {
          placement: 'left',
          text: 'Tooltip on Left',
        },
        {
          placement: 'right',
          text: 'Tooltip on Right',
        },
      ].map((tooltip, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <TooltipItem key={i} item={tooltip} id={i} />;
      })}
    </>
  );
}

export default TooltipExampleMulti;

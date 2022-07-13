import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Radio 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Radio 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Radio 3
        </Button>
      </ButtonGroup>
      <p>Selected: {rSelected}</p>

      <h5>Checkbox Buttons</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(1)}
          active={cSelected.includes(1)}
        >
          Checkbox 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
        >
          Checkbox 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          Checkbox 3
        </Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  );
};

export default Example;

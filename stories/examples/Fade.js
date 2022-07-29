import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

function Example(props) {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        This content will fade in and out as the button is pressed
      </Fade>
    </div>
  );
}

export default Example;

import React, { useRef, useState } from 'react';
import { Button, Fade } from 'reactstrap';

const Example = (props) => {
    const [fadeIn, setFadeIn] = useState(true);
    const fadeRef = useRef(null);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Toggle Fade</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3" innerRef={fadeRef}>
                This content will fade in and out as the button is pressed
            </Fade>
        </div>
    );
}

export default Example;

import React from 'react';
import AccordionTable from '../Acessibility/AccordionTable.js'

const Acessibility = (props) => {

    return (
        <div>
            <p>
                <strong> The accordion is characterized by a stacked set of  headings </strong>. Its structure is divided into <strong>Header and Panel. </strong> <br></br>
                The Header is the part that appears to the user with the expand button, while the Panel is the accordion body. <br></br>
                The first step is understand about the keyboard interaction.
            </p>
            <AccordionTable/>
        </div>
    );
};

export default Acessibility;

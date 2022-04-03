import React from 'react';
import AccordionTable from '../Acessibility/AccordionTable.js'
import AccordionAria from '../Acessibility/AccordionAria.js'

const Acessibility = (props) => {

    return (
        <div>
            <p>
                <strong> The accordion is characterized by a stacked set of  headings </strong>. Its structure is divided into <strong>Header and Panel. 
                </strong>The Header is the part that appears to the user with the expand button, while the Panel is the accordion body. <br></br>
                The first step is understand about the keyboard interaction.
            </p>
            <AccordionTable />
            <h5> WAI-ARIA statement </h5>
            <p>
                Acessible Rich Internet Applications Suite serve to show how to make a web page accessible to people with disabilities. 
                You can see more about it <a href="https://www.w3.org/WAI/standards-guidelines/aria/" rel="noreferrer" target="_blank">clicking here</a>.
                <br></br> In accordion, it is necessary we have <strong>Roles, States and Properties:</strong>
            </p>
            <AccordionAria />
        </div>
    );
};

export default Acessibility;

import React from 'react';
import ToastTable from '../Acessibility/ToastTable.js'
import ToastAria from '../Acessibility/ToastAria.js'
import ToastExample from '../Acessibility/ToastExample.js'
import ToastCodeExample from '../Acessibility/ToastCodeExample.js'

const toastAcessibility = () => {

    return (
        <div>
            <p>
                <strong> The Toast is characterized by a alert that is pushed to user </strong>. Its structure is divided into <strong>Header and Body.
                </strong> The header is a div, which controls the upper part (Title) and there is other div for the body of the alert.
                The first may have a button to close the alert or not. <br></br>
                The first step is understand about the keyboard interaction.
            </p>
            <ToastTable />
            <h5> WAI-ARIA statement </h5>
            <p>
                Acessible Rich Internet Applications Suite serve to show how to make a web page accessible to people with disabilities.
                You can see more about it <a href="https://www.w3.org/WAI/standards-guidelines/aria/" rel="noreferrer" target="_blank">clicking here</a>.
                <br></br> In Toast Alert, it is necessary we have <strong>Role:</strong>
            </p>
            <ToastAria />
            <h5>Acessibility Toast Example</h5>
            <ToastExample />
            <h6> Code Example</h6>
            <ToastCodeExample />
        </div>
    );
};

export default toastAcessibility;

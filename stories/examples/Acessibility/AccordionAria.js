import React from 'react';

const AccordionAria = () => {
    return(
        <div>
            <ul>
                <li>
                    Each button within an accordion <strong>header</strong>, is associated with its corresponding panel. You need to use <code>
                    aria-controls="&lt;panel-id&gt;"
                    </code> to show this correspondent.
                </li>
                <li>
                    If the accordion panel associated with an accordion <strong>header</strong> is visible, the header button element has 
                    aria-disabled set true.<br></br>
                    Example: <code>&lt;aria-disabled="true"/&gt;</code>
                </li>
                <li>
                    If the accordion panel associated with an accordion header is visible, the button has <code>&lt;aria-expanded="true"/&gt;</code>
                </li>
                <li>
                    The title of each accordion <strong>header</strong> needs an element with role <strong>&lt;Button /&gt;</strong> <br></br>
                    Header with Aria statement example: <code> &lt;button id="header-1"
              aria-expanded="true"
              aria-controls="accordion-panel-1"&gt; Example &lt;/button&gt; </code>
                </li>
            </ul>
        </div>
    );
}

export default AccordionAria;
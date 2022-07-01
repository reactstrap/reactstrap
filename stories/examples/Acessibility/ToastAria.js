import React from 'react';

const ToastAria = () => {
    return(
        <div>
            <ul>
                <li>
                    Inside the main div it is necessary to insert the role Alert. Example: <code> role="alert" </code>.
                </li>
            </ul>
            <ul>
                <li>
                    Inside the main div It is not necessary, but it is recommended that insert the aria-live="assertive". Example: <code> aria-live="assertive"
                    </code>. The aria-live="assertive" will make that the assistive technologies immediately notify the user, 
                    and could potentially clear the speech queue of previous updates.
                </li> 
            </ul>
            <ul>
                <li>
                    Inside the main div It is not necessary, but it is recommended that insert the aria-live="assertive". Example: <code> aria-live="assertive"
                    </code>. The aria-live="assertive" will make that the assistive technologies immediately notify the user, 
                    and could potentially clear the speech queue of previous updates.
                </li>
            </ul>
        </div>
    );
}

export default ToastAria;
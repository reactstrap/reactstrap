
import React from 'react';

const ToastCodeExample = () => {
    return (
        <div>
            <code>
            &lt;Toast <strong>role="alert" aria-labelledby="Code Example" aria-describedby="Code Example"</strong>&gt; <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastHeader <strong>tabindex="0"</strong>&gt; <br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acessibility Header Example  <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastHeader /&gt; <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastBody <strong>tabindex="0"</strong>&gt; <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acessibility Body Example <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastBody /&gt; <br/>
            &lt;Toast /&gt; 
            </code>
            
        </div>
    );
}

export default ToastCodeExample;


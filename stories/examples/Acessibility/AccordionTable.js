import React from 'react';

const AccordionTable = () => {
    return(
        <table aria-hidden="false" class="docblock-argstable css-6hhrgj" aria-label="Keyboard-interactions" aria-describedby="What each keyboard button can do on the table">
                <thead class="docblock-argstable-head">
                    <tr>
                        <th>
                            Keyboard
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="docblock-argstable-body">
                    <tr>
                        <td><strong>Enter or Space</strong></td>
                        <td>When the focus is on the header, it allows for interactivity to expand and collapse the panel. </td>
                    </tr>
                    <tr>
                    <td><strong>Tab</strong></td>
                        <td>Moves focus to the next focusable element.</td>
                    </tr>
                    <tr>
                    <td><strong>Shift + Tab</strong></td>
                        <td>Moves focus to the previous focusable element</td>
                    </tr>
                    <tr>
                        <td><strong>Down Arrow</strong></td>
                        <td>If there is a header below the current focus, focus on the next one. If not, nothing happens.</td>
                    </tr>
                    <tr>
                        <td><strong>Up Arrow</strong></td>
                        <td>If there is a header above the current focus, focus on the next one. If not, nothing happens.</td>
                    </tr>
                    <tr>
                        <td><strong>Home</strong></td>
                        <td>Moves focus to the first accordion header.</td>
                    </tr>
                    <tr>
                        <td><strong>End</strong></td>
                        <td>Moves focus to the last accordion header.</td>
                    </tr>
                </tbody>
            </table>
    );
}

export default AccordionTable;
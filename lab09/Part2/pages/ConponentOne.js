import React from 'react';



function ComponentOne({text, clickToSetMessageFn}) {
    const alertMessage = () => {
        clickToSetMessageFn(text);
        alert(text);
    }

    let body = (
        <table>
            <tr>
                <th>Component One</th>
            </tr>
            <tr>
                <td>
                    <button onClick={alertMessage}>Click {text}</button>
                </td>
            </tr>
        </table>
    );
    return body;
}
export default ComponentOne;
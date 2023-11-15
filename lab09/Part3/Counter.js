import React from 'react';
import {useState} from 'react';

function Counter({number}) {
    const [countervalue, setCountervalue] = useState(0);
    //let countervalue = 0;

    const add = ()=> {
        setCountervalue(countervalue + number);
    }
    const subtract = ()=> {
        setCountervalue(countervalue - number);
    }

    let content = (
        <table>
            <tr>
                <th>{countervalue}</th>
            </tr>
            <tr>
                <td>
                    <button onClick={add}>+ {number}</button>
                </td>
                <td>
                    <button onClick={subtract}>- {number}</button>
                </td>
            </tr>
        </table>
    );
    return content;
}
export default Counter;
import React from 'react';
//import {useState} from 'react';

function Counter({number, countervalue, addFn, subtractFn}) {

    const clickAdd = ()=> {
        addFn(number);
    }
    const clickSubtract = ()=>{
        subtractFn(number);
    }

    let content = (
        <table>
            <tr>
                <th>{countervalue}</th>
            </tr>
            <tr>
                <td>
                    <button onClick={clickAdd}>+ {number}</button>
                </td>
                <td>
                    <button onClick={clickSubtract}>- {number}</button>
                </td>
            </tr>
        </table>
    );
    return content;
}
export default Counter;
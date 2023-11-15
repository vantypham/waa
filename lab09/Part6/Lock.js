import React from 'react';
import {useState} from 'react';

function Lock({msg,setUnlockFn, lock}) {

    const clickSeven = () => {
        setCodeString(codeString + "7");
    }
    const clickEight = () => {
        setCodeString(codeString + "8");
    }
    const clickNice = () => {
        setCodeString(codeString + "9");
    }
    const clickFour = () => {
        setCodeString(codeString + "4");
    }
    const clickFive = () => {
        setCodeString(codeString + "5");
    }
    const clickSix = () => {
        setCodeString(codeString + "6");
    }
    const clickOne = () => {
        setCodeString(codeString + "1");
    }
    const clickTwo = () => {
        setCodeString(codeString + "2");
    }
    const clickThree = () => {
        setCodeString(codeString + "3");
    }
    const clickZero = () => {
        setCodeString(codeString + "0");
    }

    const clickClear = () => {
        setCodeString("");
    }

    const clickUnlock = () => {
        if (codeString === "3189" || codeString === "9999") {
            setUnlockFn(lock, "UNLOCKED");
        } else {
            setUnlockFn(lock, "Nice try but wrong code, the lock "+ lock +" stays closed.");
        }
        
    }
    let [codeString, setCodeString] = useState("");
    //let codeString = "";

    let content = (
        <div>
            <h3>Entered Code {codeString}</h3>
        <table>
            <tr>
                <td><button onClick={clickSeven} value={7}>7</button></td>
                <td><button onClick={clickEight} value={8}>8</button></td>
                <td><button onClick={clickNice} value={9}>9</button></td>
            </tr>
            <tr>
                <td><button onClick={clickFour} value={4}>4</button></td>
                <td><button onClick={clickFive} value={5}>5</button></td>
                <td><button onClick={clickSix} value={6}>6</button></td>
            </tr>
            <tr>
                <td><button onClick={clickOne} value={1}>1</button></td>
                <td><button onClick={clickTwo} value={2}>2</button></td>
                <td><button onClick={clickThree} value={3}>3</button></td>
            </tr>
            <tr>
                <td><button onClick={clickZero} value={0}>0</button></td>
                
            </tr>
                
        </table>
            <button onClick={clickClear} >Clear</button>
            <button onClick={clickUnlock} >Unlock</button>
        </div>
    );
    return content;
}
export default Lock;
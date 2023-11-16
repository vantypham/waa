import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Calculator = () => {
    const navigate = useNavigate();
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'num1') {
            setNum1(value);
        } else {
            setNum2(value);
        }
    };

    const handleAdd = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
        let data = parseFloat(num1) + parseFloat(num2);
        navigate('/result', {state:{result: data}});
    };

    const handleSubtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
        let data = parseFloat(num1) - parseFloat(num2);
        navigate('/result', {state:{result: data}});
    };

    const handleMultiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
        let data = parseFloat(num1) * parseFloat(num2);
        navigate('/result', {state:{result: data}});
    };
    const clear = () => {
        setResult('');
        setNum1('');
        setNum2('');
    };

    return (
        <div>
            <h1>My Calculator</h1>
            <table>
                <thead>
                    <tr>
                        <th>Num1</th><th>Num2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input
                            type="number"
                            name="num1"
                            value={num1}
                            onChange={handleInputChange}
                        /></td>
                        <td>
                            <input
                                type="number"
                                name="num2"
                                value={num2}
                                onChange={handleInputChange}
                            />
                        </td>
                        
                    </tr>
                </tbody>
            </table>


            <button name="btnAdd" onClick={handleAdd}>Add</button>
            <button name="btnSub" onClick={handleSubtract}>Subtract</button>
            <button name="btnMul" onClick={handleMultiply}>Multiply</button>
            <button name="btnClear" onClick={clear}>Clear</button>

        </div>
    );
};

export default Calculator;

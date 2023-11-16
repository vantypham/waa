import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CalculatorResult = ()=> {
    const location = useLocation();
    const navigate = useNavigate();
    const [result, setResult] = useState(location.state.result);

    const navigateBack = ()=>{
        navigate("/");
    }

    return (
        <div>
            Result: 
            <h1 id="data">{result}</h1>
            <button id="back" onClick={navigateBack}>Back</button>
        </div>
    );
}
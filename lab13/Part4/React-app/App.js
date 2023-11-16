import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import {CalculatorResult} from './calculator/CalculatorResult';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<CalculatorResult />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './calculator/Calculator';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
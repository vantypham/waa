import './App.css';
import Counter from './pages/Counter';
import CounterTop from './pages/CounterTop';
import {useState} from 'react';

let message = 'Welcome to simple Counter!';


function App() {
  const [countervalue, setCountervalue] = useState(0);

  const add = (number)=> {
    setCountervalue(countervalue + number);
}
const subtract = (number)=> {
    setCountervalue(countervalue - number);
}

  return (
    <div>
      <header>
        <p> {message} </p>
        
      </header>
      <main>
        <CounterTop countervalue={countervalue}/>
      <table>
          
          <tr>
            <td><Counter number={1} countervalue={countervalue} addFn={add} subtractFn={subtract}/></td>
            <td><Counter number={3} countervalue={countervalue} addFn={add} subtractFn={subtract}/></td>
          </tr>
          <tr>
          <td><Counter number={5} countervalue={countervalue} addFn={add} subtractFn={subtract}/></td>
          <td><Counter number={7} countervalue={countervalue} addFn={add} subtractFn={subtract}/></td>
          </tr>
        </table>
        
      </main>
    </div>
  );
}

export default App;

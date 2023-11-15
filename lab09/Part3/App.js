import './App.css';
import Counter from './pages/Counter';
import {useState} from 'react';

let message = 'Welcome to simple Counter!';


function App() {

  return (
    <div>
      <header>
        <p> {message} </p>
        
      </header>
      <main>
      <table>
          <tr>
            <td><Counter number={1} /></td>
            <td><Counter number={3} /></td>
          </tr>
          <tr>
          <td><Counter number={5} /></td>
          <td><Counter number={7} /></td>
          </tr>
        </table>
        
      </main>
    </div>
  );
}

export default App;

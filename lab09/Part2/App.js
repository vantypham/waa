import './App.css';
import ComponentOne from './pages/ConponentOne';
import {useState} from 'react';

let message = 'Welcom to my React application!';


function App() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <header>
        <p> {message} </p>
        
      </header>
      <main>
      <table>
          <tr>
            <td><ComponentOne text={'Hello from button 1'} clickToSetMessageFn={setMsg}/></td>
            <td><ComponentOne text={'Welcome from button 2'} clickToSetMessageFn={setMsg}/></td>
          </tr>
          <tr>
            <td><ComponentOne text={'Hi from button 3'}  clickToSetMessageFn={setMsg}/></td>
            <td><ComponentOne text={'See you from button 4'}  clickToSetMessageFn={setMsg}/></td>
          </tr>
        </table>
        
      </main>
    </div>
  );
}

export default App;

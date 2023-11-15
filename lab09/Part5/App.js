import './App.css';
import Lock from './pages/Lock';
import LockTop from './pages/LockTop';
import {useState} from 'react';

let message = 'Welcome to simple Counter!';


function App() {
  const [msg, setMsg] = useState("Lock is closed.");

  const changeMsg = (s)=> {
    setMsg(""+s);
}

  return (
    <div>
      <header>
        <p> {message} </p>
      </header>


      <main>
        <LockTop msg={msg}/>
      
        <Lock msg={msg} setUnlockFn={changeMsg}/>
      </main>
    </div>
  );
}

export default App;

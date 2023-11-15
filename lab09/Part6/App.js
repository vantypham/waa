import './App.css';
import Lock from './pages/Lock';
import LockTop from './pages/LockTop';
import {useState} from 'react';



function App() {
  const [msg, setMsg] = useState("Locks are closed.");
  const [lock1, setLock1] = useState(0);//if Lock1 is open, set lock1=1
  const [lock2, setLock2] = useState(0);//if Lock2 is open, set lock2=1

  const changeMsg = (lock, status)=> {
    if (lock == 1) {
      if (status === 'UNLOCKED') {
        setLock1(1);
        if (lock2 == 1) {
          setMsg("Both are Open");
        } else {
          setMsg("Lock1 is Open, Lock2 is Closed.")
        }
      } else {
        setMsg(status);
      }

    } else if (lock == 2) {
      if (status === 'UNLOCKED') {
        setLock2(1);
        if (lock1 == 1) {
          setMsg("Both are Open");
        } else {
          setMsg("Lock2 is Open, Lock1 is Closed.")
        }
      } else {
        setMsg(status);
      }

    } else {
      setMsg("");
    }
    
}

  return (
    <div>
      <header>
      </header>


      <main>
        <LockTop msg={msg}/>
      <table>
        <tr>
          <td><Lock msg={msg} setUnlockFn={changeMsg} lock={1}/></td>
          <td></td> <td> </td>
          <td><Lock msg={msg} setUnlockFn={changeMsg} lock={2}/></td>
        </tr>
      </table>
        
        
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export const Pageone = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [profession, setProfession] = useState('');
  const gotoNextPage = () => {
    navigate('/pagetwo', {state:{firstName:firstName, lastName: lastName, profession:profession}});
  }

  let page1 = (
    <>
      <h3>Page 1</h3>
      <div>
        First Name
          <input
          type="text"
          placeholder="enter first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)} />
      </div>
      <div>
        Last Name
          <input
          type="text"
          placeholder="enter last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)} />
      </div>
      <div>
        Profession
        <select
               type="text"
               value={profession}
               onChange={e => setProfession(e.target.value)} >
                <option></option>
               <option>Programmer</option>
               <option>Manager</option>
               <option>Tester</option>
               <option>Architect</option>
            </select>
      </div>


      <button onClick={gotoNextPage}>Next</button>
    </>
  );
  return page1;
}
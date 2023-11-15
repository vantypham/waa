import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export const Pageone = () => {
  const navigate = useNavigate();
  let emptyUser = {firstName:"", lastName:"", profession:"", street:"", city:"", 
  state:"", zip:"", creditcard:"", type:""};

  const [user, setUser] = useState(emptyUser);

  const gotoNextPage = () => {
    navigate('/pagetwo', {state:{user:user}});
  }

  const handleFieldChange = (e)=>{
    setUser({...user,[e.target.name] : e.target.value});
  }

  let page1 = (
    <>
      <h3>Page 1</h3>
      <div>
        First Name
          <input
          type="text"
          placeholder="enter first name"
          name="firstName"
          onChange={handleFieldChange} />
      </div>
      <div>
        Last Name
          <input
          type="text"
          placeholder="enter last name"
          name="lastName"
          onChange={handleFieldChange} />
      </div>
      <div>
        Profession
        <select
               type="text"
               name="profession"
               onChange={handleFieldChange} >
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
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const Pagetwo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const firstName = location.state.firstName;
  const lastName = location.state.lastName;
  const profession = location.state.profession;
  //
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const handleOnSubmit = () => {
 //   props.history.push("/pagethree", { username: username, address : address });
      navigate('/pagethree', {state:{firstName:firstName, lastName: lastName, profession:profession, 
        street:street, city:city, zip:zip, state:state}});
  }
  let page2 = (
    <div>
    <>
      <h3>Page 2</h3>
      <div>
        Street
          <input
          type="text"
          placeholder="enter street"
          value={street}
          onChange={e => setStreet(e.target.value)} />
      </div>
      <div>
        City
          <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={e => setCity(e.target.value)} />
      </div>
      <div>
        Zip
          <input
          type="text"
          placeholder="enter zip code"
          value={zip}
          onChange={e => setZip(e.target.value)} />
      </div>
      <div>
        State
        <select
               type="text"
               value={state}
               onChange={e => setState(e.target.value)} >
                <option></option>
               <option>Iowa</option>
               <option selected>California)</option>
               
            </select>
      </div>

      <button onClick={handleOnSubmit}>Next</button>
    </>
  </div>
);
return page2;
}
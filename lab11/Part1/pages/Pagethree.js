import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Pagethree = (props) => {
  const location = useLocation();
  let [user, setUser] = useState(location.state.user);
  const navigate = useNavigate();
  const handleOnSubmit = () => {
    navigate('/pagefour', {state:{user:user}});
  }
  const clickOnField = (e)=>{
    setUser({...user, [e.target.name]:e.target.value});
  }

  let page3 = (
    <div>
      <div>First Name : {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Profession: {user.profession}</div>
      <div>Street : {user.street}</div>
      <div>City: {user.city}</div>
      <div>State: {user.state}</div>
      <div>Zip: {user.zip}</div>
      <>
        <h3>Page 3</h3>
        <div>
          Creditcard number
            <input
            type="text"
            placeholder="enter credit card number"
            name="creditcard"
            onChange={clickOnField} />
        </div>

        <div>
        Card Type:
            <div>
               <input
                  type="radio"
                  value="Visa" name="type"
                  
                  onChange={clickOnField}
               /> Visa
            </div>
            <div>
               <input
                  type="radio"
                  value="Mastercard" name="type"
                  
                  onChange={clickOnField}
               /> Mastercard
            </div>
        </div>


        <button onClick={handleOnSubmit}>Next</button>
      </>
    </div>
  );
  return page3;
}
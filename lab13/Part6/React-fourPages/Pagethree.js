import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Pagethree = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  //
  const firstName = location.state.firstName;
  const lastName = location.state.lastName;
  const profession = location.state.profession;
  const street = location.state.street;
  const city = location.state.city;
  const zip = location.state.zip;
  const state = location.state.state;
  //
  const [type, setType] = useState("");
  const [creditcard, setCreditcard] = useState("");
 

  const handleOnSubmit = () => {
   // props.history.push("/pagefour", { username: username, address : address, creditcard : creditcard });
    navigate('/pagefour', {state:{firstName:firstName, lastName: lastName, profession:profession, 
      street:street, city:city, zip:zip, state:state,
      creditcard:creditcard, type:type}});
  }

  let page3 = (
    <div>

      <>
        <h3>Page 3</h3>
        <div>
          Creditcard number
            <input
            type="text"
            placeholder="enter credit card number"
            value={creditcard}
            onChange={e => setCreditcard(e.target.value)} />
        </div>

        <div>
        Card Type:
            <div>
               <input
                  type="radio"
                  value="Visa"
                  checked={type === "Visa"}
                  onChange={e => setType(e.target.value)}
               /> Visa
            </div>
            <div>
               <input
                  type="radio"
                  value="Mastercard"
                  checked={type === "Mastercard"}
                  onChange={e => setType(e.target.value)}
               /> Mastercard
            </div>
        </div>


        <button onClick={handleOnSubmit}>Next</button>
      </>
    </div>
  );
  return page3;
}
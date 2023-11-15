import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const Pagetwo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //
  const [user, setUser] = useState(location.state.user);
  const handleOnSubmit = () => {
      navigate('/pagethree', {state:{user: user}});
  }
  const clickOnField = (e) =>{
      setUser({...user, [e.target.name]:e.target.value});
  }
  let page2 = (
    <div>
    <>
      <h3>Page 2</h3>
      <div>First Name : {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Profession: {user.profession}</div>
      <div>
        Street
          <input
          type="text"
          placeholder="enter street"
          name="street"
          onChange={clickOnField} />
      </div>
      <div>
        City
          <input
          type="text"
          placeholder="enter city"
          name="city"
          onChange={clickOnField} />
      </div>
      <div>
        Zip
          <input
          type="text"
          placeholder="enter zip code"
          name="zip"
          onChange={clickOnField} />
      </div>
      <div>
        State
        <select
               type="text"
               name="state"
               onChange={clickOnField} >
                <option></option>
               <option>Iowa</option>
               <option>California)</option>
               
            </select>
      </div>

      <button onClick={handleOnSubmit}>Next</button>
    </>
  </div>
);
return page2;
}
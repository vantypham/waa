import React from 'react';
import { useLocation} from 'react-router-dom';

export const Pagefour = (props) => {
  const location = useLocation();
  //
  const firstName = location.state.firstName;
  const lastName = location.state.lastName;
  const profession = location.state.profession;
  const street = location.state.street;
  const city = location.state.city;
  const zip = location.state.zip;
  const state = location.state.state;
  const creditcard = location.state.creditcard;
  const type = location.state.type;

  let page4 = (
    <div>
      <h3>Thank you for your information!</h3>
      <table>
        <tr>
          <td>First Name</td> <td>{firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td> <td>{lastName}</td>
        </tr>
        <tr>
          <td>Profession</td> <td>{profession}</td>
        </tr>
        <tr>
          <td>Street</td> <td>{street}</td>
        </tr>
        <tr>
          <td>City</td> <td>{city}</td>
        </tr>
        <tr>
          <td>State</td> <td>{state}</td>
        </tr>
        <tr>
          <td>Zip</td> <td>{zip}</td>
        </tr>
        
        <tr>
          <td>Credit Card</td> <td>{creditcard}</td>
        </tr>
        <tr>
          <td>Type</td> <td>{type}</td>
        </tr>
      </table>
    </div>
  );
  return page4;
}
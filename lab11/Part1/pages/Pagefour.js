import React from 'react';
import { useLocation} from 'react-router-dom';

export const Pagefour = (props) => {
  const location = useLocation();
  //const [user, setUser] = useState(location.state.user);
  const user = location.state.user;

  let page4 = (
    <>
      <h3>Thank you for your information!</h3>
      <table>
        <tbody>
        <tr><td>First Name</td><td>{user.firstName}</td></tr>
        <tr><td>Last Name</td><td>{user.lastName}</td></tr>
        <tr><td>Profession</td><td>{user.profession}</td></tr>
        <tr><td>Street</td><td>{user.street}</td></tr>
        <tr><td>City</td><td>{user.city}</td></tr>
        <tr><td>State</td><td>{user.state}</td></tr>
        <tr><td>Zip</td><td>{user.zip}</td></tr>
        <tr><td>Credit Card</td><td>{user.creditcard}</td></tr>
        <tr><td>Type</td><td>{user.type}</td></tr>
        </tbody>
      </table>
      </>
  );
  return page4;
}
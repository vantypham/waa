import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddAccount = () => {
  const location = useLocation();
  const client = axios.create({baseURL: "http://localhost:8080/accounts"});
  const navigate = useNavigate();
  const cleanAccount = {
    accountNumber: '', accountHolder: '', balance: 0.0, transactions: [
        { type: 'DEPOSIT', amount: 0.0, date: new Date() }
    ]
    }
    const [account, setAccount] = useState(cleanAccount);
  //const [book, setBook] = useState(emptyBook);

  const [accountNumberError, setAccountNumberError] = useState({});
  const [accountHolderError, setAccountHolderError] = useState({});
  

async function addFunction(obj) {
    await client.post("http://localhost:8080/accounts", obj);
}

  const handleSubmit = (e) => { 
    e.preventDefault();
    //validation
    const isValid = formValidation()
    if (isValid) {
      addFunction(account);  
      navigate('/');
    }
  }

  const formValidation = ()=> {
    const accountNumberError = {};
    const accountHolderError = {};

    let isValid = true;
    if (account.accountNumber == '' || account.accountHolder == '' ) {
        accountNumberError.accountNumberErrorShort = "Please input all required fields";
      isValid = false;
      setAccountNumberError(accountNumberError);
      return isValid;
    }
    if (account.accountNumber.length <= 2) {
        accountNumberError.accountNumberErrorShort = "value should be greater than 2 chars";
      isValid = false;
    }
    if (account.accountHolder.length <= 2) {
        accountHolderError.accountHolderErrorShort = "value should be greater than 2 chars";
      isValid = false;
    }
    //set
    setAccountNumberError(accountNumberError);
    setAccountHolderError(accountHolderError);
    return isValid;
  }

  const handleFieldChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <h2>Add a new Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          account number
     <input
            type="text"
            placeholder="enter a number"
            name="accountNumber"
            
            onChange={handleFieldChange} />
            {Object.keys(accountNumberError).map((key) => {
return <div style={{ color: "red" }}>{accountNumberError[key]}</div>
})}
        </div>
        <div>
          account holder
     <input
            type="text"
            placeholder="enter a name"
            name="accountHolder"
            
            onChange={handleFieldChange} />
            {Object.keys(accountHolderError).map((key) => {
return <div style={{ color: "red" }}>{accountHolderError[key]}</div>
})}
        </div>
       
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

export const GetAccount = () => {
    const navigate = useNavigate();

    const client = axios.create({ baseURL: "http://localhost:8080/accounts" });
    const cleanAccount = {
        accountNumber: '', accountHolder: '', balance: 0.0, transactions: [
            { type: 'DEPOSIT', amount: 0.0, date: '' }
        ]
    }
    const [account, setAccount] = useState(cleanAccount);

    //   useEffect(() => {
    //     // async function getData() {
    //     //    await getAccount(params.get("accountNumber"));
    //     // }
    //     // //call get data
    //     // getData();
    //   }, [params]);

    const getAccount = async (e) => {
        //console.log("/" + e.target.value);
        let accountNumber = document.getElementById("enterAccNo").value;
        console.log(accountNumber);
        const response = await client.get("http://localhost:8080/accounts/" + accountNumber);
        if (response) {
            const account = response.data;
            setAccount(account);
        }

    }

    const clickToAddAccountPage = () => {
        navigate("/addaccount")
    }
    async function clickToDeleteAccount(e) {
        await client.delete("/" + e.target.value);
        alert("Deleted account sucessfully");
        setAccount(cleanAccount);
    }

    async function clickDepositBtn(e) {
        let amount = document.getElementById("enterDeposit").value;
        let transaction = {type: "DEPOSIT", amount: amount, date: new Date()};
        await client.post("/" + account.accountNumber, transaction);
        alert("Deposit sucessfully");
        getAccount(account.accountNumber);
    }

    async function clickWithdrawBtn(e) {
        let amount = document.getElementById("enterWithdraw").value;
        let transaction = {type: "WITHDRAW", amount: amount, date: new Date()};
        await client.post("/" + account.accountNumber, transaction);
        alert("Withdraw sucessfully");
        getAccount(account.accountNumber);
    }


    //RETURN
    return (<div>
        <h2>ACCOUNT</h2>

        <div>
            Enter account number
            <input id="enterAccNo"
                type="text"
                placeholder="123456789"
                name="accNo" />
        </div>
        <button onClick={getAccount} value={account.accountNumber}>Search</button>


        <table>
            <thead>
                <tr>
                    <th>accountNumber</th>
                    <th>accountHolder</th>
                    <th>balance</th>

                </tr>
            </thead>
            <tbody>
                <tr key={account.accountNumber} >
                    <td>{account.accountNumber}</td>
                    <td>{account.accountHolder}</td>
                    <td>{account.balance}</td>
                </tr>
            </tbody>
        </table>

        <div>
            <h3>TRANSACTIONS</h3>
            <table>
                <thead><tr><th>Type</th><th>Amount</th><th>Date</th></tr></thead>
                <tbody>
                    {account.transactions.map(t => (
                        <tr key={t.date}>
                            <td>{t.type}</td>
                            <td>{t.amount}</td>
                            <td>{t.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <br />

        <button onClick={clickToDeleteAccount} value={account.accountNumber}>Remove Account</button>
        <button onClick={clickToAddAccountPage}>Add Account</button>

        <br/><br/>
        <div>
            Enter amount to Deposit
            <input id="enterDeposit"
                type="text"
                placeholder="10000"/>  <button onClick={clickDepositBtn} >Deposit</button>
        </div>
        
        <br/><br/>
        <div>
            Enter amount to Withdraw
            <input id="enterWithdraw"
                type="text"
                placeholder="2000"/> <button onClick={clickWithdrawBtn} >Withdraw</button>
        </div>

    </div>);
}
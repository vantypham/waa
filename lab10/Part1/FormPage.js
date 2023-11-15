import React, { useState } from 'react';

export const FormPage = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [zip, setZip] = useState('');
   const [state, setState] = useState('');

   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [eyeColor, setEyeColor] = useState('');
   const [hobbies, setHobbies] = useState('');


   let formpage = (
      <form>
         <h3>Enter User information</h3>
         <div>
            <input
               type="text"
               placeholder="FirstName"
               value={firstName}
               onChange={e => setFirstName(e.target.value)} />
         </div>
         <div>
            <input
               type="text"
               placeholder="LastName"
               value={lastName}
               onChange={e => setLastName(e.target.value)} />
         </div>
         <div>
            <input
               type="text"
               placeholder="Street"
               value={street}
               onChange={e => setStreet(e.target.value)} />
         </div>
         <div>
            <input
               type="text"
               placeholder="City"
               value={city}
               onChange={e => setCity(e.target.value)} />
         </div>


         <div>Select State:
            <select
               type="text"
               value={state}
               onChange={e => setState(e.target.value)} >
               <option>IA</option>
               <option>CA</option>
               <option>MO</option>
               <option>IL</option>
            </select>
         </div>
         <div>
            <input
               type="text"
               placeholder="Zip"
               value={zip}
               onChange={e => setZip(e.target.value)} />
         </div>

         <div>
            <input
               type="text"
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)} />
         </div>

         <div>
            <input
               type="text"
               placeholder="Phone"
               value={phone}
               onChange={e => setPhone(e.target.value)} />
         </div>
         <div>
            Eye Color:
            <div>
               <input
                  type="radio"
                  value="Brown"
                  checked={eyeColor === "Brown"}
                  onChange={e => setEyeColor(e.target.value)}
               /> Brown
            </div>
            <div>
               <input
                  type="radio"
                  value="Blue"
                  checked={eyeColor === "Blue"}
                  onChange={e => setEyeColor(e.target.value)}
               /> Blue
            </div>
         </div>
         <div>
            Hobbies:
            <div>
               <input
                  type="checkbox"
                  value="Football"
                  checked={hobbies === "Football"}
                  onChange={e => setHobbies(e.target.value)}
               /> Football
            </div>
            <div>
               <input
                  type="checkbox"
                  value="Tennis"
                  checked={hobbies === "Tennis"}
                  onChange={e => setHobbies(e.target.value)}
               /> Tennis
            </div>
         </div>

         <hr />

         <p>First Name = {firstName}</p>
         <p>Last Name = {lastName}</p>
         <p>Street = {street}</p>
         <p>City = {city}</p>
         <p>State = {state}</p>
         <p>Zip = {zip}</p>
         <p>Email = {email}</p>
         <p>Phone = {phone}</p>
         <p>Eye Color = {eyeColor}</p>
         <p>Hobbies = {hobbies}</p>
      </form>
   );
   return formpage;
}

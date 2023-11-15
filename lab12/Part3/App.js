import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddAccount } from './lab11p2/AddAccount';
import { GetAccount } from './lab11p2/GetAccount';
//import React, { useState } from 'react';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAccount />} />
          <Route path="/addaccount" element={<AddAccount />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
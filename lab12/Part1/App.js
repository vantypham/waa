import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListBooks } from './lab11part1/ListBooks';
import { AddBook } from './lab11part1/AddBook';
//import React, { useState } from 'react';

function App() {

// const initialList = [
//   { isbn: "AB1234777", title: "Gone With the Wind", author: "Jones", price: 12.0 },
//   { isbn: "AB1234888", title: "Seven Kingdoms", author: "Michale", price: 20.0 },
//   { isbn: "AB1234999", title: "Sherlock Homes", author: "KidMan", price: 50.0 },
// ];
// const [booklist, setBooklist] = useState(initialList);
//


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListBooks />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListBooks } from './part4/ListBooks';
import { AddBook } from './part4/AddBook';
import React, { useState } from 'react';

function App() {

const initialList = [
  { isbn: "AB1234777", title: "Gone With the Wind", author: "Jones", price: 12.0 },
  { isbn: "AB1234888", title: "Seven Kingdoms", author: "Michale", price: 20.0 },
  { isbn: "AB1234999", title: "Sherlock Homes", author: "KidMan", price: 50.0 },
];
const [booklist, setBooklist] = useState(initialList);

const onAddBook = (book) => {
    setBooklist(booklist.concat(book)) ;
}

const onRemoveBook = (isbn) => {
    setBooklist(booklist.filter((book) => book.isbn !== isbn)) ;
}

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListBooks booklist={booklist} 
          removeBookFunction={onRemoveBook}/>} />
          <Route path="/addbook" element={<AddBook addBookFunction={onAddBook}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
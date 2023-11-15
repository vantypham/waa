import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const AddBook = ({addBookFunction}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const emptyBook = { isbn: "", title: "", autho: "", price: 0.0 };
  const [book, setBook] = useState(emptyBook);


  const handleSubmit = (e) => { 
    e.preventDefault();
    addBookFunction(book);   
    navigate('/');
  }

  const handleFieldChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          ISBN
          <input
            type="text"
            placeholder="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleFieldChange} />
        </div>
        <div>
          Title
          <input
            type="text"
            placeholder="enter title of book"
            name="title"
            value={book.title}
            onChange={handleFieldChange} />
        </div>
        <div>
          Author
          <input
            type="text"
            placeholder="enter author"
            name="author"
            value={book.author}
            onChange={handleFieldChange} />
        </div>
        <div>
          Price
          <input
            type="text"
            placeholder="price"
            name="price"
            value={book.price}
            onChange={handleFieldChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


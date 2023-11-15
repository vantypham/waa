import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddBook = () => {
  const location = useLocation();
  const client = axios.create({baseURL: "http://localhost:8080/books"});
  const navigate = useNavigate();
  const emptyBook = { isbn: "", title: "", autho: "", price: 0.0 };
  const [book, setBook] = useState(emptyBook);

  const [isbnError, setIsbnError] = useState({});
  const [titleError, setTitleError] = useState({});
  const [authorError, setAuthorError] = useState({});
  const [priceError, setPriceError] = useState({});
  

async function addBookFunction(book) {
    await client.post("http://localhost:8080/books", book);
}

  const handleSubmit = (e) => { 
    e.preventDefault();
    //validation
    const isValid = formValidation()
    if (isValid) {
      addBookFunction(book);  
      navigate('/');
    }
  }

  const formValidation = ()=> {
    const isbnError = {};
    const titleError = {};
    const authorError = {};
    const priceError = {};
    let isValid = true;
    if (book.isbn == '' || book.title == '' || book.author == '') {
      isbnError.isbnErrorShort = "Please input all required fields";
      isValid = false;
      setIsbnError(isbnError);
      return isValid;
    }
    if (book.isbn.length <= 2) {
      isbnError.isbnErrorShort = "isbn should be greater than 2 chars";
      isValid = false;
    }
    if (book.title.length <= 2) {
      titleError.titleErrorShort = "title should be greater than 2 chars";
      isValid = false;
    }
    if (book.author.length <= 2) {
      authorError.authorErrorShort = "author should be greater than 2 chars";
      isValid = false;
    }
    //set
    setIsbnError(isbnError);
    setTitleError(titleError);
    setAuthorError(authorError);
    setPriceError(priceError);
    return isValid;
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
            {Object.keys(isbnError).map((key) => {
return <div style={{ color: "red" }}>{isbnError[key]}</div>
})}
        </div>
        <div>
          Title
     <input
            type="text"
            placeholder="enter title of book"
            name="title"
            value={book.title}
            onChange={handleFieldChange} />
            {Object.keys(titleError).map((key) => {
return <div style={{ color: "red" }}>{titleError[key]}</div>
})}
        </div>
        <div>
          Author
     <input
            type="text"
            placeholder="enter author"
            name="author"
            value={book.author}
            onChange={handleFieldChange} />
            {Object.keys(authorError).map((key) => {
return <div style={{ color: "red" }}>{authorError[key]}</div>
})}
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


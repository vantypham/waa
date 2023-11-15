import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ListBooks = () => {
  const navigate = useNavigate();
  const client = axios.create({baseURL: "http://localhost:8080/books"});
  const [booklist, setBooklist] = useState([]);
 
  useEffect(() => {
      async function fetchData() {
         await loadBooks();//params.get("author")
      }
      fetchData();
    }, []);

  const loadBooks = async (author) => {
      console.log(author);
      const response = await client.get();
      const books = response.data.books;
      setBooklist(books);
  }

  const handleAddBook = () => {
    navigate('/addbook');
  }

async function removeBook(e) {
    await client.delete("/" + e.target.value);
    await loadBooks();
}


  return (
    <div>
      <h1>List of Books</h1>
      <table>
        <thead><tr><th>ISBN</th><th>Title</th><th>Author</th><th>Price</th></tr></thead>
        <tbody>
          {booklist.map(book => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td><button onClick={removeBook} value={book.isbn} >Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddBook}>Add a new Book</button>
    </div>
  );
};


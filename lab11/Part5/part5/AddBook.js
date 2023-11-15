import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../App.css';

export const AddBook = ({ addBookFunction }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const emptyBook = { isbn: "", title: "", author: "", price: 0.0 };
  //const [book, setBook] = useState(emptyBook);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();



  const onSubmit = (data) => {
    // e.preventDefault();
    //validation
    // const isValid = formValidation()
    // if (isValid) {
    addBookFunction(data);
    navigate('/');
    // }
  }

  return (
    <div>
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          ISBN
          <input
            type="text"
            placeholder="isbn"
            name="isbn"

            {...register("isbn", {
              required: "ISBN is required.",
              minLength: {
                value: 3,
                message: "Isbn should be at-least 3 characters."
              }
            })}
          />
          {errors.isbn && (
            <p className="errorMsg">{errors.isbn.message}</p>
          )}
        </div>
        <div className="form-control">
          Title
          <input
            type="text"
            placeholder="enter title of book"
            name="title"

            {...register("title", {
              required: "title is required.",
              minLength: {
                value: 3,
                message: "title should be at-least 3 characters."
              }
            })}
          />
          {errors.title && (
            <p className="errorMsg">{errors.title.message}</p>
          )}

        </div>
        <div className="form-control">
          Author
          <input
            type="text"
            placeholder="enter author"
            name="author"

            {...register("author", {
              required: "author is required.",
              minLength: {
                value: 3,
                message: "author should be at-least 3 characters."
              }
            })}
          />
          {errors.author && (
            <p className="errorMsg">{errors.author.message}</p>
          )}

        </div>
        <div className="form-control">
          Price
          <input
            type="text"
            placeholder="price"
            name="price"

            {...register("price", {
              required: "price is required.",

            })}
          />
          {errors.price && (
            <p className="errorMsg">{errors.price.message}</p>
          )}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


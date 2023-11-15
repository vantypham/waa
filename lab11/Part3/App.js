import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListTask } from './part3/ListTask';
import React, { useState } from 'react';

function App() {

  const inittodolist = [
    {id: 2, item:"Study WAA"},
    {id: 3, item:"Take final Exam"},
    {id: 6, item:"Looking for a job"}
  ];
  const initdonelist = [
    {id: 1, item:"Registering the class of WAA"},
    {id: 4, item:"Preparing Resume"},
    {id: 5, item:"Improving English communication skills"}
  ];

  const [todolist, setTodolist] = useState(inittodolist);
  const [donelist, setDonelist] = useState(initdonelist);

// const initialList = [
//   { isbn: "AB1234777", title: "Gone With the Wind", author: "Jones", price: 12.0 },
//   { isbn: "AB1234888", title: "Seven Kingdoms", author: "Michale", price: 20.0 },
//   { isbn: "AB1234999", title: "Sherlock Homes", author: "KidMan", price: 50.0 },
// ];
// const [booklist, setBooklist] = useState(initialList);

// const onAddBook = (book) => {
//     setBooklist(...booklist, book) ;
// }

// const onRemoveBook = (isbn) => {
//     setBooklist(booklist.filter((book) => book.isbn !== isbn)) ;
// }

const moveToDone = (id) => {
  let item = todolist.find(element=>element.id == id);
  setTodolist(todolist.filter((obj)=>obj.id != id));
  setDonelist([...donelist, item]);
}
const moveBack = (id) => {

  let item = donelist.find(element=>element.id == id);
  setDonelist(donelist.filter((obj)=>obj.id != id));
  setTodolist([...todolist, {...item}]);
}

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" 
          element={<ListTask todolist={todolist} donelist={donelist} 
          moveToDoneFn={moveToDone} moveBackFn={moveBack}
            />}/>
          
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;